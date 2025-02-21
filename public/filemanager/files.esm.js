class Files {
  constructor(element, settings = {}) {
    const defaults = {
      // listFilesUrl: '/listfiles',
      // listFoldersUrl: '/listfolders',
      // deleteFilesUrl: '/deletefiles',
      // moveFilesUrl: '/movefiles',
      // createFolderUrl: '/createfolder',
      // uploadFilesUrl: '/uploadfiles',
      // renameFileUrl: '/renamefile',

      // getMmodelsUrl: '/getmodels',
      // textToImageUrl: '/texttoimage',
      // upscaleImageUrl: '/upscaleimage',
      // controlNetUrl: '/controlnet',
      // saveTextUrl: '/savetext',
      // viewUrl: '/view',

      onSelect: () => {},
      onCancel: () => {},
      allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp', 'image/tiff', 'image/svg+xml', 'image/vnd.adobe.photoshop', 'video/mp4', 'video/quicktime', 'audio/mpeg', 'application/json', 'application/font', 'application/pdf', 'application/zip', 'application/x-rar-compressed', 'application/msword', 'application/rtf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'text/csv', 'text/markdown', 'text/plain', 'text/css', 'text/javascript', 'text/html'],
      filePicker: false,
      validFileNamePattern: /^[a-zA-Z0-9_.-]+$/,
      //   /^[a-zA-Z0-9_\-\.]+$/,

      showRelativeTime: false,
      locale: 'default',
      dateShortOptions: {
        // Used in file list
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      dateLongOptions: {
        // Used in file info
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      },
      defaultHeaders: {
        'Content-Type': 'application/json'
      },
      headers: {},
      refreshButton: false,
      demoMode: false,
      demoMessage: 'This function is disabled in this demo.',
      //experimental
      enableBuilder: false,
      builder: 'edit.html'
    };
    this.settings = Object.assign(this, defaults, settings);
    if (window._txt) {
      // if language file is included
      this.settings.lang = window._txt;
    }
    let libStuff = document.querySelector('#_libhtml');
    if (!libStuff) {
      libStuff = document.createElement('div');
      libStuff.id = '_libhtml';
      libStuff.style.visibility = 'hidden';
      libStuff.className = 'is-ui';
      document.body.appendChild(libStuff);
      libStuff = document.querySelector('#_libhtml');
    }
    this.libStuff = libStuff;
    let html = `
        <div class="modal-overlay">
            <svg class="spinner" width="40px" height="40px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>

        <div class="is-modal modal-view">
            <!--
            <button class="btn-close">
                <svg><use xlink:href="#icon-zoom-out"></use></svg>
            </button>
            -->
            <div class="modal-content">
            </div>
        </div>

        <div class="is-modal modal-prompts">
            <div class="modal-content">
                <button class="btn-close">
                    <svg><use xlink:href="#icon-close"></use></svg>
                </button>
                <div class="prompt-list"></div>
            </div>
        </div>

        <div class="is-modal modal-textedit">
            <div class="modal-content">

                <textarea class="inp-textedit"></textarea>
    
                <div class="flex justify-end w-full">
                    <div class="save-info flex items-center"></div>
                    <div class="flex">
                        <button class="btn-cancel mr-4" title="${this.out('Cancel')}">${this.out('Cancel')}</button>
                        <button class="btn-save-file" title="${this.out('Save')}">${this.out('Save')}</button>
                    </div>
                </div>

            </div>
        </div>

        <div class="is-modal modal-htmledit">
            <div class="modal-content">


            </div>
        </div>

        <div class="panel">

            <div class="panel-side">
                <div class="flex tabs" role="tablist">
                    <button class="tab-button tab-tree w-full active" role="tab" aria-selected="true" tabindex="0">
                        ${this.out('Folders')}
                    </button>
                    <button class="tab-button tab-generate-image w-full" role="tab" aria-selected="false" tabindex="0">
                        ${this.out('Generate Image')}
                    </button>
                </div>

                <div class="tab-content tab-content-tree active" role="tabpanel">
                    <div class="div-tree"></div>
                </div>
                <div class="tab-content tab-content-generate-image" role="tabpanel">

                    <h1 class="mb-6">${this.out('Generate Image')}</h1>

                    <label for="inpModel">${this.out('Model')}:</label>

                    <select id="inpModel" class="inp-model">

                        <option disabled value="space">&nbsp;</option>
                        <option disabled value="Anime & Styles">${this.out('ANIME & STYLES')}</option>
                        
                        <option value="eimis-anime-diffusion-v1-0">Anime Diffusion</option>
                        <option value="arcane-diffusion">Arcane Diffusion</option>
                        <option value="dark-sushi-mix-v2-25">Dark Sushi Mix v2.25</option>
                        <option value="mo-di-diffusion">Modern Disney Diffusion</option>
                        <option value="neverending-dream">NeverEnding Dream</option>
                        <option value="something-v2-2">Something V2.2</option>
                        <option value="synthwave-punk-v2">SynthwavePunk v2</option>

                        <option disabled value="space">&nbsp;</option>
                        <option disabled value="Art">${this.out('ART')}</option>
                        
                        <option value="moonfilm-utopia-v3">MoonFilm Utopia v3</option>
                        <option value="openjourney-v1-0">Openjourney</option>
                        <option value="openjourney-v4">Openjourney v4</option>
                        <option value="anashel-rpg">RPG</option>
                        <option value="stable-diffusion-v1-5">Stable Diffusion v1.5</option>
                        <option value="stable-diffusion-v2-1">Stable Diffusion v2.1</option>
                        <option value="van-gogh-diffusion">Van Gogh Diffusion</option>

                        <option disabled value="space">&nbsp;</option>
                        <option disabled value="Design">${this.out('DESIGN')}</option>
                        
                        <option value="xsarchitectural-interior-design">InteriorDesign</option>
                        
                        <option disabled value="space">&nbsp;</option>
                        <option disabled value="Photorealism">${this.out('PHOTOREALISM')}</option>
                        
                        <option value="absolute-reality-v1-6">AbsoluteReality v1.6</option>
                        <option value="analog-diffusion">Analog Diffusion</option>
                        <option value="flux-schnell">FLUX.1 [schnell]</option>
                        <option value="icbinp">ICBINP</option>
                        <option value="icbinp-afterburn">ICBINP Afterburn</option>
                        <option value="icbinp-final">ICBINP Final</option>
                        <option value="icbinp-relapse">ICBINP Relapse</option>
                        <option value="moonfilm-film-grain-v1">MoonFilm FilmGrain v1</option>
                        <option value="moonfilm-reality-v3">MoonFilm Reality v3</option>
                        <option value="realistic-vision-v1-3">Realistic Vision v1.3</option>
                        <option value="realistic-vision-v3">Realistic Vision v3</option>
                        <option value="realistic-vision-v5-1">Realistic Vision v5.1</option>
                        <option value="realvis-xl-v4">RealVisXL V4.0</option>
                    </select>

                    <div class="flex justify-between align-center">
                        <label for="inpPrompt">${this.out('Prompt')}:</label>
                    </div>
                    <textarea id="inpPrompt" class="inp-prompt p-2 rounded flex-none"></textarea>

                    <div class="text-right">
                        <a href="#" class="link-history text-sm underline">${this.out('history')}</a>
                    </div>

                    <div class="div-neg-prompt flex flex-col">
                        <label for="inpNegPrompt">${this.out('Negative Prompt')}:</label>
                        <input id="inpNegPrompt" type="text" class="inp-neg-prompt p-2 rounded mb-4 w-full" value=""></input>
                    </div>

                    <div class="flex">
                        <div class="mr-2">
                            <label>${this.out('Width')}: <span class="val-width" style="width:60px;display:inline-block;">512</span></label>
                            <input type="range" min="256" max="1024" step="64" value="512" class="inp-width is-rangeslider">
                        </div>
                        <div class="ml-2">
                            <label>${this.out('Height')}: <span class="val-height" style="width:60px;display:inline-block;">512</span></label>
                            <input type="range" min="256" max="1024" step="64" value="512" class="inp-height is-rangeslider">
                        </div>
                    </div>

                    <div class="div-img-control">
                        <h2 class="mt-5 mb-3">${this.out('Image Control')}</h2>

                        <div class="flex items-end mb-3">
                            <div class="div-img-control-preview flex w-32 h-32 flex-none border">
                            </div>
                            <button class="btn-clear-control-image p-0 ml-2" style="width:30px;height:30px;"><svg style="width:17px;height:17px;flex:none"><use xlink:href="#icon-trash"></use></svg></button>
                        </div>

                        <label for="inpControlNet">${this.out('Guided Output')}:</label>
                        <select id="inpControlNet" class="inp-controlnet mb-1 w-full">
                            <option value="canny-1.1" selected>Hard Edges</option>
                            <option value="softedge-1.1">Soft Edges</option>
                            <option value="mlsd-1.1">Straight Lines</option>
                            <option value="normal-1.1">Normal Map</option>
                            <option value="depth-1.1">Depth</option>
                            <option value="openpose-1.1">Pose</option>
                            <option value="openpose-full-1.1">Full Body</option>
                            <option value="scribble-1.1">Scribble</option>
                            <option value="lineart-1.1">Lineart</option>
                            <option value="lineart-anime-1.1">Lineart Anime</option>
                            <option value="mediapipeface">Face</option>
                        </select>
                    </div>

                    <div class="div-advance">
                        <h2 class="mt-5 mb-3">${this.out('Advanced')}</h2>

                        <div class="flex mb-3">
                            <div class="mr-2">
                                <label>${this.out('Steps')}: <span class="val-steps" style="width:32px;display:inline-block;">25</span></label>
                                <input type="range" min="1" max="100" value="25" class="inp-steps is-rangeslider">
                            </div>
                            <div class="ml-2">
                                <label>${this.out('Guidance')}: <span class="val-guidance" style="width:32px;display:inline-block;">7.5</span></label>
                                <input type="range" min="0" max="20" step="0.5" value="7.5" class="inp-guidance is-rangeslider">
                            </div>
                        </div>

                        <label for="inpSampler">${this.out('Sampler')}:</label>
                        <select id="inpSampler" class="inp-sampler">
                            <option value="euler_a">Euler Ancestral</option>
                            <option value="euler">Euler</option>
                            <option value="lms">LMS</option>
                            <option value="dpmsolver++" selected>DPM-Solver++</option>
                            <option value="pndm">PLMS</option>
                            <option value="ddim">DDIM</option>
                            <!--
                            <option value="kdpm2">DPM Karras</option>
                            <option value="kdpm2_a">DPM Karras Ancestral</option>
                            <option value="heun">Heun</option>
                            <option value="unipc">UniPC</option>
                            <option value="deis">DEIS</option>
                            <option value="dpmsolver_sde">DPM-Solver SDE</option>
                            -->
                        </select>
                    </div>

                    <button class="btn-generate mt-4">
                        ${this.out('Generate')}
                    </button>

                </div>
            </div>

            <div class="panel-files">

                <div class="file-list-controls">
                    <div class="div-breadcrumb mr-6"></div>
                    <div class="dragdrop-info flex items-center">${this.out('Drag and drop files here')}<svg style="width:20px;height:20px;margin-bottom:-10px;flex:none"><use xlink:href="#icon-here"></use></svg></div>
                    <div class="div-buttons flex justify-end">
                        <label class="div-selectall flex items-center justify-center mr-5 mt-2 cursor-pointer" style="display:none;">
                            <input class="chk-selectall mr-1 cursor-pointer" type="checkbox"> <span>${this.out('Select All')}</span>
                        </label>
                        ${this.refreshButton ? `
                        <button class="btn-refresh tooltip relative ml-2" title="${this.out('Refresh')}" style="width:55px;"><svg><use xlink:href="#icon-refresh"></use></svg></button>
                        ` : ''}
                        <!--
                        <button class="btn-listview tooltip relative ml-2" title="${this.out('List')}" style="width:55px;height:44px"><svg style="width:22px;height:22px"><use xlink:href="#icon-list"></use></svg></button>
                        <button class="btn-iconsview tooltip relative ml-2" title="${this.out('Thumbnails')}" style="width:55px;height:44px"><svg style="width:22px;height:22px"><use xlink:href="#icon-icons"></use></svg></button>
                        <button class="btn-thumbnailview tooltip relative ml-2 mr-5" title="${this.out('Thumbnails')}" style="width:55px;height:44px"><svg style="width:22px;height:22px"><use xlink:href="#icon-thumbnails"></use></svg></button>
                        -->
                        <button class="btn-filemore tooltip relative ml-2" title="${this.out('File Info')}" style="width:55px;height:44px"><svg style="width:22px;height:22px"><use xlink:href="#icon-info"></use></svg></button>
                        <button class="btn-upload tooltip relative ml-2" title="${this.out('Upload')}" style="width:55px;"><svg><use xlink:href="#icon-upload"></use></svg></button>
                        <button class="btn-folder tooltip relative ml-2" title="${this.out('Create Folder')}" style="width:55px;"><svg><use xlink:href="#icon-folder-plus"></use></svg></button>
                        <button class="btn-rename tooltip relative ml-2" title="${this.out('Rename')}" style="display:none;">${this.out('Rename')}</button>
                        <button class="btn-move-files tooltip relative ml-2" title="${this.out('Move')}" style="display:none;">${this.out('Move')}</button>
                        <button class="btn-delete-files tooltip relative ml-2" title="${this.out('Delete Selected')}" style="display:none;">${this.out('Delete Selected')}</button>
                        <button class="btn-toggle-select tooltip relative ml-2" title="${this.out('Select')}"><svg class="mr-1"><use xlink:href="#icon-files"></use></svg><span>${this.out('Select')}</span></button>
                        
                        <button class="btn-settings tooltip relative ml-2" title="${this.out('More')}" style="width:55px;height:44px"><svg style="width:19px;height:19px"><use xlink:href="#icon-dots-vertical"></use></svg></button>
                        
                    </div>
                </div>

                <input type="file" class="inp-files" multiple style="display: none;">
                
                <div class="file-list-wrapper">
                    
                    <progress class="is-progress-bar w-full" value="0" max="100" style="display:none"></progress>
                    
                    <ul class="file-list"></ul>

                    <div class="file-info">

                        <button class="btn-close tooltip" title="${this.out('Close')}">
                            <svg><use xlink:href="#icon-close-right"></use></svg>
                        </button>

                        <div class="file-info-details">

                            <div class="div-filename"></div>
                        
                            <table class="table-file-info mt-3"> 
                                <tr>
                                    <td>${this.out('Size')}:</div>
                                    <td>
                                        <div class="div-filesize">30 KB</div>
                                    </td>
                                </tr>
                                <tr class="dimension-info">
                                    <td>${this.out('Dimensions')}:</div>
                                    <td>
                                        <div class="div-dimension"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="vertical-align: top;">${this.out('Last updated')}:</div>
                                    <td>
                                        <div class="div-modifieddate"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="vertical-align: top;">${this.out('URL')}:</div>
                                    <td>
                                        <div class="div-url"></div>
                                    </td>
                                </tr>
                            </table>   
                
                            <div class="div-imagepreview mt-3">
                            </div>
                
                            <div class="flex mt-5">
                                <button class="btn-edit w-full mr-1 tooltip relative" title="${this.out('Edit')}">
                                    <svg style="width:19px;height:19px;margin-right:4px"><use xlink:href="#icon-edit"></use></svg>
                                </button>
                                <button class="btn-view w-full mr-1 tooltip relative" title="${this.out('View')}">
                                    <svg style="width:19px;height:19px;margin-right:4px"><use xlink:href="#icon-zoom-in"></use></svg>
                                </button>
                                <button class="btn-download w-full mr-1 tooltip relative" title="${this.out('Download')}">
                                    <svg style="width:19px;height:19px;margin-right:4px"><use xlink:href="#icon-download"></use></svg>
                                </button>
                                <button class="btn-open w-full tooltip relative" title="${this.out('Open')}">
                                    <svg style="width:19px;height:19px;margin-right:4px"><use xlink:href="#icon-open"></use></svg>
                                </button>
                            </div>
                            
                            <div class="flex mt-1">
                                <button class="btn-upscale px-3 w-full mr-1 tooltip relative" title="${this.out('Upscale')}">
                                    <svg style="width:20px;height:20px;margin-right:4px"><use xlink:href="#icon-upscale"></use></svg>
                                </button>
                                <button class="btn-control-image px-3 w-full tooltip relative" title="${this.out('Use as image control')}">
                                    <svg style="width:17px;height:17px;margin-right:4px"><use xlink:href="#icon-plus"></use></svg>
                                </button>
                            </div>

                        </div>

                        <div class="no-selection-info">

                        </div>

                    </div>
                </div>

                <div class="file-picker flex justify-end mt-4">
                    <input type="text" class="inp-url p-2 rounded flex-grow mr-2${this.urlInput ? '' : ' hidden'}">
                    <button class="btn-cancel mr-4" title="${this.out('Cancel')}">${this.out('Cancel')}</button>
                    <button class="btn-select w-36">${this.out('Select')}</button>
                </div>
            </div>

        </div>

        <div class="is-pop pop-movefiles">
            <div class="div-folders">
            </div>
        </div>
        <div class="is-pop pop-rename">

            <input type="text" class="inp-rename-to p-2 rounded mb-4" value=""></input>

            <button class="btn-rename-to" title="${this.out('Rename')}">${this.out('Rename')}</button>
        </div>
        <div class="is-pop pop-folder">

            <input type="text" class="inp-folder-name p-2 rounded mb-4" value="" placeholder="${this.out('Enter folder name')}"></input>

            <button class="btn-create-folder" title="${this.out('Create Folder')}">${this.out('Create Folder')}</button>
        </div>
        <div class="is-pop pop-settings">

            <div class="flex">
                <button class="btn-view-list w-full mr-1 tooltip relative" title="${this.out('View as List')}">
                    <svg><use xlink:href="#icon-list"></use></svg>
                    <span>${this.out('List')}</span>
                </button>
                <button class="btn-view-icons w-full mr-1 tooltip relative hidden" title="${this.out('View as Icons')}">
                    <svg><use xlink:href="#icon-icons"></use></svg>
                    <span>${this.out('Icons')}</span>
                </button>
                <button class="btn-view-thumbnails w-full mr-1 tooltip relative" title="${this.out('View as Gallery')}">
                    <svg><use xlink:href="#icon-thumbnails"></use></svg>
                    <span>${this.out('Gallery')}</span>
                </button>
            </div>

            <div class="gallery-settings flex mt-5" style="display:none">
                <button class="btn-gallery-xs w-full mr-1 tooltip relative" title="${this.out('XS')}">
                    <span>${this.out('XS')}</span>
                </button>
                <button class="btn-gallery-sm w-full mr-1 tooltip relative" title="${this.out('SM')}">
                    <span>${this.out('SM')}</span>
                </button>
                <button class="btn-gallery-m w-full mr-1 tooltip relative" title="${this.out('M')}">
                    <span>${this.out('M')}</span>
                </button>
                <button class="btn-gallery-lg w-full mr-1 tooltip relative" title="${this.out('LG')}">
                    <span>${this.out('LG')}</span>
                </button>
                <button class="btn-gallery-xl w-full mr-1 tooltip relative" title="${this.out('XL')}">
                    <span>${this.out('XL')}</span>
                </button>
            </div>

            <label class="label-show-filesize mt-5">
                <input class="chk-filesize mr-2" type="checkbox">
                <span>${this.out('File Size')}</span>
            </label>

            <label class="label-show-modifieddate mt-2">
                <input class="chk-modifieddate mr-2" type="checkbox">
                <span>${this.out('Date last updated')}</span>
            </label>

        </div>

        <svg width="0" height="0" style="position:absolute;display:none;">
            <defs>
                <symbol id="icon-close" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </symbol>
                <symbol viewBox="0 0 512 512" id="icon-movie" stroke-width="0.7">
                    <path d="M0 360h400v-336h-400v336zM72 40v48h-56v-48h56zM72 104v48h-56v-48h56zM72 168v48h-56v-48h56zM72 232v48h-56v-48h56zM72 296v48h-56v-48h56zM312 40v144h-224v-144h224zM312 200v144h-224v-144h224zM384 40v48h-56v-48h56zM384 104v48h-56v-48h56zM384 168v48h-56v-48
                    h56zM384 232v48h-56v-48h56zM384 296v48h-56v-48h56z"></path>
                </symbol>
                <symbol viewBox="0 0 512 512" id="icon-audio" stroke-width="0.7">
                    <path d="M270 407.7V104.4L175.3 192H71v128h104.3zm56.3-52.1c20.5-27.8 32.8-62.3 32.8-99.6 0-37.4-12.3-71.8-32.8-99.6l-20.4 15.3c17.4 23.6 27.8 52.7 27.8 84.3 0 31.6-10.4 60.7-27.8 84.3l20.4 15.3zm66.5 46c30-40.7 48-91 48-145.6s-18-104.9-48-145.6l-20.4 15.3c26.9 36.4 43 81.4 43 130.3 0 48.9-16.1 93.8-43 130.3l20.4 15.3z"/>
                </symbol>
                <symbol id="icon-file" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                </symbol>
                <symbol id="icon-folder" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>
                </symbol>
                <symbol id="icon-arrow-back-up" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 14l-4 -4l4 -4"></path>
                    <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
                </symbol>
                <symbol id="icon-files" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
                    <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                </symbol>
                <symbol id="icon-upscale" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 11l5 -5l5 5"></path>
                    <path d="M7 17l5 -5l5 5"></path>
                </symbol>
                <symbol id="icon-trash" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </symbol>
                <symbol id="icon-zoom-in" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M7 10l6 0"></path>
                    <path d="M10 7l0 6"></path>
                    <path d="M21 21l-6 -6"></path>
                </symbol>
                <symbol id="icon-zoom-out" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M7 10l6 0"></path>
                    <path d="M21 21l-6 -6"></path>
                </symbol>
                <symbol id="icon-download" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 11l5 5l5 -5"></path>
                    <path d="M12 4l0 12"></path>
                </symbol>
                <symbol id="icon-photo-plus" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 8h.01"></path>
                    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
                    <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                </symbol>
                <symbol id="icon-plus" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                </symbol>
                <symbol id="icon-folder-plus" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                </symbol>
                <symbol id="icon-close" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </symbol>
                <symbol id="icon-menu" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                </symbol>
                <symbol id="icon-info" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 9h.01"></path>
                    <path d="M11 12h1v4h1"></path>
                </symbol>
                <symbol id="icon-refresh" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                    <path d="M13.5 6.5l4 4"></path>
                </symbol>
                <symbol id="icon-file-text" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M9 9l1 0"></path>
                    <path d="M9 13l6 0"></path>
                    <path d="M9 17l6 0"></path>
                </symbol>
                <symbol id="icon-file-type-zip" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M16 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                    <path d="M12 15v6"></path>
                    <path d="M5 15h3l-3 6h3"></path>
                </symbol>
                <symbol id="icon-file-type-pdf" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                    <path d="M17 18h2"></path>
                    <path d="M20 15h-3v6"></path>
                    <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path>
                </symbol>
                <symbol id="icon-file-type-css" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M8 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                    <path d="M11 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                    <path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                </symbol>
                <symbol id="icon-file-type-html" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M2 21v-6"></path>
                    <path d="M5 15v6"></path>
                    <path d="M2 18h3"></path>
                    <path d="M20 15v6h2"></path>
                    <path d="M13 21v-6l2 3l2 -3v6"></path>
                    <path d="M7.5 15h3"></path>
                    <path d="M9 15v6"></path>
                </symbol>
                <symbol id="icon-file-type-js" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M3 15h3v4.5a1.5 1.5 0 0 1 -3 0"></path>
                    <path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"></path>
                </symbol>
                <symbol id="icon-file-type-ppt" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                    <path d="M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                    <path d="M16.5 15h3"></path>
                    <path d="M18 15v6"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                </symbol>
                <symbol id="icon-file-type-doc" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M5 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path>
                    <path d="M20 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                    <path d="M12.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5z"></path>
                </symbol>
                <symbol id="icon-file-type-docx" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M2 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path>
                    <path d="M17 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                    <path d="M9.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5z"></path>
                    <path d="M19.5 15l3 6"></path>
                    <path d="M19.5 21l3 -6"></path>
                </symbol>
                <symbol id="icon-file-type-xls" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M4 15l4 6"></path>
                    <path d="M4 21l4 -6"></path>
                    <path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                    <path d="M11 15v6h3"></path>
                </symbol>
                <symbol id="icon-file-type-svg" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M4 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                    <path d="M10 15l2 6l2 -6"></path>
                    <path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"></path>
                </symbol>
                <symbol id="icon-file-type-csv" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                    <path d="M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                    <path d="M16 15l2 6l2 -6"></path>
                </symbol>
                <symbol id="icon-upload2" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                    <path d="M9 15l3 -3l3 3"></path>
                    <path d="M12 12l0 9"></path>
                </symbol>
                <symbol id="icon-upload" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 9l5 -5l5 5"></path>
                    <path d="M12 4l0 12"></path>
                </symbol>
                <symbol id="icon-here" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4"></path>
                </symbol>
                <symbol id="icon-open" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </symbol>
                <symbol id="icon-photo" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 8h.01"></path>
                    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
                </symbol>
                <symbol id="icon-file-type-jpg" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                    <path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"></path>
                    <path d="M5 15h3v4.5a1.5 1.5 0 0 1 -3 0"></path>
                </symbol>
                <symbol id="icon-file-type-png" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                    <path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"></path>
                    <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
                    <path d="M11 21v-6l3 6v-6"></path>
                </symbol>
                <symbol id="icon-file-type-gif" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"></path>
                    <path d="M12 8v8"></path>
                    <path d="M16 12h3"></path>
                    <path d="M20 8h-4v8"></path>
                </symbol>
                <symbol id="icon-list" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l11 0"></path>
                    <path d="M9 12l11 0"></path>
                    <path d="M9 18l11 0"></path>
                    <path d="M5 6l0 .01"></path>
                    <path d="M5 12l0 .01"></path>
                    <path d="M5 18l0 .01"></path>
                </symbol>
                <symbol id="icon-icons" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <path d="M14 14h6v6h-6z"></path>
                </symbol>
                <symbol id="icon-thumbnails2" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 6l.01 0"></path>
                    <path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                    <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4"></path>
                    <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3"></path>
                    <path d="M8 21l.01 0"></path>
                    <path d="M12 21l.01 0"></path>
                    <path d="M16 21l.01 0"></path>
                </symbol>
                <symbol id="icon-thumbnails" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 8h.01"></path>
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                    <path d="M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5"></path>
                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5"></path>
                </symbol>
                <symbol id="icon-dots-vertical" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </symbol>
                <symbol id="icon-settings" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </symbol>
                <symbol id="icon-close-right" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 7l5 5l-5 5"></path>
                    <path d="M13 7l5 5l-5 5"></path>
                </symbol>
            </defs>
        </svg>`;
    this.element = element;
    element.insertAdjacentHTML('afterbegin', html);
    if (!this.textToImageUrl) {
      this.filesOnly = true;
    }
    if (this.panelReverse) {
      this.reversePanel();
    }
    if (this.filesOnly) {
      this.panelFilesOnly();
    }
    if (this.folderTree) {
      this.panelShowTree();
    }
    const popMoveFiles = document.querySelector('.pop-movefiles');
    const popRename = document.querySelector('.pop-rename');
    const popFolder = document.querySelector('.pop-folder');
    const popSettings = document.querySelector('.pop-settings');
    const panelFiles = document.querySelector('.panel-files');
    const modalEditText = document.querySelector('.modal-textedit');
    const fileListElement = document.querySelector('.file-list');
    const panelFileInfo = document.querySelector('.file-info');

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    //Generate unique IDs and set aria-controls
    tabButtons.forEach((btn, index) => {
      // Generate unique IDs for tabs and tab panels
      // const tabId = `tab${index + 1}`;
      const panelId = `tabContent${index + 1}`;

      // Set aria-controls and id attributes
      btn.setAttribute('aria-controls', panelId);
      tabContents[index].setAttribute('id', panelId);
      btn.addEventListener('click', () => {
        tabButtons.forEach(elm => elm.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        if (btn.classList.contains('tab-tree')) {
          localStorage.setItem('_active_tab', 'tree');
        }
        if (btn.classList.contains('tab-generate-image')) {
          localStorage.setItem('_active_tab', 'generate-image');
        }
        btn.classList.add('active');
        tabContents[index].classList.add('active');
      });
    });
    const activeTab = localStorage.getItem('_active_tab');
    if (activeTab) {
      tabButtons.forEach(elm => elm.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      if (activeTab === 'tree') {
        const btn = document.querySelector('.tab-tree');
        const content = document.querySelector('.tab-content-tree');
        btn.classList.add('active');
        content.classList.add('active');
      }
      if (activeTab === 'generate-image') {
        const btn = document.querySelector('.tab-generate-image');
        const content = document.querySelector('.tab-content-generate-image');
        btn.classList.add('active');
        content.classList.add('active');
      }
    }
    this.prefix = '';
    const folderPath = localStorage.getItem('_folder_path');
    if (folderPath) {
      this.fetchFolderContents(folderPath);
    } else {
      this.fetchFolderContents('');
    }
    this.getModels();
    const btnToggleSelect = document.querySelector('.btn-toggle-select');
    btnToggleSelect.addEventListener('click', () => {
      this.toggleSelection();
    });
    const btnDeleteFiles = document.querySelector('.btn-delete-files');
    btnDeleteFiles.addEventListener('click', () => {
      this.deleteSelected();
    });
    const btnMoveFiles = document.querySelector('.btn-move-files');
    btnMoveFiles.addEventListener('click', () => {
      this.showPop(popMoveFiles, () => {}, btnMoveFiles);
    });
    const btnMore = document.querySelector('.btn-filemore');
    btnMore.addEventListener('click', () => {
      const panelFileInfo = document.querySelector('.file-info');
      if (panelFileInfo.classList.contains('active')) {
        this.hidePanelInfo();
        return;
      }
      this.showPanelInfo();
    });
    if (localStorage.getItem('_show_panelinfo')) {
      if (localStorage.getItem('_show_panelinfo') === 'y') {
        this.initialFileInfo();
      }
    }
    const btnFileInfoClose = panelFileInfo.querySelector('.btn-close');
    btnFileInfoClose.addEventListener('click', () => {
      this.hidePanelInfo();
    });
    const btnEdit_pop = panelFileInfo.querySelector('.btn-edit');
    btnEdit_pop.addEventListener('click', () => {
      if (this.enableBuilder && window._page.fileName) {
        this.viewBuilder();
      } else {
        this.viewText(this.selectedItem.url);
      }
    });
    const btnView_pop = panelFileInfo.querySelector('.btn-view');
    btnView_pop.addEventListener('click', () => {
      this.viewMedia(this.selectedItem.url);
    });
    const btnOpen_pop = panelFileInfo.querySelector('.btn-open');
    btnOpen_pop.addEventListener('click', () => {
      const url = this.selectedItem.url;
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.target = '_blank';
      anchor.click();
    });
    const btnDownload_pop = panelFileInfo.querySelector('.btn-download');
    btnDownload_pop.addEventListener('click', () => {
      const url = this.selectedItem.url;
      const fileName = this.selectedItem.fileName;
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = fileName;
      anchor.click();
    });
    const btnUpscale_pop = panelFileInfo.querySelector('.btn-upscale');
    btnUpscale_pop.addEventListener('click', () => {
      var img = new Image();
      img.onload = () => {
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        const url = this.selectedItem.url;
        this.upscaleImage(url, w, h);
      };
      img.src = this.selectedItem.url;
    });
    const btnControlImage_pop = panelFileInfo.querySelector('.btn-control-image');
    btnControlImage_pop.addEventListener('click', () => {
      const divControl = document.querySelector('.div-img-control');
      divControl.style.display = 'block';
      const divPreview = document.querySelector('.div-img-control-preview');
      divPreview.innerHTML = `<img src="${this.selectedItem.url}" style="object-fit:contain" />`;
      localStorage.setItem('_img_imagecontrol', this.selectedItem.url);
    });

    // Gallery Settings
    const showHideGallerySettings = () => {
      const divGallerySettings = popSettings.querySelector('.gallery-settings');
      const viewMode = localStorage.getItem('_view');
      if (viewMode) {
        if (viewMode === 'list') {
          divGallerySettings.style.display = 'none';
        } else if (viewMode === 'icons') {
          divGallerySettings.style.display = 'none';
        } else if (viewMode === 'gallery') {
          divGallerySettings.style.display = 'flex';
        }
      } else {
        divGallerySettings.style.display = 'flex';
      }
    };
    const btnSettings = document.querySelector('.btn-settings');
    btnSettings.addEventListener('click', () => {
      this.showPop(popSettings, () => {}, btnSettings);
      showHideGallerySettings();
    });

    // View mode: List, Icons, Gallery
    const btnViewList = document.querySelector('.btn-view-list');
    btnViewList.addEventListener('click', () => {
      this.renderListView();
      this.prepareItemsNavigation();
      showHideGallerySettings();
    });
    const btnViewIcons = document.querySelector('.btn-view-icons');
    btnViewIcons.addEventListener('click', () => {
      this.renderObjects(true);
      this.prepareItemsNavigation();
      showHideGallerySettings();
    });
    const btnViewThumbnails = document.querySelector('.btn-view-thumbnails');
    btnViewThumbnails.addEventListener('click', () => {
      this.renderObjects();
      this.prepareItemsNavigation();
      showHideGallerySettings();
    });

    // Gallery size
    const galleryView = localStorage.getItem('_gallery_view');
    if (galleryView) {
      if (galleryView === 'xs') {
        fileListElement.classList.remove('sm');
        fileListElement.classList.remove('lg');
        fileListElement.classList.remove('xl');
        fileListElement.classList.add('xs');
      }
      if (galleryView === 'sm') {
        fileListElement.classList.remove('xs');
        fileListElement.classList.remove('lg');
        fileListElement.classList.remove('xl');
        fileListElement.classList.add('sm');
      }
      if (galleryView === 'm') {
        fileListElement.classList.remove('sm');
        fileListElement.classList.remove('xs');
        fileListElement.classList.remove('xl');
        fileListElement.classList.remove('lg');
      }
      if (galleryView === 'lg') {
        fileListElement.classList.remove('sm');
        fileListElement.classList.remove('xs');
        fileListElement.classList.remove('xl');
        fileListElement.classList.add('lg');
      }
      if (galleryView === 'xl') {
        fileListElement.classList.remove('sm');
        fileListElement.classList.remove('xs');
        fileListElement.classList.remove('lg');
        fileListElement.classList.add('xl');
      }
    }
    const btnGalleryXS = popSettings.querySelector('.btn-gallery-xs');
    btnGalleryXS.addEventListener('click', () => {
      localStorage.setItem('_gallery_view', 'xs');
      fileListElement.classList.remove('sm');
      fileListElement.classList.remove('lg');
      fileListElement.classList.remove('xl');
      fileListElement.classList.add('xs');
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });
    const btnGallerySM = popSettings.querySelector('.btn-gallery-sm');
    btnGallerySM.addEventListener('click', () => {
      localStorage.setItem('_gallery_view', 'sm');
      fileListElement.classList.remove('xs');
      fileListElement.classList.remove('lg');
      fileListElement.classList.remove('xl');
      fileListElement.classList.add('sm');
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });
    const btnGalleryM = popSettings.querySelector('.btn-gallery-m');
    btnGalleryM.addEventListener('click', () => {
      localStorage.setItem('_gallery_view', 'm');
      fileListElement.classList.remove('sm');
      fileListElement.classList.remove('xs');
      fileListElement.classList.remove('xl');
      fileListElement.classList.remove('lg');
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });
    const btnGalleryLG = popSettings.querySelector('.btn-gallery-lg');
    btnGalleryLG.addEventListener('click', () => {
      localStorage.setItem('_gallery_view', 'lg');
      fileListElement.classList.remove('sm');
      fileListElement.classList.remove('xs');
      fileListElement.classList.remove('xl');
      fileListElement.classList.add('lg');
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });
    const btnGalleryXL = popSettings.querySelector('.btn-gallery-xl');
    btnGalleryXL.addEventListener('click', () => {
      localStorage.setItem('_gallery_view', 'xl');
      fileListElement.classList.remove('sm');
      fileListElement.classList.remove('xs');
      fileListElement.classList.remove('lg');
      fileListElement.classList.add('xl');
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });
    const inpFolderName = document.querySelector('.inp-folder-name');
    inpFolderName.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.createFolder();
      }
    });
    window.addEventListener('resize', () => {
      this.prepareItemsNavigation();
    });

    // Show/hide file size
    const chkShowFileSize = document.querySelector('.chk-filesize');
    const showFileSize = localStorage.getItem('_show_filesize');
    if (showFileSize) {
      if (showFileSize === 'y') {
        chkShowFileSize.checked = true;
        fileListElement.classList.add('fs');
      } else {
        chkShowFileSize.checked = false;
        fileListElement.classList.remove('fs');
      }
    } else {
      chkShowFileSize.checked = false;
      fileListElement.classList.remove('fs');
    }
    chkShowFileSize.addEventListener('click', () => {
      if (chkShowFileSize.checked) {
        localStorage.setItem('_show_filesize', 'y');
        fileListElement.classList.add('fs');
      } else {
        localStorage.setItem('_show_filesize', 'n');
        fileListElement.classList.remove('fs');
      }
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });

    // Show/hide modified date
    const chkShowModifiedDate = document.querySelector('.chk-modifieddate');
    const showModifiedDate = localStorage.getItem('_show_modifieddate');
    if (showModifiedDate) {
      if (showModifiedDate === 'y') {
        chkShowModifiedDate.checked = true;
        fileListElement.classList.add('md');
      } else {
        chkShowModifiedDate.checked = false;
        fileListElement.classList.remove('md');
      }
    } else {
      chkShowModifiedDate.checked = false;
      fileListElement.classList.remove('md');
    }
    chkShowModifiedDate.addEventListener('click', () => {
      if (chkShowModifiedDate.checked) {
        localStorage.setItem('_show_modifieddate', 'y');
        fileListElement.classList.add('md');
      } else {
        localStorage.setItem('_show_modifieddate', 'n');
        fileListElement.classList.remove('md');
      }
      setTimeout(() => {
        this.prepareItemsNavigation();
      }, 330);
    });
    const btnRefresh = document.querySelector('.btn-refresh');
    if (btnRefresh) btnRefresh.addEventListener('click', () => {
      this.fetchFolderContents('');
      const inpUrl = document.querySelector('.inp-url');
      inpUrl.value = '';
    });
    const btnFolder = document.querySelector('.btn-folder');
    btnFolder.addEventListener('click', () => {
      this.showPop(popFolder, () => {}, btnFolder);
      inpFolderName.focus();
    });
    const inpRenameTo = document.querySelector('.inp-rename-to');
    inpRenameTo.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.rename();
        return;
      }
      const validFileNamePattern = this.validFileNamePattern;
      const key = e.key;
      if (!validFileNamePattern.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
      }
    });
    const btnRename = document.querySelector('.btn-rename');
    btnRename.addEventListener('click', () => {
      const inpRenameTo = document.querySelector('.inp-rename-to');
      let itemName;
      if (this.isToggleOn && this.selectedItems.length > 0) {
        itemName = this.selectedItems[0];
      } else {
        itemName = this.singleSelectedItem;
      }
      inpRenameTo.value = itemName;
      this.showPop(popRename, () => {}, btnRename);
      inpRenameTo.focus();
    });
    const btnRenameTo = document.querySelector('.btn-rename-to');
    btnRenameTo.addEventListener('click', () => {
      this.rename();
    });
    const btnCreateFolder = document.querySelector('.btn-create-folder');
    btnCreateFolder.addEventListener('click', () => {
      if (this.demoMode) {
        alert(this.out('This function is disabled in this demo.'));
        return;
      }
      this.createFolder();
    });
    const btnCancel = panelFiles.querySelector('.btn-cancel');
    btnCancel.addEventListener('click', e => {
      this.onCancel(e);
      e.preventDefault();
    });
    const btnSelectFile = document.querySelector('.btn-select');
    btnSelectFile.addEventListener('click', e => {
      const inpUrl = document.querySelector('.inp-url');
      if (inpUrl.value === '') {
        alert(this.out('Please select a file'));
        return;
      }
      this.onSelect(inpUrl.value, e);
      e.preventDefault();
    });
    const btnGenerateImage = document.querySelector('.btn-generate');
    btnGenerateImage.addEventListener('click', e => {
      // NEW
      // if(this.isInProgress) {
      //     // Abort
      //     this.abort();

      //     return;
      // }
      const inpPrompt = document.querySelector('.inp-prompt');
      const inpNegPrompt = document.querySelector('.inp-neg-prompt');
      if (inpPrompt.value === '') {
        return;
      }
      this.generateImage(inpPrompt.value, inpNegPrompt.value);
      e.preventDefault();
    });
    const enableDisableControls = model => {
      const div1 = document.querySelector('.div-neg-prompt');
      const div2 = document.querySelector('.div-advance');
      const inpWidth = document.querySelector('.inp-width');
      const inpHeight = document.querySelector('.inp-height');
      const valWidth = document.querySelector('.val-width');
      const valHeight = document.querySelector('.val-height');
      if (model === 'flux-schnell') {
        div1.style.display = 'none';
        div2.style.display = 'none';
        inpWidth.setAttribute('max', 1280);
        inpHeight.setAttribute('max', 1280);
      } else {
        div1.style.display = '';
        div2.style.display = '';
        inpWidth.setAttribute('max', 1024);
        inpHeight.setAttribute('max', 1024);
        let valW = localStorage.getItem('_img_width');
        let valH = localStorage.getItem('_img_height');
        if (valW && parseInt(valW) > 1024) {
          inpWidth.value = 1024;
          valWidth.innerHTML = 1024;
          localStorage.setItem('_img_width', 1024);
        }
        if (valH && parseInt(valH) > 1024) {
          inpHeight.value = 1024;
          valHeight.innerHTML = 1024;
          localStorage.setItem('_img_height', 1024);
        }
      }
    };
    const inpModel = document.querySelector('.inp-model');
    if (localStorage.getItem('_img_model')) {
      inpModel.value = localStorage.getItem('_img_model');
    }
    inpModel.onchange = () => {
      let val = inpModel.value;
      localStorage.setItem('_img_model', val);
      enableDisableControls(val);
    };
    enableDisableControls(inpModel.value);
    const valWidth = document.querySelector('.val-width');
    const inpWidth = document.querySelector('.inp-width');
    if (localStorage.getItem('_img_width')) {
      let val = localStorage.getItem('_img_width');
      inpWidth.value = val;
      valWidth.innerHTML = val;
    }
    inpWidth.oninput = () => {
      let val = inpWidth.value;
      valWidth.innerHTML = val;
    };
    inpWidth.onchange = () => {
      let val = inpWidth.value;
      localStorage.setItem('_img_width', val);
    };
    const valHeight = document.querySelector('.val-height');
    const inpHeight = document.querySelector('.inp-height');
    if (localStorage.getItem('_img_height')) {
      let val = localStorage.getItem('_img_height');
      inpHeight.value = val;
      valHeight.innerHTML = val;
    }
    inpHeight.oninput = () => {
      let val = inpHeight.value;
      valHeight.innerHTML = val;
    };
    inpHeight.onchange = () => {
      let val = inpHeight.value;
      localStorage.setItem('_img_height', val);
    };
    const valSteps = document.querySelector('.val-steps');
    const inpSteps = document.querySelector('.inp-steps');
    if (localStorage.getItem('_img_steps')) {
      let val = localStorage.getItem('_img_steps');
      inpSteps.value = val;
      valSteps.innerHTML = val;
    }
    inpSteps.oninput = () => {
      let val = inpSteps.value;
      valSteps.innerHTML = val;
    };
    inpSteps.onchange = () => {
      let val = inpSteps.value;
      localStorage.setItem('_img_steps', val);
    };
    const valGuidance = document.querySelector('.val-guidance');
    const inpGuidance = document.querySelector('.inp-guidance');
    if (localStorage.getItem('_img_guidance')) {
      let val = localStorage.getItem('_img_guidance');
      inpGuidance.value = val;
      valGuidance.innerHTML = val;
    }
    inpGuidance.oninput = () => {
      let val = inpGuidance.value;
      valGuidance.innerHTML = val;
    };
    inpGuidance.onchange = () => {
      let val = inpGuidance.value;
      localStorage.setItem('_img_guidance', val);
    };
    const inpSampler = document.querySelector('.inp-sampler');
    if (localStorage.getItem('_img_sampler')) {
      inpSampler.value = localStorage.getItem('_img_sampler');
    }
    inpSampler.onchange = () => {
      let val = inpSampler.value;
      localStorage.setItem('_img_sampler', val);
    };
    const inpPrompt = document.querySelector('.inp-prompt');
    if (localStorage.getItem('_img_prompt')) {
      inpPrompt.value = localStorage.getItem('_img_prompt');
    }
    inpPrompt.onkeyup = () => {
      let val = inpPrompt.value;
      localStorage.setItem('_img_prompt', val);
    };
    const inpNegPrompt = document.querySelector('.inp-neg-prompt');
    if (localStorage.getItem('_img_neg_prompt')) {
      inpNegPrompt.value = localStorage.getItem('_img_neg_prompt');
    }
    inpNegPrompt.onkeyup = () => {
      let val = inpNegPrompt.value;
      localStorage.setItem('_img_neg_prompt', val);
    };
    const inpControlNet = document.querySelector('.inp-controlnet');
    if (localStorage.getItem('_img_controlnet')) {
      inpControlNet.value = localStorage.getItem('_img_controlnet');
    }
    inpControlNet.onchange = () => {
      let val = inpControlNet.value;
      localStorage.setItem('_img_controlnet', val);
    };
    if (localStorage.getItem('_img_imagecontrol')) {
      const divControl = document.querySelector('.div-img-control');
      divControl.style.display = 'block';
      const divPreview = document.querySelector('.div-img-control-preview');
      divPreview.innerHTML = `<img src="${localStorage.getItem('_img_imagecontrol')}" style="object-fit:contain" />`;
    }
    const btnClearControlImage = document.querySelector('.btn-clear-control-image');
    if (btnClearControlImage) btnClearControlImage.addEventListener('click', () => {
      const divControl = document.querySelector('.div-img-control');
      divControl.style.display = '';
      const divPreview = document.querySelector('.div-img-control-preview');
      divPreview.innerHTML = '';
      localStorage.setItem('_img_imagecontrol', '');
    });
    const savedPrompts = localStorage.getItem('_prompt_history');
    if (savedPrompts) {
      this.promptHistory = JSON.parse(savedPrompts);
    } else {
      this.promptHistory = [];
    }
    const btnHistory = document.querySelector('.link-history');
    btnHistory.addEventListener('click', () => {
      this.viewPrompts();
    });

    /*
    const resetStatus = ()=>{
        const info = modalEditText.querySelector('.save-info');
        info.style.transition = 'none';
        info.classList.remove('show');
        info.innerHTML = '';
    }
    const showStatus = (text)=>{
        const info = modalEditText.querySelector('.save-info');
        info.innerHTML = this.out('File saved successfully.');
        info.classList.add('show');
        info.style.transition = '';
        setTimeout(()=>{
            info.classList.remove('show');
            setTimeout(()=>{
                info.innerHTML = '';
            },400);
        },1000);
    }
    */

    const textArea = modalEditText.querySelector('textarea');
    textArea.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault(); // Prevent the default tab behavior (e.g., moving focus)

        // Get the current cursor position
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;

        // Insert a tab character (or spaces) at the cursor position
        // const tabCharacter = '  '; // You can use '\t' for a single tab character
        const tabCharacter = '\t'; // You can use '\t' for a single tab character
        const indentation = tabCharacter;

        // Modify the textarea's value
        textArea.value = textArea.value.substring(0, start) + indentation + textArea.value.substring(end);

        // Move the cursor to the end of the inserted indentation
        textArea.selectionStart = textArea.selectionEnd = start + indentation.length;
      }
    });
    const btnSaveFile = modalEditText.querySelector('.btn-save-file');
    btnSaveFile.addEventListener('click', async () => {
      const startTime = Date.now(); // Record the start time

      btnSaveFile.innerHTML = `
            <svg class="spinner" width="14px" height="14px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
            <span style="margin-left:10px">${this.out('Save')}</span>
            `;

      // resetStatus();

      const reqBody = {
        fileName: this.selectedItem.fileName,
        text: modalEditText.querySelector('textarea').value,
        folderPath: this.folderPath
      };
      let headers = {
        ...this.headers,
        ...this.defaultHeaders
      };
      const response = await fetch(this.settings.saveTextUrl, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers
      });
      const result = await response.json();
      const endTime = Date.now(); // Record the end time
      const elapsedTime = endTime - startTime;
      if (elapsedTime < 300) {
        // Add a delay if the saving process was too fast (to display the status/spinner)
        await new Promise(resolve => setTimeout(resolve, 350 - elapsedTime));
      }
      btnSaveFile.innerHTML = `
            ${this.out('Save')}
            `;
      if (result.error) {
        alert(this.out('Failed to save the file.'));
      } /*else {
          // const btnCancel = modalEditText.querySelector('.btn-cancel');
          // btnCancel.click();
           // showStatus();
        }*/
    });

    const btnUpload = document.querySelector('.btn-upload');
    const inpFiles = document.querySelector('.inp-files');
    btnUpload.addEventListener('click', () => {
      inpFiles.click();
    });
    inpFiles.addEventListener('change', e => {
      const selectedFiles = e.target.files;
      if (selectedFiles.length > 0) {
        this.uploadFiles(selectedFiles);
      }
    });
    fileListElement.addEventListener('click', e => {
      if (!this.isToggleOn) {
        if (document.querySelector('.is-pop.active')) {
          //focus back
          this.focusBack();
          return;
        }
        if (e.target.closest('li')) return;
        const selected = fileListElement.querySelector('.selected');
        if (selected) selected.classList.remove('selected');
        this.selectedFolder = null;
        this.singleSelectedItem = null;
        this.showHideButtons();
      }
    });
    const handleArrowNavigation = event => {
      const items = fileListElement.querySelectorAll('li');
      if (this.currentIndex === -1) {
        return;
      }
      const select = listItem => {
        if (listItem.getAttribute('data-url')) {
          if (!this.isToggleOn) {
            // single select
            this.selectedItem = {
              url: listItem.getAttribute('data-url'),
              fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
              fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
              modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
              created: listItem.querySelector('[data-created]').getAttribute('data-created')
            };
            this.selectFile(listItem);
          }
        } else {
          this.selectFolder(listItem);
        }
      };
      let listItem;
      const selected = items[this.currentIndex];
      if (selected.querySelector('input')) {
        // If in renaming mode
        return;
      }
      if (this.flexDirection === 'row') {
        switch (event.key) {
          case 'ArrowUp':
            if (this.currentIndex >= this.numCols) {
              listItem = items[this.currentIndex - this.numCols];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'ArrowDown':
            if (this.currentIndex < items.length - this.numCols) {
              listItem = items[this.currentIndex + this.numCols];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'ArrowLeft':
            if (this.currentIndex % this.numCols !== 0) {
              listItem = items[this.currentIndex - 1];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'ArrowRight':
            if ((this.currentIndex + 1) % this.numCols !== 0 && this.currentIndex < items.length - 1) {
              listItem = items[this.currentIndex + 1];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'Tab':
            if (event.shiftKey) {
              // SHIFT+TAB
              event.preventDefault();
              const prevIndex = this.currentIndex > 0 ? this.currentIndex - 1 : items.length - 1;
              listItem = items[prevIndex];
              select(listItem);
              listItem.focus();
            } else {
              // TAB
              event.preventDefault();
              const nextIndex = this.currentIndex < items.length - 1 ? this.currentIndex + 1 : 0;
              listItem = items[nextIndex];
              select(listItem);
              listItem.focus();
            }
            break;
          case ' ':
            if (this.singleSelectedItem) this.viewMedia(this.selectedItem.url);else {
              listItem = items[this.currentIndex];
              listItem.click();
            }
            break;
          case 'Enter':
            if (this.singleSelectedItem) this.viewMedia(this.selectedItem.url);else {
              listItem = items[this.currentIndex];
              listItem.click();
            }
            break;
        }
      } else {
        switch (event.key) {
          case 'ArrowLeft':
            if (this.currentIndex >= this.numRows) {
              listItem = items[this.currentIndex - this.numRows];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'ArrowRight':
            if (this.currentIndex < items.length - this.numRows) {
              listItem = items[this.currentIndex + this.numRows];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'ArrowUp':
            if (this.currentIndex % this.numRows !== 0) {
              listItem = items[this.currentIndex - 1];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'ArrowDown':
            if ((this.currentIndex + 1) % this.numRows !== 0 && this.currentIndex < items.length - 1) {
              listItem = items[this.currentIndex + 1];
              select(listItem);
              listItem.focus();
            }
            break;
          case 'Tab':
            if (event.shiftKey) {
              // SHIFT+TAB
              event.preventDefault();
              const prevIndex = this.currentIndex > 0 ? this.currentIndex - 1 : items.length - 1;
              listItem = items[prevIndex];
              select(listItem);
              listItem.focus();
            } else {
              // TAB
              event.preventDefault();
              const nextIndex = this.currentIndex < items.length - 1 ? this.currentIndex + 1 : 0;
              listItem = items[nextIndex];
              select(listItem);
              listItem.focus();
            }
            break;
          case ' ':
            if (this.singleSelectedItem) this.viewMedia(this.selectedItem.url);else {
              listItem = items[this.currentIndex];
              listItem.click();
            }
            break;
          case 'Enter':
            if (this.singleSelectedItem) this.viewMedia(this.selectedItem.url);else {
              listItem = items[this.currentIndex];
              listItem.click();
            }
            break;
        }
      }
      if (!listItem) return;
    };
    fileListElement.addEventListener('keydown', handleArrowNavigation);
    const tooltipElements = document.querySelectorAll('.tooltip');
    tooltipElements.forEach(elm => {
      if (elm.getAttribute('title')) {
        elm.setAttribute('data-title', elm.getAttribute('title'));
        elm.removeAttribute('title');
      }
    });
    this.initializeDropZone();
    if (this.settings.filePicker) {
      const panelFiles = document.querySelector('.panel-files');
      panelFiles.classList.add('picker');
    }
    this.isToggleOn = false;
    this.selectedItems = [];
    window.fileManager = this;
    if (frameElement && !parent._cb) {
      this.panelFullScreen = true;
    }
  } //constructor

  initialFileInfo() {
    const panelFileInfo = document.querySelector('.file-info');
    panelFileInfo.classList.add('active');
    panelFileInfo.setAttribute('aria-hidden', false);
    const div1 = panelFileInfo.querySelector('.file-info-details');
    const div2 = panelFileInfo.querySelector('.no-selection-info');
    div1.style.display = 'none';
    div2.style.display = '';
    div2.innerHTML = this.out('No selected file.');
  }
  showPanelInfo() {
    localStorage.setItem('_show_panelinfo', 'y');
    const panelFileInfo = document.querySelector('.file-info');
    panelFileInfo.classList.add('active');
    panelFileInfo.setAttribute('aria-hidden', false);
    this.renderFileInfo();
    const div1 = panelFileInfo.querySelector('.file-info-details');
    const div2 = panelFileInfo.querySelector('.no-selection-info');
    div1.style.display = '';
    div2.style.display = 'none';
    setTimeout(() => {
      this.prepareItemsNavigation();

      //focus back
      this.focusBack();
    }, 400);
  }
  focusBack() {
    //focus back
    const fileListElement = document.querySelector('.file-list');
    const selected = fileListElement.querySelector('.selected');
    if (selected) selected.focus();
  }
  hidePanelInfo() {
    localStorage.setItem('_show_panelinfo', 'n');
    const panelFileInfo = document.querySelector('.file-info');
    panelFileInfo.classList.remove('active');
    panelFileInfo.setAttribute('aria-hidden', true);
    setTimeout(() => {
      this.prepareItemsNavigation();

      //focus back
      this.focusBack();
    }, 400);
  }
  getScrollbarWidth() {
    // Create an element with a scrollbar
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);

    // Calculate the scrollbar width
    const scrollbarWidth = div.offsetWidth - div.clientWidth;

    // Remove the temporary element
    document.body.removeChild(div);
    return scrollbarWidth;
  }
  prepareItemsNavigation() {
    const fileListElement = document.querySelector('.file-list');
    const hasScrollbar = fileListElement.scrollHeight > fileListElement.clientHeight;
    let scrollbarWidth = 0;
    if (hasScrollbar) scrollbarWidth = this.getScrollbarWidth();
    if (this.flexDirection === 'row') {
      const pl = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-left').match(/\d+/)[0]);
      const pr = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-right').match(/\d+/)[0]);
      const containerWidth = fileListElement.offsetWidth - (pl + pr + scrollbarWidth);
      const items = fileListElement.querySelectorAll('li');
      if (items.length === 0) {
        this.currentIndex = -1;
        this.numCols = 0;
        return;
      }
      let itemWidth = items[0].offsetWidth;
      const mr = Number(window.getComputedStyle(items[0]).getPropertyValue('margin-right').match(/\d+/)[0]);
      itemWidth = itemWidth + mr;
      this.currentIndex = -1;
      this.numCols = Math.floor(containerWidth / itemWidth);
      items.forEach((item, index) => {
        item.tabIndex = 0;
        item.addEventListener('focus', () => {
          this.currentIndex = index;
        });
      });

      // console.log(this.numCols);
    } else {
      const pt = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-top').match(/\d+/)[0]);
      const pb = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-bottom').match(/\d+/)[0]);
      const containerHeight = fileListElement.clientHeight - (pt + pb);
      const items = fileListElement.querySelectorAll('li');
      if (items.length === 0) {
        this.currentIndex = -1;
        this.numCols = 0;
        return;
      }
      let itemHeight = items[0].offsetHeight;
      const mb = Number(window.getComputedStyle(items[0]).getPropertyValue('margin-bottom').match(/\d+/)[0]);
      itemHeight = itemHeight + mb;
      this.currentIndex = -1;
      this.numRows = Math.floor(containerHeight / itemHeight);
      items.forEach((item, index) => {
        item.tabIndex = 0;
        item.addEventListener('focus', () => {
          this.currentIndex = index;
        });
      });
    }
    fileListElement.focus();
  }
  calculateRowsCols() {
    const fileListElement = document.querySelector('.file-list');
    if (this.flexDirection === 'row') {
      const pl = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-left').match(/\d+/)[0]);
      const pr = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-right').match(/\d+/)[0]);
      const containerWidth = fileListElement.clientWidth - (pl + pr);
      const items = fileListElement.querySelectorAll('li');
      let itemWidth = items[0].offsetWidth;
      const mr = Number(window.getComputedStyle(items[0]).getPropertyValue('margin-right').match(/\d+/)[0]);
      itemWidth = itemWidth + mr;
      this.numCols = Math.floor(containerWidth / itemWidth);
    } else {
      const pt = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-top').match(/\d+/)[0]);
      const pb = Number(window.getComputedStyle(fileListElement).getPropertyValue('padding-bottom').match(/\d+/)[0]);
      const containerHeight = fileListElement.clientHeight - (pt + pb);
      const items = fileListElement.querySelectorAll('li');
      let itemHeight = items[0].offsetHeight;
      const mb = Number(window.getComputedStyle(items[0]).getPropertyValue('margin-bottom').match(/\d+/)[0]);
      itemHeight = itemHeight + mb;
      this.numRows = Math.floor(containerHeight / itemHeight);
    }
  }
  reset() {
    localStorage.removeItem('_img_model');
    localStorage.removeItem('_img_width');
    localStorage.removeItem('_img_height');
    localStorage.removeItem('_img_steps');
    localStorage.removeItem('_img_guidance');
    localStorage.removeItem('_img_sampler');
    localStorage.removeItem('_img_prompt');
    localStorage.removeItem('_img_neg_prompt');
    localStorage.removeItem('_img_controlnet');
    localStorage.removeItem('_img_imagecontrol');
    localStorage.removeItem('_prompt_history');
  }
  setUrl(url) {
    const inpUrl = document.querySelector('.inp-url'); // File Picker
    inpUrl.value = url;
    const fileListItems = document.querySelectorAll('.file-list li');
    fileListItems.forEach(item => {
      item.classList.remove('selected');
    });
  }
  startProcess() {
    const ovl = document.querySelector('.modal-overlay');
    if (ovl) ovl.style.display = 'flex';

    // NEW
    // const btnGenerate = document.querySelector('.btn-generate');
    // btnGenerate.innerHTML = `
    // <svg class="spinner" width="14px" height="14px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    //     <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    // </svg>
    // <span style="margin-left:5px">${this.out('Abort')}</span>
    // `;

    // this.isInProgress = true;
  }

  finishProcess() {
    const ovl = document.querySelector('.modal-overlay');
    if (ovl) ovl.style.display = '';

    // NEW
    // this.isInProgress = false;

    // const btnGenerate = document.querySelector('.btn-generate');
    // btnGenerate.innerText = this.out('Generate');
  }

  abort() {
    if (this.controller) this.controller.abort();
    this.finishProcess();
  }
  async getModels() {
    const inpModel = document.querySelector('.inp-model');

    /*
    let headers =  {
        ...this.headers,
        ...this.defaultHeaders
    };
    const response = await fetch(this.getMmodelsUrl, {
        method: 'GET',
        headers
    });
     const result = await response.json();
    
    result.models.forEach(item=>{
        const option = document.createElement('option');
        option.value = item.id;
        option.innerText = item.name;
        inpModel.appendChild(option);
    });
     console.log(result); // 31 models
     if(result.error) {
        console.log('Error:\n'+result.error);
        return;
    }
     const select = document.querySelector('.inp-model');
    const options = select.getElementsByTagName('option');
     // Convert the HTMLCollection to an array for easier manipulation
    const optionsArray = Array.prototype.slice.call(options);
     // Sort the options alphabetically
    optionsArray.sort(function(a, b) {
        const textA = a.text.toUpperCase();
        const textB = b.text.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
     select.innerHTML = '';
    for (let i = 0; i < optionsArray.length; i++) {
        select.appendChild(optionsArray[i]);
    }
    */

    const options = inpModel.querySelectorAll('option');
    options.forEach(option => {
      if (!option.hasAttribute('disabled')) {
        option.innerHTML = `&nbsp;&nbsp;${option.innerHTML}`;
      }
    });
    if (localStorage.getItem('_img_model')) {
      inpModel.value = localStorage.getItem('_img_model');
    } else {
      inpModel.value = 'realistic-vision-v3';
    }
  }
  reversePanel() {
    const panel = document.querySelector('.panel');
    if (!panel.classList.contains('reverse')) {
      panel.classList.add('reverse');
      const subpanel1 = panel.querySelector('.panel-side');
      const subpanel2 = panel.querySelector('.panel-files');
      panel.insertBefore(subpanel2, subpanel1);
    } else {
      panel.classList.remove('reverse');
      const subpanel1 = panel.querySelector('.panel-files');
      const subpanel2 = panel.querySelector('.panel-side');
      panel.insertBefore(subpanel2, subpanel1);
    }
  }
  panelFilesOnly() {
    const panel = document.querySelector('.panel');
    if (!panel.classList.contains('filesonly')) {
      panel.classList.add('filesonly');
    } else {
      panel.classList.remove('filesonly');
    }
  }
  panelShowTree() {
    const panel = document.querySelector('.panel');
    if (!panel.classList.contains('tree')) {
      panel.classList.add('tree');
    } else {
      panel.classList.remove('tree');
    }
  }
  hidePanel(panel) {
    panel.classList.remove('active');
    panel.setAttribute('aria-hidden', true);
    panel.removeEventListener('keydown', this.handlePanelKeyDown);
    document.removeEventListener('click', this.handlePanelClickOut);

    //focus back
    this.focusBack();
  }
  showPop(pop, cancelCallback, btn) {
    if (pop.classList.contains('active')) return;
    // Hide other pops
    let elms = document.querySelectorAll('.is-pop.active');
    Array.prototype.forEach.call(elms, elm => {
      if (elm !== pop) {
        this.hidePop(elm);
      }
    });
    pop.classList.add('active');
    pop.setAttribute('aria-hidden', false);
    btn.classList.add('active');
    let top = btn.getBoundingClientRect().top + window.scrollY;
    let left = btn.getBoundingClientRect().left + window.scrollX;
    pop.style.top = 9 + top + btn.offsetHeight + 'px';
    pop.style.left = left - (pop.offsetWidth - btn.offsetWidth) + 'px';
    pop.tabIndex = 0;
    pop.focus({
      preventScroll: true
    });
    this.handlePopClickOut = e => {
      if (!pop.contains(e.target) && !btn.contains(e.target)) {
        // click outside
        // hide
        this.hidePop(pop);
        if (cancelCallback) cancelCallback();
      }
    };
    this.handlePopKeyDown = e => {
      if (e.keyCode === 27) {
        // escape key
        // hide
        this.hidePop(pop);
        if (cancelCallback) cancelCallback();
      }
    };
    pop.addEventListener('keydown', this.handlePopKeyDown);
    document.addEventListener('click', this.handlePopClickOut);
  }
  hidePop(pop) {
    pop.classList.remove('active');
    pop.setAttribute('aria-hidden', true);
    pop.removeEventListener('keydown', this.handlePopKeyDown);
    document.removeEventListener('click', this.handlePopClickOut);

    //focus back
    this.focusBack();
  }
  async getFolders(data) {
    let folderStructure;
    if (data) {
      folderStructure = data;
    } else {
      let headers = {
        ...this.headers,
        ...this.defaultHeaders
      };
      const response = await fetch(this.listFoldersUrl, {
        method: 'GET',
        headers
      });
      const result = await response.json();
      folderStructure = result.folders;
    }

    // Tree view for move
    const divFolders = document.querySelector('.div-folders');
    divFolders.innerHTML = '';
    let root = document.createElement('ul');
    divFolders.appendChild(root);
    let li = document.createElement('li');
    li.innerHTML = `<button><svg><use xlink:href="#icon-folder"></use></svg> <span>${this.out('Home')}</span></button>`;
    root.appendChild(li);
    let btn = li.querySelector('button');
    btn.addEventListener('click', () => {
      this.moveSelected(''); // Note: means root (left the prefix)
    });

    this.createTreeView_Move(folderStructure, li);

    // Tree view main
    const divTree = document.querySelector('.div-tree');
    divTree.innerHTML = '';
    root = document.createElement('ul');
    divTree.appendChild(root);
    li = document.createElement('li');
    li.innerHTML = `<button data-path=""${this.folderPath === '' ? ' class="active"' : ''}><svg><use xlink:href="#icon-folder"></use></svg> <span>${this.out('Home')}</span></button>`;
    root.appendChild(li);
    btn = li.querySelector('button');
    btn.addEventListener('click', () => {
      this.fetchFolderContents('');
    });
    this.createTreeView_Main(folderStructure, li, true);
  }
  createTreeView_Move(data, parentElement) {
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<button><svg><use xlink:href="#icon-folder"></use></svg> <span>${item.name}</span></button>`;
      ul.appendChild(li);
      if (item.subfolders.length > 0) {
        this.createTreeView_Move(item.subfolders, li);
      }
      const btn = li.querySelector('button');
      btn.addEventListener('click', () => {
        this.moveSelected(item.path); // This includes prefix
      });
    });
  }

  createTreeView_Main(data, parentElement, isRoot) {
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);
    data.forEach(item => {
      if (isRoot) {
        // Get prefix
        if (item.path.includes('/')) {
          this.prefix = item.path.split('/')[0];
        }
      }
      const li = document.createElement('li');
      let selected = false;
      if (this.prefix) {
        if (item.path === this.prefix + '/' + this.folderPath) selected = true;
      } else {
        if (item.path === this.folderPath) selected = true;
      }
      li.innerHTML = `<button data-path="${item.path}"${selected ? ' class="active"' : ''}><svg><use xlink:href="#icon-folder"></use></svg> <span>${item.name}</span></button>`;
      ul.appendChild(li);
      if (item.subfolders.length > 0) {
        this.createTreeView_Main(item.subfolders, li);
      }
      const btn = li.querySelector('button');
      btn.addEventListener('click', () => {
        let newPath = this.prefix ? item.path.substring(this.prefix.length + 1) : item.path; // Exclude prefix
        this.fetchFolderContents(newPath); // This doesn't include prefix
      });
    });
  }

  renderHistory() {
    /*
    const uniqueArray = this.promptHistory.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    this.promptHistory = uniqueArray;
    localStorage.setItem('_prompt_history', JSON.stringify(this.promptHistory));
    */

    let modalPrompts = document.querySelector('.modal-prompts');
    if (frameElement && !this.panelFullScreen) {
      modalPrompts = parent.document.querySelector('.modal-prompts');
    }
    const modalContent = modalPrompts.querySelector('.modal-content');
    const divList = modalPrompts.querySelector('.prompt-list');
    let html = '';
    let index = 0;
    this.promptHistory.forEach(item => {
      html = `<div class="item-prompt" tabIndex="0" role="button">
                <button class="item-prompt-remove" data-index="${index}">
                    <svg><use xlink:href="#icon-trash"></use></svg>
                </button>
                <span>${item}</span>
            </div>` + html;
      index++;
    });
    divList.innerHTML = html;
    const btns = modalContent.querySelectorAll('.item-prompt-remove');
    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        const index = btn.getAttribute('data-index');
        this.promptHistory.splice(index, 1);
        localStorage.setItem('_prompt_history', JSON.stringify(this.promptHistory));
        this.renderHistory();
        e.preventDefault();
        e.stopImmediatePropagation();
      });
    });
    const btnHistory = document.querySelector('.link-history');
    const close = () => {
      modalPrompts.classList.remove('flex');
      document.removeEventListener('keydown', this.handleKeyDown);
      modalPrompts.removeEventListener('click', this.closeView);
      if (frameElement) {
        parent.document.removeEventListener('keydown', this.handleKeyDown);
        let modal = parent.document.querySelector('.modal-prompts');
        if (modal) modal.parentNode.removeChild(modal);
        btnHistory.focus();
        btnHistory.blur();
      }
    };
    const items = modalContent.querySelectorAll('.item-prompt');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const prompt = item.querySelector('span').innerText;
        const inpPrompt = document.querySelector('#inpPrompt');
        inpPrompt.value = prompt;
        localStorage.setItem('_img_prompt', prompt);
        close();
      });
    });
  }
  viewPrompts() {
    let modalPrompts = document.querySelector('.modal-prompts');
    if (frameElement && !this.panelFullScreen) {
      let html = `
            <div class="is-modal modal-prompts">
            <style>
                .modal-prompts {
                    display: none;
                    background: transparent;
                    z-index: 10006;
                    top:0;left:0;
                    position:fixed;
                    width:100vw;
                    height:100vh;
                    justify-content: center;
                    align-items: center;
                }
                .modal-prompts.flex {
                    display: flex;
                }
                .prompt-list {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    flex-flow: row wrap;
                    padding: 30px;
                    box-sizing: border-box;
                    overflow: auto;
                }
                .item-prompt {
                    margin-right: 30px;
                    margin-bottom: 30px;
                    position: relative;
                    display: flex;
                    flex: none;
                    width: 350px;
                    height: auto;
                    flex-direction: column;
                    justify-content: space-between;
                    border-radius: 0.25rem;
                    border: 1px solid rgb(156 163 175/.75);
                    padding: 1.5rem 2rem;
                    box-sizing: border-box;
                    letter-spacing: .025em;
                    box-shadow: 5px 5px 0px rgb(0 0 0 / 3%);
                    font-size: 17px;
                    font-weight: 300;
                    font-family: sans-serif;
                    line-height: 1.3;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    outline: transparent 2px solid;
                    outline-offset: 2px;
                
                }
                .dark .item-prompt {
                    border: 1px solid rgb(156 163 175/.4);
                }
                .item-prompt:focus-visible {
                    outline: #3e93f7 2px solid;
                    outline-offset: 2px;
                }
                .item-prompt:hover {
                    background: rgba(0, 0, 0, 0.03);
                }
                .item-prompt-remove {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width:40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: transparent !important;
                    cursor: pointer;
                }
                .item-prompt-remove svg { 
                    width: 19px; 
                    height: 19px; 
                    ${parent._cb ? `
                    color: ${parent._cb.styleModalColor};    
                    fill: ${parent._cb.styleModalColor};  
                    ` : ''}  
                }

                .btn-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 40px;
                    height: 40px;
                    background: transparent;
                    cursor: pointer;
                    color: ${parent._cb.styleButtonClassicColor};
                }
                .btn-close svg {
                    width:30px;
                    height:30px;
                    flex:none;
                }

                .dark .modal-prompts * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.3) auto;
                }
                .dark .modal-prompts *::-webkit-scrollbar {
                    width: 12px;
                }
                .dark .modal-prompts *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .dark .modal-prompts *::-webkit-scrollbar-thumb {
                    background-color:rgba(255, 255, 255, 0.3);
                } 

                .colored-dark .modal-prompts * {
                    scrollbar-width: thin;
                    scrollbar-color: rgb(100, 100, 100) auto;
                }
                .colored-dark .modal-prompts *::-webkit-scrollbar {
                    width: 12px;
                }
                .colored-dark .modal-prompts *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .colored-dark .modal-prompts *::-webkit-scrollbar-thumb {
                    background-color:rgb(100, 100, 100);
                } 
        
                .colored .modal-prompts * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(0, 0, 0, 0.4) auto;
                }
                .colored .modal-prompts *::-webkit-scrollbar {
                    width: 12px;
                }
                .colored .modal-prompts *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .colored .modal-prompts *::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.4);
                } 
        
                .light .modal-prompts * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(0, 0, 0, 0.4) auto;
                }
                .light .modal-prompts *::-webkit-scrollbar {
                    width: 12px;
                }
                .light .modal-prompts *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .light .modal-prompts *::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.4);
                } 
            </style>
            <svg width="0" height="0" style="position:absolute;display:none;">
                <defs>
                    <symbol id="icon-close" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </symbol>
                    <symbol id="icon-trash" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 7l16 0"></path>
                        <path d="M10 11l0 6"></path>
                        <path d="M14 11l0 6"></path>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    </symbol>
                </defs>
            </svg>
            <div class="is-modal-content modal-content" style="
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-flow: row wrap;
                padding: 0;
                width: 70%;
                height: 70%;
                box-shadow: 0px 10px 30px 0px rgba(95, 95, 95, 0.19);
                border-radius: 5px;
                ${parent._cb ? `
                background: ${parent._cb.styleModalBackground};
                color: ${parent._cb.styleModalColor};
                ` : `
                background: rgb(255 255 255 / 100%);
                `}
                position: relative;">

                <button class="btn-close">
                    <svg><use xlink:href="#icon-close"></use></svg>
                </button>

                <div class="prompt-list">
                  
                </div>
            </div>
            </div>
            `;
      let currentModal = parent.document.querySelector('.modal-prompts');
      if (currentModal) currentModal.parentNode.removeChild(currentModal);
      parent.document.body.insertAdjacentHTML('beforeend', html);
      modalPrompts = parent.document.querySelector('.modal-prompts');
    }
    const btnHistory = document.querySelector('.link-history');
    const btnClose = modalPrompts.querySelector('.btn-close');
    const close = () => {
      modalPrompts.classList.remove('flex');
      document.removeEventListener('keydown', this.handleKeyDown);
      modalPrompts.removeEventListener('click', this.closeView);
      if (frameElement) {
        parent.document.removeEventListener('keydown', this.handleKeyDown);
        let modal = parent.document.querySelector('.modal-prompts');
        if (modal) modal.parentNode.removeChild(modal);
        btnHistory.focus();
        btnHistory.blur();
      }
    };
    this.closeView = e => {
      let elm = e.target;
      if (elm && elm.classList.contains('modal-prompts')) {
        close();
      }
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    if (btnClose) btnClose.addEventListener('click', () => {
      close();
    });
    this.renderHistory();
    modalPrompts.classList.add('flex');
    this.handleKeyDown = e => {
      let elm = e.target;
      if (elm) elm.blur();
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', this.handleKeyDown);
    if (frameElement) parent.document.addEventListener('keydown', this.handleKeyDown);
    modalPrompts.addEventListener('click', this.closeView);
  }

  // Experimental
  async getContent(url) {
    const timestamp = Date.now();
    const response = await fetch(url + `?t=${timestamp}`);
    const html = await response.text();
    this.workingPageHtml = html;
    this.workingFileName = this.selectedItem.fileName;

    // Extract content & styles from the html page
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // content (get the content from div.is-wrapper)
    const wrapper = doc.querySelector('.is-wrapper');
    if (!wrapper) return false;
    const content = wrapper.innerHTML;
    const links = doc.querySelectorAll('link');
    let mainCss = '',
      sectionCss = '';
    links.forEach(link => {
      // mainCss (main css has prefix 'basetype-')
      if (link.href.includes('basetype-')) {
        mainCss += link.outerHTML;
      }
      // sectionCss (all section css have 'data-name' attribute)
      if (link.hasAttribute('data-name')) {
        sectionCss += link.outerHTML;
      }
    });
    return {
      html,
      content,
      mainCss,
      sectionCss
    };
  }
  async viewBuilder() {
    let modalEditHtml = document.querySelector('.modal-htmledit');
    const modalContent = modalEditHtml.querySelector('.modal-content');
    modalContent.innerHTML = `<iframe src="${this.builder}" style="width:100vw;height:100vh">
        </iframe>`;
    modalContent.style.maxWidth = '100%';
    modalEditHtml.classList.add('flex');
  }
  async viewText(url) {
    let modalEditText = document.querySelector('.modal-textedit');
    if (frameElement && !this.panelFullScreen) {
      // if not fullscreen & in iframe, goes here. If fullscreen, use standard modal.
      let html = `
            <div class="is-modal modal-textedit">
                <style>
                    .modal-textedit  {
                        background: rgb(0 0 0 / 3%);
                        display:none;
                        background: transparent;
                        z-index: 10006;
                        top:0;left:0;
                        position:fixed;
                        width:100vw;
                        height:100vh;
                        justify-content: center;
                        align-items: center;
                    }
                    .modal-textedit.flex {
                        display: flex;
                    }
                    .modal-textedit .modal-content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: row wrap;
                        width: 100%;
                        height: auto;
                        max-width:1200px;
                        box-shadow: 0px 10px 30px 0px rgba(95, 95, 95, 0.19);
                        border-radius: 5px;
                        background: rgb(255 255 255 / 100%);
                        position: relative;
                    }
                    .modal-textedit .modal-content textarea {
                        width: 100%;
                        height: 60vh;
                        outline: none;
                        border: none;
                        padding: 30px 30px;
                        font-family: monospace;
                        font-size: 15px;
                        background: transparent;
                        color: ${parent._cb.styleInputColor};
                    }
                    .modal-textedit .modal-content button {
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                        justify-content: center;
                        white-space: nowrap;
                        border-radius: 0.25rem;
                        padding: 0.75rem;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                        font-family: sans-serif; 
                        font-weight: 300;
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                        letter-spacing: 0.025em;
                        text-decoration-line: none;   
                        cursor: pointer;
                        background: ${parent._cb.styleButtonClassicBackground};
                        color: ${parent._cb.styleButtonClassicColor};
                    }
                    .modal-textedit .modal-content button.btn-cancel {
                        background: transparent;
                        color: ${parent._cb.styleButtonClassicColor};
                    }
                    .modal-textedit .modal-content button.btn-save-file {
                        min-width: 150px;
                        border-radius: 0;
                    }
                    .modal-textedit .modal-content button.btn-save-file svg {
                        ${parent._cb ? `
                        color: ${parent._cb.styleModalColor};    
                        fill: ${parent._cb.styleModalColor};  
                        ` : ''}  
                    }

                    .spinner {
                        -webkit-animation: rotator 1.4s linear infinite;
                                animation: rotator 1.4s linear infinite;
                    }
                    @-webkit-keyframes rotator {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(270deg);
                        }
                    }
                    @keyframes rotator {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(270deg);
                        }
                    }
                    .path {
                        stroke: ${parent._cb.styleModalColor}; 
                        stroke-dasharray: 187;
                        stroke-dashoffset: 0;
                        transform-origin: center;
                        -webkit-animation: dash 1.4s ease-in-out infinite;
                                animation: dash 1.4s ease-in-out infinite;
                    }
                    @-webkit-keyframes dash {
                        0% {
                            stroke-dashoffset: 187;
                        }
                        50% {
                            stroke-dashoffset: 46.75;
                            transform: rotate(135deg);
                        }
                        100% {
                            stroke-dashoffset: 187;
                            transform: rotate(450deg);
                        }
                    }
                    @keyframes dash {
                        0% {
                            stroke-dashoffset: 187;
                        }
                        50% {
                            stroke-dashoffset: 46.75;
                            transform: rotate(135deg);
                        }
                        100% {
                            stroke-dashoffset: 187;
                            transform: rotate(450deg);
                        }
                    }


                    .dark .modal-textedit * {
                        scrollbar-width: thin;
                        scrollbar-color: rgba(255, 255, 255, 0.3) auto;
                    }
                    .dark .modal-textedit *::-webkit-scrollbar {
                        width: 12px;
                    }
                    .dark .modal-textedit *::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .dark .modal-textedit *::-webkit-scrollbar-thumb {
                        background-color:rgba(255, 255, 255, 0.3);
                    } 

                    .colored-dark .modal-textedit * {
                        scrollbar-width: thin;
                        scrollbar-color: rgb(100, 100, 100) auto;
                    }
                    .colored-dark .modal-textedit *::-webkit-scrollbar {
                        width: 12px;
                    }
                    .colored-dark .modal-textedit *::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .colored-dark .modal-textedit *::-webkit-scrollbar-thumb {
                        background-color:rgb(100, 100, 100);
                    } 
            
                    .colored .modal-textedit * {
                        scrollbar-width: thin;
                        scrollbar-color: rgba(0, 0, 0, 0.4) auto;
                    }
                    .colored .modal-textedit *::-webkit-scrollbar {
                        width: 12px;
                    }
                    .colored .modal-textedit *::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .colored .modal-textedit *::-webkit-scrollbar-thumb {
                        background-color: rgba(0, 0, 0, 0.4);
                    } 
            
                    .light .modal-textedit * {
                        scrollbar-width: thin;
                        scrollbar-color: rgba(0, 0, 0, 0.4) auto;
                    }
                    .light .modal-textedit *::-webkit-scrollbar {
                        width: 12px;
                    }
                    .light .modal-textedit *::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .light .modal-textedit *::-webkit-scrollbar-thumb {
                        background-color: rgba(0, 0, 0, 0.4);
                    } 
                </style>
                <div class="is-modal-content modal-content" style="
                    display: flex;
                    justify-content: center;
                    justify-content: center;
                    flex-flow: row wrap;
                    width: 100%;
                    height: auto;
                    max-width:1200px;
                    box-shadow: 0px 10px 30px 0px rgba(95, 95, 95, 0.19);
                    border-radius: 5px;
                    ${parent._cb ? `
                    background: ${parent._cb.styleModalBackground};
                    color: ${parent._cb.styleModalColor};
                    ` : `
                    background: rgb(255 255 255 / 100%);
                    `}
                    position: relative;">

                    <textarea class="inp-textedit"></textarea>
        
                    <div class="flex justify-end w-full">
                        <div class="save-info flex items-center"></div>
                        <div class="flex">
                            <button class="btn-cancel mr-4" title="${this.out('Cancel')}">${this.out('Cancel')}</button>
                            <button class="btn-save-file" title="${this.out('Save')}">${this.out('Save')}</button>
                        </div>
                    </div>
        
                </div>
            </div>
            `;
      let currentModal = parent.document.querySelector('.modal-textedit');
      if (currentModal) currentModal.parentNode.removeChild(currentModal);
      parent.document.body.insertAdjacentHTML('beforeend', html);
      modalEditText = parent.document.querySelector('.modal-textedit');
    }
    const modalContent = modalEditText.querySelector('.modal-content');
    const textArea = modalContent.querySelector('textarea');
    const btnCancel = modalContent.querySelector('.btn-cancel');
    const btnSaveFile = modalContent.querySelector('.btn-save-file');
    if (frameElement && !this.panelFullScreen) {
      textArea.addEventListener('keydown', e => {
        if (e.key === 'Tab') {
          e.preventDefault(); // Prevent the default tab behavior (e.g., moving focus)

          // Get the current cursor position
          const start = textArea.selectionStart;
          const end = textArea.selectionEnd;

          // Insert a tab character (or spaces) at the cursor position
          // const tabCharacter = '  '; // You can use '\t' for a single tab character
          const tabCharacter = '\t'; // You can use '\t' for a single tab character
          const indentation = tabCharacter;

          // Modify the textarea's value
          textArea.value = textArea.value.substring(0, start) + indentation + textArea.value.substring(end);

          // Move the cursor to the end of the inserted indentation
          textArea.selectionStart = textArea.selectionEnd = start + indentation.length;
        }
      });
      btnSaveFile.addEventListener('click', async () => {
        const startTime = Date.now(); // Record the start time

        btnSaveFile.innerHTML = `
                <svg class="spinner" width="14px" height="14px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
                <span style="margin-left:10px">${this.out('Save')}</span>
                `;

        // resetStatus();

        const reqBody = {
          fileName: this.selectedItem.fileName,
          text: modalEditText.querySelector('textarea').value,
          folderPath: this.folderPath
        };
        let headers = {
          ...this.headers,
          ...this.defaultHeaders
        };
        const response = await fetch(this.settings.saveTextUrl, {
          method: 'POST',
          body: JSON.stringify(reqBody),
          headers
        });
        const result = await response.json();
        const endTime = Date.now(); // Record the end time
        const elapsedTime = endTime - startTime;
        if (elapsedTime < 300) {
          // Add a delay if the saving process was too fast (to display the status/spinner)
          await new Promise(resolve => setTimeout(resolve, 350 - elapsedTime));
        }
        btnSaveFile.innerHTML = `
                ${this.out('Save')}
                `;
        if (result.error) {
          alert(this.out('Failed to save the file.'));
        } /*else {
            // const btnCancel = modalEditText.querySelector('.btn-cancel');
            // btnCancel.click();
             // showStatus();
          }*/
      });
    }

    const timestamp = Date.now();
    if (url.includes('http')) {
      /*
      Can be from:
      External site, 
      ex:
          http://bucket-name.s3-website-us-east-1.amazonaws.com/readme.txt
      */
      url = this.viewFileUrl + '?url=' + url;
    } else {
      /*
      Can be from:
      Local viewer for private bucket, 
      ex: 
          api/view-s3.php?url=index.html
      */
      //Check if ? found
      if (url.includes('?')) ; else {
        // Normal
        url = url + `?t=${timestamp}`;
      }
    }
    const response = await fetch(url);
    const result = await response.text();
    textArea.value = result;
    const close = () => {
      modalEditText.classList.remove('flex');
      document.removeEventListener('keydown', this.handleKeyDown);
    };
    if (btnCancel) btnCancel.addEventListener('click', () => {
      close();
    });
    modalEditText.classList.add('flex');
    this.handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', this.handleKeyDown);
    if (frameElement) parent.document.addEventListener('keydown', this.handleKeyDown);
  }
  viewMedia(url) {
    const ext = url.split('.').pop().toLowerCase();
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff' || ext === 'mp4' || ext === 'mov' || ext === 'mp3' || ext === 'pdf' || ext === 'txt' || ext === 'css' || ext === 'js' || ext === 'html' || ext === 'md' || ext === 'svg' || ext === 'json') ; else {
      return;
    }
    let modalView = document.querySelector('.modal-view');
    if (frameElement && !this.panelFullScreen) {
      let html = `
            <div class="is-modal modal-view">
                <style>
                    .modal-view  {
                        display:none;
                        background: transparent;
                        z-index: 10006;
                        top:0;left:0;
                        position:fixed;
                        width:100vw;
                        height:100vh;
                        justify-content: center;
                        align-items: center;
                    }
                    .modal-view.flex {
                        display: flex;
                    }
                    .modal-view .modal-content {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .modal-view .modal-content img {
                        max-width: 70%;
                        max-height: 70%;
                        -o-object-fit: contain;
                        object-fit: contain;
                        box-shadow: 0px 15px 30px 0px rgba(95, 95, 95, 0.39);
                        background: #fff;
                        border-radius: 5px;
                    }
                    .modal-view .modal-content video {
                        max-width: 70%;
                        max-height: 70%;
                        background: #000;
                        box-shadow: 0px 15px 30px 0px rgb(95 95 95 / 39%);
                        border-radius: 5px;
                    }
                    .modal-view .modal-content audio {
                        max-width: 70%;
                        max-height: 70%;
                    }
                    .modal-view .modal-content iframe {
                        max-width: 80%;
                        max-height: 80%;
                        box-shadow: 0px 15px 30px 0px rgb(95 95 95 / 39%);
                        background: #fff;
                        border-radius: 5px;
                    }
                }
                </style>
                <div class="modal-content">
        
                </div>
            </div>
            `;
      let currentModal = parent.document.querySelector('.modal-view');
      if (currentModal) currentModal.parentNode.removeChild(currentModal);
      parent.document.body.insertAdjacentHTML('beforeend', html);
      modalView = parent.document.querySelector('.modal-view');
    }
    const modalContent = modalView.querySelector('.modal-content');
    modalView.classList.add('flex');
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff') {
      modalContent.innerHTML = `<img src="${url}"/>`;
    } else if (ext === 'mp4' || ext === 'mov') {
      modalContent.innerHTML = `<video playsinline controls autoplay width="100%">
                <source src="${url}" type="video/mp4">
            </video>`;
    } else if (ext === 'mp3') {
      modalContent.innerHTML = `<audio controls autoplay>
                <source src="${url}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>`;
    } else if (ext === 'txt' || ext === 'css' || ext === 'js' || ext === 'html' || ext === 'md' || ext === 'svg' || ext === 'json' || ext === 'pdf') {
      const timestamp = Date.now();

      // Adding timestamp to always get the latest
      if (url.includes('http')) {
        /*
        Can be from:
        External site, 
        ex:
            http://bucket-name.s3-website-us-east-1.amazonaws.com/readme.txt
        */
        url = url + `?t=${timestamp}`;
      } else {
        /*
        Can be from:
        Local viewer for private bucket, 
        ex: 
            api/view-s3.php?url=index.html
        */
        //Check if ? found
        if (url.includes('?')) ; else {
          // Normal
          url = url + `?t=${timestamp}`;
        }
      }
      modalContent.innerHTML = `<iframe src="${url}" style="width:70vw;height:70vh">
            </iframe>`;
    }
    const close = () => {
      modalView.classList.remove('flex');
      document.removeEventListener('keydown', this.handleKeyDown);
      modalView.removeEventListener('click', closeView);
      if (frameElement) {
        let modal = parent.document.querySelector('.modal-view');
        if (modal) modal.parentNode.removeChild(modal);
      }
      const modalContent = modalView.querySelector('.modal-content');
      modalContent.innerHTML = '';

      //focus back
      this.focusBack();
    };
    const closeView = e => {
      if (ext === 'mp4' || ext === 'mov' || ext === 'mp3') {
        let elm = e.target;
        if (elm && !(elm.tagName.toLowerCase() === 'video' || elm.tagName.toLowerCase() === 'audio')) {
          close();
        }
      } else {
        close();
      }
    };
    this.handleKeyDown = e => {
      let elm = e.target;
      if (elm) elm.blur();
      if (e.key === 'Escape') {
        close();
      }
    };
    const btnClose = modalView.querySelector('.btn-close');
    if (btnClose) btnClose.addEventListener('click', () => {
      close();
    });
    document.addEventListener('keydown', this.handleKeyDown);
    modalView.addEventListener('click', closeView);
  }
  async upscaleImage(src, w, h) {
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    this.startProcess();
    if (src.includes('http')) {
      /*
      Can be from:
      External site, 
      ex:
          http://bucket-name.s3-website-us-east-1.amazonaws.com/readme.txt
      */
      src = this.viewFileUrl + '?url=' + src;
    } else {
      /*
      Can be from:
      Local viewer for private bucket, 
      ex: 
          api/view-s3.php?url=index.html
      */
      //Check if ? found
      if (src.includes('?')) ;
    }
    const newWidth = w;
    const newHeight = h;
    const img = new Image();
    img.src = src;
    img.onload = async () => {
      var canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      var resizedBase64 = canvas.toDataURL('image/jpeg');
      let image = resizedBase64;
      image = image.replace(/^data:image\/(png|jpeg);base64,/, '');
      const messages = {
        image: image,
        folder_path: this.folderPath
      };
      let headers = {
        ...this.headers,
        ...this.defaultHeaders
      };
      // const response = 
      await fetch(this.upscaleImageUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(messages)
      });
      // const result = await response.text();
      // console.log(result);

      this.fetchFolderContents(this.folderPath);
      this.finishProcess();
    };
  }
  async getBase64() {
    const divPreview = document.querySelector('.div-img-control-preview');
    const img = divPreview.querySelector('img');
    if (!img) return false;
    const toDataURL = (src, outputFormat) => {
      return new Promise(resolve => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
          let canvas = document.createElement('CANVAS');
          let ctx = canvas.getContext('2d');
          let dataURL;
          canvas.height = this.naturalHeight;
          canvas.width = this.naturalWidth;
          ctx.drawImage(this, 0, 0);
          dataURL = canvas.toDataURL(outputFormat);
          resolve(dataURL);
        };
        img.src = src;
      });
    };
    let imageUrl = img.getAttribute('src');
    if (imageUrl.includes('http')) {
      /*
      Can be from:
      External site, 
      ex:
          http://bucket-name.s3-website-us-east-1.amazonaws.com/readme.txt
      */
      imageUrl = this.viewFileUrl + '?url=' + imageUrl;
    } else {
      /*
      Can be from:
      Local viewer for private bucket, 
      ex: 
          api/view-s3.php?url=index.html
      */
      //Check if ? found
      if (imageUrl.includes('?')) ;
    }
    try {
      let dataUrl = await toDataURL(imageUrl, 'image/jpeg');
      dataUrl = dataUrl.replace(/^data:image\/(png|jpeg);base64,/, '');
      return dataUrl;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }
  async generateImage(prompt, negative_prompt) {
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    if (!this.textToImageUrl) return;

    // if(!this.promptHistory.includes(prompt)) {
    //     this.promptHistory.push(prompt);
    //     localStorage.setItem('_prompt_history', JSON.stringify(this.promptHistory));
    // }
    let same = false;
    this.promptHistory.forEach(item => {
      item = item.replace(/\n/g, ' ');
      item = item.replace(/\s\s/g, ' ');
      item = item.toLowerCase();
      prompt = prompt.replace(/\n/g, ' ');
      prompt = prompt.replace(/\s\s/g, ' ');
      prompt = prompt.toLowerCase();
      if (item === prompt) {
        same = true;
      }
    });
    if (!same) {
      this.promptHistory.push(prompt);
      localStorage.setItem('_prompt_history', JSON.stringify(this.promptHistory));
    }
    this.controller = new AbortController(); // Create a new AbortController
    this.signal = this.controller.signal; // Get a new signal object

    this.startProcess();
    const inpWidth = document.querySelector('.inp-width');
    const inpHeight = document.querySelector('.inp-height');
    const inpModel = document.querySelector('.inp-model');
    const inpSteps = document.querySelector('.inp-steps');
    const inpGuidance = document.querySelector('.inp-guidance');
    const inpSampler = document.querySelector('.inp-sampler');
    const inpControlNet = document.querySelector('.inp-controlnet');
    const model = inpModel.value;
    const width = inpWidth.value;
    const height = inpHeight.value;
    const steps = inpSteps.value; // mine: 75
    const guidance = inpGuidance.value; //mine: 9
    const scheduler = inpSampler.value; //mine: dpmsolver++
    const output_format = 'jpeg';
    const base64Control = await this.getBase64();
    const controlnet = inpControlNet.value;
    if (model.includes('realistic-vision')) {
      if (negative_prompt === '') negative_prompt = 'duplicate, (deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, bad_prompt_version2, bad-hands-5, badhandv4, bad anatomy, deformed, mutated, amputated, missing finger, extra finger, fused fingers, missing leg, extra leg, fused legs, missing digit, extra digit, fused digits, missing hand, extra hand, fused hands, missing arm, extra arm, fused arms, missing limb, extra limb, fused limbs, fused bodies, merged bodies, extra bodies, dual bodies, extra navel, elongated body, missing joint, extra joint, fused joints, deformed hip, twisted limbs, twisted legs, twisted arms, missing head, extra head, double head, twins, missing ear, extra ear, deformed ear, black and white, monochrome, multiple views, blurry, text, signature, head out of frame, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, grayscale, glans, bad hands, error, extra digit, fewer digits, cropped, jpeg artifacts, watermark, username, bad feet, poorly drawn hands, poorly drawn face, mutation, too many fingers, long neck, long body, long arms, cross-eyed, mutated hands, polar lowres, bad body, bad proportions, gross proportions, cropped head , bad eyes, extra breast, missing breast, fused breasts, unnatural proportions, necklace';
    }
    const messages = {
      model: model,
      prompt: prompt,
      negative_prompt: negative_prompt,
      width: width,
      height: height,
      steps: steps || 75,
      guidance: guidance || 9,
      // seed: seed ? seed:undefined,
      image: base64Control ? base64Control : undefined,
      controlnet: base64Control ? controlnet : undefined,
      scheduler: scheduler,
      output_format: output_format,
      folder_path: this.folderPath
    };
    try {
      let url;
      if (base64Control) {
        url = this.controlNetUrl;
      } else {
        url = this.textToImageUrl;
      }
      let headers = {
        ...this.headers,
        ...this.defaultHeaders
      };
      const response = await fetch(url, {
        signal: this.signal,
        // Abort
        method: 'POST',
        headers,
        body: JSON.stringify(messages)
      });
      const result = await response.json();
      this.fetchFolderContents(this.folderPath);
      if (result.error) {
        console.log('Error:\n' + result.error);
        return;
      }
    } catch (error) {
      if (error.name === 'AbortError') ; else {
        // CORS or code errors goes here
        console.error('Error:', error);
        // console.log('Error:\n'+error);
      }
    }

    this.finishProcess();
  }
  toggleSelection() {
    this.isToggleOn = !this.isToggleOn;
    const fileListElement = document.querySelector('.file-list');
    const fileListItems = document.querySelectorAll('.file-list li');
    const btnToggleSelect = document.querySelector('.btn-toggle-select');
    if (this.isToggleOn) {
      btnToggleSelect.classList.add('on');
      btnToggleSelect.innerHTML = `<span>${this.out('Cancel')}</span>`;

      // this.updateSelectedItems();
      // or:
      fileListItems.forEach(item => {
        item.classList.remove('selected');
      });
      fileListElement.classList.add('bulk-select');
    } else {
      fileListItems.forEach(item => {
        item.classList.remove('selected');
      });
      btnToggleSelect.classList.remove('on');
      btnToggleSelect.innerHTML = `<svg class="mr-1"><use xlink:href="#icon-files"></use></svg><span>${this.out('Select')}</span>`;
      fileListElement.classList.remove('bulk-select');
    }
    this.selectedFolder = null;
    this.selectedItems = [];
    this.singleSelectedItem = null;
    this.showHideButtons();
    const inpUrl = document.querySelector('.inp-url'); // File Picker
    inpUrl.value = '';
  }
  getItemName(item) {
    const itemNameElement = item.querySelector('a span[data-name]');
    return itemNameElement ? itemNameElement.getAttribute('data-name') : '';
  }
  updateSelectedItems() {
    this.selectedItems = Array.from(document.querySelectorAll('.file-list li.selected')).map(item => this.getItemName(item));
    this.showHideButtons();
  }
  toggleHighlight(item) {
    if (!this.isToggleOn) return;
    item.classList.toggle('selected');
    this.updateSelectedItems();
  }
  async showHideButtons() {
    // Show/hide buttons
    const divSelectAll = document.querySelector('.div-selectall');
    const btnRefresh = document.querySelector('.btn-refresh');
    const btnFolder = document.querySelector('.btn-folder');
    const btnDelete = document.querySelector('.btn-delete-files');
    const btnMoveFiles = document.querySelector('.btn-move-files');
    const btnRename = document.querySelector('.btn-rename');
    const btnMore = document.querySelector('.btn-filemore');
    const dragDropInfo = document.querySelector('.dragdrop-info');
    divSelectAll.style.display = 'none';
    if (btnRefresh) btnRefresh.style.display = 'none';
    btnFolder.style.display = 'none';
    btnDelete.style.display = 'none';
    btnMoveFiles.style.display = 'none';
    btnRename.style.display = 'none';
    btnMore.style.display = 'none';
    dragDropInfo.style.display = '';
    if (this.isToggleOn) {
      if (this.selectedItems.length > 0) {
        btnDelete.style.display = '';
        btnMoveFiles.style.display = '';
        dragDropInfo.style.display = 'none';
      }
      if (this.selectedItems.length === 1) {
        btnRename.style.display = '';
      }
      divSelectAll.style.display = '';
    } else {
      if (btnRefresh) btnRefresh.style.display = '';
      btnFolder.style.display = '';
      if (this.singleSelectedItem) {
        btnDelete.style.display = '';
        btnMoveFiles.style.display = '';
        btnRename.style.display = '';
        btnMore.style.display = '';
        dragDropInfo.style.display = 'none';
      } else {
        const inpUrl = document.querySelector('.inp-url'); // File Picker
        inpUrl.value = '';
      }
      const chkSelectAll = document.querySelector('.chk-selectall');
      chkSelectAll.checked = false;
    }
    const panelFileInfo = document.querySelector('.file-info');
    const div1 = panelFileInfo.querySelector('.file-info-details');
    const div2 = panelFileInfo.querySelector('.no-selection-info');
    if (this.isToggleOn) {
      div1.style.display = 'none';
      div2.style.display = '';
      div2.innerHTML = this.out('Multiple selection mode.');
    } else {
      if (this.singleSelectedItem && panelFileInfo.classList.contains('active')) {
        this.renderFileInfo();
        div1.style.display = '';
        div2.style.display = 'none';
      } else {
        div1.style.display = 'none';
        div2.style.display = '';
        div2.innerHTML = this.out('No selected file.');
      }
    }
  }
  async selectFolder(listItem) {
    const fileListItems = document.querySelectorAll('.file-list li');
    fileListItems.forEach(item => {
      item.classList.remove('selected');
    });
    listItem.classList.add('selected');
    this.singleSelectedItem = null;
    const elm = listItem.querySelector('[data-name]');
    if (elm) {
      //folder
      const folderName = listItem.querySelector('[data-name]').getAttribute('data-name');
      this.selectedFolder = folderName;
    } else {
      //up
      this.selectedFolder = null;
    }
    this.showHideButtons();
  }
  async selectFile(listItem, edit) {
    const fileName = this.selectedItem.fileName;
    const url = this.selectedItem.url;
    const inpUrl = document.querySelector('.inp-url'); // File Picker
    inpUrl.value = url;
    const fileListItems = document.querySelectorAll('.file-list li');
    fileListItems.forEach(item => {
      item.classList.remove('selected');
    });
    listItem.classList.add('selected');
    this.selectedFolder = null;
    this.singleSelectedItem = fileName;
    this.showHideButtons();

    // Check content
    window._page = {};
    if (edit && this.enableBuilder) {
      const ext = url.split('.').pop().toLowerCase();
      if (ext === 'html') {
        let result = await this.getContent(url);
        if (result) {
          window._page = {
            html: result.html,
            content: result.content,
            mainCss: result.mainCss,
            sectionCss: result.sectionCss,
            fileName: fileName,
            folderPath: this.folderPath
          };
        }
      }
    }
  }
  isToggleButtonOn() {
    return this.isToggleOn;
  }
  shortenText(text) {
    if (text.length <= 18) {
      return text;
    } else {
      return text.slice(0, 18) + '...';
    }
  }
  renderBreadcrumb(folderPath) {
    const divBreadcrumb = document.querySelector('.div-breadcrumb');
    let s = '',
      html = '';
    const arrFolders = folderPath.split('/');
    let n = 0;
    arrFolders.forEach(item => {
      n++;
      if (s === '') s += item;else s += '/' + item;
      if (n === arrFolders.length) {
        html += ` <span class="separator">></span> <span>${item}</span>`;
      } else {
        html += ` <span class="separator">></span> <a class="underline" href="${s}">${item}</a>`;
      }
    });
    if (folderPath !== '') divBreadcrumb.innerHTML = `<a class="underline" href="">${this.out('home')}</a>` + html;else divBreadcrumb.innerHTML = '<span>home</span>';
    const links = divBreadcrumb.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', e => {
        const folderPath = link.getAttribute('href');
        this.fetchFolderContents(folderPath);
        e.preventDefault();
      });
    });
  }
  async renderListView() {
    this.flexDirection = 'column';
    localStorage.setItem('_view', 'list');
    let folderPath = this.folderPath;

    // File list
    const fileListElement = document.querySelector('.file-list');
    fileListElement.innerHTML = ''; // Clear existing list

    fileListElement.classList.add('listview');
    fileListElement.classList.remove('gallery');

    // Add 'UP' link for sub-folders
    const upLinkItem = document.createElement('li');
    const upLink = document.createElement('a');
    upLink.href = 'javascript:void(0)';
    upLink.title = this.out('UP');
    upLink.insertAdjacentHTML('afterbegin', '<svg><use xlink:href="#icon-arrow-back-up"></use></svg>');
    upLink.style.justifyContent = 'flex-start';
    // upLink.style.width = '200px';
    upLinkItem.style.outline = 'none';
    upLinkItem.classList.add('btn-up');
    upLinkItem.setAttribute('tabIndex', 0);
    upLinkItem.setAttribute('role', 'button');
    upLinkItem.addEventListener('click', () => {
      //upLink
      const parentFolderPath = folderPath.split('/').slice(0, -1).join('/');
      this.fetchFolderContents(parentFolderPath);
    });
    upLinkItem.appendChild(upLink);
    if (folderPath !== '') fileListElement.appendChild(upLinkItem);
    this.objects.forEach(item => {
      if (item.type === 'file') if (!item.url.includes('http') && this.viewUrl) {
        // item url only contains object Key, use proxy/viewer
        item.url = this.viewUrl + '?url=' + item.url;
      }
      const listItem = document.createElement('li');
      if (item.type === 'folder') {
        // Hyperlink
        const folderLink = document.createElement('a');
        folderLink.href = 'javascript:void(0)';
        // folderLink.textContent = `[DIR] ${item.name}`;
        // folderLink.style.width = '200px';

        // Folder icon
        let icon = '<svg><use xlink:href="#icon-folder"></use></svg>';
        folderLink.insertAdjacentHTML('afterbegin', icon);
        folderLink.style.justifyContent = 'flex-start';

        // Folder name
        const span = document.createElement('span');
        span.textContent = `${this.shortenText(item.name)}`;
        span.setAttribute('data-name', item.name);
        folderLink.appendChild(span);
        listItem.addEventListener('click', () => {
          //folderLink
          if (this.isToggleOn) return;
          const newPath = this.pathJoin([folderPath, item.name]); //`${folderPath}/${item.name}`;
          this.fetchFolderContents(newPath);
        });
        listItem.appendChild(folderLink);
      } else {
        // Hyperlink
        const fileLink = document.createElement('a');
        // fileLink.href = 'javascript:void(0)'; //=> makes input text unselectable

        const ext = item.name.split('.').pop().toLowerCase();
        let icon = '';

        // Icon
        if (ext === 'jpg' || ext === 'jpeg') {
          // icon = '<svg><use xlink:href="#icon-file-type-jpg"></use></svg>';
          // icon = '<svg><use xlink:href="#icon-file"></use></svg>';
          icon = '<svg style="width:20px;height:20px;"><use xlink:href="#icon-photo"></use></svg>';
        } else if (ext === 'png') {
          // icon = '<svg><use xlink:href="#icon-file-type-png"></use></svg>';
          // icon = '<svg><use xlink:href="#icon-file"></use></svg>';
          icon = '<svg style="width:20px;height:20px;"><use xlink:href="#icon-photo"></use></svg>';
        } else if (ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff') {
          // icon = '<svg><use xlink:href="#icon-file"></use></svg>';
          icon = '<svg style="width:20px;height:20px;"><use xlink:href="#icon-photo"></use></svg>';
        } else if (ext === 'mp3') {
          icon = '<svg><use xlink:href="#icon-audio"></use></svg>';
        } else if (ext === 'mp4' || ext === 'mov') {
          icon = '<svg style="margin-bottom:-7px;"><use xlink:href="#icon-movie"></use></svg>';
        } else if (ext === 'txt' || ext === 'md' || ext === 'rtf') {
          icon = '<svg><use xlink:href="#icon-file-text"></use></svg>';
        } else if (ext === 'js') {
          icon = '<svg><use xlink:href="#icon-file-type-js"></use></svg>';
        } else if (ext === 'json') {
          icon = '<svg><use xlink:href="#icon-file-type-js"></use></svg>';
        } else if (ext === 'html') {
          icon = '<svg><use xlink:href="#icon-file-type-html"></use></svg>';
        } else if (ext === 'css') {
          icon = '<svg><use xlink:href="#icon-file-type-css"></use></svg>';
        } else if (ext === 'pdf') {
          icon = '<svg><use xlink:href="#icon-file-type-pdf"></use></svg>';
        } else if (ext === 'zip') {
          icon = '<svg><use xlink:href="#icon-file-type-zip"></use></svg>';
        } else if (ext === 'svg') {
          icon = '<svg><use xlink:href="#icon-file-type-svg"></use></svg>';
        } else if (ext === 'csv') {
          icon = '<svg><use xlink:href="#icon-file-type-csv"></use></svg>';
        } else if (ext === 'ppt' || ext === 'pptx') {
          icon = '<svg><use xlink:href="#icon-file-type-ppt"></use></svg>';
        } else if (ext === 'doc') {
          icon = '<svg><use xlink:href="#icon-file-type-doc"></use></svg>';
        } else if (ext === 'docx') {
          icon = '<svg><use xlink:href="#icon-file-type-docx"></use></svg>';
        } else if (ext === 'xls' || ext === 'xlsx') {
          icon = '<svg><use xlink:href="#icon-file-type-xls"></use></svg>';
        } else {
          icon = '<svg><use xlink:href="#icon-file"></use></svg>';
        }

        // File name
        let spanFileItem = document.createElement('span');
        fileLink.appendChild(spanFileItem);
        spanFileItem.insertAdjacentHTML('afterbegin', icon);

        // File name
        let spanFileName = document.createElement('span');
        spanFileName.textContent = `${this.shortenText(item.name)}`;
        spanFileName.setAttribute('data-name', item.name);
        spanFileName.setAttribute('data-size', item.size);
        spanFileName.setAttribute('data-modified', item.modified);
        spanFileName.setAttribute('data-created', item.created);
        spanFileItem.appendChild(spanFileName);
        let spanInfoWrap = document.createElement('span');
        fileLink.appendChild(spanInfoWrap);

        // File size
        let spanFileSize = document.createElement('span');
        spanFileSize.textContent = item.size;
        spanFileSize.classList.add('size-info');
        spanInfoWrap.appendChild(spanFileSize);

        // Date modified
        let spanDateModified = document.createElement('span');
        spanDateModified.textContent = `${this.beautifyDate(item.modified, this.dateShortOptions)}`;
        spanDateModified.classList.add('date-info');
        spanInfoWrap.appendChild(spanDateModified);
        listItem.setAttribute('data-url', item.url);
        listItem.setAttribute('tabIndex', 0);
        listItem.setAttribute('role', 'button');
        listItem.appendChild(fileLink);
      }
      fileListElement.appendChild(listItem);
    });
    const fileListItems = document.querySelectorAll('.file-list li');
    fileListItems.forEach(listItem => {
      listItem.addEventListener('click', () => {
        this.toggleHighlight(listItem);
        if (listItem.getAttribute('data-url')) {
          if (!this.isToggleOn) {
            // single select
            this.selectedItem = {
              url: listItem.getAttribute('data-url'),
              fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
              fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
              modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
              created: listItem.querySelector('[data-created]').getAttribute('data-created')
            };
            this.selectFile(listItem);
          }
        }
      });
      listItem.addEventListener('dblclick', () => {
        if (listItem.getAttribute('data-url')) {
          if (!this.isToggleOn) {
            // single select
            this.selectedItem = {
              url: listItem.getAttribute('data-url'),
              fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
              fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
              modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
              created: listItem.querySelector('[data-created]').getAttribute('data-created')
            };
            this.selectFile(listItem);
          }
          if (this.settings.filePicker) {
            const btnSelectFile = document.querySelector('.btn-select');
            btnSelectFile.click();
          } else {
            this.viewMedia(this.selectedItem.url);
            listItem.focus();
          }
        }
      });

      // Prevent text selection on double-click
      listItem.onselectstart = function () {
        return false;
      };
    });
    const chkSelectAll = document.querySelector('.chk-selectall');
    chkSelectAll.checked = false;
    chkSelectAll.addEventListener('click', () => {
      if (chkSelectAll.checked) {
        fileListItems.forEach(li => {
          if (!li.classList.contains('btn-up')) li.classList.add('selected');
        });
        if (fileListElement.querySelector('.selected')) {
          this.updateSelectedItems();
        }
      } else {
        fileListItems.forEach(li => {
          li.classList.remove('selected');
        });
        this.updateSelectedItems();
      }
    });
    const tooltipElements = document.querySelectorAll('.tooltip');
    tooltipElements.forEach(elm => {
      if (elm.getAttribute('title')) {
        elm.setAttribute('data-title', elm.getAttribute('title'));
        elm.removeAttribute('title');
      }
    });
    this.selectedFolder = null;
    this.selectedItems = [];
    this.singleSelectedItem = null;
    this.showHideButtons();
  }
  async renderObjects(iconsOnly) {
    this.flexDirection = 'row';
    if (iconsOnly) {
      localStorage.setItem('_view', 'icons');
    } else {
      localStorage.setItem('_view', 'gallery');
    }
    let folderPath = this.folderPath;

    // File list
    const fileListElement = document.querySelector('.file-list');
    fileListElement.innerHTML = ''; // Clear existing list

    fileListElement.classList.add('gallery');
    fileListElement.classList.remove('listview');

    // Add 'UP' link for sub-folders
    const upLinkItem = document.createElement('li');
    const upLink = document.createElement('a');
    upLink.href = 'javascript:void(0)';
    upLink.title = this.out('UP');
    upLink.insertAdjacentHTML('afterbegin', '<svg><use xlink:href="#icon-arrow-back-up"></use></svg>');
    upLink.style.justifyContent = 'center';
    // upLink.style.width = '200px';
    upLinkItem.style.outline = 'none';
    upLinkItem.classList.add('btn-up');
    upLinkItem.setAttribute('tabIndex', 0);
    upLinkItem.setAttribute('role', 'button');
    upLinkItem.addEventListener('click', () => {
      //upLink
      const parentFolderPath = folderPath.split('/').slice(0, -1).join('/');
      this.fetchFolderContents(parentFolderPath);
    });
    upLinkItem.appendChild(upLink);
    if (folderPath !== '') fileListElement.appendChild(upLinkItem);
    this.objects.forEach(item => {
      if (item.type === 'file') if (!item.url.includes('http') && this.viewUrl) {
        // item url only contains object Key, use proxy/viewer
        item.url = this.viewUrl + '?url=' + item.url;
      }
      const listItem = document.createElement('li');
      if (item.type === 'folder') {
        // Hyperlink
        const folderLink = document.createElement('a');
        folderLink.href = 'javascript:void(0)';
        // folderLink.textContent = `[DIR] ${item.name}`;
        // folderLink.style.width = '200px';

        const spanFile = document.createElement('span');
        folderLink.appendChild(spanFile);

        // Folder icon
        let icon = '<svg><use xlink:href="#icon-folder"></use></svg>';
        spanFile.insertAdjacentHTML('afterbegin', icon);

        // Folder name
        const span = document.createElement('span');
        span.textContent = `${this.shortenText(item.name)}`;
        span.setAttribute('data-name', item.name);
        folderLink.appendChild(span);
        listItem.addEventListener('click', () => {
          //folderLink
          if (this.isToggleOn) return;
          const newPath = this.pathJoin([folderPath, item.name]); //`${folderPath}/${item.name}`;
          this.fetchFolderContents(newPath);
        });
        listItem.appendChild(folderLink);
      } else {
        // Hyperlink
        const fileLink = document.createElement('a');
        // fileLink.href = 'javascript:void(0)'; //=> makes input text unselectable

        const url = item.url;
        const ext = item.name.split('.').pop().toLowerCase();
        let icon = '';

        // Wrapper for file item and buttons
        const spanFile = document.createElement('span');
        fileLink.appendChild(spanFile);
        if (!iconsOnly && (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff')) {
          // Image
          const image = document.createElement('img');
          image.src = url;
          spanFile.appendChild(image);
          if (!this.filesOnly) {
            // Add control image button
            const btnAddControlImage = document.createElement('button');
            btnAddControlImage.className = 'btn-control-image tooltip';
            btnAddControlImage.innerHTML = '<svg style="width:17px;height:17px;"><use xlink:href="#icon-plus"></use></svg>';
            btnAddControlImage.title = this.out('Use as image control');
            btnAddControlImage.tabIndex = -1;
            spanFile.appendChild(btnAddControlImage);
            if (item.name.includes('-lg.')) {
              // Do Nothing
              btnAddControlImage.style.left = '';
            } else {
              // Upscale button
              const btnUpscale = document.createElement('button');
              btnUpscale.className = 'btn-upscale tooltip';
              btnUpscale.innerHTML = '<svg style="width:20px;height:20px;"><use xlink:href="#icon-upscale"></use></svg>';
              btnUpscale.title = this.out('Upscale');
              btnUpscale.tabIndex = -1;
              spanFile.appendChild(btnUpscale);
              btnAddControlImage.style.left = '36px';
            }
          }
        } else {
          // Icon
          spanFile.style.flex = 'none';
          if (iconsOnly && (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff')) {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-photo"></use></svg>';
          } else if (ext === 'mp3') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-audio"></use></svg>';
          } else if (ext === 'mp4' || ext === 'mov') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-movie"></use></svg>';
          } else if (ext === 'txt' || ext === 'md' || ext === 'rtf') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-text"></use></svg>';
          } else if (ext === 'js') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-js"></use></svg>';
          } else if (ext === 'json') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-js"></use></svg>';
          } else if (ext === 'html') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-html"></use></svg>';
          } else if (ext === 'css') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-css"></use></svg>';
          } else if (ext === 'pdf') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-pdf"></use></svg>';
          } else if (ext === 'zip') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-zip"></use></svg>';
          } else if (ext === 'svg') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-svg"></use></svg>';
          } else if (ext === 'csv') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-csv"></use></svg>';
          } else if (ext === 'ppt' || ext === 'pptx') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-ppt"></use></svg>';
          } else if (ext === 'doc') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-doc"></use></svg>';
          } else if (ext === 'docx') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-docx"></use></svg>';
          } else if (ext === 'xls' || ext === 'xlsx') {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file-type-xls"></use></svg>';
          } else {
            icon = '<svg style="margin:10px 0 0 12px;"><use xlink:href="#icon-file"></use></svg>';
          }
          spanFile.insertAdjacentHTML('afterbegin', icon);
        }
        if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff' || ext === 'mp4' || ext === 'mov' || ext === 'mp3' || ext === 'pdf') {
          // Zoom in button
          const btnZoomIn = document.createElement('button');
          btnZoomIn.className = 'btn-view tooltip';
          btnZoomIn.innerHTML = '<svg style="width:19px;height:19px;"><use xlink:href="#icon-zoom-in"></use></svg>';
          btnZoomIn.title = this.out('View');
          btnZoomIn.tabIndex = -1;
          spanFile.appendChild(btnZoomIn);
        } else if (ext === 'txt' || ext === 'css' || ext === 'js' || ext === 'html' || ext === 'md' || ext === 'svg' || ext === 'json') {
          // Edit button
          const btnEdit = document.createElement('button');
          btnEdit.className = 'btn-edit tooltip';
          btnEdit.innerHTML = '<svg style="width:17px;height:17px;margin-top:-2px"><use xlink:href="#icon-edit"></use></svg>';
          btnEdit.title = this.out('Edit');
          btnEdit.tabIndex = -1;
          btnEdit.style.right = '37px';
          spanFile.appendChild(btnEdit);

          // Zoom in button
          const btnZoomIn = document.createElement('button');
          btnZoomIn.className = 'btn-view tooltip';
          btnZoomIn.innerHTML = '<svg style="width:19px;height:19px;"><use xlink:href="#icon-zoom-in"></use></svg>';
          btnZoomIn.title = this.out('View');
          btnZoomIn.tabIndex = -1;
          spanFile.appendChild(btnZoomIn);
        } else if (ext === 'csv') {
          // Edit button
          const btnEdit = document.createElement('button');
          btnEdit.className = 'btn-edit tooltip';
          btnEdit.innerHTML = '<svg style="width:17px;height:17px;margin-top:-2px"><use xlink:href="#icon-edit"></use></svg>';
          btnEdit.title = this.out('Edit');
          btnEdit.tabIndex = -1;
          spanFile.appendChild(btnEdit);
        }

        // Trash button
        const btnTrash = document.createElement('button');
        btnTrash.className = 'btn-trash tooltip';
        btnTrash.innerHTML = '<svg style="width:17px;height:17px;"><use xlink:href="#icon-trash"></use></svg>';
        btnTrash.title = this.out('Delete');
        btnTrash.tabIndex = -1;
        spanFile.appendChild(btnTrash);

        // Download button
        const btnDownload = document.createElement('button');
        btnDownload.className = 'btn-download tooltip';
        btnDownload.innerHTML = '<svg style="width:17px;height:17px;"><use xlink:href="#icon-download"></use></svg>';
        btnDownload.title = this.out('Download');
        btnDownload.tabIndex = -1;
        spanFile.appendChild(btnDownload);

        // Info button
        const btnInfo = document.createElement('button');
        btnInfo.className = 'btn-info tooltip';
        btnInfo.innerHTML = '<svg style="width:19px;height:19px;"><use xlink:href="#icon-info"></use></svg>';
        btnInfo.title = this.out('File Info');
        btnInfo.tabIndex = -1;
        spanFile.appendChild(btnInfo);

        // File name
        let spanFileName = document.createElement('span');
        spanFileName.textContent = `${this.shortenText(item.name)}`;
        spanFileName.setAttribute('data-name', item.name);
        spanFileName.setAttribute('data-size', item.size);
        spanFileName.setAttribute('data-modified', item.modified);
        spanFileName.setAttribute('data-created', item.created);
        fileLink.appendChild(spanFileName);

        // File size
        let spanFileSize = document.createElement('span');
        spanFileSize.textContent = `${item.size}`;
        fileLink.appendChild(spanFileSize);

        // Date modified
        let spanDateModified = document.createElement('span');
        spanDateModified.textContent = `${this.beautifyDate(item.modified, this.dateShortOptions)}`;
        fileLink.appendChild(spanDateModified);
        const makeSpanEditable = span => {
          const currentValue = span.getAttribute('data-name');
          const input = document.createElement('input');
          input.type = 'text';
          input.value = currentValue;
          const rename = () => {
            const val = input.value;
            if (val === currentValue) {
              input.blur();
              input.removeEventListener('blur', rename);
              span.textContent = this.shortenText(currentValue);
              return;
            }
            if (this.demoMode) {
              input.blur();
              input.removeEventListener('blur', rename);
              span.textContent = this.shortenText(currentValue);
              alert(this.out('This function is disabled in this demo.'));
              return;
            }
            if (!val) {
              alert(this.out('Please enter a file name.'));
              return;
            }
            span.setAttribute('data-name', val);
            input.removeEventListener('blur', rename);
            span.textContent = this.shortenText(val);
            const reqBody = {
              currentName: currentValue,
              newName: val,
              folderPath: this.folderPath
            };
            let headers = {
              ...this.headers,
              ...this.defaultHeaders
            };
            fetch(this.settings.renameFileUrl, {
              method: 'POST',
              body: JSON.stringify(reqBody),
              headers
            }).catch(error => {
              console.error('Error:', error);
            });
          };
          input.addEventListener('blur', rename);
          input.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
              rename();
              e.preventDefault();
              e.stopImmediatePropagation();

              //focus back
              this.focusBack();
            }
            if (e.key === 'Escape') {
              input.removeEventListener('blur', rename);
              span.textContent = this.shortenText(currentValue);

              //focus back
              this.focusBack();
            }
          });
          input.addEventListener('keydown', event => {
            const validFileNamePattern = this.validFileNamePattern;
            const key = event.key;
            if (!validFileNamePattern.test(key) && key !== 'Backspace' && key !== 'Delete') {
              event.preventDefault();
            }
          });
          span.textContent = '';
          span.appendChild(input);
          input.focus();
        };

        // const spanFileName = fileLink.querySelector('[data-name]');
        spanFileName.addEventListener('click', () => {
          if (this.isToggleOn) return;
          if (spanFileName.querySelector('input')) return;
          if (spanFileName.closest('.selected')) {
            makeSpanEditable(spanFileName);
          }
        });
        listItem.setAttribute('data-url', item.url);
        listItem.setAttribute('tabIndex', 0);
        listItem.setAttribute('role', 'button');
        listItem.appendChild(fileLink);
      }
      fileListElement.appendChild(listItem);
      const btnUpscale = listItem.querySelector('.btn-upscale');
      if (btnUpscale) btnUpscale.addEventListener('click', () => {
        const img = listItem.querySelector('img');
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const url = item.url;
        this.upscaleImage(url, w, h);
      });
      const btnView = listItem.querySelector('.btn-view');
      if (btnView) btnView.addEventListener('click', () => {
        this.selectedItem = {
          url: listItem.getAttribute('data-url'),
          fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
          fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
          modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
          created: listItem.querySelector('[data-created]').getAttribute('data-created')
        };
        this.viewMedia(item.url);
      });
      const btnEdit = listItem.querySelector('.btn-edit');
      if (btnEdit) btnEdit.addEventListener('click', async () => {
        this.selectedItem = {
          url: listItem.getAttribute('data-url'),
          fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
          fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
          modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
          created: listItem.querySelector('[data-created]').getAttribute('data-created')
        };
        // await this.selectFile(listItem, true);

        if (this.enableBuilder && window._page.fileName) {
          this.viewBuilder();
        } else {
          this.viewText(item.url);
        }
      });
      const btnTrash = listItem.querySelector('.btn-trash');
      if (btnTrash) btnTrash.addEventListener('click', async e => {
        this.selectedItem = {
          url: listItem.getAttribute('data-url'),
          fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
          fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
          modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
          created: listItem.querySelector('[data-created]').getAttribute('data-created')
        };
        await this.selectFile(listItem, true);
        this.deleteSelected();
        e.preventDefault();
        e.stopImmediatePropagation(); // without this, selectFile() will be called after this (listItem click)
      });

      const btnDownload = listItem.querySelector('.btn-download');
      if (btnDownload) btnDownload.addEventListener('click', () => {
        const anchor = document.createElement('a');
        anchor.href = item.url;
        anchor.download = item.name;
        anchor.click();
      });
      const btnInfo = listItem.querySelector('.btn-info');
      if (btnInfo) btnInfo.addEventListener('click', async e => {
        this.selectedItem = {
          url: listItem.getAttribute('data-url'),
          fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
          fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
          modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
          created: listItem.querySelector('[data-created]').getAttribute('data-created')
        };
        await this.selectFile(listItem, true);
        this.showPanelInfo();
        e.preventDefault();
        e.stopImmediatePropagation(); // without this, selectFile() will be called after this (listItem click)
      });

      const btnControlImage = listItem.querySelector('.btn-control-image');
      if (btnControlImage) btnControlImage.addEventListener('click', () => {
        const divControl = document.querySelector('.div-img-control');
        divControl.style.display = 'block';
        const divPreview = document.querySelector('.div-img-control-preview');
        divPreview.innerHTML = `<img src="${item.url}" style="object-fit:contain" />`;
        localStorage.setItem('_img_imagecontrol', item.url);
      });
    });
    const fileListItems = document.querySelectorAll('.file-list li');
    fileListItems.forEach(listItem => {
      listItem.addEventListener('click', () => {
        this.toggleHighlight(listItem);
        if (listItem.getAttribute('data-url')) {
          if (!this.isToggleOn) {
            // single select
            this.selectedItem = {
              url: listItem.getAttribute('data-url'),
              fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
              fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
              modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
              created: listItem.querySelector('[data-created]').getAttribute('data-created')
            };
            this.selectFile(listItem);
          }
        }
      });
      listItem.addEventListener('dblclick', () => {
        if (listItem.getAttribute('data-url')) {
          if (!this.isToggleOn) {
            // single select
            this.selectedItem = {
              url: listItem.getAttribute('data-url'),
              fileName: listItem.querySelector('[data-name]').getAttribute('data-name'),
              fileSize: listItem.querySelector('[data-size]').getAttribute('data-size'),
              modified: listItem.querySelector('[data-modified]').getAttribute('data-modified'),
              created: listItem.querySelector('[data-created]').getAttribute('data-created')
            };
            this.selectFile(listItem);
          }
          if (this.settings.filePicker) {
            const btnSelectFile = document.querySelector('.btn-select');
            btnSelectFile.click();
          } else {
            this.viewMedia(this.selectedItem.url);
            listItem.focus();
          }
        }
      });

      // Prevent text selection on double-click
      listItem.onselectstart = function () {
        return false;
      };
    });
    const chkSelectAll = document.querySelector('.chk-selectall');
    chkSelectAll.checked = false;
    chkSelectAll.addEventListener('click', () => {
      if (chkSelectAll.checked) {
        fileListItems.forEach(li => {
          if (!li.classList.contains('btn-up')) li.classList.add('selected');
        });
        if (fileListElement.querySelector('.selected')) {
          this.updateSelectedItems();
        }
      } else {
        fileListItems.forEach(li => {
          li.classList.remove('selected');
        });
        this.updateSelectedItems();
      }
    });
    const tooltipElements = document.querySelectorAll('.tooltip');
    tooltipElements.forEach(elm => {
      if (elm.getAttribute('title')) {
        elm.setAttribute('data-title', elm.getAttribute('title'));
        elm.removeAttribute('title');
      }
    });
    this.selectedFolder = null;
    this.selectedItems = [];
    this.singleSelectedItem = null;
    this.showHideButtons();
  }
  async fetchFolderContents(folderPath) {
    this.renderBreadcrumb(folderPath);
    this.folderPath = folderPath;
    localStorage.setItem('_folder_path', folderPath);
    let headers = {
      ...this.headers,
      ...this.defaultHeaders
    };
    const reqBody = {
      folderPath: folderPath
    };
    const response = await fetch(this.settings.listFilesUrl, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers
    });
    const data = await response.json();
    this.objects = data.contents;

    // Back to normal (no bulk select)
    this.selectedFolder = null;
    this.selectedItems = [];
    this.singleSelectedItem = null;
    this.updateSelectedItems();
    if (this.isToggleOn) this.toggleSelection();
    const viewMode = localStorage.getItem('_view');
    if (viewMode) {
      if (viewMode === 'list') {
        this.renderListView();
      } else if (viewMode === 'icons') {
        this.renderObjects(true);
      } else if (viewMode === 'gallery') {
        this.renderObjects();
      }
    } else {
      this.renderObjects();
    }
    this.prepareItemsNavigation();
    if (data.folders) {
      // If there is folders data included, then use it
      this.getFolders(data.folders);
    } else {
      this.getFolders();
    }
  }
  beautifyDate(dateModified, options, relativeTime = true) {
    let showRelativeTime = this.showRelativeTime;
    if (!relativeTime) showRelativeTime = false;
    const currentDate = new Date();
    const modifiedDate = new Date(dateModified);

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - modifiedDate;
    const secondsDifference = timeDifference / 1000;
    const minutesDifference = secondsDifference / 60;
    const hoursDifference = minutesDifference / 60;
    const daysDifference = hoursDifference / 24;
    if (showRelativeTime) {
      if (secondsDifference < 60) {
        return `${Math.floor(secondsDifference)} seconds ago`;
      } else if (minutesDifference < 60) {
        return `${Math.floor(minutesDifference)} minutes ago`;
      } else if (hoursDifference < 24) {
        return `${Math.floor(hoursDifference)} hours ago`;
      } else if (daysDifference < 30) {
        return `${Math.floor(daysDifference)} days ago`;
      }
    }
    return new Intl.DateTimeFormat(this.locale, options).format(modifiedDate);
  }
  renderFileInfo() {
    const panelFileInfo = document.querySelector('.file-info');
    const url = this.selectedItem.url;
    const fileName = this.selectedItem.fileName;
    const fileSize = this.selectedItem.fileSize;
    const modified = this.selectedItem.modified;
    // const created = this.selectedItem.created;

    const info = panelFileInfo.querySelector('.dimension-info');
    const divFileName = panelFileInfo.querySelector('.div-filename');
    divFileName.innerHTML = fileName;
    const divFileSize = panelFileInfo.querySelector('.div-filesize');
    divFileSize.innerHTML = fileSize;
    const divModifiedDate = panelFileInfo.querySelector('.div-modifieddate');
    divModifiedDate.innerHTML = this.beautifyDate(modified, this.dateLongOptions, false);
    const divUrl = panelFileInfo.querySelector('.div-url');
    divUrl.innerHTML = `<a target="_blank" href="${url}">${url}</a>`;
    const divImagePreview = panelFileInfo.querySelector('.div-imagepreview');
    divImagePreview.innerHTML = '';
    const btnEdit = panelFileInfo.querySelector('.btn-edit');
    const btnView = panelFileInfo.querySelector('.btn-view');
    // const btnDownload = panelFileInfo.querySelector('.btn-download');
    // const btnOpen = panelFileInfo.querySelector('.btn-open');
    const btnUpscale = panelFileInfo.querySelector('.btn-upscale');
    const btnControlImage = panelFileInfo.querySelector('.btn-control-image');
    info.style.display = 'none';
    btnEdit.style.display = 'none';
    btnView.style.display = 'none';
    btnUpscale.style.display = 'none';
    btnControlImage.style.display = 'none';
    const ext = fileName.split('.').pop().toLowerCase();
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff') {
      info.style.display = '';
      if (!this.filesOnly) {
        btnControlImage.style.display = '';
        if (!fileName.includes('-lg.')) {
          btnUpscale.style.display = '';
        }
      }
      const divDimension = panelFileInfo.querySelector('.div-dimension');
      var img = new Image();
      img.onload = function () {
        let width = img.naturalWidth;
        let height = img.naturalHeight;
        divDimension.innerHTML = `${width}x${height}`;
      };
      img.src = url;
      divImagePreview.innerHTML = `<img src="${url}">`;
    }
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'bmp' || ext === 'tiff' || ext === 'mp4' || ext === 'mov' || ext === 'mp3' || ext === 'pdf') {
      btnView.style.display = '';
    } else if (ext === 'txt' || ext === 'css' || ext === 'js' || ext === 'html' || ext === 'md' || ext === 'svg' || ext === 'json') {
      btnEdit.style.display = '';
      btnView.style.display = '';
    } else if (ext === 'csv') {
      btnEdit.style.display = '';
    }
  }
  pathJoin(parts) {
    const separator = '/';
    parts = parts.map((part, index) => {
      if (index) {
        part = part.replace(new RegExp('^' + separator), '');
      }
      if (index !== parts.length - 1) {
        part = part.replace(new RegExp(separator + '$'), '');
      }
      return part;
    });
    if (parts[0] === '') parts.shift();
    return parts.join(separator);
  }
  async moveSelected(targetPath) {
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    let reqBody;
    if (this.isToggleOn && this.selectedItems.length > 0) {
      reqBody = {
        selectedItems: this.selectedItems,
        folderPath: this.folderPath,
        targetPath: targetPath
      };
    } else {
      reqBody = {
        selectedItems: [this.singleSelectedItem],
        folderPath: this.folderPath,
        targetPath: targetPath
      };
    }
    let headers = {
      ...this.headers,
      ...this.defaultHeaders
    };
    const response = await fetch(this.settings.moveFilesUrl, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers
    });
    const result = await response.json();
    if (result.error) {
      console.log(result.error);
    } else {
      this.fetchFolderContents(this.folderPath);
      const popMoveFiles = document.querySelector('.pop-movefiles');
      this.hidePop(popMoveFiles);
    }
  }
  async rename() {
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    let itemName;
    if (this.isToggleOn && this.selectedItems.length > 0) {
      itemName = this.selectedItems[0];
    } else {
      itemName = this.singleSelectedItem;
    }
    const inpRenameTo = document.querySelector('.inp-rename-to');
    if (inpRenameTo === inpRenameTo.value) {
      const popRename = document.querySelector('.pop-rename');
      this.hidePop(popRename);
      return;
    }
    const reqBody = {
      currentName: itemName,
      newName: inpRenameTo.value,
      folderPath: this.folderPath
    };
    let headers = {
      ...this.headers,
      ...this.defaultHeaders
    };
    const response = await fetch(this.renameFileUrl, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers
    });
    const result = await response.json();
    if (result.error) {
      console.log(result.error);
    }
    const popRename = document.querySelector('.pop-rename');
    this.hidePop(popRename);
    this.fetchFolderContents(this.folderPath);
  }
  async deleteSelected() {
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    let reqBody;
    if (this.isToggleOn && this.selectedItems.length > 0) {
      reqBody = {
        selectedItems: this.selectedItems,
        folderPath: this.folderPath
      };
    } else {
      reqBody = {
        selectedItems: [this.singleSelectedItem],
        folderPath: this.folderPath
      };
    }
    let headers = {
      ...this.headers,
      ...this.defaultHeaders
    };
    let response = await fetch(this.settings.deleteFilesUrl, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers
    });
    const result = await response.json();
    if (result.error) {
      console.log(result.error);
    } else {
      this.fetchFolderContents(this.folderPath);
    }
  }
  async createFolder() {
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    const inpFolderName = document.querySelector('.inp-folder-name');
    if (!inpFolderName.value) {
      alert(this.out('Please enter a folder name.'));
      return;
    }
    const reqBody = {
      folderName: inpFolderName.value,
      folderPath: this.folderPath
    };
    let headers = {
      ...this.headers,
      ...this.defaultHeaders
    };
    const response = await fetch(this.settings.createFolderUrl, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers
    });
    const result = await response.json();
    if (!result.error) {
      inpFolderName.value = '';
      const popFolder = document.querySelector('.pop-folder');
      this.hidePop(popFolder);
      setTimeout(() => {
        this.fetchFolderContents(this.folderPath);
      }, 300);
    } else {
      console.error('Error:', result.error);
    }
  }
  handleFileDrop(e) {
    e.preventDefault();
    if (this.demoMode) {
      alert(this.out('This function is disabled in this demo.'));
      return;
    }
    const items = e.dataTransfer.items;
    const files = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file') {
        const file = item.getAsFile();
        const fileName = file.name;
        let fileType = file.type;

        // Check if the file type is empty or not recognized
        if (!fileType || fileType === '') {
          const ext = fileName.split('.').pop().toLowerCase();
          if (ext === 'md') {
            // Check if it's a markdown file
            fileType = 'text/markdown';
          }
        }
        if (this.settings.allowedFileTypes.includes(fileType)) {
          files.push(file);
        } else {
          alert(`The file '${file.name}' is not allowed and will not be uploaded.`);
        }
      }
    }
    if (files.length > 0) this.uploadFiles(files);
  }
  handleDragOver(e) {
    e.preventDefault();
  }
  uploadFiles(files) {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('file[]', file);
    });
    formData.append('folderPath', this.folderPath);
    const progressBar = document.querySelector('.is-progress-bar');
    progressBar.style.display = '';
    this.upload(formData).then(() => {
      this.fetchFolderContents(this.folderPath);
      setTimeout(() => {
        progressBar.style.display = 'none';
        progressBar.value = 0;
      }, 600);
    }).catch(error => {
      // Error handling code
      console.error('Upload failed', error);
      progressBar.style.display = 'none';
    });
  }
  upload(formData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', this.settings.uploadFilesUrl);

      // Combine headers from this.headers and this.defaultHeaders
      let headers = {
        ...this.headers,
        ...this.defaultHeaders
      };

      // Set each header on the request, excluding 'Content-Type'
      Object.keys(headers).forEach(header => {
        if (header.toLowerCase() !== 'content-type') {
          // Exclude 'Content-Type'
          xhr.setRequestHeader(header, headers[header]);
        }
      });
      xhr.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          const progressPercent = event.loaded / event.total * 100;
          const progressBar = document.querySelector('.is-progress-bar');
          progressBar.value = progressPercent;
        }
      });
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error('Upload failed.'));
        }
      };
      xhr.onerror = function () {
        reject(new Error('Upload failed.'));
      };
      xhr.send(formData);
    });
  }
  initializeDropZone() {
    const dropZone = document.body;
    dropZone.addEventListener('dragover', e => {
      this.handleDragOver(e);
    });
    dropZone.addEventListener('drop', e => {
      this.handleFileDrop(e);
    });
  }
  out(s) {
    if (!parent._cb) {
      let val;
      if (this.settings.lang) val = this.settings.lang[s];
      if (val) return val;
      return s;
    }
    return parent._cb.out(s);
  }
}

export { Files as default };
