var data_templates = {
    name: 'Simple Start',
    categories: [
        { id: 1, name: 'Basic' }, 
        { id: 2, name: 'Slider' }, 
        { id: 3, name: 'Video' }, 
        { id: 4, name: 'Custom' }, 
    ],
    designs: [

		/* RANDOM */
    
		{
		    'thumbnail': 'preview/simple-01.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text type-poppins box-autofit min-height-60 is-section-100">
				<div class="is-overlay">
				</div>
				<div class="is-container v2 leading-13 size-17 is-content-1100">

					<div class="row">
						<div class="column">
							<h1 class="text-center font-normal leading-11 size-72">A forward thinking studio delivering digital solutions that help your business.</h1>
						</div>

					</div>
					<div class="row">
						<div class="column">
							<div class="spacer height-40"></div>
						</div>

					</div>

					<div class="row">
						<div class="column">
							<div class="text-center button-group">
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
							</div>
						</div>

					</div>
				</div>
			</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-02.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-container v2 is-content-700 leading-14 size-18">

					<div class="row">
						<div class="column">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						</div>

					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-canvas.png',
		    'category': '1',
			'type': 'canvas',
		    'contentCss': 'type-system-ui.css',
		    'contentClass': 'type-system-ui',
		    'html': `
			<div class="is-section is-box is-section-100 type-system-ui box-canvas autolayout">
				<div class="is-overlay"></div>
				<div class="is-block block-steady height-auto" style="top: calc(50% - 84px); left: calc(50% - 264px); width: 528px;">
					<div class="is-container container-new size-18 leading-14">
						<div class="row">
							<div class="column">
								<p>
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

        {
            'thumbnail': 'preview/navbar-01.png',
            'category': '1',
            'googleFonts': [],
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
            'type': 'navbar',
            'html':
                '<div class="is-section is-section-navbar is-section-sticky is-section-auto is-box type-opensans" style="height:90px;background:transparent;">' +
                    '<div class="is-overlay">' +
                        '<div class="is-overlay-content content-selectable" data-module="navbar-builder" data-module-desc="Navigation Bar" data-dialog-width="570px" data-dialog-height="640px" data-html="' +
                        
                        encodeURIComponent('' +
						'<div class="is-topbar">' +
							'<div class="is-topbar-container" style="max-width:980px;">' +
								'<div class="is-topbar-logo">' +
									'<a class="is-logo-link" href="." title="Your Name">' +
										// '<img class="is-photo-profile circle" src="[%IMAGE_PATH%]images/innova-logo.png" alt="Your Name">' +
										'<span class="is-sitename">Your Name</span>' +
									'</a>' +
								'</div>' +
								'<div class="is-topbar-menu">' +
									'<a id="is-menu-toggle" href="javascript:void(0)" title="Menu"><span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></a>' +
									'<div class="is-menu-overlay"></div>' +
									'<div class="is-menu">' +
										'<div class="is-menu-search-input"><input id="is_txtSearch" type="text" placeholder="Search" /><button id="is_btnSearch"><i class="icon-menu-search"></i></button></div>' +
										'<ul class="is-menu-links">' +
											'<li><a href="#section1"><i class="icon ion-android-home"></i></a></li>' +
											'<li><a href="portfolio">Portfolio</a></li>' +
											'<li><a href="about">About</a></li>' +
											'<li><a href=""><i class="icon ion-android-share-alt"></i></a>' +
												'<ul>' +
													'<li><a href="https://twitter.com">Twitter</a></li>' +
													'<li><a href="https://facebook">Facebook</a></li>' +
													'<li><a href="https://youtube.com">Youtube</a></li>' +
												'</ul>' +
											'</li>' +
										'</ul>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<scr' + 'ipt>' +
							'var navbarReady = function (fn) {' +
								'var stateCheck = setInterval(function () {' +
									'if (typeof NavBar === "undefined") return;' +
									'clearInterval(stateCheck);' +
									'try { fn() } catch (e) { }' +
								'}, 1);' +
							'};' +
							'navbarReady(function () {' +
								'var obj = new NavBar({' +
									'onSearch: (keywords)=>{' +
										'alert(keywords)' +
									'}' +
								'});' +
								'obj.init();' +
							'});' +
							'' +
						'</scr' + 'ipt>' +

                        '') +
                        
                        '" data-settings="' +

                        encodeURIComponent('' +
                        '{' +
                            '"logotext": "Your Name",' +
                            '"logolink": "",' +
                            '"logocircle": true,' +
                            '"topbar": "",' +
                            '"maxwidth": 980,' +
                            '"menu":' +
                                '[' + 

                                '{"name": "Home", "link": "#section1", "html": "' + encodeURIComponent('<i class=\"icon ion-android-home\"></i>') + '", "class": "", "sub": []},' +
                                
                                '{"name": "Portfolio", "link": "portfolio", "class": "","sub": []},' +
                                '{"name": "About", "link": "about", "class": "","sub": []},' +
                                
                                '{"name": "Share", "link": "", "html": "' + encodeURIComponent('<i class=\"icon ion-android-share-alt\"></i>') + '", "class": "", "sub": [' +
                                    '{"name": "Twitter","link": "https://twitter.com", "class": "", "sub": []},' +
                                    '{"name": "Facebook","link": "https://facebook", "class": "", "sub": []},' +
                                    '{"name": "Youtube","link": "https://youtube.com", "class": "", "sub": []}' +
                                    ']}' +

                                ']' +
                        '}') + '">' +

                        '</div>' +

                    '</div>' +
                '\n</div>'
        },
        {
            'thumbnail': 'preview/gallery-01.png',
            'category': '1',
            'contentCss': 'type-poppins.css',
            'contentClass': 'type-poppins',
            'html': `
          <div class="is-section is-section-auto is-box box-custom is-align-left type-poppins box-autofit min-height-60" style="justify-content:flex-start">
            <div class="is-overlay" style="position:relative;">
              <div class="is-overlay-content content-selectable" style="position:relative;" data-dialog-width="1200px" data-dialog-height="740px" data-module="media-grid" data-module-desc="Image Gallery" data-html="${encodeURIComponent(`
                <div id="_style_{id}" style="display:none">
                #{id}.is-media-grid {
                  column-count: 4;
                  column-gap: 10px;
                  padding: 10px;
                }
                #{id} .gallery-item {
                  position: relative;
                  break-inside: avoid;
                  border-radius: 0px;
                  margin-bottom: 10px;
                  line-height: 0; /* Eliminate extra space */
                  cursor: pointer;
                  overflow: hidden;
                }
                #{id} .gallery-item img {
                  width: 100%;
                  height: auto;
                  transition: .8s all;
                }
                #{id} .gallery-item .caption {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  background-color: rgba(0, 0, 0, 0.4);
                  color: #fff;
                  padding: 12px 15px;
                  opacity: 0;
                  transition: all 0.8s ease;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  box-sizing: border-box;
                  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: .9em;
                  font-weight: 200;
                  line-height: 1.2;
                }
                
                #{id} .gallery-item .caption h4 {
                  font-weight: 300;
                  font-size: 1.1em;
                  margin: 0 0 0.1em;;
                }
                #{id} .gallery-item:hover .caption {
                  opacity: 1;
                }
      
                /* Slide */
                #{id} .gallery-item .caption {
                    transform: translateY(100%);
                    transition: transform 0.5s ease, opacity 0.5s ease;
                }
                #{id} .gallery-item:hover .caption {
                    transform: translateY(0%);
                    opacity: 1;
                } 
                
                /* Caption Light */
                #{id} .gallery-item .caption {
                    background-color: #fff;
                    color: #000;
                }
      
                @media (max-width: 800px) {
                  #{id}.is-media-grid {column-count: 3;}
                }
                @media (max-width: 600px) {
                  #{id}.is-media-grid {column-count: 2;}
                }
                @media (max-width: 400px) {
                  #{id}.is-media-grid {column-count: 1;}
                }
      
                .gallery-item video {
                    height: auto; 
                    width: 100%;
                    object-fit: cover;
                }
                </div>
                <div id="{id}" class="is-media-grid grid-sortable" style="opacity:0">
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-011.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-011.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-026.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-026.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-005.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-005.jpg" alt="">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-007.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-007.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
      
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-037.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-037.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-014.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-014.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-027.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-027.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
      
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-008.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-008.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-030.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-030.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
      
      
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-013.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-013.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                  <div class="gallery-item">
                    <a href="[%IMAGE_PATH%]images/img-025.jpg" class="glightbox" data-title="My title" data-description="This is the description">
                      <img src="[%IMAGE_PATH%]images/img-025.jpg" alt="My title">
                      <div class="caption">
                        <h4>My title</h4>
                        <div>This is the description</div>
                      </div>
                    </a>
                  </div>
                </div>
                <script>
                var docReady = function(fn) {
                    var stateCheck = setInterval(function() {
                        if (document.readyState !== "complete") return;
                        clearInterval(stateCheck);
                        fn();
                    }, 1);
                };
      
                docReady(function() {
                  var cssElm = document.querySelector('#_style_{id}');
                  if(!cssElm) return;
                  var css = cssElm.innerHTML;
                  var head = document.getElementsByTagName('head')[0];
                  var s = document.createElement('style');
                  s.appendChild(document.createTextNode(css));
                  head.appendChild(s);
      
                  var grid = document.getElementById('{id}');
              
                  if (typeof GLightbox === 'undefined') {
                    var lightboxCss = document.createElement('link');
                    lightboxCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/css/glightbox.min.css';
                    lightboxCss.rel = 'stylesheet';
              
                    var lightboxJs = document.createElement('script');
                    lightboxJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/js/glightbox.min.js';
                    lightboxJs.onload = function() {
                      
                      const lightbox = GLightbox({
                          touchNavigation: true,
                          selector: '#{id} .glightbox',
                          loop: true,
                          autoplayVideos: true,
                          zoomable: true,
                          slideEffect: 'slide',
                          descPosition: 'bottom',
                          skin: 'light'
                      });
      
                      setTimeout(()=>{
                        grid.style.opacity = '';
                      }, 100);
           
                    };
              
                    document.head.appendChild(lightboxCss);
                    document.head.appendChild(lightboxJs);
                  } else {
                    const lightbox = GLightbox({
                        touchNavigation: true,
                        selector: '#{id} .glightbox',
                        loop: true,
                        autoplayVideos: true,
                        zoomable: true,
                        slideEffect: 'slide',
                        descPosition: 'bottom',
                        skin: 'light'
                    });
      
                    setTimeout(()=>{
                      grid.style.opacity = '';
                    }, 100);
      
                  }
              
                });
                </script>
              `)}" data-settings="${encodeURIComponent(`
                {
                  "gap": 10,
                  "cols": 4,
                  "rounded": 0,
                  "theme": "light",
                  "hover": "",
                  "captionPos": "bottom",
                  "captionEffect": "slide",
                  "captionTheme": "light",
                  "slideEffect": "slide",
                  "zoomable": "yes"
                }
              `)}">
                
              </div>
            </div>
            
          </div>
      `
        },
		/*
		// Top Bar Module Example
        {
            'thumbnail': 'preview/navbar-01.png',
            'category': '1',
            'googleFonts': [],
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
            'type': 'navbar',
            'html':
                `<div class="is-section is-section-navbar is-section-sticky is-section-auto is-box type-opensans" style="height:60px;background:transparent;">
                    <div class="is-overlay">
                        <div class="is-overlay-content content-selectable" data-module="main-menu" data-module-desc="Navigation Bar" data-dialog-width="570px" data-dialog-height="640px" 
						
						data-html="${encodeURIComponent(`

							<div id="{id}" class="main-menu" style="width:100vw;height:60px;display:flex;justify-content:center;align-items:center;background:#ddd">
								<div>Your Name</div>
							</div>
							<scr`+`ipt>
								var myMenu = document.querySelector('#{id}');
								console.log(myMenu);
							</scr`+`ipt>
						
						`)}" 
						
						data-settings="${encodeURIComponent(`
							
							{
								"logotext": "Your Name",
								"other": "somevalue"
							}

						`)}">
						</div>
					</div>
				</div>`
        },

		// Quiz Builder module Example (using section overlay)
		{
            'thumbnail': 'preview/navbar-01.png',
            'category': '1',
            'googleFonts': [],
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
            'type': 'navbar',
            'html':
                `<div class="is-section is-section-100 is-box type-opensans">
                    <div class="is-overlay">
                        <div class="is-overlay-content content-selectable" data-module="quiz-builder" data-module-desc="Quiz Builder" data-dialog-width="570px" data-dialog-height="640px" 
						
						data-html="${encodeURIComponent(`

							<h3>Your question here</h3>
							<div class="flex flex-col mt-4 mb-4">
								<label><input type="radio" name="answer{id}" value="One">One</label>
								<label><input type="radio" name="answer{id}" value="Two">Two</label>
								<label><input type="radio" name="answer{id}" value="Three">Three</label>
								<label><input type="radio" name="answer{id}" value="Four">Four</label>
							</div>
							<button id="{id}" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 border-current hover:border-current font-normal leading-14 rounded-full tracking-wide px-10" style="background-color: rgb(255, 255, 255);">Submit</button>

							<p id="result{id}"></p>

							<scr`+`ipt>
							(function() {
								let docReady = function(fn) {
									let stateCheck = setInterval(function() {
										if (document.readyState !== "complete") return;
										clearInterval(stateCheck);
										try {
											fn()
										} catch (e) {}
									}, 1);
								};
								docReady(function() {
									let btnSubmit = document.querySelector("#{id}");
									btnSubmit.addEventListener('click', ()=>{
										getSelectedChoice();
									});
								});
								function getSelectedChoice() {
									const radioButtons = document.getElementsByName("answer{id}");
									let selectedChoice = "";
									for (let i = 0; i < radioButtons.length; i++) {
										if (radioButtons[i].checked) {
										selectedChoice = radioButtons[i].value;
										break; // Exit the loop once a checked radio button is found
										}
									}
									if (selectedChoice !== "") {
										const divResult = document.querySelector("#result{id}");
										if(selectedChoice === 'Three') {
											divResult.innerHTML = 'Your answer: '+selectedChoice+'. <b>That is correct!</b>'
										} else {
											divResult.innerHTML = 'Your answer: '+selectedChoice+'. That is incorrect!'
										}
									} else {
										alert("No choice selected");
									}
								}
							})();
							</scr`+`ipt>
						
						`)}" 
						
						data-settings="${encodeURIComponent(`
								
							{
								"question": "Your question here",
								"choices": "One, Two, Three, Four",
								"answer": "Three"
							}

						`)}">
						</div>
					</div>
				</div>`
        },

		// Quiz Builder module Example (using block)
		{
            'thumbnail': 'preview/navbar-01.png',
            'category': '1',
            'googleFonts': [],
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
            'type': 'navbar',
            'html':
                `<div class="is-section is-box is-section-100 type-poppins box-autofit last-box">
					<div class="is-overlay"></div>
					<div class="is-container v2 is-content-1000 leading-14 size-18">
				
						<div class="row">
							<div class="column full" data-noedit data-module="quiz-builder" data-module-desc="Quiz Builder" data-html="${encodeURIComponent(`

									<h3>Your question here</h3>
									<div class="flex flex-col mt-4 mb-4">
										<label><input type="radio" name="answer{id}" value="One">One</label>
										<label><input type="radio" name="answer{id}" value="Two">Two</label>
										<label><input type="radio" name="answer{id}" value="Three">Three</label>
										<label><input type="radio" name="answe{id}" value="Four">Four</label>
									</div>
									<button id="{id}" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 border-current hover:border-current font-normal leading-14 rounded-full tracking-wide px-10" style="background-color: rgb(255, 255, 255);">Submit</button>

									<p id="result{id}"></p>

									<scr`+`ipt>
									(function() {
										let docReady = function(fn) {
											let stateCheck = setInterval(function() {
												if (document.readyState !== "complete") return;
												clearInterval(stateCheck);
												try {
													fn()
												} catch (e) {}
											}, 1);
										};
										docReady(function() {
											let btnSubmit = document.querySelector("#{id}");
											btnSubmit.addEventListener('click', ()=>{
												getSelectedChoice();
											});
										});
										function getSelectedChoice() {
											const radioButtons = document.getElementsByName("answer{id}");
											let selectedChoice = "";
											for (let i = 0; i < radioButtons.length; i++) {
												if (radioButtons[i].checked) {
												selectedChoice = radioButtons[i].value;
												break; // Exit the loop once a checked radio button is found
												}
											}
											if (selectedChoice !== "") {
												const divResult = document.querySelector("#result{id}");
												if(selectedChoice === 'Three') {
													divResult.innerHTML = 'Your answer: '+selectedChoice+'. <b>That is correct!</b>'
												} else {
													divResult.innerHTML = 'Your answer: '+selectedChoice+'. That is incorrect!'
												}
											} else {
												alert("No choice selected");
											}
										}
									})();
									</scr`+`ipt>

								`)}" 
								
								data-settings="${encodeURIComponent(`
									
									{
										"question": "Your question here",
										"choices": "One, Two, Three, Four",
										"answer": "Three"
									}

								`)}">
							</div>
						</div>

					</div>
				</div>`
        },
		*/

		{
		    'thumbnail': 'preview/simple-04.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-container v2 leading-14 size-18 is-content-1360">

					<div class="row relative sm-items-1">
						<div class="py-6 flex flex-col justify-center items-start column">
							<h1 class="leading-none font-normal size-76">We create simple and effective designs.</h1>
							<div class="spacer height-40"></div>
							<p style="max-width: 500px;">Our designs are carefully crafted to deliver maximum impact and simplicity. We believe that less is more, and our designs reflect that philosophy.</p>

							<div class="spacer height-20"></div>

							<div class="button-group">
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide mt-3" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide mt-3" title="">Get in Touch</a>
							</div>
						</div>
						<div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/img-010.jpg" alt="" data-filename="img-010.jpg"></div>

					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-06.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
	<div class="is-container v2 size-16 is-content-1300 leading-13">
		<div class="row">
			<div class="column">
				<h2 class="text-center size-48 font-extralight">Our Works</h2>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-80"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<img src="[%IMAGE_PATH%]images/img-039.jpg" alt="" data-filename="img-039.jpg">
				<p>Explore our impressive collection of projects that showcase our expertise.</p>
			</div>
			<div class="column">
				<img src="[%IMAGE_PATH%]images/img-012.jpg" alt="" data-filename="img-012.jpg">
				<p>Discover the innovative solutions we have developed to meet our clients' needs.</p>
			</div>
			<div class="column">
				<img src="[%IMAGE_PATH%]images/img-015.jpg" alt="" data-filename="img-015.jpg">
				<p>See how we have helped businesses thrive with our creative strategies and designs.</p>
			</div>
		</div>
	</div>
</div>
`
		},
		{
		    'thumbnail': 'preview/simple-08.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
	<div class="is-overlay"></div>
	<div class="is-container v2 size-16 leading-13 is-content-1200">
		<div class="row">
			<div style="min-height: 54px;" class="column">
				<h2 class="text-center size-48 font-light tracking-wide">What Makes Us Different</h2>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-120"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">

				<h3 class="font-normal tracking-wider size-21">Feature One</h3>
				<p style="color: rgb(123, 123, 123);">Our innovative approach revolutionizes the industry.</p>
			</div>
			<div class="column">

				<h3 class="font-normal tracking-wider size-21">Feature Two</h3>
				<p style="color: rgb(123, 123, 123);">We redefine the standards of quality and excellence.</p>
			</div>
			<div class="column">

				<h3 class="font-normal tracking-wider size-21">Feature Three</h3>
				<p style="color: rgb(123, 123, 123);">Our cutting-edge technology sets us apart from the competition.</p>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-40"></div>
			</div>

		</div>
	</div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-05.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
        <div class="is-box is-box-6 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
			<div class="is-container v2 size-17 leading-13 is-content-640">
				<div class="row">
					<div class="column">
						<h1 class="leading-none size-68 font-extralight">Learn Anytime, Anywhere, and Grow Your Skills</h1>
					</div>

				</div>
				<div class="row">
					<div class="column">
						<div class="spacer height-20"></div>
					</div>

				</div>
				<div class="row">
					<div class="column">
						<p>Discover new horizons and enhance your skills with our comprehensive learning platform.</p>
					</div>

				</div>
				<div class="row">
					<div class="column">
						<div class="spacer height-20"></div>
					</div>

				</div>
				<div class="row">
					<div class="column">
						<div>
							<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-75" title="" style="background-color: rgb(240, 240, 240);">Get Started</a>
							<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full size-15 tracking-widest" title="">Explore</a>
						</div>
					</div>

				</div>
			</div>
        </div>
        <div class="is-box is-box-6 is-content-top box-autofit min-height-60">
            <div class="is-overlay">
                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-010.jpg&quot;); background-position: 50% 60%;"></div>
            </div>
        </div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-03.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-box is-box-6 box-autofit">
					<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
					</div>
					<div class="is-container v2 size-17 leading-13 is-content-540">

						<div class="row">
							<div class="column">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
							</div>

						</div>
					</div>
				</div>
				<div class="is-box is-box-6 box-autofit">
					<div class="is-overlay">
					</div>
					<div class="is-container v2 size-17 leading-13 is-content-540">
						<div class="row">
							<div class="column">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type.</p>

							</div>

						</div>
					</div>
				</div>
			</div>
			`
		},


		{
		    'thumbnail': 'preview/simple-07.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
	<div class="is-container v2 leading-13 size-16 is-content-1000">
		<div class="row">
			<div class="column">
				<h2 class="text-center tracking-wide size-48 font-extralight">Meet Our Team</h2>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-80"></div>
			</div>
		</div>
		<div class="row">
			<div class="flex flex-col justify-center items-center column px-3">
				<div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-019.jpg" alt="" data-filename="img-019.jpg"></div>
				<div class="spacer height-20"></div>
				<p class="size-19 font-light text-center">Freja E. Andersen</p>
				<p style="color: rgb(109, 109, 109);" class="text-center">Freja is a front-end developer with a passion for creating visually stunning websites.</p>
			</div>
			<div class="flex flex-col justify-center items-center column px-3">
				<div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-022.jpg" alt="" data-filename="img-022.jpg"></div>
				<div class="spacer height-20"></div>
				<p class="size-19 font-light text-center">Emilie Petersen</p>
				<p style="color: rgb(109, 109, 109);" class="text-center">Emilie is a UI/UX designer with a passion for creating beautiful and intuitive user interfaces.</p>
			</div>
			<div class="flex flex-col justify-center items-center column px-3">
				<div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-006.jpg" alt="" data-filename="img-006.jpg"></div>
				<div class="spacer height-20"></div>
				<p class="size-19 font-light text-center">Vincent Nelson</p>
				<p style="color: rgb(109, 109, 109);" class="text-center">Vincent is a full stack developer with a passion for building robust and scalable web applications.</p>
			</div>
		</div>
	</div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-10.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-section-100 is-dark-text type-poppins box-autofit">
    <div class="is-overlay"></div>
	<div class="is-container v2 is-content-1600 size-17 leading-13">
		<div class="row sm-autofit">
			<div class="sm-hidden column">
				<div class="spacer height-80"></div>
			</div>
			<div class="column" style="width: 50%; flex: 0 0 auto;">
				<h3 class="text-center size-32 font-light">We deliver extraordinary things.</h3>
				<p class="text-center" style="color: rgb(109, 109, 109);">Our innovative solutions have revolutionized the industry, providing unparalleled experiences for our customers.</p>
			</div>
			<div class="sm-hidden column">
				<div class="spacer height-80"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-40"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<img src="[%IMAGE_PATH%]images/img-011.jpg" alt="" data-filename="img-011.jpg">
			</div>
			<div class="column">
				<img src="[%IMAGE_PATH%]images/img-038.jpg" alt="" data-filename="img-038.jpg">
			</div>

		</div>
	</div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-09.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
	<div class="is-overlay"></div>
	<div class="is-container v2 size-18 leading-14 is-content-640">
		<div class="row">

			<div class="column">
				<h1 class="text-center leading-none size-80 font-extralight">Words From Heart</h1>
				<div class="spacer height-20"></div>
				<p class="text-center uppercase tracking-125 size-14" style="color: rgb(145, 145, 145);">By Selma Laursen</p>
				<div class="spacer height-20"></div>
			</div>

		</div>
		<div class="row">

			<div class="column">
				<p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;</p>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-60"></div>
			</div>

		</div>
		<div class="row">

			<div class="flex flex-col justify-center items-start column">
				<p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;</p>
				<p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
			</div>

		</div>
	</div>
</div>
`
		},
		{
		    'thumbnail': 'preview/simple-16.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 box-space type-poppins">
	<div class="is-box is-box-7 box-autofit min-height-70">
		<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-022.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
		</div>
	</div>
	<div class="is-box is-dark-text is-box-5 is-content-bottom box-autofit is-content-bottom edge-y-0-75">
		<div class="is-overlay"></div>
		<div class="is-container v2 is-content-left edge-x-0 is-content-660 size-17 leading-13">
			<div class="row">
				<div class="column">
					<h2 class="size-32 text-left font-normal">About</h2>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<p class="text-justify">Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
				</div>
			</div>
		</div>
	</div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-12.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
    <div class="is-overlay"></div>
	<div class="is-container v2 size-16 leading-13 is-content-1600">
		<div class="row">
			<div class="column">
				<h2 class="size-48 leading-none">Portfolio</h2>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-40"></div>
			</div>
		</div>
		<div class="row sm-items-3 md-items-3 xs-items-2">
			<div class="column">
				<h3 class="tracking-wider size-24 font-semibold">Project One</h3>
				<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/img-012.jpg" alt="" data-filename="img-678x904.png">
			</div>
			<div class="column">
				<h3 class="tracking-wider size-24 font-semibold">Project Two</h3>
				<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/img-014.jpg" alt="" data-filename="img-014.jpg">
			</div>
			<div class="column">
				<h3 class="tracking-wider size-24 font-semibold">Project Three</h3>
				<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/img-005.jpg" alt="" data-filename="img-005.jpg">
			</div>
			<div class="column">
				<h3 class="tracking-wider size-24 font-semibold">Project Four</h3>
				<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/img-024.jpg" alt="" data-filename="img-024.jpg">
			</div>
		</div>
	</div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-11.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box is-dark-text is-box-4 box-autofit min-height-40">
		<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-480">
			<div class="row">
				<div class="column">
					<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box is-box-4 box-autofit min-height-40">
		<div class="is-overlay" style="background-color: rgb(240, 240, 240);">
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-480">
			<div class="row">
				<div class="column">
					<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box-4 is-box is-dark-text box-autofit min-height-40">
		<div class="is-overlay">
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-480">
			<div class="row">
				<div class="column">
					<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
	</div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-13.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-dark-text type-poppins is-section-25">
    <div class="is-overlay"></div>
	<div class="is-container v2 size-17 leading-13 is-content-left edge-x-0-5 is-content-800">
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<h2 class="font-normal tracking-wider text-left size-35 leading-11">We deliver extraordinary things.</h2>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>
		</div>
	</div>
</div>
<div class="is-section is-box type-opensans is-section-75 min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-035.jpg&quot;); background-position: 50% 60%;"></div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-15.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
	<div class="is-overlay"></div>
	<div class="is-container v2 is-content-1160 size-17 leading-13">
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="display">
					<p style="letter-spacing: 3px;" class="size-14 uppercase font-medium">your name here</p>
				</div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<h1 class="size-116 tracking-tighter text-left normal-case leading-none font-normal">Hi there, I design &amp; build highly-crafted brands &amp; websites</h1>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<p>My passion is to design and build unique brands and websites that leave a lasting impression. With 5 years of experience, I strive to create visually appealing and highly functional designs that meet my clients' needs.</p>
			</div>
			<div class="column">
				<div class="spacer height-80"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="text-left button-group">
					<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">Portfolio</a>
					<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
				</div>
			</div>

		</div>
	</div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-14.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 box-space type-poppins md-boxes-1 md-boxes-wrap stack-top">
	<div class="is-box is-dark-text is-box-3 box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-420">
			<div class="row">
				<div class="column">
					<h2 class="size-32 font-normal">We deliver extraordinary things.</h2>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<div class="spacer height-20"></div>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<p class="text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<p class="text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box is-box-9 box-autofit min-height-60">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-006.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
		</div>
	</div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-18.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-dark-text is-section-100 type-poppins box-autofit">
	<div class="is-overlay"></div>
	<div class="is-container v2 is-content-1320 leading-13 size-17">
		<div class="row">
			<div class="column" style="width: 36.7206%; flex: 0 0 auto;">
				<h2 class="size-42 font-normal">Fascinating Places, Great Journey.</h2>
				<p class="size-18" style="color: rgb(145, 145, 145);">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
			</div>
			<div class="column xs-hidden">
				<div class="spacer height-80"></div>
			</div>
		</div>
		<div class="row sm-autofit">
			<div class="column xs-hidden sm-hidden">
				<div class="spacer height-180"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
			</div>
			<div class="column">
				<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
			</div>
			<div class="column">
				<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
			</div>
		</div>
	</div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-17.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box type-opensans is-section-75 box-space box-space-xxs min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-009.jpg&quot;); background-position: 50% 60%;"></div>
    </div>
</div>
<div class="is-section is-box is-dark-text type-poppins is-section-25">
    <div class="is-overlay"></div>
	<div class="is-container v2 size-17 leading-13 is-content-800 content-pt-10">
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<h2 class="size-32 font-normal tracking-wider text-left leading-11">We deliver extraordinary things.</h2>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<p class="size-16 text-left">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
			</div>
		</div>
	</div>
</div>
			`
		},
		{
		    'thumbnail': 'preview/simple-19.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-dark-text is-section-100 type-poppins box-autofit">
	<div class="is-overlay"></div>
	<div class="is-container v2 is-content-1220 size-17 leading-13">
		<div class="row">
			<div class="column" style="width: 76%; flex: 0 0 auto;">
				<h2 class="size-160 text-left font-medium">About:</h2>
				<p class="size-24 font-normal" style="color: rgb(138, 138, 138);">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</p>
			</div>
			<div class="column">
				<div class="spacer height-80"></div>
			</div>
		</div>
		<div class="row">
			<div class="column sm-hidden">
				<div class="spacer height-160"></div>
			</div>
		</div>
		<div class="row sm-autofit">
			<div class="column sm-hidden">
				<div class="spacer height-80"></div>
			</div>
			<div class="column">
				<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
			</div>
			<div class="column">
				<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
			</div>
		</div>
	</div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-22.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 type-poppins box-space box-space-xxs">
	<div class="is-box is-box-6 is-light-text hover-zoom box-autofit min-height-60 is-content-top edge-y-1">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-016.jpg&quot;); background-position: 50% 60%;">
				<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-480">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="font-light text-center">Item One</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="is-box is-box-6 hover-zoom box-autofit min-height-60 is-content-top edge-y-1 is-light-text">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-002.jpg&quot;); background-position: 50% 60%;">
				<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-480">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="font-light text-center">Item Two</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`
		},
		

		{
		    'thumbnail': 'preview/simple-23.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-50 box-space box-space-xxs type-opensans stack-top">
	<div class="is-box is-box-4 hover-zoom is-light-text">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-028.jpg&quot;); background-position: 50% 60%;">
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="text-center">Title One</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="is-box is-box-4 hover-zoom is-light-text">
		<div class="is-overlay" style="background-color: rgb(231 230 223);">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-026.jpg&quot;); background-position: 50% 60%;">
				<div class="is-overlay-color opacity-6"></div>
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="text-center">Title Two</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="is-box is-box-4 hover-zoom is-light-text">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-008.jpg&quot;); background-position: 50% 39%;">
				<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="text-center">Title Three</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="is-section is-section-50 box-space box-space-xxs type-opensans stack-middle">
	<div class="is-box is-box-4 hover-zoom">
		<div class="is-overlay" style="background-color: rgb(228 226 226);">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-029.jpg&quot;); background-position: 50% 60%;"></div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="text-center">Title Four</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="is-box is-box-4 hover-zoom is-light-text">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-004.jpg&quot;); background-position: 50% 60%;">
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="text-center">Title Five</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="is-box is-box-4 hover-zoom is-light-text">
		<div class="is-overlay" style="background-color: rgb(234 229 223);">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-031.jpg&quot;); background-position: 50% 60%;">
				<div class="is-overlay-color opacity-0"></div>
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="text-center">Title Six</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 font-normal leading-12 border-transparent rounded-full size-17 tracking-wide hover:border-transparent" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
`
		},


		{
		    'thumbnail': 'preview/simple-20.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins">
	<div class="is-overlay"></div>
	<div class="is-container v2 is-content-1300 size-18 leading-13">
		<div class="row">
			<div class="column">
				<h2 class="size-60 text-center font-light">FAQ</h2>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-140"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<h3 class="font-normal size-28">How do we get started?</h3>
				<div class="spacer height-20"></div>
				<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			</div>
			<div class="column">
				<h3 class="size-28 font-normal">What areas do you serve?</h3>
				<div class="spacer height-20"></div>
				<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-40"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<h3 class="size-28 font-normal">How long will our project take?</h3>
				<div class="spacer height-20"></div>
				<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			</div>
			<div class="column">
				<h3 class="size-28 font-normal">Do you offer free consultations?</h3>
				<div class="spacer height-20"></div>
				<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
			</div>
		</div>
	</div>
</div>
			`
		},
		{
		    'thumbnail': 'preview/simple-21.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section type-poppins is-section-100 box-space box-space-xxs">
	<div class="is-box is-box-4 hover-zoom is-content-bottom edge-y-1">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-013.jpg&quot;); background-position: 50% 60%;"></div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-none" style="padding: 0;margin-bottom: 0;">
			<div class="row row-lock">
				<div class="column column-lock full py-7 px-12" style="background-color: rgb(255, 255, 255); min-height: 228.446px;">
					<h3 class="font-light text-center">Title Three</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box is-box-4 hover-zoom is-content-bottom edge-y-1">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-037.jpg&quot;); background-position: 50% 60%;"></div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-none" style="padding: 0;margin-bottom: 0;">
			<div class="row row-lock">
				<div class="column column-lock full py-7 px-12" style="min-height: 228.446px; background-color: rgb(255, 255, 255);">
					<h3 class="font-light text-center">Title Two</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box is-box-4 hover-zoom is-content-bottom edge-y-1">
		<div class="is-overlay">
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-007.jpg&quot;); background-size: cover;"></div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-none" style="padding: 0;margin-bottom: 0;">
			<div class="row row-lock">
				<div class="column column-lock full py-7 px-12" style="background-color: rgb(255, 255, 255); min-height: 228.446px;">
					<h3 class="font-light text-center">Title Three</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
		`
		},

	
		
		
		/* SLIDER */

		{
		    'thumbnail': 'preview/slider-01.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins is-light-text box-autofit min-height-60">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
						<div id="{id}" class="glide cover" style="display:none">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/img-030.jpg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/img-025.jpg" alt=""></div>
									</li>
								</ul>
							</div>
							<div class="glide__arrows" data-glide-el="controls">
								<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
									</svg>
								</button>
								<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
									</svg>
								</button>
							</div>
						</div>
						<script>
							var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
								'<defs>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
										'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
									'</symbol>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
										'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
									'</symbol>' +
								'</defs>' +
							'</svg>';
							var pre = document.querySelector('#ion-ios-arrow-left');
							if(!pre) {
								document.body.insertAdjacentHTML('beforeend', svgDef);
							}
							
							var docReady = function(fn) {
								var stateCheck = setInterval(function() {
									//if (typeof Glide === 'undefined') return;
									var waitSlider = false;
									if(typeof Glide !== 'undefined') {
										if((new Glide).mount) {
											// Do Nothing 
										}  else {
											waitSlider = true;
										}
									} else {
										waitSlider = true;
									}
									if(waitSlider) return;
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
		
									clearInterval(stateCheck);
									try {
										fn();
									} catch (e) {}
								}, 1);
							};
							docReady(function() {
								const glideSlide = document.querySelector("#{id}");
								if(!glideSlide) return;
								glideSlide.style.display="";

								var _{id} = new Glide("#{id}", {
									type: "carousel",
									autoplay: false,
									animationDuration: 1000,
									gap: 0,
									perView: 1,
									hoverpause: false,
									arrow: true,
									dots: false,
									breakpoints: {
										970: {
											perView: 1,
											gap: 0
										}
									},
								}).mount();

								const glideElement = {id};
								let isSliderRunning = false;
								const manageSliderVisibility = (entries) => {
									if (entries[0].isIntersecting) {
										if (!isSliderRunning) {
											_{id}.update({ autoplay: 3000 });
											isSliderRunning = true;
										}
									} else {
										if (isSliderRunning) {
											_{id}.update({ autoplay: false }); 
											isSliderRunning = false;
										}
									}
								}
								const observer = new IntersectionObserver(manageSliderVisibility, { threshold: 0.5 });
								observer.observe(glideElement);
								
							});
						</script>
					`)}" data-settings="${encodeURIComponent(`
						{
							"type": "carousel",
							"autoplay": 3000,
							"animationDuration":1000,
							"gap":0,
							"perView":1,
							"hoverpause": false,
							"arrow":true,
							"dots":false,
							"fit":"cover",
							"images":
								[
									{
										"src": "[%IMAGE_PATH%]images/img-030.jpg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/img-025.jpg", 
										"caption": "", "style": ""
									}
								]
						}
					`)}">
						
					</div>
				</div>
				<div class="is-container v2 size-17 leading-13 is-content-960 is-content-left edge-x-4">

					<div class="row">
						<div class="column">
							<h1 class="text-center font-normal leading-11 size-72">We Create Simple and Effective Designs</h1>
						</div>

					</div>
					<div class="row">
						<div class="column">
							<div class="spacer height-40"></div>
						</div>

					</div>
					<div class="row">
						<div class="column">
							<div class="text-center button-group">
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded-full" title="" style="color: rgb(255, 255, 255);">Our Works</a>
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full size-18 tracking-wide hover:border-transparent" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Get in Touch</a>
							</div>
						</div>

					</div>
				</div>
			</div>
`
		},
		{
		    'thumbnail': 'preview/slider-02.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-660">

			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 text-left size-72">We Create Simple and Effective Designs</h1>
				</div>

			</div>
			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>

			</div>

			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>

			</div>

		</div>
	</div>
	<div class="is-box-6 is-box is-align-left is-light-text is-content-top box-autofit min-height-60">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
				<div id="{id}" class="glide cover" style="display:none">
					<div data-glide-el="track" class="glide__track">
						<ul class="glide__slides">
							<li class="glide__slide">
								<div><img src="[%IMAGE_PATH%]images/img-020.jpg" alt=""></div>
							</li>
							<li class="glide__slide">
								<div><img src="[%IMAGE_PATH%]images/img-021.jpg" alt=""></div>
							</li>
						</ul>
					</div>
					<div class="glide__arrows" data-glide-el="controls">
						<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
							<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
							</svg>
						</button>
						<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
							<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
							</svg>
						</button>
					</div>
				</div>
				<script>
					var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
						'<defs>' +
							'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
								'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
							'</symbol>' +
							'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
								'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
							'</symbol>' +
						'</defs>' +
					'</svg>';
					var pre = document.querySelector('#ion-ios-arrow-left');
					if(!pre) {
						document.body.insertAdjacentHTML('beforeend', svgDef);
					}
					
					var docReady = function(fn) {
						var stateCheck = setInterval(function() {
							//if (typeof Glide === 'undefined') return;
							var waitSlider = false;
							if(typeof Glide !== 'undefined') {
								if((new Glide).mount) {
									// Do Nothing 
								}  else {
									waitSlider = true;
								}
							} else {
								waitSlider = true;
							}
							if(waitSlider) return;
							if (typeof skrollrr === 'undefined') return;
							if (typeof skrollrr.lax === 'undefined') return;

							clearInterval(stateCheck);
							try {
								fn();
							} catch (e) {}
						}, 1);
					};
					docReady(function() {
						const glideSlide = document.querySelector("#{id}");
						if(!glideSlide) return;
						glideSlide.style.display="";

						var _{id} = new Glide("#{id}", {
							type: "carousel",
							autoplay: false,
							animationDuration: 1000,
							gap: 0,
							perView: 1,
							hoverpause: false,
							arrow: true,
							dots: false,
							breakpoints: {
								970: {
									perView: 1,
									gap: 0
								}
							},
						}).mount();

						const glideElement = {id};
						let isSliderRunning = false;
						const manageSliderVisibility = (entries) => {
							if (entries[0].isIntersecting) {
								if (!isSliderRunning) {
									_{id}.update({ autoplay: 3000 });
									isSliderRunning = true;
								}
							} else {
								if (isSliderRunning) {
									_{id}.update({ autoplay: false }); 
									isSliderRunning = false;
								}
							}
						}
						const observer = new IntersectionObserver(manageSliderVisibility, { threshold: 0.5 });
						observer.observe(glideElement);

					});
				</script>
			`)}" data-settings="${encodeURIComponent(`
				{
					"type": "carousel",
					"autoplay": 3000,
					"animationDuration":1000,
					"gap":0,
					"perView":1,
					"hoverpause": false,
					"arrow":true,
					"dots":false,
					"fit":"cover",
					"images":
						[
							{
								"src": "[%IMAGE_PATH%]images/img-020.jpg", 
								"caption": "", "style": ""
							},
							{
								"src": "[%IMAGE_PATH%]images/img-021.jpg", 
								"caption": "", "style": ""
							}
						]
				}
			`)}">
				
			</div>
		</div>
	</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/slider-03.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-align-left is-light-text is-content-top box-autofit min-height-60">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
				<div id="{id}" class="glide cover" style="display:none">
					<div data-glide-el="track" class="glide__track">
						<ul class="glide__slides">
							<li class="glide__slide">
								<div><img src="[%IMAGE_PATH%]images/img-017.jpg" alt=""></div>
							</li>
							<li class="glide__slide">
								<div><img src="[%IMAGE_PATH%]images/img-033.jpg" alt=""></div>
							</li>
						</ul>
					</div>
					<div class="glide__arrows" data-glide-el="controls">
						<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
							<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
							</svg>
						</button>
						<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
							<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
							</svg>
						</button>
					</div>
				</div>
				<script>
					var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
						'<defs>' +
							'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
								'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
							'</symbol>' +
							'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
								'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
							'</symbol>' +
						'</defs>' +
					'</svg>';
					var pre = document.querySelector('#ion-ios-arrow-left');
					if(!pre) {
						document.body.insertAdjacentHTML('beforeend', svgDef);
					}
					
					var docReady = function(fn) {
						var stateCheck = setInterval(function() {
							//if (typeof Glide === 'undefined') return;
							var waitSlider = false;
							if(typeof Glide !== 'undefined') {
								if((new Glide).mount) {
									// Do Nothing 
								}  else {
									waitSlider = true;
								}
							} else {
								waitSlider = true;
							}
							if(waitSlider) return;
							if (typeof skrollrr === 'undefined') return;
							if (typeof skrollrr.lax === 'undefined') return;

							clearInterval(stateCheck);
							try {
								fn();
							} catch (e) {}
						}, 1);
					};
					docReady(function() {
						const glideSlide = document.querySelector("#{id}");
						if(!glideSlide) return;
						glideSlide.style.display="";

						var _{id} = new Glide("#{id}", {
							type: "carousel",
							autoplay: false,
							animationDuration: 1000,
							gap: 0,
							perView: 1,
							hoverpause: false,
							arrow: true,
							dots: false,
							breakpoints: {
								970: {
									perView: 1,
									gap: 0
								}
							},
						}).mount();

						const glideElement = {id};
						let isSliderRunning = false;
						const manageSliderVisibility = (entries) => {
							if (entries[0].isIntersecting) {
								if (!isSliderRunning) {
									_{id}.update({ autoplay: 3000 });
									isSliderRunning = true;
								}
							} else {
								if (isSliderRunning) {
									_{id}.update({ autoplay: false }); 
									isSliderRunning = false;
								}
							}
						}
						const observer = new IntersectionObserver(manageSliderVisibility, { threshold: 0.5 });
						observer.observe(glideElement);

					});
				</script>
			`)}" data-settings="${encodeURIComponent(`
				{
					"type": "carousel",
					"autoplay": 3000,
					"animationDuration":1000,
					"gap":0,
					"perView":1,
					"hoverpause": false,
					"arrow":true,
					"dots":false,
					"fit":"cover",
					"images":
						[
							{
								"src": "[%IMAGE_PATH%]images/img-017.jpg", 
								"caption": "", "style": ""
							},
							{
								"src": "[%IMAGE_PATH%]images/img-033.jpg", 
								"caption": "", "style": ""
							}
						]
				}
			`)}">
				
			</div>
		</div>
	</div>
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-660">

			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 text-left size-72">We Create Simple and Effective Designs</h1>
				</div>

			</div>
			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>

			</div>

			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>

			</div>

		</div>
	</div>
</div>
`
		},

		{
		    'thumbnail': 'preview/slider-04.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
<div class="is-section is-box is-align-left is-light-text type-opensans is-section-70">
	<div class="is-overlay">
		<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
			<div id="{id}" class="glide cover" style="display:none">
				<div data-glide-el="track" class="glide__track">
					<ul class="glide__slides">
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-017.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-033.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-020.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-018.jpg" alt=""></div>
						</li>
					</ul>
				</div>
				<div class="glide__arrows" data-glide-el="controls">
					<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
						<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
						</svg>
					</button>
					<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
						<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
						</svg>
					</button>
				</div>
			</div>
			<script>
				var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
					'<defs>' +
						'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
							'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
						'</symbol>' +
						'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
							'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
						'</symbol>' +
					'</defs>' +
				'</svg>';
				var pre = document.querySelector('#ion-ios-arrow-left');
				if(!pre) {
					document.body.insertAdjacentHTML('beforeend', svgDef);
				}
				
				var docReady = function(fn) {
					var stateCheck = setInterval(function() {
						//if (typeof Glide === 'undefined') return;
						var waitSlider = false;
						if(typeof Glide !== 'undefined') {
							if((new Glide).mount) {
								// Do Nothing 
							}  else {
								waitSlider = true;
							}
						} else {
							waitSlider = true;
						}
						if(waitSlider) return;
						if (typeof skrollrr === 'undefined') return;
						if (typeof skrollrr.lax === 'undefined') return;

						clearInterval(stateCheck);
						try {
							fn();
						} catch (e) {}
					}, 1);
				};
				docReady(function() {
					const glideSlide = document.querySelector("#{id}");
					if(!glideSlide) return;
					glideSlide.style.display="";

					var _{id} = new Glide("#{id}", {
						type: "carousel",
						autoplay: false,
						animationDuration: 1000,
						gap: 0,
						perView: 3,
						hoverpause: false,
						arrow: true,
						dots: false,
						breakpoints: {
							970: {
								perView: 1,
								gap: 0
							}
						},
					}).mount();

					const glideElement = {id};
					let isSliderRunning = false;
					const manageSliderVisibility = (entries) => {
						if (entries[0].isIntersecting) {
							if (!isSliderRunning) {
								_{id}.update({ autoplay: 3000 });
								isSliderRunning = true;
							}
						} else {
							if (isSliderRunning) {
								_{id}.update({ autoplay: false }); 
								isSliderRunning = false;
							}
						}
					}
					const observer = new IntersectionObserver(manageSliderVisibility, { threshold: 0.5 });
					observer.observe(glideElement);

				});
			</script>
		`)}" data-settings="${encodeURIComponent(`
			{
				"type": "carousel",
				"autoplay": 3000,
				"animationDuration":1000,
				"gap":0,
				"perView":3,
				"hoverpause": false,
				"arrow":true,
				"dots":false,
				"fit":"cover",
				"images":
					[
						{
							"src": "[%IMAGE_PATH%]images/img-017.jpg", 
							"caption": "", "style": ""
						},
						{
							"src": "[%IMAGE_PATH%]images/img-033.jpg", 
							"caption": "", "style": ""
						},
						{
							"src": "[%IMAGE_PATH%]images/img-020.jpg", 
							"caption": "", "style": ""
						},
						{
							"src": "[%IMAGE_PATH%]images/img-018.jpg", 
							"caption": "", "style": ""
						}
					]
			}
		`)}">
			
		</div>
	</div>
</div>
`
		},
		
		{
		    'thumbnail': 'preview/slider-05.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
<div class="is-section is-box type-poppins is-section-50 box-autofit">
	<div class="is-overlay"></div>
	<div class="is-container v2 is-content-700 leading-14 size-18">
		<div class="row">
			<div class="column">
				<h1 class="normal-case font-light size-48 text-center">Designing and building highly-crafted brands and websites.</h1>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-20"></div>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="text-center button-group">
					<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125">Read More</a>
					<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" style="background-color: rgb(240, 240, 240);">Get Started</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="is-section is-section-50 is-box is-align-left type-poppins is-light-text section-flow">
	<div class="is-overlay">
		<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="coverflow-box" data-module-desc="Coverflow" data-html="${encodeURIComponent(`
			<div id="{id}" class="glide cover coverflow" style="display:none">
				<div data-glide-el="track" class="glide__track">
					<ul class="glide__slides">
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-017.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-033.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-020.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-036.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-032.jpg" alt=""></div>
						</li>
						<li class="glide__slide">
							<div><img src="[%IMAGE_PATH%]images/img-003.jpg" alt=""></div>
						</li>
					</ul>
				</div>
				<div class="glide__arrows" data-glide-el="controls">
					<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
						<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
						</svg>
					</button>
					<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
						<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
						</svg>
					</button>
				</div>
			</div>
			<script>
				var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
					'<defs>' +
						'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
							'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
						'</symbol>' +
						'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
							'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
						'</symbol>' +
					'</defs>' +
				'</svg>';
				var pre = document.querySelector('#ion-ios-arrow-left');
				if(!pre) {
					document.body.insertAdjacentHTML('beforeend', svgDef);
				}
				
				var docReady = function(fn) {
					var stateCheck = setInterval(function() {
						//if (typeof Glide === 'undefined') return;
						var waitSlider = false;
						if(typeof Glide !== 'undefined') {
							if((new Glide).mount) {
								// Do Nothing 
							}  else {
								waitSlider = true;
							}
						} else {
							waitSlider = true;
						}
						if(waitSlider) return;
						if (typeof skrollrr === 'undefined') return;
						if (typeof skrollrr.lax === 'undefined') return;

						clearInterval(stateCheck);
						try {
							fn();
						} catch (e) {}
					}, 1);
				};
				docReady(function() {
					const glideSlide = document.querySelector("#{id}");
					if(!glideSlide) return;
					glideSlide.style.display="";

					const glideSlides = document.querySelectorAll('#{id} .glide__slide');

					const perView = 3;

					glideSlides.forEach(slide=>{
						let video = slide.querySelector('video');
						if(video) changeVideo(video);
					});

					window.addEventListener('resize', ()=>{
						glideSlides.forEach(slide=>{
							let video = slide.querySelector('video');
							if(video) changeVideo(video);
						});
					});

					function changeVideo(video) {
						if(!video) return;
						let changed=false;
						let source = video.querySelector('source');
						let vidDefault = source.getAttribute('data-default');
						let vid240 = source.getAttribute('data-240');
						let vid360 = source.getAttribute('data-360');
						let vid480 = source.getAttribute('data-480');
						let vid540 = source.getAttribute('data-540');
						let vid720 = source.getAttribute('data-720');
						let vid1080 = source.getAttribute('data-1080');
						let vid1440 = source.getAttribute('data-1440');
						let vid2160 = source.getAttribute('data-2160');
						let vW = window.innerWidth;
						if(vW<=426) {
							if(vid240) {
								if(source.getAttribute('src')!==vid240) {
									source.setAttribute('src', vid240);changed=true;
								} else return;
							}
							else if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (426<vW && vW<=640) {
							if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (640<vW && vW<=854) {
							if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (854<vW && vW<=960) {
							if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (vW>960 && vW<=1280) {
							if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (1280<vW && vW<=1920) {
							if(vid1080) {
								if(source.getAttribute('src')!==vid1080) {
									source.setAttribute('src', vid1080);changed=true;
								} else return;
							}
						} else if (1920<vW && vW<=2560) {
							if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						} else if (2560<vW) {
							if(vid2160) {
								if(source.getAttribute('src')!==vid2160) {
									source.setAttribute('src', vid2160);changed=true;
								} else return;
							}
							else if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						}
						
						if(changed) {
							video.pause();
							video.currentTime = 0;
							video.load();
							if(video.closest('.play')) {
								video.play();
							}
						} else {
							if(source.getAttribute('src')!==vidDefault) {
								video.pause();
								video.currentTime = 0;
								source.setAttribute('src', vidDefault);
								video.load();
							} 
						}
					}

					function stopVideo(slide) {
						const video = slide.querySelector('video');
						if(video) {
							video.pause();
							video.currentTime = 0;
						}
						slide.classList.remove('active');
						slide.classList.remove('play');
					}

					function playVideo(slide) {
						let video = slide.querySelector('video');
						if(video) {
							video.play();
						}
						slide.classList.add('play');
					}
					
					function coverflow(index) {
						let activeSlide = glideSlides[index];
						let nextSlide = activeSlide.nextElementSibling;
						let next2Slide;
						if(nextSlide) next2Slide = nextSlide.nextElementSibling;
						let next3Slide;
						if(next2Slide) next3Slide = next2Slide.nextElementSibling;

						activeSlide.classList.remove('glide__slide--previous');
						activeSlide.classList.remove('glide__slide--following');

						if(activeSlide.nextElementSibling) {
							activeSlide.nextElementSibling.classList.remove('glide__slide--previous');
							activeSlide.nextElementSibling.classList.remove('glide__slide--following');
							activeSlide.nextElementSibling.classList.add('glide__slide--following');
						}

						if(activeSlide.previousElementSibling) {
							activeSlide.previousElementSibling.classList.remove('glide__slide--previous');
							activeSlide.previousElementSibling.classList.remove('glide__slide--following');
							activeSlide.previousElementSibling.classList.add('glide__slide--previous');
						}

						playVideo(activeSlide);

						activeSlide.classList.add('active');

						let elms = activeSlide.parentNode.querySelectorAll('.glide__slide');
						elms.forEach(elm=>{
							if(elm===activeSlide) return;

							stopVideo(elm);
						});

						const slider = activeSlide.closest('.glide');
						slider.classList.add('running');
					}
					
					let myslider = document.querySelector("#{id}");
					let _{id} = new Glide(myslider, {
						type: "slider",
						autoplay: false,
						animationDuration: 600,
						gap: 0,
						perView: 3,
						startAt: 1,
						hoverpause: false,
						arrow: true,
						dots: false,
						breakpoints: {
							575: {
								perView: 1,
								peek: 50
							},

							414: {
								perView: 1,
								peek: 40
							},

							360: {
								perView: 1,
								peek: 30
							}
						},
						focusAt: "center",
					});


					_{id}.on('mount.after', function () {
						coverflow(_{id}.index, true);
					});

					_{id}.on('run', function (event) {
						coverflow(_{id}.index);
					});

					_{id}.mount();

					const glideElement = {id};
					let isSliderRunning = false;
					const manageSliderVisibility = (entries) => {
						if (entries[0].isIntersecting) {
							if (!isSliderRunning) {
								_{id}.update({ autoplay: 3000 });
								isSliderRunning = true;
							}
						} else {
							if (isSliderRunning) {
								_{id}.update({ autoplay: false }); 
								isSliderRunning = false;
							}
						}
					}
					const observer = new IntersectionObserver(manageSliderVisibility, { threshold: 0.5 });
					observer.observe(glideElement);

				});
			</script>
		`)}" data-settings="${encodeURIComponent(`
			{
				"type": "slider",
				"autoplay": 3000,
				"animationDuration":600,
				"gap":0,
				"perView":3,
				"hoverpause": false,
				"arrow":true,
				"dots":false,
				"fit":"cover",
				"images":
				[
					{
						"src": "[%IMAGE_PATH%]images/img-017.jpg", 
						"caption": "", "style": ""
					},
					{
						"src": "[%IMAGE_PATH%]images/img-033.jpg", 
						"caption": "", "style": ""
					},
					{
						"src": "[%IMAGE_PATH%]images/img-020.jpg", 
						"caption": "", "style": ""
					},
					{
						"src": "[%IMAGE_PATH%]images/img-036.jpg", 
						"caption": "", "style": ""
					},
					{
						"src": "[%IMAGE_PATH%]images/img-032.jpg", 
						"caption": "", "style": ""
					},
					{
						"src": "[%IMAGE_PATH%]images/img-003.jpg", 
						"caption": "", "style": ""
					}
				]
			}
		`)}">
			
		</div>
	</div>
</div>
`
		},

        /* SLICK SLIDER */

		{
		    'thumbnail': 'preview/slider-01.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
			'type': 'slick',
		    'html': `
<div class="is-section is-section-100 is-box is-align-left type-poppins is-light-text">
	<div class="is-overlay">
		<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="${encodeURIComponent(`
			<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">
				<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/img-030.jpg');">
				</div>
				<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/img-025.jpg');">
				</div>
			</div>

			<script>
				var docReady = function (fn) {
					var stateCheck = setInterval(function () {
						if (document.readyState !== "complete") return;
						clearInterval(stateCheck);
						try { fn() } catch (e) { }
					}, 1);
				};
				docReady(function () {
					jQuery("#{id}").slick({
						dots: false,
						arrows: true,
						infinite: true,
						speed: 500,
						cssEase: "linear",
						slidesToShow: 1,
						autoplay: true,
						autoplaySpeed: 3000,
						fade: false,
						adaptiveHeight: true
					});
				});
			</script>
			`)}" data-settings="${encodeURIComponent(`[{
			"auto":true,
			"arrow":true,
			"dots":false,
			"fade":false,
			"images":
				[
					{
						"src": "[%IMAGE_PATH%]images/img-030.jpg", 
						"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
					},
					{
						"src": "[%IMAGE_PATH%]images/img-025.jpg", 
						"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
					}
				]
		}]`)}">
		</div>
	</div>
	<div class="is-container v2 size-17 leading-13 is-content-960 is-content-left edge-x-4" style="transition: all 0.3s ease-out 0s;">
		<div class="row">
			<div class="column">
				<h1 class="text-center font-normal leading-11 size-72">We Create Simple and Effective Designs</h1>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-40"></div>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="text-center button-group">
					<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded-full" title="" style="color: rgb(255, 255, 255);">Our Works</a>
					<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full size-18 tracking-wide hover:border-transparent" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Get in Touch</a>
				</div>
			</div>

		</div>
	</div>
</div>
`
		},

		{
			'thumbnail': 'preview/slider-02.png',
			'category': '2',
			'googleFonts': [],
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
			'type': 'slick',
			'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-660">
			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 text-left size-72">We Create Simple and Effective Designs</h1>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box-6 is-box is-align-left is-light-text is-content-top">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="${encodeURIComponent(`
				<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">
					<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/img-020.jpg');">
					</div>
					<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/img-021.jpg');">
					</div>
				</div>
				<script>
					var docReady = function (fn) {
						var stateCheck = setInterval(function () {
							if (document.readyState !== "complete") return;
							clearInterval(stateCheck);
							try { fn() } catch (e) { }
						}, 1);
					};
					docReady(function () {
						jQuery("#{id}").slick({
							dots: false,
							arrows: true,
							infinite: true,
							speed: 500,
							cssEase: "linear",
							slidesToShow: 1,
							autoplay: true,
							autoplaySpeed: 3000,
							fade: false,
							adaptiveHeight: true
						});
					});
				</script>
				`)}" data-settings="${encodeURIComponent(`[{
				"auto":true,
				"arrow":true,
				"dots":false,
				"fade":false,
				"images":
					[
						{
							"src": "[%IMAGE_PATH%]images/img-020.jpg", 
							"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
						},
						{
							"src": "[%IMAGE_PATH%]images/img-021.jpg", 
							"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
						}
					]
			}]`)}">
			</div>
		</div>
	</div>
</div>
`
		},
	
		{
		    'thumbnail': 'preview/slider-03.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'slick',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-align-left is-content-top is-light-text">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="${encodeURIComponent(`
				<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">
					<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/img-017.jpg');">
					</div>
					<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/img-033.jpg');">
					</div>
				</div>

				<script>
					var docReady = function (fn) {
						var stateCheck = setInterval(function () {
							if (document.readyState !== "complete") return;
							clearInterval(stateCheck);
							try { fn() } catch (e) { }
						}, 1);
					};
					docReady(function () {
						jQuery("#{id}").slick({
							dots: false,
							arrows: true,
							infinite: true,
							speed: 500,
							cssEase: "linear",
							slidesToShow: 1,
							autoplay: true,
							autoplaySpeed: 3000,
							fade: false,
							adaptiveHeight: true
						});
					});
				</script>
				`)}" data-settings="${encodeURIComponent(`[{
				"auto":true,
				"arrow":true,
				"dots":false,
				"fade":false,
				"images":
					[
						{
							"src": "[%IMAGE_PATH%]images/img-017.jpg", 
							"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
						},
						{
							"src": "[%IMAGE_PATH%]images/img-033.jpg", 
							"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
						}
					]
			}]`)}">
			</div>
		</div>
	</div>
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-660">

			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 text-left size-72">We Create Simple and Effective Designs</h1>
				</div>

			</div>
			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>

			</div>

			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>

			</div>

		</div>
	</div>
</div>
`
		},
			

		/* VIDEO */

		{
		    'thumbnail': 'preview/video-01.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-light-text type-poppins box-autofit min-height-60">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
			<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
                <source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/beach1.mp4">
            </video>
            <div class="is-overlay-video" style="opacity:0.05"></div>
            <script>
			var docReady = function(fn) {
				var stateCheck = setInterval(function() {
					if (document.readyState === "interactive" || document.readyState === "complete") {
						clearInterval(stateCheck);
						try {
							fn()
						} catch (e) {}
					} 
				}, 1);
			};

			docReady(function() {
				
				let video = document.querySelector('#{id}');

				const changeVideo = (video) => {
					if(!video) return;
					let currentlyPlaying;
					if (video.paused) {
						currentlyPlaying = false;
					} else {
						currentlyPlaying = true;
					}
					let changed=false;
					let source = video.querySelector('source');
					let vidDefault = source.getAttribute('data-default');
					let vid240 = source.getAttribute('data-240');
					let vid360 = source.getAttribute('data-360');
					let vid480 = source.getAttribute('data-480');
					let vid540 = source.getAttribute('data-540');
					let vid720 = source.getAttribute('data-720');
					let vid1080 = source.getAttribute('data-1080');
					let vid1440 = source.getAttribute('data-1440');
					let vid2160 = source.getAttribute('data-2160');
					let vW = window.innerWidth;
					if(vW<=426) {
						if(vid240) {
							if(source.getAttribute('src')!==vid240) {
								source.setAttribute('src', vid240);changed=true;
							} else return;
						}
						else if(vid360) {
							if(source.getAttribute('src')!==vid360) {
								source.setAttribute('src', vid360);changed=true;
							} else return;
						}
						else if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (426<vW && vW<=640) {
						if(vid360) {
							if(source.getAttribute('src')!==vid360) {
								source.setAttribute('src', vid360);changed=true;
							} else return;
						}
						else if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (640<vW && vW<=854) {
						if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (854<vW && vW<=960) {
						if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (vW>960 && vW<=1280) {
						if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (1280<vW && vW<=1920) {
						if(vid1080) {
							if(source.getAttribute('src')!==vid1080) {
								source.setAttribute('src', vid1080);changed=true;
							} else return;
						}
					} else if (1920<vW && vW<=2560) {
						if(vid1440) {
							if(source.getAttribute('src')!==vid1440) {
								source.setAttribute('src', vid1440);changed=true;
							} else return;
						}
					} else if (2560<vW) {
						if(vid2160) {
							if(source.getAttribute('src')!==vid2160) {
								source.setAttribute('src', vid2160);changed=true;
							} else return;
						}
						else if(vid1440) {
							if(source.getAttribute('src')!==vid1440) {
								source.setAttribute('src', vid1440);changed=true;
							} else return;
						}
					}
					
					let videoLoad = false;
					if(changed) {
						video.pause();
						video.currentTime = 0;
						video.load();
						videoLoad = true;
					} else {
						if(source.getAttribute('src')!==vidDefault) {
							video.pause();
							video.currentTime = 0;
							source.setAttribute('src', vidDefault);
							video.load();
							videoLoad = true;
						} 
					}

					if(!video) return;

					if(videoLoad) if(video.autoplay) {
						video.pause();
						video.currentTime = 0;
						// video.play();
						let overlay = video.closest('.is-box');
						let btnPlay = overlay.querySelector('.video-bg-play');
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						let btnAudio = overlay.querySelector('.video-audio-play');
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
					}

					if(videoLoad) if(currentlyPlaying) {
						video.play();
					}
				};
				
				changeVideo(video);

				let debounce = (func) => {
					var timer;
					return function(event){
						if(timer) clearTimeout(timer);
						timer = setTimeout(func,100,event);
					};
				}
				let viewportWidth = window.innerWidth;
				window.addEventListener('resize',debounce(function(e){
					if (window.innerWidth != viewportWidth) {

						viewportWidth = window.innerWidth;

						if(video) changeVideo(video);
					}
				}));

				let overlay = video.closest('.is-box');
				let btnPlay = overlay.querySelector('.video-bg-play');
				btnPlay.addEventListener('click', (e)=>{
					if (video.paused) {
						video.play();
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
					} else {
						video.pause();
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
					}
					e.preventDefault();
					e.stopImmediatePropagation();
				});
				let btnAudio = overlay.querySelector('.video-audio-play');
				btnAudio.addEventListener('click', (e)=>{
					if (video.muted) {
						video.muted = false;
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
					} else {
						video.muted = true;
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
					}
					e.preventDefault();
					e.stopImmediatePropagation();
				});
			});
            </script>
			
					`)}" data-settings="${encodeURIComponent(`
						[{ "mp4": "[%IMAGE_PATH%]videos/beach1.mp4", "poster": "", "overlay": 0.05}]
						`)}">

					</div>
				</div>
				
			</div>
`
		},

		{
		    'thumbnail': 'preview/video-02.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-light-text type-poppins box-autofit min-height-60">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
			
			<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
                <source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/beach2.mp4">
            </video>
            <div class="is-overlay-video" style="opacity:0.05"></div>
            <script>
			var docReady = function(fn) {
				var stateCheck = setInterval(function() {
					if (document.readyState === "interactive" || document.readyState === "complete") {
						clearInterval(stateCheck);
						try {
							fn()
						} catch (e) {}
					} 
				}, 1);
			};

			docReady(function() {
				
				let video = document.querySelector('#{id}');

				const changeVideo = (video) => {
					if(!video) return;
					let currentlyPlaying;
					if (video.paused) {
						currentlyPlaying = false;
					} else {
						currentlyPlaying = true;
					}
					let changed=false;
					let source = video.querySelector('source');
					let vidDefault = source.getAttribute('data-default');
					let vid240 = source.getAttribute('data-240');
					let vid360 = source.getAttribute('data-360');
					let vid480 = source.getAttribute('data-480');
					let vid540 = source.getAttribute('data-540');
					let vid720 = source.getAttribute('data-720');
					let vid1080 = source.getAttribute('data-1080');
					let vid1440 = source.getAttribute('data-1440');
					let vid2160 = source.getAttribute('data-2160');
					let vW = window.innerWidth;
					if(vW<=426) {
						if(vid240) {
							if(source.getAttribute('src')!==vid240) {
								source.setAttribute('src', vid240);changed=true;
							} else return;
						}
						else if(vid360) {
							if(source.getAttribute('src')!==vid360) {
								source.setAttribute('src', vid360);changed=true;
							} else return;
						}
						else if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (426<vW && vW<=640) {
						if(vid360) {
							if(source.getAttribute('src')!==vid360) {
								source.setAttribute('src', vid360);changed=true;
							} else return;
						}
						else if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (640<vW && vW<=854) {
						if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (854<vW && vW<=960) {
						if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (vW>960 && vW<=1280) {
						if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (1280<vW && vW<=1920) {
						if(vid1080) {
							if(source.getAttribute('src')!==vid1080) {
								source.setAttribute('src', vid1080);changed=true;
							} else return;
						}
					} else if (1920<vW && vW<=2560) {
						if(vid1440) {
							if(source.getAttribute('src')!==vid1440) {
								source.setAttribute('src', vid1440);changed=true;
							} else return;
						}
					} else if (2560<vW) {
						if(vid2160) {
							if(source.getAttribute('src')!==vid2160) {
								source.setAttribute('src', vid2160);changed=true;
							} else return;
						}
						else if(vid1440) {
							if(source.getAttribute('src')!==vid1440) {
								source.setAttribute('src', vid1440);changed=true;
							} else return;
						}
					}
					
					let videoLoad = false;
					if(changed) {
						video.pause();
						video.currentTime = 0;
						video.load();
						videoLoad = true;
					} else {
						if(source.getAttribute('src')!==vidDefault) {
							video.pause();
							video.currentTime = 0;
							source.setAttribute('src', vidDefault);
							video.load();
							videoLoad = true;
						} 
					}

					if(!video) return;

					if(videoLoad) if(video.autoplay) {
						video.pause();
						video.currentTime = 0;
						// video.play();
						let overlay = video.closest('.is-box');
						let btnPlay = overlay.querySelector('.video-bg-play');
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						let btnAudio = overlay.querySelector('.video-audio-play');
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
					}

					if(videoLoad) if(currentlyPlaying) {
						video.play();
					}
				};
				
				changeVideo(video);

				let debounce = (func) => {
					var timer;
					return function(event){
						if(timer) clearTimeout(timer);
						timer = setTimeout(func,100,event);
					};
				}
				let viewportWidth = window.innerWidth;
				window.addEventListener('resize',debounce(function(e){
					if (window.innerWidth != viewportWidth) {

						viewportWidth = window.innerWidth;

						if(video) changeVideo(video);
					}
				}));

				let overlay = video.closest('.is-box');
				let btnPlay = overlay.querySelector('.video-bg-play');
				btnPlay.addEventListener('click', (e)=>{
					if (video.paused) {
						video.play();
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
					} else {
						video.pause();
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
					}
					e.preventDefault();
					e.stopImmediatePropagation();
				});
				let btnAudio = overlay.querySelector('.video-audio-play');
				btnAudio.addEventListener('click', (e)=>{
					if (video.muted) {
						video.muted = false;
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
					} else {
						video.muted = true;
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
					}
					e.preventDefault();
					e.stopImmediatePropagation();
				});
			});
            </script>
			
					`)}" data-settings="${encodeURIComponent(`
						[{ "mp4": "[%IMAGE_PATH%]videos/beach2.mp4", "poster": "", "overlay": 0.05}]
						`)}">

					</div>
				</div>
				<div class="is-container v2 leading-13 size-17 is-content-1100">
					<div class="row">
						<div class="column">
							<h1 class="text-center font-normal leading-11 size-72">We Create Simple and Effective Designs</h1>
						</div>

					</div>
					<div class="row">
						<div class="column">
							<div class="spacer height-40"></div>
						</div>

					</div>

					<div class="row">
						<div class="column">
							<div class="text-center button-group">
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
								<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
							</div>
						</div>

					</div>
				</div>
			</div>
`
		},


		{
		    'thumbnail': 'preview/video-03.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-620">
			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 text-left size-72">We Create Simple and Effective Designs</h1>
				</div>

			</div>

			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>

			</div>
			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
				
				<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
					<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/beach1.mp4">
				</video>
				<div class="is-overlay-video" style="opacity:0.05"></div>
				<script>
				var docReady = function(fn) {
					var stateCheck = setInterval(function() {
						if (document.readyState === "interactive" || document.readyState === "complete") {
							clearInterval(stateCheck);
							try {
								fn()
							} catch (e) {}
						} 
					}, 1);
				};

				docReady(function() {
					
					let video = document.querySelector('#{id}');

					const changeVideo = (video) => {
						if(!video) return;
						let currentlyPlaying;
						if (video.paused) {
							currentlyPlaying = false;
						} else {
							currentlyPlaying = true;
						}
						let changed=false;
						let source = video.querySelector('source');
						let vidDefault = source.getAttribute('data-default');
						let vid240 = source.getAttribute('data-240');
						let vid360 = source.getAttribute('data-360');
						let vid480 = source.getAttribute('data-480');
						let vid540 = source.getAttribute('data-540');
						let vid720 = source.getAttribute('data-720');
						let vid1080 = source.getAttribute('data-1080');
						let vid1440 = source.getAttribute('data-1440');
						let vid2160 = source.getAttribute('data-2160');
						let vW = window.innerWidth;
						if(vW<=426) {
							if(vid240) {
								if(source.getAttribute('src')!==vid240) {
									source.setAttribute('src', vid240);changed=true;
								} else return;
							}
							else if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (426<vW && vW<=640) {
							if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (640<vW && vW<=854) {
							if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (854<vW && vW<=960) {
							if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (vW>960 && vW<=1280) {
							if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (1280<vW && vW<=1920) {
							if(vid1080) {
								if(source.getAttribute('src')!==vid1080) {
									source.setAttribute('src', vid1080);changed=true;
								} else return;
							}
						} else if (1920<vW && vW<=2560) {
							if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						} else if (2560<vW) {
							if(vid2160) {
								if(source.getAttribute('src')!==vid2160) {
									source.setAttribute('src', vid2160);changed=true;
								} else return;
							}
							else if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						}
						
						let videoLoad = false;
						if(changed) {
							video.pause();
							video.currentTime = 0;
							video.load();
							videoLoad = true;
						} else {
							if(source.getAttribute('src')!==vidDefault) {
								video.pause();
								video.currentTime = 0;
								source.setAttribute('src', vidDefault);
								video.load();
								videoLoad = true;
							} 
						}

						if(!video) return;

						if(videoLoad) if(video.autoplay) {
							video.pause();
							video.currentTime = 0;
							// video.play();
							let overlay = video.closest('.is-box');
							let btnPlay = overlay.querySelector('.video-bg-play');
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
							let btnAudio = overlay.querySelector('.video-audio-play');
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}

						if(videoLoad) if(currentlyPlaying) {
							video.play();
						}
					};
					
					changeVideo(video);

					let debounce = (func) => {
						var timer;
						return function(event){
							if(timer) clearTimeout(timer);
							timer = setTimeout(func,100,event);
						};
					}
					let viewportWidth = window.innerWidth;
					window.addEventListener('resize',debounce(function(e){
						if (window.innerWidth != viewportWidth) {

							viewportWidth = window.innerWidth;

							if(video) changeVideo(video);
						}
					}));

					let overlay = video.closest('.is-box');
					let btnPlay = overlay.querySelector('.video-bg-play');
					btnPlay.addEventListener('click', (e)=>{
						if (video.paused) {
							video.play();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						} else {
							video.pause();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					let btnAudio = overlay.querySelector('.video-audio-play');
					btnAudio.addEventListener('click', (e)=>{
						if (video.muted) {
							video.muted = false;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
						} else {
							video.muted = true;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
				});
				</script>

			`)}" data-settings="${encodeURIComponent(`
				[{ "mp4": "[%IMAGE_PATH%]videos/beach1.mp4", "poster": "", "overlay": 0.05}]
				`)}">
			</div>
		</div>
	</div>
</div>
`
		},

		{
		    'thumbnail': 'preview/video-04.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
				
				<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
					<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/beach1.mp4">
				</video>
				<div class="is-overlay-video" style="opacity:0.05"></div>
				<script>
				var docReady = function(fn) {
					var stateCheck = setInterval(function() {
						if (document.readyState === "interactive" || document.readyState === "complete") {
							clearInterval(stateCheck);
							try {
								fn()
							} catch (e) {}
						} 
					}, 1);
				};

				docReady(function() {
					
					let video = document.querySelector('#{id}');

					const changeVideo = (video) => {
						if(!video) return;
						let currentlyPlaying;
						if (video.paused) {
							currentlyPlaying = false;
						} else {
							currentlyPlaying = true;
						}
						let changed=false;
						let source = video.querySelector('source');
						let vidDefault = source.getAttribute('data-default');
						let vid240 = source.getAttribute('data-240');
						let vid360 = source.getAttribute('data-360');
						let vid480 = source.getAttribute('data-480');
						let vid540 = source.getAttribute('data-540');
						let vid720 = source.getAttribute('data-720');
						let vid1080 = source.getAttribute('data-1080');
						let vid1440 = source.getAttribute('data-1440');
						let vid2160 = source.getAttribute('data-2160');
						let vW = window.innerWidth;
						if(vW<=426) {
							if(vid240) {
								if(source.getAttribute('src')!==vid240) {
									source.setAttribute('src', vid240);changed=true;
								} else return;
							}
							else if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (426<vW && vW<=640) {
							if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (640<vW && vW<=854) {
							if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (854<vW && vW<=960) {
							if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (vW>960 && vW<=1280) {
							if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (1280<vW && vW<=1920) {
							if(vid1080) {
								if(source.getAttribute('src')!==vid1080) {
									source.setAttribute('src', vid1080);changed=true;
								} else return;
							}
						} else if (1920<vW && vW<=2560) {
							if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						} else if (2560<vW) {
							if(vid2160) {
								if(source.getAttribute('src')!==vid2160) {
									source.setAttribute('src', vid2160);changed=true;
								} else return;
							}
							else if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						}
						
						let videoLoad = false;
						if(changed) {
							video.pause();
							video.currentTime = 0;
							video.load();
							videoLoad = true;
						} else {
							if(source.getAttribute('src')!==vidDefault) {
								video.pause();
								video.currentTime = 0;
								source.setAttribute('src', vidDefault);
								video.load();
								videoLoad = true;
							} 
						}

						if(!video) return;

						if(videoLoad) if(video.autoplay) {
							video.pause();
							video.currentTime = 0;
							// video.play();
							let overlay = video.closest('.is-box');
							let btnPlay = overlay.querySelector('.video-bg-play');
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
							let btnAudio = overlay.querySelector('.video-audio-play');
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}

						if(videoLoad) if(currentlyPlaying) {
							video.play();
						}
					};
					
					changeVideo(video);

					let debounce = (func) => {
						var timer;
						return function(event){
							if(timer) clearTimeout(timer);
							timer = setTimeout(func,100,event);
						};
					}
					let viewportWidth = window.innerWidth;
					window.addEventListener('resize',debounce(function(e){
						if (window.innerWidth != viewportWidth) {

							viewportWidth = window.innerWidth;

							if(video) changeVideo(video);
						}
					}));

					let overlay = video.closest('.is-box');
					let btnPlay = overlay.querySelector('.video-bg-play');
					btnPlay.addEventListener('click', (e)=>{
						if (video.paused) {
							video.play();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						} else {
							video.pause();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					let btnAudio = overlay.querySelector('.video-audio-play');
					btnAudio.addEventListener('click', (e)=>{
						if (video.muted) {
							video.muted = false;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
						} else {
							video.muted = true;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
				});
				</script>

			`)}" data-settings="${encodeURIComponent(`
				[{ "mp4": "[%IMAGE_PATH%]videos/beach1.mp4", "poster": "", "overlay": 0.05}]
				`)}">
			</div>
		</div>
		
	</div>
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-620">
			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 text-left size-72">We Create Simple and Effective Designs</h1>
				</div>

			</div>

			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>

			</div>
			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
`
		},

		
		{
		    'thumbnail': 'preview/video-05.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section type-poppins is-section-80">
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="font-light text-center">Item Two</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125 size-13" style="background-color: rgb(240, 240, 240);">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`

				<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
					<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/beach2.mp4">
				</video>
				<div class="is-overlay-video" style="opacity:0.05"></div>
				<script>
				var docReady = function(fn) {
					var stateCheck = setInterval(function() {
						if (document.readyState === "interactive" || document.readyState === "complete") {
							clearInterval(stateCheck);
							try {
								fn()
							} catch (e) {}
						} 
					}, 1);
				};

				docReady(function() {
					
					let video = document.querySelector('#{id}');

					const changeVideo = (video) => {
						if(!video) return;
						let currentlyPlaying;
						if (video.paused) {
							currentlyPlaying = false;
						} else {
							currentlyPlaying = true;
						}
						let changed=false;
						let source = video.querySelector('source');
						let vidDefault = source.getAttribute('data-default');
						let vid240 = source.getAttribute('data-240');
						let vid360 = source.getAttribute('data-360');
						let vid480 = source.getAttribute('data-480');
						let vid540 = source.getAttribute('data-540');
						let vid720 = source.getAttribute('data-720');
						let vid1080 = source.getAttribute('data-1080');
						let vid1440 = source.getAttribute('data-1440');
						let vid2160 = source.getAttribute('data-2160');
						let vW = window.innerWidth;
						if(vW<=426) {
							if(vid240) {
								if(source.getAttribute('src')!==vid240) {
									source.setAttribute('src', vid240);changed=true;
								} else return;
							}
							else if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (426<vW && vW<=640) {
							if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (640<vW && vW<=854) {
							if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (854<vW && vW<=960) {
							if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (vW>960 && vW<=1280) {
							if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (1280<vW && vW<=1920) {
							if(vid1080) {
								if(source.getAttribute('src')!==vid1080) {
									source.setAttribute('src', vid1080);changed=true;
								} else return;
							}
						} else if (1920<vW && vW<=2560) {
							if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						} else if (2560<vW) {
							if(vid2160) {
								if(source.getAttribute('src')!==vid2160) {
									source.setAttribute('src', vid2160);changed=true;
								} else return;
							}
							else if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						}
						
						let videoLoad = false;
						if(changed) {
							video.pause();
							video.currentTime = 0;
							video.load();
							videoLoad = true;
						} else {
							if(source.getAttribute('src')!==vidDefault) {
								video.pause();
								video.currentTime = 0;
								source.setAttribute('src', vidDefault);
								video.load();
								videoLoad = true;
							} 
						}

						if(!video) return;

						if(videoLoad) if(video.autoplay) {
							video.pause();
							video.currentTime = 0;
							// video.play();
							let overlay = video.closest('.is-box');
							let btnPlay = overlay.querySelector('.video-bg-play');
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
							let btnAudio = overlay.querySelector('.video-audio-play');
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}

						if(videoLoad) if(currentlyPlaying) {
							video.play();
						}
					};
					
					changeVideo(video);

					let debounce = (func) => {
						var timer;
						return function(event){
							if(timer) clearTimeout(timer);
							timer = setTimeout(func,100,event);
						};
					}
					let viewportWidth = window.innerWidth;
					window.addEventListener('resize',debounce(function(e){
						if (window.innerWidth != viewportWidth) {

							viewportWidth = window.innerWidth;

							if(video) changeVideo(video);
						}
					}));

					let overlay = video.closest('.is-box');
					let btnPlay = overlay.querySelector('.video-bg-play');
					btnPlay.addEventListener('click', (e)=>{
						if (video.paused) {
							video.play();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						} else {
							video.pause();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					let btnAudio = overlay.querySelector('.video-audio-play');
					btnAudio.addEventListener('click', (e)=>{
						if (video.muted) {
							video.muted = false;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
						} else {
							video.muted = true;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
				});
				</script>

			`)}" data-settings="${encodeURIComponent(`
				[{ "mp4": "[%IMAGE_PATH%]videos/beach2.mp4", "poster": "", "overlay": 0.05}]
				`)}">
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="font-light text-center">Item One</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
		`},

		{
		    'thumbnail': 'preview/video-06.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section type-poppins is-section-80">
	<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
		<div class="is-overlay">
			<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`

				<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
					<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/beach2.mp4">
				</video>
				<div class="is-overlay-video" style="opacity:0.05"></div>
				<script>
				var docReady = function(fn) {
					var stateCheck = setInterval(function() {
						if (document.readyState === "interactive" || document.readyState === "complete") {
							clearInterval(stateCheck);
							try {
								fn()
							} catch (e) {}
						} 
					}, 1);
				};

				docReady(function() {
					
					let video = document.querySelector('#{id}');

					const changeVideo = (video) => {
						if(!video) return;
						let currentlyPlaying;
						if (video.paused) {
							currentlyPlaying = false;
						} else {
							currentlyPlaying = true;
						}
						let changed=false;
						let source = video.querySelector('source');
						let vidDefault = source.getAttribute('data-default');
						let vid240 = source.getAttribute('data-240');
						let vid360 = source.getAttribute('data-360');
						let vid480 = source.getAttribute('data-480');
						let vid540 = source.getAttribute('data-540');
						let vid720 = source.getAttribute('data-720');
						let vid1080 = source.getAttribute('data-1080');
						let vid1440 = source.getAttribute('data-1440');
						let vid2160 = source.getAttribute('data-2160');
						let vW = window.innerWidth;
						if(vW<=426) {
							if(vid240) {
								if(source.getAttribute('src')!==vid240) {
									source.setAttribute('src', vid240);changed=true;
								} else return;
							}
							else if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (426<vW && vW<=640) {
							if(vid360) {
								if(source.getAttribute('src')!==vid360) {
									source.setAttribute('src', vid360);changed=true;
								} else return;
							}
							else if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (640<vW && vW<=854) {
							if(vid480) {
								if(source.getAttribute('src')!==vid480) {
									source.setAttribute('src', vid480);changed=true;
								} else return;
							}
							else if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (854<vW && vW<=960) {
							if(vid540) {
								if(source.getAttribute('src')!==vid540) {
									source.setAttribute('src', vid540);changed=true;
								} else return;
							}
							else if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (vW>960 && vW<=1280) {
							if(vid720) {
								if(source.getAttribute('src')!==vid720) {
									source.setAttribute('src', vid720);changed=true;
								} else return;
							}
						} else if (1280<vW && vW<=1920) {
							if(vid1080) {
								if(source.getAttribute('src')!==vid1080) {
									source.setAttribute('src', vid1080);changed=true;
								} else return;
							}
						} else if (1920<vW && vW<=2560) {
							if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						} else if (2560<vW) {
							if(vid2160) {
								if(source.getAttribute('src')!==vid2160) {
									source.setAttribute('src', vid2160);changed=true;
								} else return;
							}
							else if(vid1440) {
								if(source.getAttribute('src')!==vid1440) {
									source.setAttribute('src', vid1440);changed=true;
								} else return;
							}
						}
						
						let videoLoad = false;
						if(changed) {
							video.pause();
							video.currentTime = 0;
							video.load();
							videoLoad = true;
						} else {
							if(source.getAttribute('src')!==vidDefault) {
								video.pause();
								video.currentTime = 0;
								source.setAttribute('src', vidDefault);
								video.load();
								videoLoad = true;
							} 
						}

						if(!video) return;

						if(videoLoad) if(video.autoplay) {
							video.pause();
							video.currentTime = 0;
							// video.play();
							let overlay = video.closest('.is-box');
							let btnPlay = overlay.querySelector('.video-bg-play');
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
							let btnAudio = overlay.querySelector('.video-audio-play');
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}

						if(videoLoad) if(currentlyPlaying) {
							video.play();
						}
					};
					
					changeVideo(video);

					let debounce = (func) => {
						var timer;
						return function(event){
							if(timer) clearTimeout(timer);
							timer = setTimeout(func,100,event);
						};
					}
					let viewportWidth = window.innerWidth;
					window.addEventListener('resize',debounce(function(e){
						if (window.innerWidth != viewportWidth) {

							viewportWidth = window.innerWidth;

							if(video) changeVideo(video);
						}
					}));

					let overlay = video.closest('.is-box');
					let btnPlay = overlay.querySelector('.video-bg-play');
					btnPlay.addEventListener('click', (e)=>{
						if (video.paused) {
							video.play();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						} else {
							video.pause();
							btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
					let btnAudio = overlay.querySelector('.video-audio-play');
					btnAudio.addEventListener('click', (e)=>{
						if (video.muted) {
							video.muted = false;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
						} else {
							video.muted = true;
							btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
						}
						e.preventDefault();
						e.stopImmediatePropagation();
					});
				});
				</script>

			`)}" data-settings="${encodeURIComponent(`
				[{ "mp4": "[%IMAGE_PATH%]videos/beach2.mp4", "poster": "", "overlay": 0.05}]
				`)}">
			</div>
		</div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="font-light text-center">Item One</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-500">
			<div class="row">
				<div class="column" style="min-height: 54px;">
					<h3 class="font-light text-center">Item Two</h3>
					<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<div class="text-center button-group">
						<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125 size-13" style="background-color: rgb(240, 240, 240);">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
			`
		},
		
		/* CUSTOM */

		{
		    'thumbnail': 'preview/custom-01.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box type-poppins is-light-text is-section-100 min-height-60 box-autofit">

			<div class="is-overlay">
				<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
				<style>
					.animate-text-wrapper {
						overflow-x: hidden;
						width: 100%;
						height: 100vh;
						display: flex;
						align-items: center;
						line-height: 1.7;
						color: #fff;
						transform: skewY(-5deg);
					}

					.bg-text-container {
						transform: translateX(-50%);
						left: 50%;
						position: absolute;
						z-index: -999;
					}

					@keyframes text-scrolling {
						0% {
							transform: translate3d(-100%, 0, 0);
						}

						100% {
							transform: translate3d(0%, 0, 0);
						}
					}

					.animate-text {
						animation: text-scrolling 20s linear infinite;
						will-change: transform;
						display: block;
						position: relative;
						white-space: nowrap;
					}

					.animate-text.left {
						animation-direction: reverse;
					}

					.animate-text span {
						font-size: 280px;
						color: transparent;
						-webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
						text-transform: uppercase;
						display: inline-block;
						line-height: 0.75;
						min-width: auto;
						font-weight: 800;
					}
				</style>

				<div class="animate-text-wrapper">
					<div class="bg-text-container">
						<div class="animate-text">
							<span>Driven Better&nbsp;</span>
							<span>Driven Better&nbsp;</span>
						</div>
						<div style="height:20vw">

						</div>
						<div class="animate-text left">
							<span>Driven Better&nbsp;</span>
							<span>Driven Better&nbsp;</span>
						</div>
					</div>
				</div>

				<script>
					(function() {
						/* Set width of all animated text to match */
						let parent = document.querySelectorAll('.animate-text');
						for (let i = 0; i < parent.length; i++) {
							parent[i].style.width = parent[i].children[0].clientWidth + "px";
						};
					}).call(this);
				</script>				
				`)}" style="z-index: 1;">
					
				</div>
				<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-001.jpg&quot;); background-position: 50% 60%;"></div>
			</div>
			<div class="is-container v2 leading-13 size-17 is-content-1100">

				<div class="row">
					<div class="column">
						<h1 class="text-center font-normal leading-11 size-72">We Create Simple and Effective Designs</h1>
					</div>

				</div>
				<div class="row">
					<div class="column">
						<div class="spacer height-40"></div>
					</div>

				</div>

				<div class="row">
					<div class="column">
						<div class="text-center button-group">
							<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
							<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
						</div>
					</div>

				</div>
			</div>
		</div>
		`
		},
		{
		    'thumbnail': 'preview/custom-02.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
<div class="is-section is-section-100 type-poppins">
	<div class="is-box-6 is-box is-dark-text box-autofit">
		<div class="is-overlay"></div>
		<div class="is-container v2 size-17 leading-13 is-content-620">
			<div class="row">
				<div class="column">
					<h1 class="font-normal leading-11 size-72 text-left">We Create Simple and Effective Designs</h1>
				</div>

			</div>

			<div class="row">
				<div class="column">
					<div class="spacer height-40"></div>
				</div>

			</div>
			<div class="row">
				<div class="column">
					<div class="button-group text-left">
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
						<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
					</div>
				</div>

			</div>

		</div>
	</div>
	<div class="is-box-6 is-box is-dark-text box-autofit min-height-50">
		<div class="is-overlay">
			<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript "  data-html="${encodeURIComponent(`
			<style>
				.animate-text-wrapper {
					overflow-x: hidden;
					width: 100%;
					height: 100vh;
					display: flex;
					align-items: center;
					line-height: 1.7;
					color: #fff;
					transform: skewY(-5deg);
				}

				.bg-text-container {
					transform: translateX(-50%);
					left: 50%;
					position: absolute;
					z-index: -999;
				}

				@keyframes text-scrolling {
					0% {
						transform: translate3d(-100%, 0, 0);
					}

					100% {
						transform: translate3d(0%, 0, 0);
					}
				}

				.animate-text {
					animation: text-scrolling 20s linear infinite;
					will-change: transform;
					display: block;
					position: relative;
					white-space: nowrap;
				}

				.animate-text.left {
					animation-direction: reverse;
				}

				.animate-text span {
					font-size: 280px;
					color: transparent;
					-webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
					text-transform: uppercase;
					display: inline-block;
					line-height: 0.75;
					min-width: auto;
					font-weight: 800;
				}
			</style>

			<div class="animate-text-wrapper">
				<div class="bg-text-container">
					<div class="animate-text">
						<span>Driven Better&nbsp;</span>
						<span>Driven Better&nbsp;</span>
					</div>
					<div style="height:20vw">

					</div>
					<div class="animate-text left">
						<span>Driven Better&nbsp;</span>
						<span>Driven Better&nbsp;</span>
					</div>
				</div>
			</div>

			<script>
				(function() {
					/* Set width of all animated text to match */
					let parent = document.querySelectorAll('.animate-text');
					for (let i = 0; i < parent.length; i++) {
						parent[i].style.width = parent[i].children[0].clientWidth + "px";
					};
				}).call(this);
			</script>						
			`)}" style="z-index: 1;">
				
			</div>
			<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-023.jpg&quot;); background-position: 50% 60%;"></div>
		</div>
	</div>
</div>
`
		},
/*
		{
		    'thumbnail': 'preview/custom-03.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
		<div class="is-section is-section-100 is-box type-poppins" data-box="box-bIXHIFt">
			<div class="is-overlay">
				<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
				
				<script id="script-GTfz4Ji">
					var scriptReady = function(fn) {
						var stateCheck = setInterval(function() {
							if (typeof skrollrr === 'undefined') return; // To check if required library (skrollrr) is loaded.
							if (typeof skrollrr.lax === 'undefined') return;
							clearInterval(stateCheck);
							try {
								fn()
							} catch (e) {}
						}, 1);
					};

					scriptReady(function() {

						// Your custom code here
						let section = document.querySelector('#script-GTfz4Ji').closest('.is-section'); // Get the current section
						let box = document.querySelector('#script-GTfz4Ji').closest('.is-box'); // Get the current box
						let container = box.querySelector('.is-container'); // Get the current container

						// Prepare rounded clip
						let clip = box.querySelector('.is-boxes');
						clip.style.overflow = 'hidden';
						clip.style.borderRadius = '50%';
						clip.style.background = '#fff';
						clip.style.position = 'relative';
						clip.style.flex = 'none';
						clip.style.width = '0%';
						clip.style.height = '0%';

						// Make text container centered
						container.style.width = '100vw';
						container.style.width = container.offsetWidth + 'px';
						container.style.position = 'absolute';
						container.style.left = 'calc(50% - ' + container.offsetWidth / 2 + 'px)';

						// Apply scroll animation
						box.setAttribute('data-box', 'box-GTfz4Ji');
						skrollrr.lax.addElements('[data-box=box-GTfz4Ji]', {
							scrollY: {
								scale: [
									['elInY+200', 'elCenterY'],
									[0, 100], {
										cssFn: function(val, domElement) {
											clip.style.width = val - 6 + 'vh';
											clip.style.height = val - 6 + 'vh';
										}
									}
								],
							},
						});

						skrollrr.refresh();
					});
				</script>
				
				`)}" style="z-index: 1;">
					
				</div>
				<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-035.jpg&quot;); background-position: 50% 60%;">
					<div class="is-overlay-color opacity-0"></div>
				</div>
			</div>
			<div class="is-boxes" style="position: relative; overflow: hidden; width: 1.875vh; height: 1.875vh; flex: 0 0 auto; background: rgb(255, 255, 255); border-radius: 50%;">
				<div class="is-box-centered" data-clip="clip-JeRaoyg" style="overflow: hidden; width: 100%; height: 95%;">
					<div class="is-container v2 size-17 leading-13 is-content-1000" style="left: calc(50% - 521px); position: absolute; width: 1042px;">
						<div class="row">
							<div class="column">
								<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
							</div>
		
						</div>
						<div class="row">
							<div class="column">
								<div class="spacer height-60"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column">
								<h1 class="text-center leading-09 size-88">We create simple and effective designs.</h1>
							</div>
		
						</div>
						<div class="row">
							<div class="column">
								<div class="spacer height-40"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column">
								<div class="spacer height-20"></div>
							</div>
							<div style="width: 57.5435%; flex: 0 0 auto;" class="column">
								<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type.</p>
							</div>
							<div class="column">
								<div class="spacer height-20"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column">
								<div class="spacer height-40"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column">
								<div class="text-center">
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" style="background-color: rgb(240, 240, 240);">Get in Touch</a>
								</div>
							</div>
		
						</div>
					</div>
				</div>
			</div>
		</div>
`
		},
*/
		{
		    'thumbnail': 'preview/custom-04.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 box-autofit min-height-70 type-poppins is-content-top edge-y-3" style="transform: translate3d(1e-05px, 1e-05px, 1e-05px);">
    <div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
		<div class="section-{id}"></div>

		<script>
			var skrollrrReady = function(fn) {
				var stateCheck = setInterval(function() {
					if (typeof skrollrr === 'undefined') return; // To check if required library (skrollrr) is loaded.
					if (typeof skrollrr.lax === 'undefined') return;
					clearInterval(stateCheck);
					try {
						fn()
					} catch (e) {}
				}, 1);
			};
			skrollrrReady(function() {
		
				let se = document.querySelector('.section-{id}').closest('.is-section');
				se.setAttribute('data-section', 'section-{id}');
				let overlay = se.querySelector('.is-overlay');
				overlay.style.transform = '';
		
				let wrapper = document.querySelector('.is-wrapper');
				const clientHeight = se.clientHeight;
				skrollrr.lax.addElements('[data-section=section-{id}]', {
		
				}, {
					onUpdate: function(driverValues, domElement) {
		
						//let adj = wrapper.getBoundingClientRect().top + window.pageYOffset;
						let offsetTop = se.offsetTop; // - adj;
		
						const scrollY = driverValues.scrollY[0];
		
						if (scrollY >= offsetTop && scrollY <= offsetTop + clientHeight) {
							let n = (scrollY - offsetTop);
							let percentage = n / clientHeight;
							overlay.style.transform = 'translateY(' + n + 'px) scale(' + (1 + percentage / 2) + ')';
						} else {
							overlay.style.transform = 'translateY(0) scale(1)';
						}
					}
				});
		
				skrollrr.refresh();
			});
		</script>
	
	`)}" style="z-index: 1;">
        

    </div>
    <div class="is-overlay" style="transform: translateY(0px) scale(1);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-040.jpg&quot;); background-position: 50% 60%;"></div>
    </div>
	<div class="is-container v2 leading-14 size-18 is-content-1400">
		<div class="row">
			<div class="column text-center" style="overflow: hidden; min-height: 54px;">
				<h1 class="size-124 leading-none font-medium" data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);" data-top="transform: scale(1);" data-top-bottom="transform: scale(1.2);">
					<div class="size-60 leading-12">Good things that come in small packages.</div>
				</h1>
			</div>

		</div>
		<div class="row">
			<div class="text-center column" style="overflow: hidden; min-height: 54px;">
				<p data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(1.2);">We design stunning websites that really work.</p>
			</div>

		</div>
		<div class="row">
			<div class="column">
				<div class="spacer height-40"></div>
			</div>

		</div>
		<div class="row">
			<div class="column text-center">
				<div>
					<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-175" title="" style="color: rgb(0, 0, 0);">Get Started</a>
				</div>
			</div>

		</div>
	</div>
</div>
			
		`},

		{
		    'thumbnail': 'preview/custom-05.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text type-poppins box-autofit min-height-70" style="background-color: rgb(247, 247, 247);">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247); inset: unset; width: 222.907px; height: 146.717px; border-radius: 352.824px;">
        <div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
		<div class="section-{id}"></div>
			<script>
				var skrollrrReady = function(fn) {
					var stateCheck = setInterval(function() {
						if (typeof skrollrr === 'undefined') return;
						if (typeof skrollrr.lax === 'undefined') return;
						clearInterval(stateCheck);
						try {
							fn()
						} catch (e) {}
					}, 1);
				};
				skrollrrReady(function() {
			
					let se = document.querySelector('.section-{id}').closest('.is-section');
					se.setAttribute('data-section', 'section-{id}');
					let overlay = se.querySelector('.is-overlay');
			
					overlay.style.top = 'unset';
					overlay.style.bottom = 'unset';
					overlay.style.left = 'unset';
					overlay.style.right = 'unset';
			
					let wrapper = document.querySelector('.is-wrapper');
					const clientHeight = se.clientHeight;
					const clientWidth = se.clientWidth;
					skrollrr.lax.addElements('[data-section=section-{id}]', {
						scrollY: {
							scale: [
								['elInY', 'elCenterY'],
								[0, 100], {
									cssFn: function(val, domElement) {
										overlay.style.width = (val / 100) * clientWidth + 'px';
										overlay.style.height = (val / 100) * clientHeight + 'px';
										overlay.style.borderRadius = (400 - val * 4) + 'px';
										se.style.backgroundColor = overlay.style.backgroundColor;
									}
								}
							],
						},
					});
			
					skrollrr.refresh();
				});
			</script>
		`)}" style="z-index: 1;">
             
        </div>
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-033.jpg&quot;); background-position: 50% 60%;">
            <div class="is-overlay-color opacity-0"></div>
        </div>
    </div>
	<div class="is-container v2 size-17 leading-12 is-content-800 is-content-right edge-x-0-5">
		<div class="row">
			<div class="column">
				<p class="font-medium leading-12 size-48" data-bottom-top="transform: translateX(50%);" data-center="transform: translateX(0px);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(0.7);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>

		</div>
	</div>

</div>
			`
		},
	]
};

try {
    template_list.push(data_templates);
} catch(e) {
    //
}