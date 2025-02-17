import { useEffect, useState } from 'react';
import ContentBox from '@innovastudio/contentbox';
import './styles/contentbox.css';
import './styles/contentbuilder.css';

let builder;

function App() {

  const [topbarOpacity, setTopbarOpacity] = useState(0);

  useEffect(() => {
    
    builder = new ContentBox({

      // More Settings
      canvas: true, // Enable the new canvas mode
      previewURL: 'preview.html',
      controlPanel: true, // Enable the new control panel
      iframeSrc: 'blank.html', // Enable resizable content area
      topSpace: true, // Needed when using custom toolbar
      iframeCentered: true,
      onStart: ()=>{
          setTopbarOpacity(1); // Shows custom topbar (by setting opacity to 1)
      },
      // Hide uneeded buttons (we'll add these buttons on the topbar)
      toggleDeviceButton: false, 
      deviceButtons: false,

      // Default file/image picker
      imageSelect: '/assets.html',
      videoSelect: '/assets.html',
      audioSelect: '/assets.html',
      fileSelect: '/assets.html',
      mediaSelect: '/assets.html', // for image & video
      // You can replace the default file/image picker with your own asset/file manager application
      // or use Files.js Asset Manager: https://innovastudio.com/asset-manager

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
    builder.addButton({ 
      'pos': 2,
      'title': 'Animation',
      'html': '<svg class="is-icon-flex" style="fill:rgba(0, 0, 0, 0.7);width:14px;height:14px;"><use xlink:href="#icon-wand"></use></svg>', 
      'onClick': ()=>{
          builder.openAnimationPanel();
      }
    });
    builder.addButton({ 
      'pos': 3,
      'title': 'Timeline Editor',
      'html': '<svg><use xlink:href="#icon-anim-timeline"></use></svg>', 
      'onClick': ()=>{
          builder.openAnimationTimeline();
      }
    });

    builder.addButton({ 
      'pos': 5,
      'title': 'Clear Content',
      'html': '<svg class="is-icon-flex"><use xlink:href="#icon-eraser"></use></svg>', 
      'onClick': (e)=>{
          builder.clear();
      }
    });

    // Load sample content
    let html = `<div class="is-section is-section-100 is-box type-system-ui">
      <div class="is-overlay"></div>
      <div class="is-container v2 size-18 leading-14 is-content-1300">
        <div class="row">
          <div class="column">
              <h1 class="leading-11 size-88">We design. We develop. We get it done — nicely.</h1>
          </div>
        </div>
      </div>
    </div>`;
    let mainCss = '';
    let sectionCss = '';

    builder.loadHtml(html); // Load html
    builder.loadStyles(mainCss, sectionCss); // Load styles

    return () => {
      // cleanup
      builder.destroy();
      builder = null;
    };
  
  }, []);
  
  // Topbar Functions
  function back() {

  }

  function save(e) {
    window.parent.postMessage({ action: "builder-on-save", id: 5849301 }, "*");
  }

  function publish(e) {
    window.parent.postMessage({ action: "builder-on-publish", id: 5849301 }, "*");
  }

  function undo(e) {
    if(!builder) return;
    builder.undo();
  }

  function redo(e) {
    if(!builder) return;
    builder.redo();
  }

  function setScreenMode(e) {
    if(!builder) return;

    document.querySelectorAll('.custom-topbar [data-device]').forEach(btn=>btn.classList.remove('on'));

    const btn = e.target.closest('button');
    const screenMode = btn.getAttribute('data-device');

    builder.setScreenMode(screenMode);
    btn.classList.add('on');
  }

  function download() {
    if(!builder) return;
    builder.download();
  }

  function viewHtml() {
    if(!builder) return;
    builder.viewHtml();
  }

  function preview() {
    if(!builder) return;
    
    let html = builder.html();
    localStorage.setItem('preview-html', html); 
    let mainCss = builder.mainCss(); 
    localStorage.setItem('preview-maincss', mainCss); 
    let sectionCss = builder.sectionCss();
    localStorage.setItem('preview-sectioncss', sectionCss);

    window.open('/preview.html', '_blank').focus();
  }

  function togglePanel() {
    if(!builder) return;
    builder.toggleEditPanel();
  }

  return (
    <>
      <div className="builder-ui keep-selection custom-topbar" style={{opacity:topbarOpacity}} data-tooltip>
        <div>
            Your Name
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
    </>
  )
}

export default App
