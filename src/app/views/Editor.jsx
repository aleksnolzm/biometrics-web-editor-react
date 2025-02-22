import {useEffect, useRef, useState} from 'react';
import { useSearchParams } from "react-router-dom";
import { EditorConfigs } from "app/views/Configs";
import ContentBox from '@innovastudio/contentbox';
import '../styles/contentbox.css';
import '../styles/contentbuilder.css';
import { useRequest } from "@main/hooks";
import { getContentById, updateContent } from "app/api/editor";
import { HTML_TEMPLATE } from "app/views/Defaults";
import {emitCustomMessage, emitErrorMessage} from "app/utils/eventMessagesHandler";
import LoaderScreen from "app/views/Components/LoaderScreen/LoaderScreen";
import {createBasePath} from "app/utils/url";
import EmptyScreen from "app/views/Components/EmptyScreen/EmptyScreen";

const DEFAULT_DATA = {
  html: HTML_TEMPLATE,
  mainCss: '',
  sectionCss: '',
  title: 'Sin título',
};

const Editor = (
  {
    domain,
    prefix,
    module,
    identifier = 11111111,
  }) => {
  const basePath = createBasePath(domain, prefix);
  const [searchParams] = useSearchParams();
  const previousId = searchParams.get('id');
  const builderRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [title, setTitle] = useState('');
  const [topbarOpacity, setTopbarOpacity] = useState(0);

  const { makeRequest: tryShow, response: responseShow, isLoading: isLoadingShow } = useRequest(getContentById, {
    onError: (err) => emitErrorMessage(identifier, err),
  });
  const { makeRequest: tryUpdate, response: responseUpdate, isLoading: isLoadingUpdate } = useRequest(updateContent, {
    onError: (err) => emitErrorMessage(identifier, err),
  });

  const handleLoadData = (currentRes) => {
    builderRef.current.loadHtml(currentRes.html);
    builderRef.current.loadStyles(currentRes.mainCss, currentRes.sectionCss);
    setTitle(currentRes?.title);
  }

  const handleResponseShow = (currentRes) => {
    const { isOk, successContent } = currentRes;
    console.log(successContent);
    if (!isOk) {
      handleLoadData(DEFAULT_DATA);
      return;
    }
    handleLoadData(successContent);
  };

  const handleResponseUpdate = (currentRes) => {
    const { isOk, successContent } = currentRes;
    console.log(successContent);
    if (!isOk) return;
    emitCustomMessage(identifier, 'update', successContent);
  }

  const handleOnShow = () => {
    console.log('handleOnShow');
    tryShow(previousId, module)
      .then((response) => {
        if (!response) return;
        handleResponseShow(response);
      })
      .catch(error => console.log(error));
  };

  const handleOnUpdate = (data) => {
    console.log('handleOnUpdate');
    tryUpdate(data, previousId, module)
      .then((response) => {
        if (!response) return;
        handleResponseUpdate(response);
      })
      .catch(error => console.log(error));
  };

  const handleOnBack = () => {
    emitCustomMessage(identifier, 'back');
  };

  const handleOnSave = (e) => {
    emitCustomMessage(identifier, 'before-save');
    const recordedLayout = {
      html: builderRef.current.html(),
      mainCss: builderRef.current.mainCss(),
      sectionCss: builderRef.current.sectionCss(),
    }
    handleOnUpdate(recordedLayout);
  };

  const handleOnUndo = (e) => {
    if(!builderRef.current) return;
    builderRef.current.undo();
  };

  const handleOnRedo = (e) => {
    if(!builderRef.current) return;
    builderRef.current.redo();
  };

  const handleOnSetScreenMode = (e) => {
    if(!builderRef.current) return;

    document.querySelectorAll('.custom-topbar [data-device]').forEach(btn=>btn.classList.remove('on'));

    const btn = e.target.closest('button');
    const screenMode = btn.getAttribute('data-device');

    builderRef.current.setScreenMode(screenMode);
    btn.classList.add('on');
  };

  const handleOnPreview = () => {
    if(!builderRef.current) return;

    let html = builderRef.current.html();
    localStorage.setItem('preview-html', html);
    let mainCss = builderRef.current.mainCss();
    localStorage.setItem('preview-maincss', mainCss);
    let sectionCss = builderRef.current.sectionCss();
    localStorage.setItem('preview-sectioncss', sectionCss);

    emitCustomMessage(identifier, 'preview');
  };

  const handleOnTogglePanel = () => {
    if(!builderRef.current) return;
    builderRef.current.toggleEditPanel();
  };

  const handleOnStart = (ev) => {
    setTopbarOpacity(1);
    setIsReady(true);
    emitCustomMessage(identifier, 'start');
  };

  useEffect(() => {
    if (!builderRef.current) {
      builderRef.current = new ContentBox({
        onStart: handleOnStart,
        // ----- Endpoints
        listFilesUrl: `${basePath}/editor/file/listfiles`,
        listFoldersUrl: `${basePath}/editor/file/listfolders`,
        deleteFilesUrl: `${basePath}/editor/file/deletefiles`,
        moveFilesUrl: `${basePath}/editor/file/movefiles`,
        createFolderUrl: `${basePath}/editor/file/createfolder`,
        uploadFilesUrl: `${basePath}/editor/file/uploadfiles`,
        renameFileUrl: `${basePath}/editor/file/renamefile`,
        getModelsUrl: `${basePath}/editor/file/getmodels`,
        textToImageUrl: `${basePath}/editor/file/texttoimage`,
        upscaleImageUrl: `${basePath}/editor/file/upscaleimage`,
        controlNetUrl: `${basePath}/editor/file/controlnet`,
        saveTextUrl: `${basePath}/editor/file/savetext`,
        ...EditorConfigs
      });

      builderRef.current.addButton({
        'pos': 2,
        'title': 'Agregar transición a contenido',
        'html': '<svg class="is-icon-flex" style="fill:rgba(0, 0, 0, 0.7);width:14px;height:14px;"><use xlink:href="#icon-wand"></use></svg>',
        'onClick': ()=>{
          builderRef.current.openAnimationPanel();
        }
      });

      builderRef.current.addButton({
        'pos': 5,
        'title': 'Borrar contenido',
        'html': '<svg class="is-icon-flex"><use xlink:href="#icon-eraser"></use></svg>',
        'onClick': (e)=>{
          builderRef.current.clear();
        }
      });
    }
    return () => {
      if (builderRef) {
        setIsReady(false);
        builderRef.current.destroy();
        builderRef.current = null;
      }
    };

  }, []);

  useEffect(() => {
    if (previousId === null || previousId === undefined) {
      handleLoadData(DEFAULT_DATA);
      return;
    }
    handleOnShow();
  }, [previousId]);

  return (
      isLoadingShow && !isReady ? (
        <LoaderScreen />
      ) : builderRef.current === null ? (
        <EmptyScreen>
          No se pudo cargar el editor.
        </EmptyScreen>
      ) : (
      <div className="builder-ui keep-selection custom-topbar" style={{opacity:topbarOpacity}} data-tooltip>
        <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {title}
        </div>
        <div style={{ maxWidth: '21rem' }}>
          <button className="btn-back" onClick={handleOnBack} title="Regresar">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-back"></use></svg>
              ` }} />
            <span>Regresar</span>
          </button>

          <button className="btn-undo" onClick={handleOnUndo} title="Deshacer">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-undo"></use></svg>
              ` }} />
          </button>

          <button className="btn-redo" onClick={handleOnRedo} title="Rehacer">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-redo"></use></svg>
              ` }} />
          </button>

          <button onClick={handleOnSave} title="Guardar">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-save"></use></svg>
              ` }} />
            <span>Guardar</span>
          </button>
        </div>
        <div style={{ maxWidth: '31rem' }}>
          <button className="btn-device-desktop-large" data-device="desktop-lg" onClick={handleOnSetScreenMode} title="Visualizar en modo Desktop">
            <div dangerouslySetInnerHTML={{ __html: `
                  <svg style="width:18px;height:18px;"><use xlink:href="#icon-device-desktop"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-desktop" data-device="desktop" onClick={handleOnSetScreenMode} title="Visualizar en modo Laptop">
            <div dangerouslySetInnerHTML={{ __html: `
                  <svg style="width:18px;height:18px;"><use xlink:href="#icon-device-laptop"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-tablet-landscape" data-device="tablet-landscape" onClick={handleOnSetScreenMode} title="Visualizar en modo Tablet horizontal">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg style="width:18px;height:18px;transform:rotate(-90deg)"><use xlink:href="#icon-device-tablet"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-tablet" data-device="tablet" onClick={handleOnSetScreenMode} title="Visualizar en modo Tablet vertical">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg  style="width:18px;height:18px;"><use xlink:href="#icon-device-tablet"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-mobile" data-device="mobile" onClick={handleOnSetScreenMode} title="Visualizador en modo Mobile">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg  style="width:18px;height:18px;"><use xlink:href="#icon-device-mobile"></use></svg>
              ` }} />
          </button>
          <button className="btn-fullview" data-device="fullview" onClick={handleOnSetScreenMode} title="Visualizador en panel completo">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg  style="width:18px;height:18px;"><use xlink:href="#icon-fullview"></use></svg>
              ` }} />
          </button>

          <div className="separator"></div>

          <button className="btn-preview" onClick={handleOnPreview} title="Vista previa de contenido">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-eye"></use></svg>
              ` }} />
          </button>

          <div className="separator"></div>

          <button className="btn-togglepanel" data-button="togglepanel" onClick={handleOnTogglePanel} title="Menu de preferencias de lienzo">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-pencil"></use></svg>
              ` }} />
          </button>
        </div>
      </div>
      )
  );
}

export default Editor;