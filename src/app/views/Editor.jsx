import {useEffect, useRef, useState} from 'react';
import { useSearchParams } from "react-router-dom";
import ContentBox from '@innovastudio/contentbox';
import '../styles/contentbox.css';
import '../styles/contentbuilder.css';
import { useRequest } from "@main/hooks";
import { getContentById, updateContent } from "app/api/editor";
import { HTML_TEMPLATE } from "app/views/Defaults";
import {emitCustomMessage, emitErrorMessage} from "app/utils/eventMessagesHandler";
import Loader from "app/views/Components/Loader";

const EVENT_IDENTIFIER = 5849301;
const DEFAULT_DATA = {
  html: HTML_TEMPLATE,
  mainCss: '',
  sectionCss: '',
  title: 'Sin título',
};

const Editor = () => {
  const [searchParams] = useSearchParams();
  const externalId = searchParams.get('id');
  const externalModule = searchParams.get('module');
  const builderRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [title, setTitle] = useState('');
  const [topbarOpacity, setTopbarOpacity] = useState(0);

  const { makeRequest: tryShow, response: responseShow, isLoading: isLoadingShow } = useRequest(getContentById, {
    onError: (err) => emitErrorMessage(EVENT_IDENTIFIER, err),
  });
  const { makeRequest: tryUpdate, response: responseUpdate, isLoading: isLoadingUpdate } = useRequest(updateContent, {
    onError: (err) => emitErrorMessage(EVENT_IDENTIFIER, err),
  });

  const handleLoadData = (currentRes) => {
    builderRef.current.loadHtml(currentRes.html);
    builderRef.current.loadStyles(currentRes.mainCss, currentRes.sectionCss);
    setTitle(currentRes?.title);
  }

  const handleResponseShow = (currentRes) => {
    const { isOk, successContent } = currentRes;
    console.log(isOk, successContent);
    if (!isOk) {
      handleLoadData(DEFAULT_DATA);
      return;
    }
    handleLoadData(successContent);
  };

  const handleResponseUpdate = (currentRes) => {
    const { isOk, successContent } = currentRes;
    console.log(isOk, successContent);
    if (!isOk) return;
    emitCustomMessage(EVENT_IDENTIFIER, 'update', successContent);
  }

  const handleOnShow = () => {
    console.log('handleOnShow');
    tryShow(externalId, externalModule)
      .then((response) => {
        if (!response) return;
        handleResponseShow(response);
      })
      .catch(error => console.log(error));
  };

  const handleOnUpdate = (data) => {
    console.log('handleOnUpdate');
    tryUpdate(data, externalId, externalModule)
      .then((response) => {
        if (!response) return;
        handleResponseUpdate(response);
      })
      .catch(error => console.log(error));
  };

  const handleOnBack = () => {
    emitCustomMessage(EVENT_IDENTIFIER, 'back');
  };

  const handleOnSave = (e) => {
    emitCustomMessage(EVENT_IDENTIFIER, 'before-save');
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
    
    emitCustomMessage(EVENT_IDENTIFIER, 'preview');
  };

  const handleOnTogglePanel = () => {
    if(!builderRef.current) return;
    builderRef.current.toggleEditPanel();
  };

  const handleOnStart = (ev) => {
    setTopbarOpacity(1);
    setIsReady(true);
    emitCustomMessage(EVENT_IDENTIFIER, 'start');
  };

  useEffect(() => {
    if (!builderRef.current) {
      builderRef.current = new ContentBox({

        canvas: true,
        previewURL: 'preview.html',
        controlPanel: true,
        iframeSrc: 'blank.html',
        topSpace: true,
        iframeCentered: true,
        onStart: handleOnStart,
        toggleDeviceButton: false,
        deviceButtons: false,

        // Default file/image picker
        imageSelect: '/assets.html',
        videoSelect: '/assets.html',
        audioSelect: '/assets.html',
        fileSelect: '/assets.html',
        mediaSelect: '/assets.html',

        // Template Sets
        templates: [
          {
            url: 'assets/templates-simple/templates.js',
            path: 'assets/templates-simple/',
            pathReplace: [],
            numbering: true,
            showNumberOnHover: true,
          },
          {
            url: 'assets/templates-quick/templates.js',
            path: 'assets/templates-quick/',
            pathReplace: [],
            numbering: true,
            showNumberOnHover: true,
          },
          {
            url: 'assets/templates-animated/templates.js',
            path: 'assets/templates-animated/',
            pathReplace: [],
            numbering: true,
            showNumberOnHover: true,
          },
        ],

        slider: 'glide',
        navbar: true,
      });

      // Adding more ContentBox features on the left sidebar (Animation & Timeline editor buttons)
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
    if (externalId === null || externalId === undefined) return;
    handleOnShow();
  }, [externalId]);

  return (
      isLoadingShow ? (
        <Loader />
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