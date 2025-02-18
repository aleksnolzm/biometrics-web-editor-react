import {useEffect, useRef, useState} from 'react';
import { useSearchParams } from "react-router-dom";
import _ from 'lodash';
import ContentBox from '@innovastudio/contentbox';
import '../styles/contentbox.css';
import '../styles/contentbuilder.css';
import { useRequest } from "@main/hooks";
import { getContentById, updateContent } from "app/api/editor";
import { HTML_TEMPLATE } from "app/views/Defaults";
import { emitErrorMessage } from "app/utils/eventMessagesHandler";

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

  const back = () => {

  };

  const save = (e) => {
    window.parent.postMessage({ action: "builder-on-save", id: 5849301 }, "*");
  };

  const publish = (e) => {
    window.parent.postMessage({ action: "builder-on-publish", id: 5849301 }, "*");
  };

  const undo = (e) => {
    if(!builderRef.current) return;
    builderRef.current.undo();
  };

  const redo = (e) => {
    if(!builderRef.current) return;
    builderRef.current.redo();
  };

  const setScreenMode = (e) => {
    if(!builderRef.current) return;

    document.querySelectorAll('.custom-topbar [data-device]').forEach(btn=>btn.classList.remove('on'));

    const btn = e.target.closest('button');
    const screenMode = btn.getAttribute('data-device');

    builderRef.current.setScreenMode(screenMode);
    btn.classList.add('on');
  };

  const download = async () => {
    if(!builderRef.current) return;
    builderRef.current.download();
  };

  const viewHtml = () => {
    if(!builderRef.current) return;
    builderRef.current.viewHtml();
  };

  const preview = () => {
    if(!builderRef.current) return;

    let html = builderRef.current.html();
    localStorage.setItem('preview-html', html);
    let mainCss = builderRef.current.mainCss();
    localStorage.setItem('preview-maincss', mainCss);
    let sectionCss = builderRef.current.sectionCss();
    localStorage.setItem('preview-sectioncss', sectionCss);

    window.open('/preview.html', '_blank').focus();
  };

  const togglePanel = () => {
    if(!builderRef.current) return;
    builderRef.current.toggleEditPanel();
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
        onStart: ()=>{
          console.log('on start')
          setTopbarOpacity(1);
          setIsReady(true);
        },
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
    console.log('get show');
    tryShow(externalId, 'notice')
      .then((response) => {
        if (!response) return;
        handleResponseShow(response);
      })
      .catch(error => console.log(error));
  }, [externalId]);

  return (
      isLoadingShow ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
      <div className="builder-ui keep-selection custom-topbar" style={{opacity:topbarOpacity}} data-tooltip>
        <div>
          {title}
        </div>
        <div>
          <button className="btn-back" onClick={back} title="Back">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-back"></use></svg>
              ` }} />
            <span>Back</span>
          </button>

          <div className="separator"></div>

          <button className="btn-undo" onClick={undo} title="Undo">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-undo"></use></svg>
              ` }} />
          </button>

          <button className="btn-redo" onClick={redo} title="Redo">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-redo"></use></svg>
              ` }} />
          </button>

          <button onClick={save} title="Save">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-save"></use></svg>
              ` }} />
            <span>Save</span>
          </button>

          <button onClick={publish} title="Publish">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-publish"></use></svg>
              ` }} />
            <span>Publish</span>
          </button>
        </div>
        <div>
          <button className="btn-device-desktop-large" data-device="desktop-lg" onClick={setScreenMode} title="Desktop - Large Screen">
            <div dangerouslySetInnerHTML={{ __html: `
                  <svg style="width:18px;height:18px;"><use xlink:href="#icon-device-desktop"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-desktop" data-device="desktop" onClick={setScreenMode} title="Desktop / Laptop">
            <div dangerouslySetInnerHTML={{ __html: `
                  <svg style="width:18px;height:18px;"><use xlink:href="#icon-device-laptop"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-tablet-landscape" data-device="tablet-landscape" onClick={setScreenMode} title="Tablet - Landscape">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg style="width:18px;height:18px;transform:rotate(-90deg)"><use xlink:href="#icon-device-tablet"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-tablet" data-device="tablet" onClick={setScreenMode} title="Tablet - Portrait">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg  style="width:18px;height:18px;"><use xlink:href="#icon-device-tablet"></use></svg>
              ` }} />
          </button>
          <button className="btn-device-mobile" data-device="mobile" onClick={setScreenMode} title="Mobile">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg  style="width:18px;height:18px;"><use xlink:href="#icon-device-mobile"></use></svg>
              ` }} />
          </button>
          <button className="btn-fullview" data-device="fullview" onClick={setScreenMode} title="Full View">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg  style="width:18px;height:18px;"><use xlink:href="#icon-fullview"></use></svg>
              ` }} />
          </button>

          <div className="separator"></div>

          <button className="btn-download" onClick={download} title="Download">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-download"></use></svg>
              ` }} />
          </button>

          <button className="btn-html" onClick={viewHtml} title="HTML">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-code"></use></svg>
              ` }} />
          </button>

          <button className="btn-preview" onClick={preview} title="Preview">
            <div dangerouslySetInnerHTML={{ __html: `
              <svg><use xlink:href="#icon-eye"></use></svg>
              ` }} />
          </button>

          <div className="separator"></div>

          <button className="btn-togglepanel" data-button="togglepanel" onClick={togglePanel} title="Toggle Edit Panel">
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