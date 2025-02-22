import { getToken } from 'app/services/localStorage';

const IS_LOCALHOST = window.origin.includes('localhost:3107');
const ASSETS_PATH = IS_LOCALHOST ? '/files.html' : '/editor/files.html';

export const EditorConfigs = {
  canvas: true,
  previewURL: 'preview.html',
  controlPanel: true,
  iframeSrc: 'blank.html',
  topSpace: true,
  iframeCentered: true,
  toggleDeviceButton: false,
  deviceButtons: false,

  // ---- Default file/image picker
  imageSelect: ASSETS_PATH,
  videoSelect: ASSETS_PATH,
  audioSelect: ASSETS_PATH,
  fileSelect: ASSETS_PATH,
  mediaSelect: ASSETS_PATH,

  // ----- Template Sets
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

  // ----- Fetch configs
  defaultHeaders: {
    'Authorization': `Bearer ${getToken()}`
  },
};