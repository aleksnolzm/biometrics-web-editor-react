var data_templates = {
    name: 'Quick Start',
    categories: [
        { id: 15, name: 'Landing' }, 
        { id: 1, name: 'Header' }, 
        { id: 2, name: 'Article' }, 
        { id: 3, name: 'Photos' }, 
        { id: 4, name: 'List' },  
        { id: 5, name: 'Quotes' }, 
        { id: 6, name: 'FAQ' }, 
        { id: 7, name: 'Call to Action' }, 
        { id: 8, name: 'Logo List' }, 
        { id: 9, name: 'Pricing' }, 
        { id: 10, name: 'Shop' }, 
        { id: 11, name: 'Profile' }, 
        { id: 12, name: 'Contact' }, 
        // { id: 13, name: 'Comin Soon' }, 
        { id: 14, name: 'Footer' }, 
    ],
    designs: [

		{
		    'thumbnail': 'preview/simple-01.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text type-poppins box-autofit is-section-100">
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
                            <p style="max-width: 500px;">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div class="spacer height-20"></div>

                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide mt-3" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide mt-3" title="">Get in Touch</a>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/img-051.jpg" alt="" data-filename="img-051.jpg"></div>

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
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
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
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-051.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-07.png',
		    'category': '11',
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
                <div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-141.jpg" alt="" data-filename="img-141.jpg"></div>
                <div class="spacer height-20"></div>
                <p class="size-19 font-light text-center">Freja E. Andersen</p>
                <p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="flex flex-col justify-center items-center column px-3">
                <div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-114.jpg" alt="" data-filename="img-114.jpg"></div>
                <div class="spacer height-20"></div>
                <p class="size-19 font-light text-center">Nathan Williams</p>
                <p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="flex flex-col justify-center items-center column px-3">
                <div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-186.jpg" alt="" data-filename="img-186.jpg"></div>
                <div class="spacer height-20"></div>
                <p class="size-19 font-light text-center">Vincent Nelson</p>
                <p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
        </div>
    </div>
</div>
`
		},

		{
		    'thumbnail': 'preview/simple-09.png',
		    'category': '2',
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

		
		/* Hero */
		{
			'thumbnail': 'preview/hero-05.png',
			'category': '1',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-section-100 is-box type-opensans box-autofit">
    <div class="is-overlay">
    </div>
    <div class="is-container v2 size-18 leading-14 is-content-1300">
        <div class="row">
            <div class="flex flex-col justify-center items-start column">
                <div class="spacer height-20"></div>
                <h3 class="font-light size-17" style="letter-spacing: 3px;">THE LOOKBOOK</h3>
                <h1 class="size-68 leading-none" style="letter-spacing: 5px;"><span class="font-semibold size-68"></span>Ultimate Experiences With Story, Emotion, And Purpose.<span class="font-semibold size-68"></span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div class="button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Get the App</a>
                </div>
            </div>
            <div style="width: 9.57592%; flex: 0 0 auto;" class="column">
                <div class="spacer height-40"></div>
            </div>
            <div class="flex flex-col justify-center items-start column">
                <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-152.jpg" data-bottom-top="transform:translateY(100px);" data-center="transform:translateY(0px);" data-filename="img-152.jpg">
            </div>
        </div>
    </div>
</div>
		`
		},

		{
			'thumbnail': 'preview/hero-01.png',
			'category': '1',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam">
    <div class="is-overlay" style="background-color: rgb(240, 240, 240);">
    </div>
    <div class="is-container v2 is-content-1400 leading-14 is-content-left edge-x-2 size-21">
        <div class="row clearfix relative sm-items-1">
            <div class="flex justify-center flex-col items-start column" style="width: 38.2225%; flex: 0 0 auto;">
                <h1 class="tracking-wide size-76 leading-none font-medium">Keep Everything Simple</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-20"></div>
                <div class="button-group">
                    <a href="#preview" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide mr-3" title="">Preview</a>
                    <a href="#buynow" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full size-18 tracking-wide hover:border-transparent" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Buy Now</a>
                </div>
            </div>
            <div style="position: relative; min-height: 30vh; width: 59.8377%; flex: 0 0 auto;" class="flex flex-col justify-center items-center column">
                <div class="is-dock" style="margin:50px 0">
                    <div style="width: 120%;left: 40%;top: 4%;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-127.jpg" style="width: 100%;" data-filename="img-127.jpg" data-bottom-top="transform: translateX(130px);" data-center="transform: translateX(0px);">
                    </div>
                    <div style="width: 58%;left: 13%;top: 56%;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-040.jpg" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-filename="img-040.jpg" data-bottom-top="transform: translateX(75px);" data-center-top="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(75px);">
                    </div>
                    <div style="width: 58%;left: 89%;top: 56%;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-116.jpg" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-filename="img-116.jpg" data-bottom-top="transform: translateX(125px);" data-center-top="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(100px);">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-02.png',
			'category': '1',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-box is-dark-text type-quicksand-kalam is-section-100 box-autofit">
    <div class="is-overlay">
    </div>
    <div class="is-container v2 size-19 leading-14 content-pt-50 is-content-1360">
        <div class="row relative sm-items-1">
            <div class="column">
                <div class="spacer height-40"></div>
                <h1 class="tracking-wide leading-11 size-68 font-medium">Build Anything Beautifully</h1>
                <p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-20"></div>
                <div class="button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Try Demo</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" style="background-color: rgb(240, 240, 240);">Get Started</a>
                </div>
            </div>
            <div style="position: relative; width: 66.4828%; flex: 0 0 auto;" class="flex flex-col justify-center items-start column">
                <div class="is-dock">
                    <div style="width: 90%;left: 15%;top: 19%;min-width:400px">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-016.jpg" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-filename="img-016.jpg" data-bottom-top="transform: translateX(130px);" data-center-top="transform: translateX(0px);" data-50-top="transform: translateX(0px);" data-top-bottom="transform: translateX(125px);">
                    </div>
                    <div style="width: 92%;left: 41%;top: 41%;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/item-240a.png" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-filename="item-240a.png" data-bottom-top="transform: translateX(100px);" data-center-top="transform: translateX(0px);" data-50-top="transform: translateX(0px);" data-top-bottom="transform: translateX(100px);">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-03.png',
			'category': '1',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-montserrat-roboto box-autofit">
    <div class="is-overlay">
    </div>
    <div class="is-container v2 size-19 leading-14 is-content-1300">
        <div class="row relative sm-items-1">
            <div style="position: relative;" class="flex flex-col justify-center items-center column">
                <div class="is-dock" style="margin:50px 0">
                    <div style="width: 59%;left: 5%;top: -10%;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-017.jpg" style="width: 100%;" data-filename="getimg_ai_img-m548cmufBoPcSxMUOenp5-editNbkSxvh.png" data-bottom-top="transform: translateX(-75px);" data-center="transform: translateX(0px);" data-100-top="transform: translateX(0px);" data-top-bottom="transform: translateX(-50px);">
                    </div>
                    <div style="width: 59%;left: 29%;top: -0%;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-164.jpg" style="width: 100%;" data-filename="getimg_ai_img-tkFUzNuFOfBqlOyklxyYN copy-editRrljGOc.png" data-bottom-top="transform: translateX(75px);" data-center="transform: translateX(0px);" data-100-top="transform: translateX(0px);" data-top-bottom="transform: translateX(50px);">
                    </div>
                </div>
            </div>
            <div class="flex justify-center flex-col items-start pt-11 column" style="width: 45%; flex: 0 0 auto;">
                <h1 class="font-semibold tracking-wide leading-11 size-68">Build Anything Beautifully</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-20"></div>
                <div class="button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" style="background-color: rgb(240, 240, 240);">Our Works</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Get in Touch</a>
                </div>
                <div class="spacer height-40"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-06.png',
			'category': '1',
			'contentCss': 'type-spacemono.css',
			'contentClass': 'type-spacemono',
			'html': `
<div class="is-section is-section-100 type-spacemono">
    <div class="is-box is-box-6 box-autofit min-height-40">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 is-content-820 size-16 leading-none">
            <div class="row">
                <div class="column">
                    <h1 class="leading-11 size-88">With Less Stuff and More Compassion</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 47.1279%; flex: 0 0 auto;">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="text-right button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Get a Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 is-content-top edge-y-2 is-light-text box-autofit min-height-60">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-068.jpg&quot;); background-position: 50% 60%; opacity: 1;">
                <div class="is-overlay-color opacity-4"></div>
            </div>
        </div>
        <div class="is-container v2 is-content-left edge-x-1 is-content-320">
            <div class="row">
                <div class="column">
                    <p class="leading-12">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>

            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-04.png',
			'category': '1',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-box is-content-bottom edge-y-1 is-dark-text box-autofit type-raleway-lato is-section-100 min-height-60">
    <div class="is-overlay">
    </div>
    <div class="is-container is-content-none size-19 leading-16 v2" style="margin-bottom: 0px; padding-bottom: 0px;">
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden" style="width: 24.6962%; flex: 0 0 auto;">
                <div class="spacer height-80"></div>
            </div>
            <div style="width: 48.2256%; flex: 0 0 auto;" class="column">
                <h1 class="text-center font-semibold leading-12 size-60">Ultimate Experiences With Story, Emotion, And Purpose.</h1>
            </div>
            <div class="column xs-hidden" style="width: 26.2518%; flex: 0 0 auto;">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column xs-hidden sm-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column">
                <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden sm-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column text-center" style="min-height: 54px;">
                <div class="button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 text-black leading-12 rounded-full border-transparent hover:border-transparent font-normal tracking-wide" style="background-color: rgb(240, 240, 240);">Our Works</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Contact Us</a>
                </div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column center sm-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row" style="padding-bottom:0;">
            <div class="flex flex-col justify-end items-center column" style="position: relative; min-height: 30vh;">
                <div class="is-dock" style="padding-bottom: 150px;width: 100% !important;">
                    <div style="z-index: 100;width: 35%;left: -12%;bottom: 0px;min-width: 262px;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-002.jpg" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-filename="img-002.jpg" data-200-bottom="transform: translateX(50px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(50px);">
                    </div>
                    <div style="z-index: 70;width: 27%;left: 17%;bottom: 0px;min-width: 213px;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-168.jpg" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-filename="img-168.jpg" data-200-bottom="transform: translateX(-90px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(-90px);">
                    </div>
                    <div style="z-index: 50;width: 23%;left: 37%;bottom: 0px;min-width: 139px;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-072.jpg" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-filename="img-072.jpg" data-200-bottom="transform: translateX(60px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(60px);">
                    </div>
                    <div style="z-index: 20;width: 27%;left: 53%;bottom: 0px;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-020.jpg" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-filename="img-020.jpg" data-200-bottom="transform: translateX(-75px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(-75px);">
                    </div>
                    <div style="z-index: 0;width: 31%;left: 72%;bottom: 0px;min-width: 257px;">
                        <img alt="" data-noresize="" src="[%IMAGE_PATH%]images/img-140.jpg" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-filename="img-140.jpg" data-200-bottom="transform: translateX(50px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(50px);">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-07.png',
			'category': '1',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box is-section-100 is-light-text type-montserrat-roboto box-autofit min-height-70">
    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-012.jpg&quot;); background-position-y: 16%; opacity: 1;">
            <div class="is-overlay-color opacity-6"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-left edge-x-0-5 is-content-1800 leading-12 size-17" style="transition: all 0.3s ease-out 0s;">
        <div class="row">
            <div class="column">
                <h1 class="leading-none size-156">D.</h1>
                <p class="tracking-275 uppercase size-15">Dave Anderson</p>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-200"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column" style="width: 62.235%; flex: 0 0 auto;">
                <h1 class="size-72 leading-none">Hi, this is Dave.<br class="size-72">I develop websites and design beautiful things you will love.</h1>
            </div>
            <div class="column sm-hidden">
                <div class="spacer height-20"></div>
            </div>
            <div class="column">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-right button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 px-12 uppercase font-normal leading-relaxed border-transparent rounded-full size-16 tracking-75 hover:border-transparent" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Get in Touch</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-08.png',
			'category': '1',
			'contentCss': 'type-oranienbaum-sourcesanspro.css',
			'contentClass': 'type-oranienbaum-sourcesanspro',
			'html': `
<div class="is-section is-box is-section-100 is-content-top edge-y-3 type-oranienbaum-sourcesanspro box-autofit min-height-70">
    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-018.jpg&quot;); background-position: 50% 75%; opacity: 1;">
            <div class="is-overlay-color opacity-0"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-1800 leading-none size-17" style="transition: all 0.3s ease-out 0s;">
        <div class="row">
            <div class="column text-center">
                <h1 class="text-right leading-09 size-320">Calm.</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="text-center uppercase size-24 tracking-325">Simple &amp; Lovely</h3>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column sm-hidden">
                <div class="spacer height-20"></div>
            </div>
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
            <div class="column">
                <p class="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column text-right">
                <div class="button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 font-normal leading-14 border-transparent rounded size-17 tracking-wide hover:border-transparent" title="" style="color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);" data-bg="rgb(0,0,0)">Shop Products</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-09.png',
			'category': '1',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 is-light-text type-poppins-lekton is-content-bottom edge-y-4 min-height-60">
    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-131.jpg&quot;); background-position: 50% 60%; opacity: 1;">
            <div class="is-overlay-color opacity-8"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-1740 size-17 leading-none" style="transition: all 0.3s ease-out 0s;">
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
            <div class="column">
                <div class="display">
                    <h1 class="leading-09 size-128 text-left">A style that never gets old.</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-120"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it.</p>
            </div>
            <div class="column" style="width: 50%; flex: 0 0 auto;">
                <div class="spacer height-40"></div>
            </div>
            <div class="column sm-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-right button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-8 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded" title="">Contact</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 font-normal leading-relaxed border-transparent rounded size-18 tracking-wide hover:border-transparent" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Shop Collection</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-10.png',
			'category': '1',
			'contentCss': 'type-frankruhllibre-lato.css',
			'contentClass': 'type-frankruhllibre-lato',
			'html': `
<div class="is-section is-section-100 type-frankruhllibre-lato">
    <div class="is-box is-dark-text is-box-6 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-900 size-16 leading-11">
            <div class="row">
                <div class="column">
                    <h1 class="leading-09 size-176">Creative and Inspiring.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row md-autofit">
                <div class="column">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column md-hidden xs-hidden" style="width: 61.5202%; flex: 0 0 auto;">
                    <div class="spacer height-40"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit min-height-60">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-004.jpg&quot;); opacity: 1; background-position: 50% 60%;">
                <div class="is-overlay-color opacity-6" style="background-color: rgb(0, 0, 0);"></div>
            </div>
        </div>
        <div class="is-container v2 is-content-480 is-content-left edge-x-2">
            <div class="row">
                <div class="column">
                    <h1 class="leading-none size-46">Making Ideas Come Alive.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 font-normal leading-relaxed border-transparent hover:border-transparent rounded-none size-14 uppercase tracking-125" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">How it Works</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-11.png',
			'category': '1',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-section-100 type-inconsolata">
    <div class="is-box is-box-8 is-content-bottom edge-y-2 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 is-content-1140 leading-none size-16">
            <div class="row">
                <div class="column">
                    <h1 class="size-172 tracking-tight leading-none text-center">Take a Break</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="text-center uppercase size-18 tracking-200">Go explore the beautiful places</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column text-center">
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-11 uppercase border-current hover:border-current font-normal leading-relaxed rounded tracking-75" title="">Choose Destinations</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row md-autofit sm-autofit">
                <div class="column" style="width: 56.6157%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/img-174.jpg" alt="" data-filename="img-174.jpg"></div>
                <div class="column md-hidden sm-hidden">
                    <div class="spacer height-40"></div>
                </div>
                <div class="column flex flex-col justify-end items-start">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div class="spacer height-20"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-4 box-autofit min-height-50">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-056.jpg&quot;); background-position: 26% 60%; opacity: 1;"></div>
        </div>
        <div class="is-container v2 is-content-440">
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/hero-12.png',
			'category': '1',
			'contentCss': 'type-fugazone-librefranklin.css',
			'contentClass': 'type-fugazone-librefranklin',
			'html': `
<div class="is-section is-box is-section-100 is-light-text is-content-bottom edge-y-3 type-fugazone-librefranklin box-autofit min-height-70">
    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-039.jpg&quot;); background-position: 50% 84%; opacity: 1;">
            <div class="is-overlay-color opacity-5"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-1600 size-16 leading-12" style="transition: all 0.3s ease-out 0s;">
        <div class="row">
            <div class="column">
                <h1 class="text-center size-248 leading-09">The Studio</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column">
                <h3 class="size-28">Every Detail Matters</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type .</p>
            </div>
            <div class="column sm-hidden">
                <div class="spacer height-40"></div>
            </div>
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-center button-group">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 font-normal leading-relaxed border-transparent rounded size-18 tracking-wide hover:border-transparent" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Request Quote</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* Showcase */

		{
			'thumbnail': 'preview/showcase-01.png',
			'category': '3',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-12 size-16 is-content-1300">
        <div class="row">
            <div class="column">
                <h2 class="size-42 tracking-wider font-light capitalize">Our Works</h2>
                <div class="spacer height-80"></div>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column" style="width: 60.7543%; flex: 0 0 auto;">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img class="mb-3" src="[%IMAGE_PATH%]images/img-025.jpg" alt="" data-filename="img-025.jpg">
                <h3 class="font-light size-24">Item One</h3>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
            </div>
            <div class="column"><img class="mb-3" src="[%IMAGE_PATH%]images/img-082.jpg" alt="" data-filename="img-082.jpg">
                <h3 class="font-light size-24">Item Two</h3>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
            </div>
            <div class="column"><img class="mb-3" src="[%IMAGE_PATH%]images/img-189.jpg" alt="" data-filename="getimg_ai_img-ypiN58I5rf0Pmf33EWByF-editoFyu0u2.png">
                <h3 class="font-light size-24">Item Three</h3>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/showcase-02.png',
			'category': '3',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1100">
        <div class="row">
            <div class="column">
                <h2 class="size-42 tracking-wider font-light capitalize text-center">Portfolio</h2>
            </div>
        </div>
        <div class="row">
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
            <div class="column"><img src="[%IMAGE_PATH%]images/img-025.jpg" alt="" data-filename="img-1350x900.png">
                <div class="spacer height-20"></div>
                <h3 class="font-light size-24">Item One</h3>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
                <p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-082.jpg" alt="" data-filename="img-1350x900.png">
                <div class="spacer height-20"></div>
                <h3 class="font-light size-24">Item Two</h3>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
                <p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-189.jpg" alt="" data-filename="img-1350x900.png">
                <div class="spacer height-20"></div>
                <h3 class="font-light size-24">Item Three</h3>
                <p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
                <p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/showcase-03.png',
			'category': '3',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box type-poppins box-autofit is-section-100">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 content-pb-60 size-18 is-content-1600">
        <div class="row sm-autofit">
            <div class="column sm-hidden">
                <div class="spacer height-40"></div>
            </div>
            <div class="column">
                <h2 class="font-normal text-center">Examples</h2>
                <p class="text-center" style="color: rgb(138, 138, 138);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
            </div>
            <div class="column sm-hidden">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center">Example One</p><img src="[%IMAGE_PATH%]images/img-014.jpg" alt="" data-filename="img-1350x900.png">
            </div>
            <div class="column">
                <p class="text-center">Example Two</p><img src="[%IMAGE_PATH%]images/img-111.jpg" alt="" data-filename="img-1350x900.png">
            </div>
        </div>
    </div>
</div>
		`
		},

		/* List */
		{
			'thumbnail': 'preview/list-01.png',
			'category': '4',
			'contentCss': 'type-yantramanav-ibmplexserif.css',
			'contentClass': 'type-yantramanav-ibmplexserif',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-yantramanav-ibmplexserif box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1200 leading-14 size-19">
        <div class="row">
            <div class="column">
                <h2 class="size-54">Why Choose Us</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="rounded-full flex justify-center items-center mb-8" style="width: 50px; height: 50px; border: 2px solid rgb(136, 136, 136);">
                    <i class="icon ion-android-done leading-none" style="color: rgb(136, 136, 136); font-size: 27px;"></i>
                </div>
                <h3 class="tracking-wide size-32">Feature One</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="column">
                <div class="rounded-full flex justify-center items-center mb-8" style="width: 50px; height: 50px; border: 2px solid rgb(136, 136, 136);">
                    <i class="icon ion-android-done leading-none" style="color: rgb(136, 136, 136); font-size: 27px;"></i>
                </div>
                <h3 class="tracking-wide size-32">Feature Two</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="column">
                <div class="rounded-full flex justify-center items-center mb-8" style="width: 50px; height: 50px; border: 2px solid rgb(136, 136, 136);">
                    <i class="icon ion-android-done leading-none" style="color: rgb(136, 136, 136); font-size: 27px;"></i>
                </div>
                <h3 class="tracking-wide size-32">Feature Three</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/list-02.png',
			'category': '4',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1300 size-19 leading-14">
        <div class="row">
            <div class="column" style="min-height: 60.9711px;">
                <h2 class="text-center size-48">Features</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div style="width: 17.9305%; flex: 0 0 auto;" class="column">
                <div class="spacer height-40"></div>
            </div>
            <div style="width: 64.8476%; flex: 0 0 auto; min-height: 54px;" class="column">
                <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="center column">
                <div class="padding-20">
                    <i class="icon ion-ios-lightbulb-outline size-60" style="color: rgb(174, 174, 174);"></i>
                    <h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
                    <p style="border-bottom: 2px solid #333; width: 50px; display: inline-block;"></p>
                </div>
            </div>
            <div class="center column">
                <div class="padding-20">
                    <i class="icon ion-ios-gear-outline size-60" style="color: rgb(174, 174, 174);"></i>
                    <h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
                    <p style="border-bottom: 2px solid #333; width: 50px; display: inline-block;"></p>
                </div>
            </div>
            <div class="center column">
                <div class="padding-20">
                    <i class="icon ion-ios-camera-outline size-60" style="color: rgb(174, 174, 174);"></i>
                    <h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
                    <p style="border-bottom: 2px solid #333; width: 50px; display: inline-block;"></p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="center column">
                <div class="padding-20">
                    <i class="icon ion-iphone size-60" style="color: rgb(174, 174, 174);"></i>
                    <h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
                    <p style="border-bottom: 2px solid #444; width: 50px; display: inline-block;"></p>
                </div>
            </div>
            <div class="center column">
                <div class="padding-20">
                    <i class="icon ion-ios-paper-outline size-60" style="color: rgb(174, 174, 174);"></i>
                    <h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
                    <p style="border-bottom: 2px solid #444; width: 50px; display: inline-block;"></p>
                </div>
            </div>
            <div class="center column">
                <div class="padding-20">
                    <i class="icon ion-ios-clock-outline size-60" style="color: rgb(174, 174, 174);"></i>
                    <h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
                    <p style="border-bottom: 2px solid #444; width: 50px; display: inline-block;"></p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/list-03.png',
			'category': '4',
			'contentCss': 'type-ubuntumono-sourcecodepro.css',
			'contentClass': 'type-ubuntumono-sourcecodepro',
			'html': `
<div class="is-section is-section-100 type-ubuntumono-sourcecodepro">
    <div class="is-box is-dark-text is-box-8 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-1050 size-16 leading-12">
            <div class="row">
                <div class="column">
                    <h2 class="size-38 tracking-tight">Services We Provide</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-120"></div>
                </div>
            </div>
            <div class="row">
                <div class="column flex flex-col justify-center items-start">
                    <h3 class="size-76">01.</h3>
                    <div class="spacer height-40"></div>
                    <h4 class="size-24">Web Development</h4>
                    <div class="spacer height-20"></div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it.</p>
                </div>
                <div class="column">
                    <h3 class="size-76">02.</h3>
                    <div class="spacer height-40"></div>
                    <h4 class="size-24">Brand &amp; Identity</h4>
                    <div class="spacer height-20"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div class="column">
                    <div class="spacer height-100"></div>
                    <h3 class="size-76">03.</h3>
                    <div class="spacer height-40"></div>
                    <h4 class="size-24">Content Marketing</h4>
                    <div class="spacer height-20"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-4 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-191.jpg&quot;); background-position: 84% 60%; opacity: 1;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/list-04.png',
			'category': '4',
			'contentCss': 'type-ubuntumono-sourcecodepro.css',
			'contentClass': 'type-ubuntumono-sourcecodepro',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-ubuntumono-sourcecodepro box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1540 size-16 leading-12">
        <div class="row">
            <div class="column text-center">
                <h2 class="size-96 text-left">Timeline Process</h2>
                <p class="size-18 uppercase tracking-300 text-left">Discover How We Work</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-120"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="size-76 font-normal">01</h2>
                <div class="spacer height-20"></div>
                <h3 class="size-24 uppercase leading-12">Step One</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <p class="size-76 font-normal">02</h2>
                <div class="spacer height-20"></div>
                <h3 class="size-24 uppercase leading-12">Step Two</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <p class="size-76 font-normal">03</h2>
                <div class="spacer height-20"></div>
                <h3 class="size-24 uppercase leading-12">Step Three</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/list-05.png',
			'category': '4',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
            <div style="min-height: 143.892px;" class="column">
                <p class="uppercase tracking-wider size-14 text-center" style="color: rgb(109, 109, 109);">Fun Facts</p>
                <h2 class="text-center size-42 font-light">What makes us different.</h2>
            </div>
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center leading-14 font-light size-76">100+</p>
                <h3 class="text-center font-light">Happy Clients</h3>
                <p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column">
                <p class="text-center leading-14 font-light size-76">157</p>
                <h3 class="text-center font-light">Completed Projects</h3>
                <p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column">
                <p class="text-center leading-14 font-light size-76">35</p>
                <h3 class="text-center font-light">Countries Served</h3>
                <p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
			'thumbnail': 'preview/list-06.png',
			'category': '4',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row">
            <div style="min-height: 143.892px; width: 40%; flex: 0 0 auto;" class="column">
                <p class="uppercase tracking-wider size-14" style="color: rgb(109, 109, 109);">I create things beautifully.</p>
                <h2 class="font-medium">My Work Skills</h2>
            </div>
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column pr-10">
                <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                    <p class="size-32 font-light" style="padding:0;margin:0;line-height:120px;">80%</p>
                </div>
                <div class="spacer height-20"></div>
                <h3 class="leading-16 font-light">Full Stack Development</h3>
                <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column pr-10">
                <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                    <p class="size-32 font-light" style="padding:0;margin:0;line-height:120px;">90%</p>
                </div>
                <div class="spacer height-20"></div>
                <h3 class="leading-16 font-light">UI/UX</h3>
                <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column pr-10">
                <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                    <p class="size-32 font-light" style="padding:0;margin:0;line-height:120px;">95%</p>
                </div>
                <div class="spacer height-20"></div>
                <h3 class="leading-16 font-light">Illustration&nbsp;</h3>
                <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		

		/* Logo List */
		{
			'thumbnail': 'preview/logolist-01.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row">
            <div style="min-height: 143.892px; width: 40.2151%; flex: 0 0 auto;" class="flex flex-col justify-end items-start column">
                <h2 class="text-left size-76 leading-none font-light">Our Lovely Clients</h2>
                <div class="spacer height-20"></div>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column sm-hidden xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/creative.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/steady.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/light-studio.png" alt=""></div>
        </div>
        <div class="row sm-autofit">
            <div class="column sm-hidden xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/infinitech.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/design-firm.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/sitepro.png" alt=""></div>
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
			'thumbnail': 'preview/logolist-02.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-poppins">
    <div class="is-overlay">
    </div>
    <div class="is-container v2 is-content-1200">
        <div class="row">
            <div class="column text-center">
                <h2 class="size-48 leading-18 text-center tracking-wide">Our Lovely Clients</h2>
                <p style="border-bottom: 3px solid; width: 80px; display: inline-block;"></p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column flex flex-col justify-center items-center">
                <img src="[%IMAGE_PATH%]images/creative.png" alt="">
            </div>
            <div class="column flex flex-col justify-center items-center">
                <img src="[%IMAGE_PATH%]images/light-studio.png" alt="">
            </div>
            <div class="column flex flex-col justify-center items-center">
                <img src="[%IMAGE_PATH%]images/infinitech.png" alt="">
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/logolist-03.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1300 size-17 leading-12">
        <div class="row">
            <div style="width: 29.3083%; flex: 0 0 auto;" class="column flex flex-col justify-center items-start">
                <h2 class="leading-none size-64">Our Partners</h2>
                <div class="spacer height-20"></div>
                <p>We are globally recognized and trusted by the world's best names.</p>
            </div>
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
            <div class="column flex flex-col justify-center items-center">
                <img src="[%IMAGE_PATH%]images/infinitech.png" alt="">
                <div class="spacer height-20"></div><img src="[%IMAGE_PATH%]images/light-studio.png" alt="">
            </div>
            <div class="column flex flex-col justify-center items-center">
                <img src="[%IMAGE_PATH%]images/steady.png" alt="">
                <div class="spacer height-20"></div><img src="[%IMAGE_PATH%]images/sitepro.png" alt="">
            </div>

        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/logolist-04.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row sm-autofit">

            <div class="column sm-hidden xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div style="min-height: 143.892px;" class="column">

                <h2 class="text-center font-semibold">Our Lovely Clients</h2>
                <div class="spacer height-20"></div>
                <p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            <div class="column sm-hidden xs-hidden">
                <div class="spacer height-80"></div>
            </div>

        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>

        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/creative.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/steady.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/light-studio.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/design-firm.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/sitepro.png" alt=""></div>

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
			'thumbnail': 'preview/logolist-05.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
            <div style="min-height: 143.892px; width: 40%; flex: 0 0 auto;" class="column">
                <h2 class="text-center font-light size-96 leading-none">As Featured On</h2>
            </div>
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/upclick.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/digitalmag.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/mmedia.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/bbuzz.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/prosource.png" alt=""></div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column" style="width: 48.172%; flex: 0 0 auto;">
                <p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/logolist-06.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box box-space type-poppins is-section-70 box-autofit min-height-50">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-180.jpg&quot;); opacity: 1; background-size: cover; background-position-y: 23%;"></div>
    </div>
</div>
<div class="is-section is-box is-section-30 box-autofit type-poppins is-content-top edge-y-0-75">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1600">
        <div class="row">
            <div class="column" style="width: 25.2866%; flex: 0 0 auto;">
                <h2 class="size-76 leading-08 font-extralight">as featured on</h2>
            </div>
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
            <div class="column flex flex-col justify-center items-center"><img src="[%IMAGE_PATH%]images/onesight.png" alt=""></div>
            <div class="column flex flex-col justify-center items-center"><img src="[%IMAGE_PATH%]images/mmedia.png" alt=""></div>
            <div class="column flex flex-col justify-center items-center"><img src="[%IMAGE_PATH%]images/digitalmag.png" alt=""></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/logolist-07.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 box-space type-poppins">
    <div class="is-box is-content-top is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-193.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-1000">
            <div class="row">
                <div class="column">
                    <h2 class="text-center font-light">As featured on</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-120"></div>
                </div>
            </div>
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/upclick.png" alt=""></div>
                <div class="column"><img src="[%IMAGE_PATH%]images/digitalmag.png" alt=""></div>
                <div class="column"><img src="[%IMAGE_PATH%]images/mmedia.png" alt=""></div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/prosource.png" alt=""></div>
                <div class="column"><img src="[%IMAGE_PATH%]images/nett.png" alt=""></div>
                <div class="column"><img src="[%IMAGE_PATH%]images/worldwide.png" alt=""></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/logolist-08.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row sm-autofit">
            <div style="min-height: 143.892px;" class="p-10 column">
                <h2 class="leading-none text-left size-48 font-semibold">As Seen On</h2>
            </div>
            <div style="min-height: 143.892px;" class="p-10 column">
                <p class="text-left" style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            <div class="column sm-hidden xs-hidden">
                <div class="spacer height-80"></div>
            </div>

        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>

        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/upclick.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/digitalmag.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/mmedia.png" alt=""></div>

        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/prosource.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/worldwide.png" alt=""></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/bbuzz.png" alt=""></div>

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
			'thumbnail': 'preview/logolist-09.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1420">
        <div class="row">
            <div class="column">
                <h2 class="text-center leading-none font-light size-76">As Featured On</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-120"></div>
            </div>
        </div>
        <div class="row">
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/upclick.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/digitalmag.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/mmedia.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/bbuzz.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/prosource.png" alt=""></div>
        </div>
        <div class="row">
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/mmedia.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/prosource.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/bbuzz.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/digitalmag.png" alt=""></div>
            <div class="flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/upclick.png" alt=""></div>
        </div>
    </div>
</div>
		`
		},

		/* Pricing */
		{
			'thumbnail': 'preview/pricing-01.png',
			'category': '9',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1200 size-17 leading-14 content-pt-50 content-pb-50">
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div style="width: 52.7981%; flex: 0 0 auto;" class="column text-center">
                <h2 class="text-center font-light">Simple Pricing</h2>
                <p style="border-bottom: 3px solid #000; width: 80px; display: inline-block;"></p>
                <div class="spacer height-20"></div>
                <p style="color: rgb(109, 109, 109);" class="text-center size-14">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative sm-items-2">
            <div class="column p-7 flex flex-col justify-center items-center">
                <div style="padding: 50px 20px; box-sizing: border-box; border: 1px solid rgb(85, 85, 85); width: 100%; max-width: 450px;" class="text-left flex justify-center flex-col items-center">
                    <h3 class="text-center size-19 tracking-widest">Standard</h3>
                    <p class="size-24 text-center">$<span class="size-76">9</span>/mo</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>10 GB Storage</li>
                        <li>2 Users</li>
                        <li>2 Domains</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="column p-7 flex flex-col justify-center items-center">
                <div style="padding: 90px 30px; width: 100%; box-sizing: border-box; border: 1px solid rgb(85, 85, 85); max-width: 450px;" class="text-left flex justify-center flex-col items-center">
                    <h3 class="text-center size-19 tracking-widest">Deluxe</h3>
                    <p class="size-24 text-center">$<span class="size-76">19</span>/mo</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>20 GB Storage</li>
                        <li>5 Users</li>
                        <li>3 Domains</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="column p-7 flex flex-col justify-center items-center">
                <div style="padding: 50px 20px; width: 100%; box-sizing: border-box; border: 1px solid rgb(85, 85, 85); max-width: 450px;" class="text-left flex justify-center flex-col items-center">
                    <h3 class="text-center size-19 tracking-widest capitalize">Ultimate</h3>
                    <p class="size-24 text-center">$<span class="size-76">29</span>/mo</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>30 GB Storage</li>
                        <li>10 Users</li>
                        <li>Unlimited Domains</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/pricing-02.png',
			'category': '9',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-980 size-17 leading-14 content-pt-50 content-pb-50">
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div style="width: 52.7981%; flex: 0 0 auto;" class="column text-center">
                <h2 class="text-center font-light">Order Now</h2>
                <p style="border-bottom: 3px solid #000; width: 80px; display: inline-block;"></p>
                <div class="spacer height-20"></div>
                <p style="color: rgb(109, 109, 109);" class="text-center size-14">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative">
            <div class="p-7 flex flex-col justify-center items-center column">
                <div style="padding: 50px 30px; width: 100%; box-sizing: border-box; border: 1px solid rgb(85, 85, 85); max-width: 450px;" class="text-left flex justify-center flex-col items-center">
                    <h3 class="text-center size-19 tracking-widest">Standard</h3>
                    <p class="size-24 text-center">$<span class="size-76">9</span>/mo</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>10 GB Storage</li>
                        <li>2 Users</li>
                        <li>2 Domains</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="p-7 flex flex-col justify-center items-center column">
                <div style="padding: 90px 20px; width: 100%; box-sizing: border-box; border: 1px solid rgb(85, 85, 85); max-width: 450px;" class="text-left flex justify-center flex-col items-center">
                    <h3 class="text-center size-19 tracking-widest">Pro</h3>
                    <p class="size-24 text-center">$<span class="size-76">19</span>/mo</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>20 GB Storage</li>
                        <li>5 Users</li>
                        <li>3 Domains</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/pricing-03.png',
			'category': '9',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-poppins">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-container is-content-1500 v2 size-17 leading-14 content-pt-50 content-pb-50">
        <div class="row">
            <div class="column center">
                <h2 class="font-light tracking-wide capitalize size-42">Plans that meet your needs</h2>
                <div class="spacer height-20"></div>
                <p class="size-17 tracking-widest" style="color: rgb(87, 87, 87);">Fair Prices. Excellent Services.</p>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row relative sm-items-2">
            <div class="column flex flex-col justify-center items-center py-4">
                <div style="width: 100%; padding: 50px 30px; box-sizing: border-box; max-width: 450px;" class="is-card shadow-1 text-left flex justify-center flex-col items-center">
                    <h3 class="size-24" style="letter-spacing: 2px;">Standard</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-24 leading-none">$<span class="size-96 font-extralight">19</span>/mo</p>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <ul>
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-40"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="column flex flex-col justify-center items-center py-4">
                <div style="width: 100%; padding: 80px 40px; box-sizing: border-box; max-width: 550px;" class="is-card shadow-1 text-left flex justify-center flex-col items-center">
                    <h3 class="size-24" style="letter-spacing: 2px;">Deluxe</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-24 leading-none">$<span class="size-96 font-extralight">29</span>/mo</p>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <ul>
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-40"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="column flex flex-col justify-center items-center py-4">
                <div style="width: 100%; padding: 50px 30px; box-sizing: border-box; max-width: 450px;" class="is-card shadow-1 text-left flex justify-center flex-col items-center">
                    <h3 class="size-24" style="letter-spacing: 2px;">Ultimate</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-24 leading-none">$<span class="size-96 font-extralight">39</span>/mo</p>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <ul>
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-40"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/pricing-04.png',
			'category': '9',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-poppins">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-container v2 size-17 leading-14 is-content-1040 content-pt-50 content-pb-50">
        <div class="row">
            <div class="column center">
                <h2 class="font-light tracking-wide capitalize size-42">Plans that meet your needs</h2>
                <div class="spacer height-20"></div>
                <p class="size-17 tracking-widest" style="color: rgb(87, 87, 87);">Fair Prices. Excellent Services.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative">
            <div class="flex flex-col justify-center items-center column py-4">
                <div style="width: 100%; padding: 50px 30px; box-sizing: border-box; max-width: 450px;" class="is-card shadow-1 text-left flex justify-center flex-col items-center">
                    <h3 class="size-24" style="letter-spacing: 2px;">Standard</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-24 leading-none">$<span class="size-96 font-extralight">19</span>/mo</p>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <ul>
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-40"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center column py-4">
                <div style="width: 100%; padding: 80px 40px; box-sizing: border-box; max-width: 550px;" class="is-card shadow-1 text-left flex justify-center flex-col items-center">
                    <h3 class="size-24" style="letter-spacing: 2px;">Pro</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-24 leading-none">$<span class="size-96 font-extralight">29</span>/mo</p>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <ul>
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-40"></div>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/pricing-05.png',
			'category': '9',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box is-light-text box-autofit min-height-60 type-poppins">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-108.jpg&quot;); background-position: 50% 60%; opacity: 1;">
            <div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-1200 size-17 leading-14 content-pt-50 content-pb-50 is-content-left edge-x-3">
        <div class="row">
            <div class="column" style="width: 41.5871%; flex: 0 0 auto;">
                <h2 class="leading-none size-84" style="letter-spacing: 1px;">Choose Your Plan.</h2>
            </div>
            <div class="column" style="width: 58.4129%;">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-120"></div>
            </div>
        </div>
        <div class="row relative">
            <div class="column pr-9 py-5">
                <h3 class="size-76 leading-14 font-normal">01</h3>
                <h4 class="size-24 leading-16 font-normal">Lite / $39</h4>
                <div class="spacer height-20"></div>
                <ul style="list-style: initial;padding-left: 20px;">
                    <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                </ul>
                <div class="spacer height-40"></div>
                <div>
                    <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-relaxed rounded-full size-14 uppercase tracking-widest" title="" role="button" style="color: rgb(255, 255, 255);">Get Started</a>
                </div>
            </div>
            <div class="column pr-9 py-5">
                <h3 class="size-76 leading-14 font-normal">02</h3>
                <h4 class="size-24 leading-16 font-normal">Advanced / $59</h4>
                <div class="spacer height-20"></div>
                <ul style="list-style: initial;padding-left: 20px;">
                    <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>

                </ul>
                <div class="spacer height-40"></div>
                <div>
                    <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-relaxed rounded-full size-14 tracking-widest uppercase" title="" role="button" style="color: rgb(255, 255, 255);">Get Started</a>
                </div>
            </div>
            <div class="column pr-9 py-5">
                <h3 class="size-76 leading-14 font-normal">03</h3>
                <h4 class="size-24 leading-16 font-normal">Ultimate / $89</h4>
                <div class="spacer height-20"></div>
                <ul style="list-style: initial;padding-left: 20px;">
                    <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                </ul>
                <div class="spacer height-40"></div>
                <div>
                    <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-relaxed rounded-full size-14 uppercase tracking-widest" title="" role="button" style="color: rgb(255, 255, 255);">Get Started</a>
                </div>
            </div>

        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/pricing-06.png',
			'category': '9',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box-8 is-box is-dark-text box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
        <div class="is-container v2 size-16 leading-14 is-content-900">
            <div class="row">
                <div class="column">
                    <h2 class=" leading-14 size-64 font-extralight">Pricing Plans</h2>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-140"></div>
                </div>
            </div>
            <div class="row md-autofit">
                <div class="py-5 column">
                    <h3 class="size-28 font-normal">Basic</h3>
                    <div class="spacer height-20"></div>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <p>$<span class="size-76">59</span>/ month</p>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal rounded leading-relaxed size-14 uppercase tracking-widest" title="">Choose Plan</a>
                    </div>
                </div>
                <div class="py-5 column xs-hidden md-hidden" style="width: 12.5704%; flex: 0 0 auto;">
                    <div class="spacer height-80"></div>
                </div>
                <div class="pr-9 py-5 column">
                    <h3 class="size-28 font-normal">Premium</h3>
                    <div class="spacer height-20"></div>
                    <p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                    <div class="spacer height-20"></div>
                    <p>$<span class="size-76">99</span>/ month</p>
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal rounded leading-relaxed size-14 uppercase tracking-widest" title="">Choose Plan</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box-4 is-box box-autofit min-height-60">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-138.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
		`
		},

		/* Shop */
		{
			'thumbnail': 'preview/shop-01.png',
			'category': '10',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-raleway-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1500 leading-13">
        <div class="row sm-autofit relative sm-items-1">
            <div class="column flex flex-col justify-center items-start py-6" style="width: 38.1223%; flex: 0 0 auto;">
                <p class="leading-none size-16" style="color: rgb(138, 138, 138);">Store Name<br>Your City Name</p>
                <h2 class="font-normal size-54">Bedside Table</h2>
                <div class="spacer height-20"></div>
                <p class="size-32 font-medium">$129.00</p>
                <div class="spacer height-80 xs-hidden"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
                <div class="spacer height-20"></div>
                <div class="whitespace-nowrap">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full size-15 uppercase tracking-125" title="">Buy Now</a>
                </div>
            </div>
            <div class="column xs-hidden sm-hidden" style="width: 11.5932%; flex: 0 0 auto;">
                <div class="spacer height-80"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-077.jpg" alt="" data-filename="img-077.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-02.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-section-100 type-lato">
    <div class="is-box box-autofit min-height-60 is-box-6">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-176.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
    </div>
    <div class="is-box box-autofit is-box-6">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 leading-13 is-content-700 is-content-left edge-x-2 size-18">
            <div class="row">
                <div class="column">
                    <h2 class="size-84 font-normal">Dinning Chair</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 40%; flex: 0 0 auto;">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="font-normal">Details</p>
                    <ul>
                        <li>Base Material: Solid Wood</li>
                        <li>Seat Material: Soft Fabric</li>
                        <li>Colour: Grey, Dark Grey, Light Grey, Ivory</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>

            </div>
            <div class="row">
                <div class="column">
                    <p class="size-68 leading-none font-light">$149</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full tracking-75" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-03.png',
			'category': '10',
			'contentCss': 'type-oswald-opensans.css',
			'contentClass': 'type-oswald-opensans',
			'html': `
<div class="is-section is-section-100 type-oswald-opensans">
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 is-content-800 size-16 leading-12">
            <div class="row">
                <div class="column">
                    <h2 class="font-light leading-none size-300">Shoes</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
                <div class="column" style="width: 40%; flex: 0 0 auto;">
                    <h3 class="size-24 tracking-wide leading-loose">Details</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h4 class="size-50">$199</h4>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-11 uppercase border-current hover:border-current font-normal leading-relaxed rounded tracking-widest" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 size-16 leading-12 is-content-760">
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-059.jpg" alt="" data-filename="img-059.jpg"></div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3 class="size-24 tracking-wide leading-loose">Colors</h3>
                    <p>White, Black, Grey, Yellow, Red</p>
                </div>
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-04.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1300 size-18 leading-13">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-46 font-medium">Furniture</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column p-10 px-5"><img src="[%IMAGE_PATH%]images/img-071.jpg" alt="" data-filename="img-071.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-28">Bedside Table</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
                <p class="font-normal leading-16 size-35">$129</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" data-bg="">View Details</a>
                </div>
            </div>
            <div class="column p-10 px-5"><img src="[%IMAGE_PATH%]images/img-172.jpg" alt="" data-filename="img-172.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-28">Wood Cabinet</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
                <p class="font-normal leading-16 size-35">$159</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" data-bg="">View Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-05.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-13 is-content-1500">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-54 font-normal">Products</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative sm-items-2">
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-071.jpg" alt="" data-filename="getimg_ai_img-aq3XViWRWfWWYppeccq9X-editcd4zzvm.png">
                <div class="spacer height-40"></div>
                <h3 class="font-normal size-24">Coffee Table</h3>
                <p class="size-38 font-medium">$29</p>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mt-2 mb-1 py-2 size-18 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2 mr-2" data-bg="">View Details</a>
                </div>
            </div>
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-047.jpg" alt="" data-filename="img-047.jpg">
                <div class="spacer height-40"></div>
                <h3 class="size-24 font-normal">Bookcase</h3>
                <p class="size-38 font-medium">$49</p>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mt-2 mb-1 py-2 size-18 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2 mr-2" data-bg="">View Details</a>
                </div>
            </div>
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-172.jpg" alt="" data-filename="getimg_ai_img-jpDLZStTGIA5b2DHZSW5y-editbaFBchv.png">
                <div class="spacer height-40"></div>
                <h3 class="size-24 font-normal">Storage Cabinet</h3>
                <p class="size-38 font-medium">$89</p>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mt-2 mb-1 py-2 size-18 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2 mr-2" data-bg="">View Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-06.png',
			'category': '10',
			'contentCss': 'type-raleway-playfairdisplay.css',
			'contentClass': 'type-raleway-playfairdisplay',
			'html': `
<div class="is-section is-box is-section-100 box-autofit min-height-70 type-raleway-playfairdisplay is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-103.jpg&quot;); background-position: 50% 85%;">
            <div class="is-overlay-color opacity-8"></div>
        </div>
    </div>
    <div class="is-container v2 size-18 is-content-left is-content-1000 leading-13 edge-x-2">
        <div class="row">
            <div class="column">
                <h2 class="size-144 leading-09 font-light">Wood Cabinet</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="leading-none tracking-tight size-42 font-semibold">$189</p>
            </div>
            <div class="column">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 px-6 border-current hover:border-current font-normal leading-12 rounded-none pt-3 pb-3 size-15 tracking-wider" title="">Buy Product&nbsp;<i class="icon ion-android-arrow-forward"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-07.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1640 content-pt-60 size-17 leading-12">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-48 font-normal">Most Loved</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row relative sm-items-2 md-items-2">
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-161.jpg" alt="" data-filename="img-161.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Product Name&nbsp; |&nbsp; $29</h3>
                <p style="color: rgb(87, 87, 87);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 text-black leading-12 rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" data-bg="">View Details</a>
                </div>
            </div>
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-118.jpg" alt="" data-filename="img-118.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Product Name&nbsp; |&nbsp; $39</h3>
                <p style="color: rgb(87, 87, 87);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 text-black leading-12 rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" data-bg="">View Details</a>
                </div>
            </div>
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-043.jpg" alt="" data-filename="img-043.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Product Name&nbsp; |&nbsp; $59</h3>
                <p style="color: rgb(87, 87, 87);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 text-black leading-12 rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" data-bg="">View Details</a>
                </div>
            </div>
            <div class="column py-5 px-6"><img src="[%IMAGE_PATH%]images/img-048.jpg" alt="" data-filename="img-048.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Product Name&nbsp; |&nbsp; $49</h3>
                <p style="color: rgb(87, 87, 87);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 text-black leading-12 rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" data-bg="">View Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-08.png',
			'category': '10',
			'contentCss': 'type-alegreya-lato.css',
			'contentClass': 'type-alegreya-lato',
			'html': `
<div class="is-section is-box type-alegreya-lato is-section-25 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-900 size-17 leading-14">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-84">Our Products</h2>
            </div>
        </div>
        <div class="row">
            <div class="column text-center">
                <p>We make shopping way easier and convenient for you.</p>
            </div>
        </div>
    </div>
</div>

<div class="is-section box-space type-alegreya-lato is-section-75 md-boxes-2 md-boxes-wrap sm-boxes-2 sm-boxes-wrap">
    <div class="is-box-4 is-box is-light-text is-content-top edge-y-2 box-autofit min-height-40">
        <div class="is-overlay" style="background-color: rgb(243, 243, 243);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-173.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 is-content-600 leading-12 size-17">
            <div class="row">
                <div class="column">
                    <h3 class="size-24">Product One</h3>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h4 class="leading-09 size-132">$79</h4>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row sm-autofit">
                <div class="column sm-hidden">
                    <div class="spacer height-80"></div>
                </div>
                <div class="column" style="width: 57.722%; flex: 0 0 auto;">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div class="spacer height-20"></div>
                    <p class="font-semibold"><a href="#" title="">Buy Now</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box-4 is-box is-dark-text is-content-bottom box-autofit min-height-40">
        <div class="is-overlay" style="background-color: rgb(250, 250, 250);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-077.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 is-content-380 size-17 leading-12">
            <div class="row">
                <div class="column text-center">
                    <div class="button-group">
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full hover:border-transparent size-14 uppercase tracking-125" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Browse All</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="is-box-4 is-box is-light-text is-content-bottom edge-y-1 box-autofit min-height-40">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-103.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-8"></div>
            </div>
        </div>
        <div class="is-container v2 size-17 leading-12 is-content-600">
            <div class="row">
                <div class="column">
                    <h3 class="size-24 text-right">Product Two</h3>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="column" style="cursor: ns-resize;">
                        <h4 class="leading-09 size-132 text-right">$39</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.</p>
                    <div class="spacer height-20"></div>
                    <p class="font-semibold"><a href="#" title="">Buy Now</a></p>
                </div>
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/shop-09.png',
			'category': '10',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box box-autofit type-poppins-lekton is-section-30">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-600">
        <div class="row">
            <div class="column">
                <h2 class="text-center">Our Products</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
</div>
<div class="is-section box-space box-space-xxs is-section-70 type-poppins-lekton">
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1 is-light-text">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-074.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-12"></div>
            </div>
        </div>
        <div class="is-container v2 size-17 is-content-left edge-x-0-5 is-content-480 leading-12 content-pb-40">
            <div class="row">
                <div class="column">
                    <h3 class="tracking-tight size-24">Product Name</h3>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-42 leading-none">$89</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 tracking-wide rounded-none" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1 is-light-text">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-073.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-10"></div>
            </div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-480 is-content-left edge-x-0-5 content-pb-40">
            <div class="row">
                <div class="column">
                    <h3 class="tracking-tight size-24">Product Name</h3>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="column">
                        <p class="size-42 leading-none">$59</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 tracking-wide rounded-none" title="">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		{
			'thumbnail': 'preview/shop-10.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1680">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-64 font-normal">New Arrivals</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center">We make shopping easier.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row relative md-items-2 sm-items-2">
            <div style="width: 27.4233%; flex: 0 0 auto;" class="column py-4"><img src="[%IMAGE_PATH%]images/img-145.jpg" alt="" data-filename="img-145.jpg"></div>
            <div class="column py-4">
                <h3 class="font-normal size-32">Sweater</h3>
                <div class="spacer height-40"></div>
                <h4 class="size-32 font-normal">$179</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
                <div class="spacer height-20"></div>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid ml-1 mr-1 text-black font-normal border-current hover: hover:border-current tracking-wide leading-relaxed rounded-full pt-2 pb-2 px-8 size-14" title="">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid border-transparent ml-1 mr-1 hover:border-transparent rounded py-1 px-5 font-normal tracking-wide text-gray-800 underline leading-relaxed size-14" title="">View Details</a>
                </div>
            </div>
            <div class="column py-4" style="width: 27.4847%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/img-057.jpg" alt="" data-filename="img-057.jpg"></div>
            <div class="column py-4">
                <h3 class="font-normal size-32">Winter Coat</h3>
                <div class="spacer height-40"></div>
                <h4 class="size-32 font-normal">$289</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
                <div class="spacer height-20"></div>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid ml-1 mr-1 text-black font-normal border-current hover: hover:border-current tracking-wide leading-relaxed rounded-full pt-2 pb-2 px-8 size-14" title="">Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid border-transparent ml-1 mr-1 hover:border-transparent rounded py-1 px-5 font-normal tracking-wide text-gray-800 underline leading-relaxed size-14" title="">View Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		{
			'thumbnail': 'preview/shop-11.png',
			'category': '10',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-raleway-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1660">
        <div class="row">
            <div class="column">
                <h2 class="size-48 font-medium">Featured Products</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row relative md-items-2 sm-items-2">
            <div class="column py-5"><img src="[%IMAGE_PATH%]images/img-023.jpg" alt="" data-filename="img-023.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21 leading-none">Product Name</h3>
                <h4 class="font-normal size-35 leading-none">$124</h4>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                <p><a href="#" title="" class="tracking-widest size-16">Add to Cart</a></p>
            </div>
            <div class="column py-5"><img src="[%IMAGE_PATH%]images/img-079.jpg" alt="" data-filename="img-079.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21 leading-none">Product Name</h3>
                <h4 class="font-normal size-35 leading-none">$89</h4>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                <p><a href="#" title="" class="tracking-widest size-16">Add to Cart</a></p>
            </div>
            <div class="column py-5"><img src="[%IMAGE_PATH%]images/img-147.jpg" alt="" data-filename="img-147.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21 leading-none">Product Name</h3>
                <h4 class="font-normal size-35 leading-none">$177</h4>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                <p><a href="#" title="" class="tracking-widest size-16">Add to Cart</a></p>
            </div>
            <div class="column min-height-400 py-5"><img src="[%IMAGE_PATH%]images/img-179.jpg" alt="" data-filename="img-179.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21 leading-none">Product Name</h3>
                <h4 class="font-normal size-35 leading-none">$39</h4>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                <p><a href="#" title="" class="tracking-widest size-16">Add to Cart</a></p>
            </div>
        </div>
    </div>
</div>
			`
		},
		{
			'thumbnail': 'preview/shop-12.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-section-100 type-lato">
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-600">
            <div class="row">
                <div class="column">
                    <h2 class="leading-none size-84 font-normal">Comfy Wooden Office Desk</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="font-light size-46">$189</p>
                </div>
                <div class="column" style="width: 40%; flex: 0 0 auto;">
                    <ul style="list-style: initial;padding-left: 20px;">
                        <li>Shape: Rectangular</li>
                        <li>Dimension:&nbsp;19.7"D x 19.7"W x 29.5"H</li>
                        <li>Color: Walnut</li>
                        <li>Style: Modern</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal uppercase tracking-125 size-14" title="" style="background-color: rgb(36, 36, 36); color: rgb(255, 255, 255);" data-bg="rgb(36,36,36)">Buy Now&nbsp;<i class="icon ion-android-arrow-forward"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit min-height-50">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-132.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-540">
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		{
			'thumbnail': 'preview/shop-13.png',
			'category': '10',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 is-content-1500 size-17 content-pt-60">
        <div class="row">
            <div class="column">
                <h2 class="font-normal">Products</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row relative sm-items-2">
            <div class="column py-4"><img src="[%IMAGE_PATH%]images/img-022.jpg" alt="" data-filename="img-022.jpg">
                <div class="spacer height-20"></div>
                <h3 class="text-left size-24 font-medium">Product Name</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="font-normal">$129&nbsp; <a href="#" title="">View Details</a></p>
            </div>
            <div class="column py-4"><img src="[%IMAGE_PATH%]images/img-080.jpg" alt="" data-filename="img-080.jpg">
                <div class="spacer height-20"></div>
                <h3 class="text-left size-24 font-medium">Product Name</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="font-normal">$118&nbsp;&nbsp;<a href="#" title="">View Details</a></p>
            </div>
            <div class="column py-4"><img src="[%IMAGE_PATH%]images/img-148.jpg" alt="" data-filename="img-148.jpg">
                <div class="spacer height-20"></div>
                <h3 class="text-left size-24 font-medium">Product Name</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="font-normal">$95&nbsp;&nbsp;<a href="#" title="">View Details</a></p>
            </div>
            <div class="column py-4"><img src="[%IMAGE_PATH%]images/img-178.jpg" alt="" data-filename="img-178.jpg">
                <div class="spacer height-20"></div>
                <h3 class="text-left size-24 font-medium">Product Name</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="font-normal">$76&nbsp;&nbsp;<a href="#" title="">View Details</a></p>
            </div>
        </div>
    </div>
</div>
			`
		},
		{
			'thumbnail': 'preview/shop-14.png',
			'category': '10',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-section-100 type-raleway-lato">
    <div class="is-box box-autofit is-box-7">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-1000">
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-042.jpg" alt="" data-filename="img-042.jpg"></div>
            </div>
        </div>
    </div>
    <div class="is-box box-autofit is-box-5">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-17 leading-13 content-pt-0 is-content-left edge-x-0-5 is-content-580">
            <div class="row">
                <div class="column">
                    <p class="uppercase size-14 tracking-125">Limited Offer</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h2 class="size-60 leading-none font-medium">Two seater sofa&nbsp;</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="font-light size-38">35% off!</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column flex flex-col justify-center items-start" style="width: 29.5327%; flex: 0 0 auto;">
                    <p class="size-32 font-normal">$789</p>
                </div>
                <div class="column" style="width: 68.008%; flex: 0 0 auto;">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Buy Now</a><a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide underline px-2 ml-2" title="" data-bg="">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		{
			'thumbnail': 'preview/shop-15.png',
			'category': '10',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins-lekton">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 content-pb-60 content-pt-60 is-content-1200">
        <div class="row">
            <div class="column">
                <h2 class="text-center tracking-tight size-54 font-normal">Our Products</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row sm-autofit md-autofit">
            <div class="column py-4"><img src="[%IMAGE_PATH%]images/img-146.jpg" alt="" data-filename="img-146.jpg">
                <div class="spacer height-20"></div>
                <h3 class="size-24 font-normal">Product Name</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-14 rounded-full tracking-wide" title="">$99 - Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 text-black leading-14 rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">View Details</a>
                </div>
            </div>
            <div style="width: 10.1976%; flex: 0 0 auto;" class="column xs-hidden sm-hidden md-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column py-3"><img src="[%IMAGE_PATH%]images/img-028.jpg" alt="" data-filename="img-028.jpg">
                <div class="spacer height-20"></div>
                <h3 class="size-24 font-normal">Product Name</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 border-current hover:border-current font-normal leading-14 rounded-full tracking-wide" title="">$78 - Buy Now</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-7 text-black leading-14 rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">View Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		/* Article */
		{
			'thumbnail': 'preview/article-01.png',
			'category': '2',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-063.jpg&quot;); background-position: 50% 60%; opacity: 1;"></div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>\
        <div class="is-container v2 size-16 leading-13 is-content-500">
            <div class="row">
                <div class="column">
                    <h1 class="size-60 leading-11 font-light">Home is wherever I'm with you.</h1>
                    <div class="spacer height-20"></div>
                    <p style="color: rgb(136, 136, 136);" class="tracking-wider">By Katrine Klausen</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 100%; flex: 0 0 auto; min-height: 54px;">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-02.png',
			'category': '2',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-1000 size-16 leading-14">
            <div class="row">
                <div class="column" style="width: 74.0084%; flex: 0 0 auto;">
                    <h1 class="leading-none size-100">Simple, Clean, Bright</h1>
                </div>
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-220"></div>
                </div>
            </div>
            <div class="row relative md-items-2">
                <div class="flex flex-col justify-end items-start column">
                    <p class="leading-none size-14">Written by<br class="size-14"><span class="font-semibold size-14">Samantha Holmes</span></p>
                </div>
                <div class="column">
                    <p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-162.jpg&quot;); background-position: 0% 60%; opacity: 1;"></div>
        </div>
    </div>
</div>
		`
		},

		{
			'thumbnail': 'preview/article-04.png',
			'category': '2',
			'contentCss': 'type-prata-hindsiliguri.css',
			'contentClass': 'type-prata-hindsiliguri',
			'html': `
<div class="is-section is-section-100 box-space type-prata-hindsiliguri">
    <div class="is-box is-content-top is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-011.jpg&quot;); background-position: 50% 60%; opacity: 1;"></div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 is-content-bottom edge-y-2 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-800 size-16 leading-12">
            <div class="row">
                <div class="column pb-4">
                    <h1 class="text-center leading-none size-84">We fall in love with minimalist style.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-160"></div>
                </div>
            </div>
            <div class="row md-autofit sm-autofit">
                <div class="column">
                    <p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div class="md-hidden sm-hidden xs-hidden column">
                    <div class="spacer height-80"></div>
                </div>
                <div class="flex flex-col justify-end items-end column">
                    <p class="leading-12 text-justify italic font-light size-16">By&nbsp;Nicklas Henriksen</p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-03.png',
			'category': '2',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-section-100 type-montserrat-roboto">
    <div class="is-box is-box-6 is-content-bottom edge-y-1 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 is-content-900 leading-12 size-17">
            <div class="row">
                <div class="column">
                    <h1 class="size-76 leading-11">The World Filled with Wonders.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 59.8575%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/img-170.jpg" alt="" data-filename="img-170.jpg"></div>
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-6 is-content-bottom edge-y-1 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-900 size-17 leading-12">
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
                <div class="column" style="width: 33.2918%; flex: 0 0 auto;">
                    <p class="leading-12">Written by<br>Caroline Gabrielle</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-005.jpg" alt="" data-filename="img-005.jpg"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-05.png',
			'category': '2',
			'contentCss': 'type-novamono-robotomono.css',
			'contentClass': 'type-novamono-robotomono',
			'html': `
<div class="is-section is-section-100 type-novamono-robotomono">
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
        <div class="is-container v2 is-content-1000 leading-12 size-16">
            <div class="row md-autofit sm-autofit">
                <div class="column">
                    <h1 class="leading-none uppercase size-64">Home is where your story begins</h1>
                </div>
                <div class="column md-hidden sm-hidden">
                    <div class="spacer height-40"></div>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row md-autofit sm-autofit">
                <div class="column md-hidden sm-hidden xs-hidden">
                    <div class="spacer height-180"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="font-semibold size-14">Jonathan Courtright</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-033.jpg&quot;); background-position: 50% 60%; opacity: 1;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-07.png',
			'category': '2',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-section-100 box-space type-quicksand-kalam">
    <div class="is-box is-box-6 is-light-text is-content-bottom edge-y-3 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-192.jpg&quot;); background-position: 50% 60%; opacity: 1;">
                <div class="is-overlay-color opacity-8" style="background-color: rgb(0, 0, 0);"></div>
            </div>
        </div>
        <div class="is-container v2 is-content-440 is-content-left edge-x-0-5">
            <div class="row">
                <div class="column">
                    <h2 class="size-48 leading-none">Words from heart.</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-17 tracking-125">Melissa Sparks</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-6 is-align-justify box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-620 size-16 leading-12">
            <div class="row">
                <div class="column">
                    <h1 class="size-132 leading-none">Plant your dreams.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-100"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
			'thumbnail': 'preview/article-08.png',
			'category': '2',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 is-content-920 size-16 leading-12 content-pb-0">
            <div class="row">
                <div class="column"><img class="mb-3" src="[%IMAGE_PATH%]images/img-182.jpg" alt="" data-filename="img-182.jpg"></div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="size-76">More than words</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row md-autofit sm-autofit">
                <div class="column">
                    <p class="tracking-wide size-15">Words From Heart<br class="size-15">By William Rollins</p>
                </div>
                <div class="column md-hidden sm-hidden">
                    <div class="spacer height-80"></div>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-6 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-right is-content-400 edge-x-1 h-full flex flex-col justify-between size-16 leading-12">
            <div class="row">
                <div class="column pt-16">
                    <h1 class="text-right leading-08 size-132">08</h1>
                    <p class="text-right tracking-75">August</p>
                </div>
            </div>
            <div class="row">
                <div class="column pb-12">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
			'thumbnail': 'preview/article-06.png',
			'category': '2',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-section-100 type-ibmplexmono">
    <div class="is-box is-dark-text is-box-7 is-align-justify box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-1000 leading-12 size-17">
            <div class="row">
                <div class="column">
                    <h1 class="size-200 leading-none">A Place</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3 class="size-24">Where Ideas Grow</h3>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row md-autofit sm-autofit">
                <div class="column md-hidden sm-hidden">
                    <div class="spacer height-40"></div>
                </div>
                <div class="column" style="width: 42.2756%; flex: 0 0 auto;">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="leading-12 font-semibold size-14">Ralph Whisler</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-157.jpg&quot;); background-position: 50% 60%; opacity: 1;">
                <div class="is-overlay-color opacity-0"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-09.png',
			'category': '2',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-section-100 is-box type-raleway-lato box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container v2 is-content-1600 leading-12 size-18">
        <div class="row">
            <div class="column flex flex-col justify-end items-start" style="width: 50%; flex: 0 0 auto;">
                <p class="font-semibold size-16 leading-12 tracking-wide">Written by<br class="size-16">David Anderson</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-032.jpg" alt="" data-filename="img-032.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-124.jpg" alt="" data-filename="img-124.jpg"></div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative">
            <div class="flex flex-col justify-end items-start column">
                <p>The wonders of nature never cease to amaze us. From the majestic mountains to the serene beaches, nature encompasses a beauty that captivates our senses. It is a constant reminder of the power and magnificence that exists in our world.</p>
                <p>With every sunrise and sunset, nature paints a breathtaking canvas of colors that evokes a sense of awe and wonder. The gentle breeze whispers secrets of tranquility, while the sound of flowing water creates a symphony of serenity.</p>
            </div>
            <div class="column">
                <p class="uppercase text-right leading-12 size-17 tracking-325" style="font-weight: 500;">The Beauty that Envelops Us</p>
                <h1 class="text-right leading-08 font-semibold size-196">Nature</h1>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-10.png',
			'category': '2',
			'contentCss': 'type-alegreya-lato.css',
			'contentClass': 'type-alegreya-lato',
			'html': `
<div class="is-section is-section-100 type-alegreya-lato box-space box-space-sm">
    <div class="is-box is-box-7 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 is-content-970 leading-12 size-17 content-pb-0">
            <div class="row">
                <div class="column">
                    <h1 class="leading-none size-132">just chillin'</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="italic">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p class="font-semibold size-16">By Anne Marry</p>
                </div>
                <div class="column xs-hidden">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row sm-autofit">
                <div class="column sm-hidden xs-hidden">
                    <div class="spacer height-100"></div>
                </div>
            </div>
            <div class="row md-autofit">
                <div class="column md-hidden">
                    <div class="spacer height-40"></div>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-5 box-autofit min-height-50">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-099.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-11.png',
			'category': '2',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-section-100 type-montserrat-roboto">
    <div class="is-box is-box-5 box-autofit min-height-50 is-light-text is-content-top edge-y-1">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-092.jpg&quot;); background-position: 50% 60%; opacity: 1;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 is-content-740 size-16 leading-12">
            <div class="row">
                <div class="column">
                    <h1 class="text-center leading-none size-72">October &amp; November</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="text-center uppercase tracking-400">Sarah Anderson</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 is-content-bottom edge-y-3 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-880 is-content-right edge-x-0-5 leading-12 size-17">
            <div class="row relative md-items-2 sm-items-2">
                <div class="column">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column flex flex-col justify-center items-start">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
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
			'thumbnail': 'preview/article-12.png',
			'category': '2',
			'contentCss': 'type-sixcaps-robotomono.css',
			'contentClass': 'type-sixcaps-robotomono',
			'html': `
<div class="is-section is-section-100 type-sixcaps-robotomono">
    <div class="is-box is-content-top is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-031.jpg&quot;); background-position: 50% 60%; opacity: 1;"></div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 is-align-center box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 h-full flex flex-col justify-between is-content-760 size-16 leading-12 content-pt-50 content-pb-50">
            <div class="row">
                <div class="column">
                    <p class="tracking-wider">Michelle Duncan</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="leading-none size-84 not-italic">In Love With Your Life</h1>
                </div>
            </div>
            <div class="row">
                <div class="column pt-4">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div class="spacer height-20"></div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-13.png',
			'category': '2',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box type-montserrat-roboto is-section-100">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-12 size-17 content-pt-50 content-pb-50 is-content-1600">
        <div class="row">
            <div class="column">
                <h1 class="text-center uppercase tracking-widest size-68">C l e a n</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center tracking-widest">By Peter Lassen</p>
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
        </div>
        <div class="row relative sm-items-2 md-items-2">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-129.jpg" alt="" data-filename="img-129.jpg"></div>
            <div class="column flex flex-col justify-start items-start">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column flex flex-col justify-end items-start pb-3"><img src="[%IMAGE_PATH%]images/img-062.jpg" alt="" data-filename="img-062.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-067.jpg" alt="" data-filename="img-067.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-14.png',
			'category': '2',
			'contentCss': 'type-ubuntumono-sourcecodepro.css',
			'contentClass': 'type-ubuntumono-sourcecodepro',
			'html': `
<div class="is-section is-section-100 type-ubuntumono-sourcecodepro">
    <div class="is-box is-dark-text is-box-8 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-left edge-x-2 h-full flex flex-col justify-between is-content-1060 size-16 leading-12 content-pt-50 content-pb-50">
            <div class="row">
                <div class="column">
                    <h1 class="size-104">Behind you.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="text-right">By Brenda Waller</p>
                </div>
            </div>
            <div class="row sm-autofit md-autofit">
                <div class="column" style="width: 41.9729%; flex: 0 0 auto;">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="pb-16 column sm-hidden xs-hidden md-hidden">
                    <div class="spacer height-40"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-4 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-175.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-15.png',
			'category': '2',
			'contentCss': 'type-yantramanav-ibmplexserif.css',
			'contentClass': 'type-yantramanav-ibmplexserif',
			'html': `
<div class="is-section is-section-100 type-yantramanav-ibmplexserif">
    <div class="is-box is-dark-text is-box-8 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-1100 leading-none size-18 content-pt-50 content-pb-50">
            <div class="row sm-autofit md-autofit">
                <div class="column sm-hidden md-hidden">
                    <div class="spacer height-20"></div>
                </div>
                <div class="column">
                    <p class="size-16 font-semibold">Words From Heart<br>Allice Mobley</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-140"></div>
                </div>

            </div>
            <div class="row">
                <div class="column">
                    <h1 class="leading-09 size-328">Calm.</h1>
                </div>

            </div>
        </div>
    </div>
    <div class="is-box is-box-4 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-019.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-16.png',
			'category': '2',
			'contentCss': 'type-spacemono.css',
			'contentClass': 'type-spacemono',
			'html': `
<div class="is-section is-section-100 type-spacemono">
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-left edge-x-2 is-content-780 leading-12 size-17">
            <div class="row">
                <div class="column">
                    <p class="uppercase tracking-475">A story</p>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 72.0627%; flex: 0 0 auto;">
                    <h1 class="uppercase size-60 leading-none">The wheels are spinning</h1>
                </div>
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>By Casey Lansford</p>
                </div>

            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-120"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-158.jpg&quot;); opacity: 1; background-position: 77% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-17.png',
			'category': '2',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-section-100 type-raleway-lato">
    <div class="is-box is-content-top is-box-5 box-autofit min-height-60">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-046.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-880 leading-12 size-18">
            <div class="row">
                <div class="column">
                    <h1 class="font-semibold size-88 leading-09">Keep Everything</h1>
                </div>

            </div>
            <div class="row">
                <div class="column">
                    <h1 class="font-semibold text-right size-88 leading-09">Simple</h1>
                </div>

            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-120"></div>
                </div>

            </div>
            <div class="row">
                <div class="column">
                    <p style="color: rgb(145, 145, 145);">Words from<br>Brandon Lamberth</p>
                </div>
                <div class="column" style="width: 54.025%; flex: 0 0 auto;">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>

            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-18.png',
			'category': '2',
			'contentCss': 'type-novamono-robotomono.css',
			'contentClass': 'type-novamono-robotomono',
			'html': `
<div class="is-section is-section-100 type-novamono-robotomono">
    <div class="is-box is-content-top is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-034.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-1040 size-16 leading-12">
            <div class="row">
                <div class="column">
                    <h1 class="uppercase leading-none size-128">Words From Heart</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-15">By Stephen Garcia</p>
                </div>
            </div>
            <div class="row sm-autofit">
                <div class="column xs-hidden sm-hidden">
                    <div class="spacer height-160"></div>
                </div>
            </div>
            <div class="row md-autofit sm-autofit">
                <div class="column md-hidden sm-hidden" style="width: 12.5371%; flex: 0 0 auto;">
                    <div class="spacer height-20"></div>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
			'thumbnail': 'preview/article-19.png',
			'category': '2',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-section-100 type-raleway-lato">
    <div class="is-box is-dark-text is-box-7 is-align-justify box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 is-content-940 leading-12 size-18">
            <div class="row">
                <div class="column">
                    <p class="uppercase tracking-200 text-left">A Story</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="font-semibold leading-08 size-160 text-left">Dancing in Harmony</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="uppercase tracking-450 text-left">Annie Baldwin</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row md-autofit">
                <div class="column md-hidden">
                    <div class="spacer height-20"></div>
                </div>
                <div style="width: 50%; flex: 0 0 auto;">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column md-hidden">
                    <div class="spacer height-20"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-169.jpg&quot;); opacity: 1; background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/article-20.png',
			'category': '2',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-section-100 type-poppins-lekton">
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
        <div class="is-container v2 is-content-900 size-17 leading-none">
            <div class="row">
                <div style="width: 60.7741%; flex: 0 0 auto;" class="column">
                    <p class="size-16">Words by<br>Samantha Jones</p>
                </div>
                <div class="column">
                    <h1 class="leading-12 size-88">hello.</h1>
                    <h1 class="leading-12 size-88">hello..</h1>
                    <h1 class="leading-12 size-88">hello...</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-140"></div>
                </div>
            </div>
            <div class="row relative md-items-2">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-134.jpg&quot;); opacity: 1; background-position: 50% 60%;">
                <div class="is-overlay-color opacity-0"></div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* Profile */
		{
			'thumbnail': 'preview/profile-01.png',
			'category': '11',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1200">
        <div class="row relative sm-items-1">
            <div class="py-6 flex flex-col justify-center items-start column" style="width: 34%; flex: 0 0 auto;">
                <p style="color: rgb(123, 123, 123);">Story about me.</p>
                <h2 class="size-64 font-light leading-none">Emilie Petersen</h2>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-20"></div>
                <div class="is-social text-left">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                    <a href="https://www.instagram.com/" title=""><i class="icon ion-social-instagram-outline"></i></a>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center column">
                <img src="[%IMAGE_PATH%]images/img-144.jpg" alt="" data-filename="img-144.jpg">
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/profile-02.png',
			'category': '11',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1200 leading-14 size-18">
        <div class="row">
            <div class="column center">
                <h2 class="size-46 font-normal" style="letter-spacing: 3px;">MEET THE EXPERTS</h2>
                <p style="color: rgb(136, 136, 136);" class="size-19">Here are our awesome team.</p>
            </div>
        </div>
        <div class="row">
            <div class="column center">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column center flex flex-col justify-start items-center"><img class="mb-3" src="[%IMAGE_PATH%]images/img-093.jpg" alt="" data-filename="img-093.jpg">
                <h3 class="size-24 font-light">Emilie Petersen</h3>
                <p style="color: rgb(136, 136, 136);">Founder</p>
            </div>
            <div class="column center flex flex-col justify-start items-center"><img class="mb-3" src="[%IMAGE_PATH%]images/img-117.jpg" alt="" data-filename="img-117.jpg">
                <h3 class="size-24 font-light">Marcus Klausen</h3>
                <p style="color: rgb(136, 136, 136);">Developer</p>
            </div>
            <div class="column center flex flex-col justify-start items-center">
                <img class="mb-3" src="[%IMAGE_PATH%]images/img-142.jpg" alt="" data-filename="img-142.jpg">
                <h3 class="size-24 font-light">Jennifer Clarke</h3>
                <p style="color: rgb(136, 136, 136);">UI/UX</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/profile-03.png',
			'category': '11',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container is-content-1300 v2 leading-14 size-18">
        <div class="row">
            <div class="column center">
                <h2 class="size-64 font-normal">Meet The Team</h2>
                <p class="size-21 tracking-wider" style="color: rgb(123, 123, 123);">Here are our awesome team.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row relative sm-items-2 md-items-2">
            <div class="column center flex flex-col justify-start items-center">
                <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-122.jpg" alt="" data-filename="img-122.jpg"></div>
                <h3 class="size-24 font-normal">Emilie Petersen</h3>
                <p style="color: rgb(136, 136, 136);" class="size-19">CEO &amp; Founder</p>
            </div>
            <div class="column center flex flex-col justify-start items-center">
                <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-008.jpg" alt="" data-filename="img-008.jpg"></div>
                <h3 class="size-24 font-normal">Milla Clarke</h3>
                <p style="color: rgb(136, 136, 136);" class="size-19">Project Manager</p>
            </div>
            <div class="column center flex flex-col justify-start items-center">
                <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-185.jpg" alt="" data-filename="img-185.jpg"></div>
                <h3 class="size-24 font-normal">Jonathan Rugg</h3>
                <p style="color: rgb(136, 136, 136);" class="size-19">Developer</p>
            </div>
            <div class="column center flex flex-col justify-start items-center">
                <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-030.jpg" alt="" data-filename="img-030.jpg"></div>
                <h3 class="size-24 font-normal">Kim Olsen</h3>
                <p style="color: rgb(136, 136, 136);" class="size-19">Web Designer</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/profile-04.png',
			'category': '11',
			'contentCss': 'type-raleway-playfairdisplay.css',
			'contentClass': 'type-raleway-playfairdisplay',
			'html': `
<div class="is-section is-section-100 type-raleway-playfairdisplay">
    <div class="is-box is-dark-text is-align-left is-box-7 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
        <div class="is-container v2 is-content-600 size-17 leading-15">
            <div class="row">
                <div class="column">
                    <h2 class="tracking-wide leading-14 size-38">Hello. I'm Emilie Petersen. A web designer with experience in studios and startups. <span class="size-38"><a href="#" title="">Drop me a line</a>.</span></h2>
                    <div class="spacer height-80"></div>
                    <div class="is-social edit size-18">
                        <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                        <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                        <a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-5 box-autofit min-height-60">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-096.jpg&quot;); background-position: 22% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		
		{
			'thumbnail': 'preview/profile-05.png',
			'category': '11',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 is-dark-text box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-17 leading-14 content-pt-50 content-pb-50 is-content-1600">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-32 font-normal">The Team</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column py-4">
                <img class="mb-3" src="[%IMAGE_PATH%]images/img-177.jpg" alt="" data-filename="img-177.jpg">
                <h3 class="font-normal">Amanda Steele</h3>
                <p style="max-width: 400px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="is-social text-left">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
            <div class="column py-4">
                <img class="mb-3" src="[%IMAGE_PATH%]images/img-106.jpg" alt="" data-filename="img-106.jpg">
                <h3 class="font-normal">Peter A. Lassen</h3>
                <p style="max-width: 400px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="is-social text-left">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/profile-06.png',
			'category': '11',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-section-100 is-box box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1300 size-17 leading-14 content-pt-50 content-pb-50">
        <div class="row">
            <div class="column">
                <h2 class="size-48 text-left font-normal">The Team</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column py-4"><img class="mb-3" src="[%IMAGE_PATH%]images/img-007.jpg" alt="" data-filename="img-007.jpg">
                <h3 class="font-normal">Emilie Petersen</h3>
                <p style="max-width: 400px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column py-4"><img class="mb-3" src="[%IMAGE_PATH%]images/img-125.jpg" alt="" data-filename="img-125.jpg">
                <h3 class="font-normal">Nathan Williams</h3>
                <p style="max-width: 400px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column py-4"><img class="mb-3" src="[%IMAGE_PATH%]images/img-184.jpg" alt="" data-filename="img-184.jpg">
                <h3 class="font-normal">Vincent Nelson</h3>
                <p style="max-width: 400px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/profile-07.png',
			'category': '11',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1000">
        <div class="row">
            <div class="column text-center">
                <h2 class="font-light size-60">A Passionate Team</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center">We work as equals &amp; celebrate as a team.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="text-right column flex flex-col justify-center items-center" style="width: 34%; flex: 0 0 auto;">
                <div class="img-circular" style="margin:25px 0;width: 13vw;height: 13vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-143.jpg" alt="" data-filename="img-143.jpg"></div>
            </div>
            <div class="flex flex-col justify-center items-start column">
                <h3 class="font-light size-24">Elaine Moreno</h3>
                <p class="font-light size-18" style="color: rgb(174, 174, 174);">Designer</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row relative desktop-column-reverse md-column-reverse sm-column-reverse">
            <div class="flex flex-col justify-center items-start column">
                <h3 class="font-light size-24">Janice Smith</h3>
                <p class="font-light size-18" style="color: rgb(174, 174, 174);">Developer</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="text-left column flex flex-col justify-center items-center" style="width: 34%; flex: 0 0 auto;">
                <div class="img-circular" style="margin:25px 0;width: 13vw;height: 13vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-095.jpg" alt="" data-filename="img-095.jpg"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/profile-08.png',
			'category': '11',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box type-poppins box-autofit is-section-50">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 is-content-1000 leading-12">
        <div class="row">
            <div class="flex flex-col justify-center items-center px-3 column py-3" style="width: 34%; flex: 0 0 auto;">
                <div class="img-circular" style="width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/img-126.jpg" alt="" data-filename="img-126.jpg"></div>
            </div>
            <div class="px-3 flex flex-col justify-center items-start column">
                <h3 class="size-24 font-normal leading-11">Nathan Williams</h3>
                <p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
                <div class="is-social text-center">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		/* Contact */
		{
			'thumbnail': 'preview/contact-01.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box box-autofit is-box-5">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-16 leading-13 is-content-380">
            <div class="row">
                <div style="min-height: 143.892px;" class="column">
                    <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(102, 102, 102);">Your Company Name</p>
                    <h2 class="leading-none size-46 font-light text-left">Get In Touch</h2>
                    <div class="spacer height-20"></div>

                    <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                        <br>P: (123) 456 7890 / 456 7891.
                    </p>
                </div>
            </div>
            <div class="row">
                <div style="min-height: 54px; width: 100%; flex: 0 0 auto;" class="column">
                    <p style="color: rgb(72, 72, 72);" class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="min-height: 54px;">
                    <div class="is-social text-left">
                        <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                        <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                        <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text box-autofit is-box-7">
        <div class="is-overlay"></div>
        <div class="is-container v2 size-16 leading-13 is-content-800">
            <div class="row">
                <div class="column" style="filter: grayscale(1);">
                    <div class="embed-responsive embed-responsive-16by9" style="padding-bottom:100%">
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/contact-02.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 box-space type-poppins">
    <div class="is-box-6 is-box is-light-text is-content-bottom edge-y-1 box-autofit min-height-50">
        <div class="is-overlay">
            <div class="is-overlay-content content-selectable" data-module="code" data-module-desc="Custom HTML or Javascript " 
            data-html="${encodeURIComponent(`
    <iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
    `)}"><iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe></div>
        </div>
        <div class="is-container v2 is-content-380 is-content-left edge-x-0-5">
            <div class="row">
                <div class="column">
                    <p class="size-16">
                        <strong>Your Company Name</strong><br>
                        12345 Street Name, City.
                        State 12345<br>
                        P: (123) 456 7890 / 456 7891.
                    </p>
                </div>

            </div>
        </div>
    </div>
    <div class="is-box-6 is-box is-dark-text box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 leading-18 size-16 is-content-420">
            <div class="row">
                <div class="column">
                    <h2 class="font-normal size-32">Find Us Here</h2>
                    <div class="spacer height-40"></div>
                    <p>
                        <strong>Your Company Name</strong><br>
                        12345 Street Name, City.
                        State 12345<br>
                        P: (123) 456 7890 / 456 7891.
                    </p>
                    <div class="is-social text-left">
                        <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                        <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                        <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/contact-03.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins">
			<div class="is-overlay">
				<div class="is-overlay-content content-selectable" data-module="code" data-module-desc="Custom HTML or Javascript" data-html="${encodeURIComponent(`
				<iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
				`)}">
					<iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
				</div>
			</div>
            <div class="is-container v2 size-16 leading-13 is-content-left edge-x-1 is-content-500" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">
                <div class="row">
                    <div class="column px-10 py-7" style="background-color: rgba(255, 255, 255, 0.92);">
                        <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(145, 145, 145);">Contact Us</p>
                        <h2 class="leading-none text-left font-semibold size-46">Your Company</h2>
                        <div class="spacer height-20"></div>

                        <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                            <br>P: (123) 456 7890 / 456 7891.
                        </p>
                        <div class="spacer height-20"></div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div class="spacer height-20"></div>
                        <div class="is-social text-left">
                            <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                            <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                            <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                        </div>
                    </div>
                </div>
            </div>
		</div>
		`
		},
		{
			'thumbnail': 'preview/contact-04.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box is-box-5 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-16 leading-13 is-content-400">
            <div class="row">
                <div style="min-height: 143.892px;" class="column">
                    <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(102, 102, 102);">Your Company Name</p>
                    <h2 class="leading-none size-46 font-light text-left">Get In Touch</h2>
                    <div class="spacer height-20"></div>
                    <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                        <br>P: (123) 456 7890 / 456 7891.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div style="min-height: 54px; width: 100%; flex: 0 0 auto;" class="column">
                    <p style="color: rgb(72, 72, 72);" class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
                    <div class="spacer height-20"></div>
                    <div class="is-social text-left">
                        <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                        <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                        <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 size-16 leading-13 is-content-800 content-pt-0">
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-138.jpg" alt="" data-filename="img-138.jpg"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/contact-05.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1000">
        <div class="row">
            <div style="min-height: 143.892px; width: 46.8539%; flex: 0 0 auto;" class="column">
                <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(145, 145, 145);">Get In ToucH</p>
                <h2 class="leading-none text-left font-semibold size-38">Company Name</h2>
                <div class="spacer height-20"></div>
                <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="is-social text-left">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div style="min-height: 54px;" class="column">
                <div class="text-left">
                    <i class="icon ion-ios-alarm-outline size-48"></i>
                </div>
                <h3 class="font-light">Opening Time</h3>
                <p style="color: rgb(72, 72, 72);">Monday – Friday: 9 AM – 4.30 PM. Saturday: 8 AM – 2 PM<br></p>
                <div class="spacer height-20"></div>
            </div>
            <div style="min-height: 54px;" class="column">
                <div class="text-left">
                    <i class="icon ion-ios-home-outline size-48"></i>
                </div>
                <h3 class="font-light">Find Us Here</h3>
                <p style="color: rgb(72, 72, 72);">123 Street Name, City. State 12345. Phone: (123) 456 7890<br></p>
                <div class="spacer height-20"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/contact-06.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-700 leading-14 size-18">
        <div class="row">
            <div class="column" style="min-height: 54px;">
                <h2 class="font-light text-center size-42">Send Us a Message</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column" data-noedit="" data-html="%0A%09%09%09%09%09%09%09%09%09%3Cform%20class%3D%22form%7Bid%7D%20mt-6%20space-y-6%20px-1%22%20method%3D%22POST%22%20action%3D%22%22%3E%0A%09%09%09%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Clabel%20for%3D%22name%7Bid%7D%22%3EName%3A%3C%2Flabel%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22mt-1%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Cinput%20class%3D%22w-full%20px-2%20py-3%20text-base%20border%20rounded%22%20type%3D%22text%22%20id%3D%22name%7Bid%7D%22%20name%3D%22name%22%20required%3D%22%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Clabel%20for%3D%22email%7Bid%7D%22%3EEmail%3A%3C%2Flabel%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22mt-1%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Cinput%20class%3D%22w-full%20px-2%20py-3%20text-base%20border%20rounded%22%20type%3D%22email%22%20id%3D%22email%7Bid%7D%22%20name%3D%22email%22%20required%3D%22%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Clabel%20for%3D%22message%7Bid%7D%22%3EMessage%3A%3C%2Flabel%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22mt-1%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Ctextarea%20class%3D%22w-full%20px-2%20py-3%20text-base%20border%20rounded%22%20rows%3D%226%22%20id%3D%22message%7Bid%7D%22%20name%3D%22message%22%20required%3D%22%22%3E%3C%2Ftextarea%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22flex%20justify-center%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cbutton%20class%3D%22w-full%20flex%20justify-center%20items-center%20transition-all%20cursor-pointer%20border-2%20border-solid%20border-transparent%20hover%3Aborder-transparent%20rounded%20bg-gray-200%20hover%3Abg-gray-300%20py-3%20size-17%20px-8%20font-semibold%20text-gray-600%20leading-relaxed%22%20type%3D%22submit%22%3ESend%3C%2Fbutton%3E%0A%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%3C%2Fform%3E%0A%09%09%09%09%09%09%09%09%09">
                <form class="formwOEogD7 mt-6 space-y-6 px-1" method="POST" action="">
                    <div>
                        <label for="namewOEogD7">Name:</label>
                        <div class="mt-1">
                            <input class="w-full px-2 py-3 text-base border rounded" type="text" id="namewOEogD7" name="name" required="">
                        </div>
                    </div>
                    <div>
                        <label for="emailwOEogD7">Email:</label>
                        <div class="mt-1">
                            <input class="w-full px-2 py-3 text-base border rounded" type="email" id="emailwOEogD7" name="email" required="">
                        </div>
                    </div>
                    <div>
                        <label for="messagewOEogD7">Message:</label>
                        <div class="mt-1">
                            <textarea class="w-full px-2 py-3 text-base border rounded" rows="6" id="messagewOEogD7" name="message" required=""></textarea>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="w-full flex justify-center items-center transition-all cursor-pointer border-2 border-solid border-transparent hover:border-transparent rounded bg-gray-200 hover:bg-gray-300 py-3 size-17 px-8 font-semibold text-gray-600 leading-relaxed" type="submit">Send</button>
                    </div>
                </form>
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
			'thumbnail': 'preview/contact-07.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-section-100 type-poppins">
    <div class="is-box is-box-5 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-16 leading-13 is-content-400">
            <div class="row">
                <div style="min-height: 143.892px;" class="column">
                    <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(145, 145, 145);">Your Company Name</p>
                    <h2 class="leading-none size-46 font-light text-left">Get In Touch</h2>
                    <div class="spacer height-20"></div>
                    <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                        <br>P: (123) 456 7890 / 456 7891.
                    </p>
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div style="min-height: 54px; width: 100%; flex: 0 0 auto;" class="column">
                    <p style="color: rgb(72, 72, 72);" class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
                    <div class="spacer height-20"></div>
                    <div class="is-social text-left">
                        <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                        <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                        <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-dark-text is-box-7 box-autofit">
        <div class="is-overlay"></div>
        <div class="is-container v2 size-16 leading-13 is-content-700">
            <div class="row">
                <div class="column" style="min-height: 54px;">
                    <h3 class="font-light text-center">Send us a message</h3>
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div data-noedit="" data-html="%0A%09%09%09%09%09%09%09%09%09%09%3Cform%20class%3D%22form%7Bid%7D%20mt-6%20space-y-6%20px-1%22%20method%3D%22POST%22%20action%3D%22%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Clabel%20for%3D%22name%7Bid%7D%22%3EName%3A%3C%2Flabel%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22mt-1%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%09%3Cinput%20class%3D%22w-full%20px-2%20py-3%20text-base%20border%20rounded%22%20type%3D%22text%22%20id%3D%22name%7Bid%7D%22%20name%3D%22name%22%20required%3D%22%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Clabel%20for%3D%22email%7Bid%7D%22%3EEmail%3A%3C%2Flabel%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22mt-1%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%09%3Cinput%20class%3D%22w-full%20px-2%20py-3%20text-base%20border%20rounded%22%20type%3D%22email%22%20id%3D%22email%7Bid%7D%22%20name%3D%22email%22%20required%3D%22%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Clabel%20for%3D%22message%7Bid%7D%22%3EMessage%3A%3C%2Flabel%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22mt-1%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%09%3Ctextarea%20class%3D%22w-full%20px-2%20py-3%20text-base%20border%20rounded%22%20rows%3D%226%22%20id%3D%22message%7Bid%7D%22%20name%3D%22message%22%20required%3D%22%22%3E%3C%2Ftextarea%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3Cdiv%20class%3D%22flex%20justify-center%22%3E%0A%09%09%09%09%09%09%09%09%09%09%09%09%3Cbutton%20class%3D%22w-full%20flex%20justify-center%20items-center%20transition-all%20cursor-pointer%20border-2%20border-solid%20border-transparent%20hover%3Aborder-transparent%20rounded%20bg-gray-200%20hover%3Abg-gray-300%20py-3%20size-17%20px-8%20font-semibold%20text-gray-600%20leading-relaxed%22%20type%3D%22submit%22%3ESend%3C%2Fbutton%3E%0A%09%09%09%09%09%09%09%09%09%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%09%09%09%09%3C%2Fform%3E%0A%09%09%09%09%09%09%09%09%09%09" class="column">
                    <form class="formidIeR4Z mt-6 space-y-6 px-1" method="POST" action="">
                        <div>
                            <label for="nameidIeR4Z">Name:</label>
                            <div class="mt-1">
                                <input class="w-full px-2 py-3 text-base border rounded" type="text" id="nameidIeR4Z" name="name" required="">
                            </div>
                        </div>
                        <div>
                            <label for="emailidIeR4Z">Email:</label>
                            <div class="mt-1">
                                <input class="w-full px-2 py-3 text-base border rounded" type="email" id="emailidIeR4Z" name="email" required="">
                            </div>
                        </div>
                        <div>
                            <label for="messageidIeR4Z">Message:</label>
                            <div class="mt-1">
                                <textarea class="w-full px-2 py-3 text-base border rounded" rows="6" id="messageidIeR4Z" name="message" required=""></textarea>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <button class="w-full flex justify-center items-center transition-all cursor-pointer border-2 border-solid border-transparent hover:border-transparent rounded bg-gray-200 hover:bg-gray-300 py-3 size-17 px-8 font-semibold text-gray-600 leading-relaxed" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/contact-08.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text type-poppins box-autofit is-section-15">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container v2 size-16 leading-13 is-content-500 is-content-left edge-x-0-5">
        <div class="row">
            <div class="center column">
                <h2 class="tracking-wider size-32 text-left">Contact Us</h2>
            </div>
        </div>
    </div>
</div>
<div class="is-section is-box is-dark-text type-poppins box-autofit is-section-60 min-height-60">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-087.jpg&quot;); background-position: 50% 11%;"></div>
    </div>
</div>
<div class="is-section is-box is-dark-text type-poppins box-autofit is-section-25">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container is-content-1200 v2 size-16 leading-13">
        <div class="row">
            <div class="column center flex justify-center flex-col items-center">
                <h3 class="size-24 font-normal">Company Name</h3>
            </div>
            <div class="column center flex justify-center flex-col items-center">
                <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                    <br>P: (123) 456 7890 / 456 7891.
                </p>
            </div>
            <div class="column center flex justify-center flex-col items-center">
                <div class="is-social" style="margin: 25px 0">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>

        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/contact-09.png',
			'category': '12',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text type-poppins is-section-75 box-space box-autofit min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-content content-selectable" data-module="code" data-module-desc="Custom HTML or Javascript" data-html="${encodeURIComponent(`
    <iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
    `)}">
            <iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
        </div>
    </div>
</div>
<div class="is-section is-box is-dark-text type-poppins box-autofit is-section-25">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container is-content-1200 v2 size-16 leading-13">
        <div class="row">
            <div class="column center flex justify-center flex-col items-center">
                <h2 class="size-21 tracking-wider">Company Name</h2>
            </div>
            <div class="column center flex justify-center flex-col items-center">
                <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                    <br>P: (123) 456 7890 / 456 7891.
                </p>
            </div>
            <div class="column center flex justify-center flex-col items-center">
                <div class="is-social" style="margin: 25px 0">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>

        </div>
    </div>
</div>
		`
		},

		/* Coming Soon */
		{
			'thumbnail': 'preview/comingsoon-01.png',
			'category': '13',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			
		`
		},
		{
			'thumbnail': 'preview/comingsoon-02.png',
			'category': '13',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			
		`
		},

		{
			'thumbnail': 'preview/comingsoon-03.png',
			'category': '13',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			
		`
		},

		/* Footer */
		{
			'thumbnail': 'preview/footer-01.png',
			'category': '14',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text is-static is-section-50 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1100 size-16 leading-13">
        <div class="row">
            <div class="column center">
                <h2 class="size-32 is-title1-32 is-title-lite font-light tracking-wide">COMPANY NAME</h2>
                <p>
                    12345 Street Name, City. State 12345<br>
                    P: (123) 456 7890 / 456 7891
                </p>
            </div>
        </div>
        <div class="row">
            <div class="column center">
                <div class="is-social size-21" style="margin: 20px 0">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 2em"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 2em"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline" style="margin-right: 2em"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column center">
                <p class="size-14">© Copyright [%YEAR%] Company Name</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/footer-02.png',
			'category': '14',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text is-static is-section-50 box-autofit type-poppins">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container is-content-1100 v2 size-16 leading-13">
        <div class="row">
            <div class="column">
                <h2 class="size-24 is-title1-24 is-title-lite" style="line-height: 50px;">Company Name</h2>
            </div>
        </div>
        <div class="row">
            <div class="column py-3">
                <p><a href="#">Home</a></p>
                <p><a href="#">Services</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Contact</a></p>
            </div>
            <div class="column py-3">
                <p>
                    ADDRESS:<br>
                    12345 Street Name, City<br>
                    State 12345<br>
                    P: (123) 456 7890 / 456 7891
                </p>
            </div>
            <div class="column py-3">
                <p>GET IN TOUCH:</p>
                <div class="is-social">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column py-4">
                <p class="size-14 text-center">© Copyright [%YEAR%] Company Name</p>
            </div>
        </div>
    </div>
</div>
		`
		},

		{
			'thumbnail': 'preview/footer-03.png',
			'category': '14',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text is-static is-section-50 box-autofit type-poppins">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container is-content-1200 v2 size-16 leading-13">
        <div class="row">
            <div class="column">
                <h2 class="size-18 is-title-lite">COMPANY NAME</h2>
                <p style="border-bottom: 2px solid #e67e22; width: 40px; display: inline-block; margin-top: 0"></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column">
                <h3 class="size-18 is-title-lite">ADDRESS</h3>
                <p style="border-bottom: 2px solid #e67e22; width: 40px; display: inline-block; margin-top: 0"></p>
                <p>
                    12345 Street Name, City. State 12345<br>
                    P: (123) 456 7890 / 456 7891
                </p>
            </div>
            <div class="column">
                <h2 class="size-18 is-title-lite">FOLLOW US</h2>
                <p style="border-bottom: 2px solid #e67e22; width: 40px; display: inline-block; margin-top: 0"></p>
                <div class="is-social" style="margin: 25px 0">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column text-left">
                <p class="size-14 text-center">© Copyright [%YEAR%] Company Name</p>
            </div>
        </div>
    </div>
</div>
		`
		},

		{
			'thumbnail': 'preview/footer-04.png',
			'category': '14',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text is-static is-section-50 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container is-content-1200 v2 size-16 leading-13">
        <div class="row">
            <div class="column center">
                <i class="icon ion-ios-book-outline size-32" style="color: rgb(136, 136, 136);"></i>
                <p>Company Name. 123 Street, City. State 123</p>
            </div>
            <div class="column center">
                <i class="icon ion-ios-telephone-outline size-32" style="color: rgb(136, 136, 136);"></i>
                <p>(123) 456 7890 / 456 7891</p>
            </div>
            <div class="column center">
                <i class="icon ion-ios-email-outline size-32" style="color: rgb(136, 136, 136);"></i>
                <p><a href="mailto:#" style="color: #333" title="">companyname@example.com</a></p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="size-14 text-center">© Copyright [%YEAR%] Company Name</p>
            </div>
        </div>
    </div>
</div>
		`
		},

		{
			'thumbnail': 'preview/footer-05.png',
			'category': '14',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-dark-text is-static is-section-20 box-autofit type-poppins">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-container is-content-1200 v2 size-16 leading-13">
        <div class="row">
            <div class="column center flex justify-center flex-col items-center">
                <h2 class="size-21">Company Name</h2>
            </div>
            <div class="column center flex justify-center flex-col items-center">
                <p style="line-height: 42px;">© Copyright [%YEAR%] Company Name</p>
            </div>
            <div class="column center flex justify-center flex-col items-center">
                <div class="is-social" style="margin: 25px 0">
                    <a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},





		/* LANDING */

		/* 231 */

		{
			'thumbnail': 'preview/item-231a.png',
			'category': '15,1',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1500">
        <div class="row relative sm-items-1">
            <div class="column py-6 flex flex-col justify-center items-start">
                <div class="spacer height-60 xs-hidden sm-hidden"></div>
                <h1 class="size-92 font-normal leading-09">Great things don’t have to be complicated.</h1>
                <div class="spacer height-20"></div>
                <p class="tracking-175 uppercase size-17">Your Reliable IT Partner</p>
                <div class="spacer height-20"></div>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-none size-15 tracking-widest" title=""><i class="icon ion-android-arrow-dropright"></i>&nbsp; Take a Tour</a><a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer border-2 border-solid border-transparent ml-1 mr-1 hover:border-transparent rounded size-16 py-1 px-5 font-normal tracking-wide text-gray-800 underline leading-relaxed" title="">Get in Touch</a>
                </div>
            </div>
            <div class="column flex flex-col justify-center items-center"><img src="[%IMAGE_PATH%]images/img-098.jpg" alt="" data-filename="img-098.jpg"></div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-231b.png',
			'category': '15,3',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1600 leading-12">
        <div class="row">
            <div class="column flex flex-col justify-center items-start" style="width: 34%; flex: 0 0 auto;">
                <h2 class="font-medium size-48 leading-none">Discover new possibilities.</h2>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-107.jpg" alt="" data-filename="img-107.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-231c.png',
			'category': '15,4',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 is-content-1050">
        <div class="row">
            <div class="column">
                <h2 class="font-medium size-60">Let us do the work.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p>Experience results-oriented IT consulting.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-medium size-28">Cloud Solutions</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="size-15 tracking-wider"><a href="#" title="" class="font-medium tracking-widest no-underline">Learn More&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
            </div>
            <div class="column">
                <h3 class="font-medium size-28">Managed IT Services</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="size-15 tracking-wider"><a href="#" title="" class="font-medium tracking-widest no-underline">Learn More&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-medium size-28">Network Solutions</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="size-15 tracking-wider"><a href="#" title="" class="font-medium tracking-widest no-underline">Learn More&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
            </div>
            <div class="column">
                <h3 class="font-medium size-28">Support Consulting</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="size-15 tracking-wider"><a href="#" title="" class="font-medium tracking-widest no-underline">Learn More&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-231d.png',
			'category': '15,5',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 is-content-1480">
        <div class="row">
            <div class="column">
                <h2 class="text-center font-medium size-64">Their Stories</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="text-center flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/img-120.jpg" alt="" style="border-radius: 500px; width: 50.783%; height: auto;">
                <div class="spacer height-20"></div>
                <p class="size-21 font-light">"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</p>
                <p class="tracking-wider size-16" style="color: rgb(138, 138, 138);">— A Client</p>
            </div>
            <div class="text-center flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/img-163.jpg" alt="" style="border-radius: 500px; width: 50.783%; height: auto;">
                <div class="spacer height-20"></div>
                <p class="size-21 font-light">"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</p>
                <p class="tracking-wider size-16" style="color: rgb(138, 138, 138);">— A Client</p>
            </div>
            <div class="text-center flex flex-col justify-center items-center column"><img src="[%IMAGE_PATH%]images/img-041.jpg" alt="" style="border-radius: 500px; width: 50.783%; height: auto;">
                <div class="spacer height-20"></div>
                <p class="size-21 font-light">"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</p>
                <p class="tracking-wider size-16" style="color: rgb(138, 138, 138);">— A Client</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-231e.png',
			'category': '15,6',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 is-content-1100">
        <div class="row">
            <div class="column">
                <h2 class="size-50 font-normal">Frequently Asked Questions</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-infinite-outline size-48" style="color: rgb(138, 138, 138);"></i>
                </div>
                <h3 class="size-24 font-normal">What does [CompanyName] do?</h3>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-gear-outline size-48" style="color: rgb(138, 138, 138);"></i>
                </div>
                <h3 class="size-24 font-normal">How can [CompanyName] help me implementing IT-related stuff?</h3>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-lightbulb-outline size-48" style="color: rgb(138, 138, 138);"></i>
                </div>
                <h3 class="size-24 font-normal">How do I initiate building a solution with [CompanyName]?</h3>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-compose-outline size-48" style="color: rgb(138, 138, 138);"></i>
                </div>
                <h3 class="size-24 font-normal">What happens once [CompanyName] complete my project?</h3>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-231f.png',
			'category': '15,7',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-60 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1400 leading-12">
        <div class="row sm-autofit md-autofit">
            <div style="width: 58.7068%; flex: 0 0 auto;" class="column">
                <h2 class="leading-11 font-normal size-76">Get ready to maximize your productivity with us.</h2>
            </div>
            <div class="column sm-hidden xs-hidden md-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column flex flex-col justify-center items-start" style="width: 23.953%; flex: 0 0 auto;">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded-none size-15" title="">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 230 */

		{
			'thumbnail': 'preview/item-230a.png',
			'category': '15,1',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 type-poppins-lekton is-light-text min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-181.jpg&quot;); background-position: 50% 89%;">
            <div class="is-overlay-color opacity-8"></div>
        </div>
    </div>
    <div class="is-container v2 size-18 leading-none is-content-1200">
        <div class="row">
            <div class="column">
                <h1 class="text-center leading-none tracking-tight size-120">Build and design without limits.</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="xs-hidden column">
                <div class="spacer height-40"></div>
            </div>
            <div style="width: 60.2224%; flex: 0 0 auto;">
                <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="xs-hidden column">
                <div class="spacer height-40"></div>
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
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full tracking-wide hover:border-transparent size-15" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide size-15">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-230b.png',
			'category': '15,3',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 type-poppins-lekton box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-none is-content-1500">
        <div class="row">
            <div class="column">
                <h2 class="size-54 tracking-tight">Everything you need is here..</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="column" style="width: 39.8078%; flex: 0 0 auto;">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-026.jpg" alt="" data-filename="img-026.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-085.jpg" alt="" data-filename="img-085.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-230c.png',
			'category': '15,4',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-section-100 is-box is-dark-text type-poppins-lekton box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-1400 leading-13 size-17">
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="xs-hidden column">
                <div class="spacer height-60"></div>
            </div>
            <div class="column" style="width: 50%; flex: 0 0 auto;">
                <h2 class="text-center tracking-tight size-50">Design with a spark of creativity.</h2>
            </div>
            <div class="xs-hidden column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-140"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-gear-outline size-48"></i>
                </div>
                <h3 class="tracking-75 text-center font-medium size-19">Full Stack Development</h3>
                <p class="text-center" style="color: rgb(102, 102, 102);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-heart-outline size-48"></i>
                </div>
                <h3 class="tracking-75 text-center font-medium size-19">UI/UX</h3>
                <p class="text-center" style="color: rgb(102, 102, 102);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-rose-outline size-48"></i>
                </div>
                <h3 class="tracking-75 text-center font-medium size-19">Illustration</h3>
                <p class="text-center" style="color: rgb(102, 102, 102);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-mic-outline size-48"></i>
                </div>
                <h3 class="tracking-75 text-center font-medium size-19">Branding</h3>
                <p class="text-center" style="color: rgb(102, 102, 102);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>

            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-230d.png',
			'category': '15,5',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 type-poppins-lekton box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-none is-content-980">
        <div class="row">
            <div class="column">
                <h2 class="tracking-tight size-54">Loving words.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-156.jpg" alt="" data-filename="img-156.jpg"></div>
            <div class="flex flex-col justify-center items-start column">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type."</p>
                <p class="italic size-16">— A User</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row relative xs-items-1 sm-column-reverse md-column-reverse desktop-column-reverse">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-150.jpg" alt="" data-filename="img-150.jpg"></div>
            <div class="flex flex-col justify-center items-start column">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type."</p>
                <p class="italic size-16">— A User</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-230e.png',
			'category': '15,6',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 type-poppins-lekton box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-none is-content-1400">
        <div class="row">
            <div class="column">
                <h2 class="tracking-tight size-68 font-normal">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-120"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="tracking-tight size-24 leading-none font-normal">Can I create a website?</h3>
                <div class="spacer height-20"></div>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="tracking-tight size-24 leading-none font-normal">How do I create an account?</h3>
                <div class="spacer height-20"></div>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="tracking-tight size-24 leading-none font-normal">How do I update my settings?</h3>
                <div class="spacer height-20"></div>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="tracking-tight size-24 leading-none font-normal">How do I change style options?</h3>
                <div class="spacer height-20"></div>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="tracking-tight size-24 leading-none font-normal">How can I optimize my site for SEO?</h3>
                <div class="spacer height-20"></div>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="tracking-tight size-24 leading-none font-normal">How do I report an issue?</h3>
                <div class="spacer height-20"></div>
                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-230f.png',
			'category': '15,7',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box type-poppins-lekton is-section-60 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1000">
        <div class="row">
            <div class="column">
                <h2 class="text-center tracking-tight size-76 leading-11">Start your free website trial today.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column text-center">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},


		/* 237 */


		{
			'thumbnail': 'preview/item-237a.png',
			'category': '15,1',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-dark-text box-autofit is-section-30 type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1800 is-content-left edge-x-0-5 content-pt-40 content-pb-20">
        <div class="row clearfix">
            <div class="column">
                <h1 class="normal-case leading-none size-60 font-normal">Learn anytime, anywhere, and grow your skills.</h1>
                <div class="spacer height-20"></div>
            </div>
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-75" title="" style="background-color: rgb(240, 240, 240);">Get Started</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full size-15 tracking-widest" title="">Explore&nbsp;<i class="icon ion-android-arrow-forward"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="is-section is-box box-autofit is-section-70 min-height-60 type-heebo-ibmplexmono-2">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-104.jpg&quot;); background-position: 50% 90%;"></div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-237b.png',
			'category': '15,3',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 is-content-1040 size-16">
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="pr-8 column"><img src="[%IMAGE_PATH%]images/img-160.jpg" alt="" data-filename="img-160.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Fun learning.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="pr-8 column"><img src="[%IMAGE_PATH%]images/img-159.jpg" alt="" data-filename="img-159.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Made easy for you.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-237c.png',
			'category': '15,4',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-dark-text is-section-100 box-autofit type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 is-content-800 size-16">
        <div class="row clearfix">
            <div class="column" style="min-height: 60.9711px;">
                <h2 class="capitalize size-48 text-center font-normal">Why Choose Us</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="p-2 column flex flex-col justify-start items-center" style="width: 25%; flex: 0 0 auto;">
                <p class="leading-08 size-96 font-normal" style="color: rgb(211, 211, 211);">1.</p>
            </div>
            <div class="p-2 column flex flex-col justify-center items-start">

                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Flexible Learning Options</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="p-2 column flex flex-col justify-start items-center" style="width: 25%; flex: 0 0 auto;">
                <p class="leading-08 size-96 font-normal" style="color: rgb(211, 211, 211);">2.</p>
            </div>
            <div class="p-2 column flex flex-col justify-center items-start">
                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Experienced Tutor</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="column flex flex-col justify-start items-center">
                <p class="leading-08 size-96 font-normal" style="color: rgb(211, 211, 211);">3.</p>
            </div>
            <div class="p-2 column flex flex-col justify-center items-start" style="width: 75.058%; flex: 0 0 auto;">
                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Lifetime Access</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-237d.png',
			'category': '15,5',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-17 leading-13 is-content-1000">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-54 font-normal">Their Stories</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row relative">
            <div class="flex flex-col justify-center items-start column">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-32"></i>
                </div>

                <p class="size-35">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>

                <p style="color: rgb(138, 138, 138);">- A User</p>
            </div>
            <div class="flex flex-col justify-center items-start column" style="width: 34%; flex: 0 0 auto;">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative">
            <div class="flex flex-col justify-center items-start column">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-32"></i>
                </div>
                <p class="size-21">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>
                <p style="color: rgb(138, 138, 138);">- A User</p>
            </div>
            <div class="flex flex-col justify-center items-start column">
                <div class="spacer height-80"></div>
            </div>
            <div class="flex flex-col justify-center items-start column">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-32"></i>
                </div>
                <p class="size-21">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>
                <p style="color: rgb(138, 138, 138);">- A User</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-237e.png',
			'category': '15,6',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box box-autofit is-section-100 type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 is-content-1000 size-16">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-54 font-normal">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-people-outline size-48"></i>
                </div>
                <h3 class="font-medium size-24">How to access the user area</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                <div class="spacer height-80"></div>
            </div>
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-cloud-download-outline size-48"></i>
                </div>
                <h3 class="size-24 font-medium">How to download the materials</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-timer-outline size-48"></i>
                </div>
                <h3 class="size-24 font-medium">How to view the progress</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-237f.png',
			'category': '15,7',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-section-60 box-autofit min-height-40 type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 is-content-1000">
        <div class="row">
            <div class="column">
                <h2 class="leading-11 size-72 font-medium">Discover your favorite course.</h2>
            </div>
            <div class="flex flex-col justify-center items-start column" style="width: 34%; flex: 0 0 auto;">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full tracking-75">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 234 */

		{
			'thumbnail': 'preview/item-234a.png',
			'category': '15,1',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-box is-section-100 type-quicksand-kalam box-autofit min-height-50 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-135.jpg&quot;); background-position: 50% 85%;"></div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-left edge-x-5 is-content-900">
        <div class="row">
            <div class="column">
                <h1 class="leading-none size-80">A forward thinking studio delivering digital solutions that help your business.</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-none size-15 tracking-widest" title="">Our Works</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-234b.png',
			'category': '15,3',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-box is-section-100 type-quicksand-kalam box-autofit min-height-50">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-11 size-16 is-content-1400">
        <div class="row">
            <div style="width: 73.7397%; flex: 0 0 auto;" class="column"><img src="[%IMAGE_PATH%]images/img-151.jpg" alt="" data-filename="img-151.jpg"></div>
            <div class="flex flex-col justify-end items-start column">
                <h2 class="leading-none size-28">We're visual storytellers. Helping people &amp; brands through every step of their journey.</h2>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-234c.png',
			'category': '15,4',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-box is-section-100 type-quicksand-kalam box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-1380">
        <div class="row">
            <div class="column">
                <h2 class="uppercase size-21">What We Do</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column flex flex-col justify-center items-start">
                <h3 class="size-28">Research &amp; Strategy</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                <div class="spacer height-40"></div>

                <h3 class="size-28">Branding</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            </div>
            <div class="column flex flex-col justify-center items-start">
                <h3 class="size-28">Design &amp; Development</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                <div class="spacer height-40"></div>
                <h3 class="size-28">Content</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-029.jpg" alt="" data-filename="img-029.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-234d.png',
			'category': '15,5',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-box is-section-100 type-quicksand-kalam box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1000">
        <div class="row">
            <div class="column">
                <h2 class="size-48">Their Stories.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div style="width: 16.3883%; flex: 0 0 auto;" class="column flex flex-col justify-start items-center">
                <div class="text-left">
                    <i class="icon ion-quote size-64"></i>
                </div>
            </div>
            <div class="column">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it.</p>
                <p class="italic size-15 tracking-wider">— A Client</p>
            </div>
            <div style="width: 16.3883%; flex: 0 0 auto;" class="column flex flex-col justify-start items-center">
                <div class="text-left">
                    <i class="icon ion-quote size-64"></i>
                </div>
            </div>
            <div class="column">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it.</p>
                <p class="italic size-15 tracking-wider">— A Client</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-234e.png',
			'category': '15,6',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-box is-section-100 type-quicksand-kalam box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-840">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-54">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-people-outline size-48"></i>
                </div>
                <h3 class="size-24">What does [CompanyName] do?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-gear-outline size-48"></i>
                </div>
                <h3 class="size-24">What services does [CompanyName] offer?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-paperplane-outline size-48"></i>
                </div>
                <h3 class="size-24">What will be delivered and when?</h3>
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
			'thumbnail': 'preview/item-234f.png',
			'category': '15,7',
			'contentCss': 'type-quicksand-kalam.css',
			'contentClass': 'type-quicksand-kalam',
			'html': `
<div class="is-section is-section-70 type-quicksand-kalam">
    <div class="is-box is-box-6 box-autofit min-height-30">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-183.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-520">
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-640">
            <div class="row">
                <div class="column">
                    <h2 class="leading-none size-72">Got a project in mind? Let's talk about it.</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full size-15 tracking-75" title="">Work With Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},


		/* 238 */

		{
			'thumbnail': 'preview/item-238a.png',
			'category': '15,1',
			'contentCss': 'type-heebo-ibmplexmono.css',
			'contentClass': 'type-heebo-ibmplexmono',
			'html': `
<div class="is-section is-box is-dark-text box-autofit is-section-30 type-heebo-ibmplexmono">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 content-pt-50 is-content-800 content-pb-20">
        <div class="row clearfix">
            <div class="column">
                <h1 class="normal-case tracking-tight leading-none size-60 text-center font-normal">Great things don’t have to be complicated.</h1>
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-center">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" style="background-color: rgb(240, 240, 240);">How We Work</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide">Get In Touch</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section type-heebo-ibmplexmono is-section-70 box-space box-space-xxs">
    <div class="is-box is-box-6 box-autofit min-height-30">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-091.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit min-height-30">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-045.jpg&quot;); background-position: 50% 60%;"></div>
        </div>

    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-238b.png',
			'category': '15,3',
			'contentCss': 'type-heebo-ibmplexmono.css',
			'contentClass': 'type-heebo-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1300">
        <div class="row">
            <div class="column">
                <h2 class="font-medium size-60 text-center">Let us do the work.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column pr-8"><img src="[%IMAGE_PATH%]images/img-015.jpg" alt="" data-filename="img-015.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">UI/UX</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="column pr-8"><img src="[%IMAGE_PATH%]images/img-013.jpg" alt="" data-filename="img-013.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Full Stack Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="column pr-8"><img src="[%IMAGE_PATH%]images/img-110.jpg" alt="" data-filename="img-110.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-24">Brand Identity</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-238c.png',
			'category': '15,4',
			'contentCss': 'type-heebo-ibmplexmono.css',
			'contentClass': 'type-heebo-ibmplexmono',
			'html': `
<div class="is-section is-box is-dark-text is-section-100 box-autofit type-heebo-ibmplexmono">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-17 is-content-1100">
        <div class="row">
            <div class="column">
                <p class="text-center size-24">Fun Facts</p>
            </div>
        </div>
        <div class="row clearfix">
            <div class="column" style="min-height: 60.9711px;">
                <h2 class="capitalize font-medium text-center size-54">What Makes Us Different</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="column flex flex-col justify-start items-center" style="width: 15.8124%; flex: 0 0 auto;">
                <p class="text-right leading-none size-76">80</p>
            </div>
            <div class="p-2 flex flex-col justify-center items-start column">
                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Happy Clients</h3>
            </div>
            <div class="column flex flex-col justify-start items-center" style="width: 16.5758%; flex: 0 0 auto;">
                <p class="text-right leading-none size-76">245</p>
            </div>
            <div class="p-2 flex flex-col justify-center items-start column">
                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Completed Projects</h3>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="column flex flex-col justify-start items-center" style="width: 15.6515%; flex: 0 0 auto;">
                <p class="text-right leading-none size-76">22</p>
            </div>
            <div class="p-2 flex flex-col justify-center items-start column">
                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Countries Served</h3>
            </div>
            <div class="column flex flex-col justify-start items-center" style="width: 16.4996%; flex: 0 0 auto;">
                <p class="text-right leading-none size-76">10</p>
            </div>
            <div class="p-2 flex flex-col justify-center items-start column">
                <h3 class="leading-none tracking-wider capitalize size-24 font-normal">Years of Experience</h3>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-238d.png',
			'category': '15,5',
			'contentCss': 'type-heebo-ibmplexmono.css',
			'contentClass': 'type-heebo-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-17 leading-13 is-content-1300">
        <div class="row relative">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-054.jpg" alt="" data-filename="img-054.jpg"></div>
            <div class="flex flex-col justify-center items-start column py-3">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-28"></i>
                </div>
                <p class="size-21">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>
                <p style="color: rgb(138, 138, 138);">- A User</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-064.jpg" alt="" data-filename="getimg_ai_img-X9EhwvdbEyBXnXRFQbSCM-2-editwmyY2dp.jpg"></div>
            <div class="flex flex-col justify-center items-start column py-3">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-28"></i>
                </div>
                <p class="size-21">Super fast. Awesome products with great support!</p>
                <p style="color: rgb(138, 138, 138);">- A User</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <img src="[%IMAGE_PATH%]images/img-121.jpg" alt="" data-filename="img-121.jpg">
            </div>
            <div class="flex flex-col justify-center items-start column py-3" style="width: 34%; flex: 0 0 auto;">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-28"></i>
                </div>
                <p class="size-21">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>

                <p style="color: rgb(138, 138, 138);">- A User</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-238e.png',
			'category': '15,6',
			'contentCss': 'type-heebo-ibmplexmono.css',
			'contentClass': 'type-heebo-ibmplexmono',
			'html': `
<div class="is-section is-box box-autofit is-section-100 type-heebo-ibmplexmono">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-600">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-54">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 font-normal">How to create demo account</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 font-normal">How to access client area</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 font-normal">How to get updates</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-238f.png',
			'category': '15,7',
			'contentCss': 'type-heebo-ibmplexmono.css',
			'contentClass': 'type-heebo-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-60 box-autofit min-height-40 type-heebo-ibmplexmono">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 is-content-1300">
        <div class="row">
            <div class="column flex flex-col justify-center items-center">
                <h2 class="leading-11 size-72 text-center font-normal">Signup for a Free Demo</h2>
            </div>
            <div class="column flex flex-col justify-center items-center" style="width: 34%; flex: 0 0 auto;">
                <div class="text-center">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full tracking-75">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 233 */

		{
			'thumbnail': 'preview/item-233a.png',
			'category': '15,1',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-section-100 type-montserrat-roboto">
    <div class="is-box is-box-6 box-autofit min-height-40">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-700">
            <div class="row">
                <div class="column">
                    <h1 class="leading-none size-76">Learn anytime, anywhere, and grow your skills.</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 px-12 uppercase font-normal leading-relaxed border-transparent rounded-full hover:border-transparent size-15 tracking-widest" style="color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);" title="" data-bg="rgb(0,0,0)">Get Started</a>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full size-15 tracking-widest" title="">Explore&nbsp;<i class="icon ion-android-arrow-forward"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 is-content-top edge-y-2 box-autofit min-height-60">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-096.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-400 is-content-right edge-x-0-5">
            <div class="row">
                <div class="column">
                    <p class="text-right size-15 leading-none">More than</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h4 class="text-right leading-09 size-76">1.280</h4>
                    <h4 class="leading-none text-right size-17">top-notch classes</h4>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-233b.png',
			'category': '15,3',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box is-section-100 type-montserrat-roboto box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1680">
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-130.jpg" alt="" data-filename="img-130.jpg">
                <div class="spacer height-40"></div>
                <h3 class="size-28 font-normal">Fun learning.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-058.jpg" alt="" data-filename="img-058.jpg">
                <div class="spacer height-40"></div>
                <h3 class="size-28 font-normal">Made easy for you.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-233c.png',
			'category': '15,4',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1180">
        <div class="row">
            <div class="column">
                <h2 class="font-normal size-46">Why choose us.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="size-68 font-semibold">01.</p>
                <h3 class="font-normal size-21">Flexible Learning Options</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column">
                <p class="size-68 font-semibold">02.</p>
                <h3 class="font-normal size-21">Experienced Tutor</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column">
                <p class="size-68 font-semibold">03.</p>
                <h3 class="font-normal size-21">Lifetime Access</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-233d.png',
			'category': '15,5',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box is-section-100 type-montserrat-roboto box-autofit min-height-60 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-050.jpg&quot;); background-position: 50% 60%;">
            <div class="is-overlay-color opacity-6"></div>
        </div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-1300">
        <div class="row">
            <div class="column" style="width: 34%; flex: 0 0 auto;">
                <div class="spacer height-20"></div>
                <h3 class="font-normal leading-none size-24">Nina Mathiesen</h3>
                <p class="size-14">A Student</p>
            </div>
            <div class="column">
                <h2 class="font-medium size-46 leading-12">I am thoroughly impressed with this course. It provided me with a comprehensive education and I am confident in my newfound abilities. I highly recommend this course for anyone who wants to enhance their skills.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-right size-15"><a href="#" title="" class="no-underline font-normal">Read more stories&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-233e.png',
			'category': '15,6',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box is-section-100 type-montserrat-roboto box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1420">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-50">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-medium uppercase text-center size-21">LEARNING WITH US</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="font-medium uppercase text-center size-21">PAYMENT METHODS</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="font-medium uppercase text-center size-21">HOW TO REFUND A COURSE</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-medium uppercase text-center size-21">LIFETIME ACCESS</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="font-medium uppercase text-center size-21">DOWNLOADING RESOURCES</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="font-medium uppercase text-center size-21">PAYMENT FAILURES</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-233f.png',
			'category': '15,7',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
<div class="is-section is-box type-montserrat-roboto is-section-70 box-autofit min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-001.jpg&quot;); background-position: 50% 71%;"></div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-900">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-68 leading-11">Discover your favorite course.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="xs-hidden column">
                <div class="spacer height-60"></div>
            </div>
            <div class="column" style="width: 65.5582%; flex: 0 0 auto;">
                <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="xs-hidden column">
                <div class="spacer height-60"></div>
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
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-15" title="">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},


		/* 232 */


		{
			'thumbnail': 'preview/item-232a.png',
			'category': '15,1',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit min-height-60 type-lato">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-167.jpg&quot;); background-position: 50% 55%;"></div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-800">
        <div class="row">
            <div class="column">
                <h1 class="text-center leading-none size-100 font-normal">simplicity &amp; sophistication</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center size-16">We are a team of dedicated designers specialized in visual identity design.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column text-center">
                <p class="font-semibold tracking-wider"><a href="#" title="" class="no-underline">Start a Project&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-232b.png',
			'category': '15,3',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1800">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-54 font-normal">To share a story...</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-113.jpg" alt="" data-filename="img-113.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-009.jpg" alt="" data-filename="img-009.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-149.jpg" alt="" data-filename="img-149.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-232c.png',
			'category': '15,4',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1000">
        <div class="row">
            <div class="column">
                <h2 class="size-60 font-normal">We Create — Brands</h2>
            </div>
            <div class="column flex flex-col justify-center items-start" style="width: 30.9881%; flex: 0 0 auto;">
                <p>Corporate Identity Design<br>
                    Visual Communication<br>
                    Logo Design<br>
                    Print Design<br>
                    Brand Guidelines<br>
                    Rebranding</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h2 class="size-60 font-normal">We Build — Websites</h2>
            </div>
            <div class="column flex flex-col justify-center items-start" style="width: 30.9881%; flex: 0 0 auto;">
                <p>Web Design<br>
                    User Interface Design<br>
                    User Experience Design<br>
                    Front-end Development<br>
                    SEO Optimization</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-232d.png',
			'category': '15,5',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1200">
        <div class="row">
            <div class="column">
                <h2 class="tracking-wide size-35 font-medium">What they say.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="leading-none size-50">I highly recommend [CompanyName]. I got a brand identity that truly feels timeless and impressive.</p>
                <div class="spacer height-20"></div>
                <p class="not-italic tracking-75">— A Client</p>
            </div>
            <div class="column">
                <p class="leading-none size-50">Super awesome products with great support!</p>
                <div class="spacer height-20"></div>
                <p class="not-italic tracking-75">— A Client</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-232e.png',
			'category': '15,6',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1100">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-76">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-28 font-normal">What does [CompanyName] do?</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column">
                <h3 class="size-28 font-normal">What types of brands do you work with?</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column">
                <h3 class="size-28 font-normal">How long does the process take?</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column text-center">
                <p class="size-19"><a href="#" title="">Discover More</a></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-232f.png',
			'category': '15,7',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-lato">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1500">
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-060.jpg" alt="" data-filename="img-060.jpg"></div>
            <div class="column flex flex-col justify-center items-start">
                <h2 class="size-96 leading-none font-medium">Ready to work with us?</h2>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-40"></div>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-none size-15 tracking-widest" title="">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 239 */

		{
			'thumbnail': 'preview/item-239a.png',
			'category': '15,1',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box box-autofit is-section-30 type-poppins-lekton">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1200">
        <div class="row">
            <div class="column">
                <h1 class="text-center tracking-tight size-72 leading-14">Beyond what you see.</h1>
            </div>
        </div>
        <div class="row">
            <div class="column text-center">
                <p class="tracking-wider">Make bold moves with your home.</p>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-box box-autofit is-section-70 type-poppins-lekton min-height-50">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-035.jpg&quot;); background-position: 50% 100%;"></div>
    </div>
    <div class="is-container v2 is-content-700 leading-14 size-18">
        <div class="row">
            <div class="column text-center">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide size-15" title="">Our Works</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full tracking-wide hover:border-transparent size-15" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Book Appointment</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-239b.png',
			'category': '15,3',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins-lekton">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1600">
        <div class="row sm-autofit">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-069.jpg" alt="" data-filename="img-069.jpg">
                <div class="spacer height-40"></div>
                <h3 class="size-48">01.</h3>
                <p>Residential Interiors</p>
            </div>
            <div style="width: 19.9614%; flex: 0 0 auto;" class="column sm-hidden">
                <div class="spacer height-60"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-021.jpg" alt="" data-filename="img-021.jpg">
                <div class="spacer height-40"></div>
                <h3 class="size-48">02.</h3>
                <p>Business Interiors</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-097.jpg" alt="" data-filename="img-097.jpg">
                <div class="spacer height-40"></div>
                <h3 class="size-48">03.</h3>
                <p>Architectural Design</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-239c.png',
			'category': '15,4',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins-lekton">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1400 leading-12">
        <div class="row sm-autofit">
            <div class="column" style="width: 34.5334%; flex: 0 0 auto;">
                <h2 class="leading-none size-42">What makes us unique.</h2>
                <div class="spacer height-40"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
            <div class="column xs-hidden sm-hidden">
                <div class="spacer height-60"></div>
            </div>
            <div style="width: 46.363%; flex: 0 0 auto;" class="column"><img src="[%IMAGE_PATH%]images/img-088.jpg" alt="" data-filename="img-088.jpg"></div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="size-76">1.230+</p>
                <p>Happy Clients</p>
            </div>
            <div class="column">
                <p class="size-76">489</p>
                <p>Projects Completed</p>
            </div>
            <div class="column">
                <p class="size-76">15</p>
                <p>Awards Gained</p>
            </div>
            <div class="column">
                <p class="size-76">100%</p>
                <p>Satisfaction</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-239d.png',
			'category': '15,5',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-section-100 box-space type-poppins-lekton stack-top">
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1 min-height-40 is-light-text">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-039.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-left edge-x-0-5 is-content-420">
            <div class="row">
                <div class="column">
                    <div class="text-left">
                        <i class="icon ion-quote size-48"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-14 italic">— A Client</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1 min-height-40 is-light-text">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-066.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-420 is-content-left edge-x-0-5">
            <div class="row">
                <div class="column text-left">
                    <div class="text-left">
                        <i class="icon ion-quote size-48"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-14 italic">— A Client</p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-239e.png',
			'category': '15,6',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins-lekton">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1300 leading-12">
        <div class="row">
            <div class="column">
                <h2 class="text-center">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 tracking-wide">How do we get started?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-24 tracking-wide">Do you offer free consultations?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-24 tracking-wide">What areas do you serve?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 tracking-wide">How long will our project take?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column">
                <h3 class="size-24 tracking-wide">What are your business hours?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-239f.png',
			'category': '15,7',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box box-autofit type-poppins-lekton is-section-60">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-700 size-18 leading-12">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-60 leading-none tracking-tight">Ready to transform your space?</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-center">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 px-9 font-normal leading-relaxed rounded-full size-18 tracking-wide pb-2 pt-2 mt-3 mb-3 border-current hover:border-current" title="" style="color: rgb(0, 0, 0);" data-bg="">Work With Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},


		/* 240 */

		{
			'thumbnail': 'preview/item-240a.png',
			'category': '15,1',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box box-autofit type-heebo-ibmplexmono-2 is-section-40">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-left edge-x-2 is-content-1120">
        <div class="row">
            <div class="column">
                <p class="size-14 tracking-75">Branding &amp; Digital Marketing</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h1 class="leading-none font-light size-60">We've put together a special combination of design, strategy, and digital expertise.</h1>
            </div>
        </div>
    </div>
</div>

<div class="is-section type-heebo-ibmplexmono-2 is-section-60">
    <div class="is-box box-autofit is-box-7 min-height-40">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-068.jpg&quot;); background-position: 50% 86%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-540">
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box box-autofit is-box-5">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 leading-13 size-16 is-content-440">
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum has been the industry's234 standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p><a href="#" title="" class="no-underline font-semibold">Start a Project</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-240b.png',
			'category': '15,3',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1640">
        <div class="row">
            <div class="column">
                <h2 class="font-light size-54">We deliver extraordinary things.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column" style="width: 34%; flex: 0 0 auto;">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="xs-hidden column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-024.jpg" alt="" data-filename="img-024.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-083.jpg" alt="" data-filename="img-083.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-190.jpg" alt="" data-filename="img-190.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-240c.png',
			'category': '15,4',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono-2 box-space is-content-bottom edge-y-2 min-height-80 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-052.jpg&quot;); background-size: cover; background-position-y: 38%;">
            <div class="is-overlay-color opacity-6"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-1500 size-16 leading-13 content-pb-40">
        <div class="row">
            <div class="column">
                <h2 class="font-light size-76">How we work.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-normal">01.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column">
                <h3 class="font-normal">02.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column">
                <h3 class="font-normal">03.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column">
                <h3 class="font-normal">04.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-240d.png',
			'category': '15,5',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-section-100 type-heebo-ibmplexmono-2">
    <div class="is-box is-box-6 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-128.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-540">
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 leading-13 text-left size-16 is-content-800">
            <div class="row">
                <div class="column">
                    <h2 class="font-light size-60">Loving Words</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-100"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 63.4048%; flex: 0 0 auto;">
                    <div class="text-left">
                        <i class="icon ion-quote size-38"></i>
                    </div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                    <p class="size-14 tracking-wider" style="color: rgb(145, 145, 145);">— A Customer</p>
                </div>
                <div class="column xs-hidden">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-60"></div>
                </div>
                <div style="width: 71.1796%; flex: 0 0 auto;" class="column">
                    <div class="text-right">
                        <i class="icon ion-quote size-38"></i>
                    </div>
                    <p class="text-right">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p class="size-14 tracking-wider text-right" style="color: rgb(145, 145, 145);">— A Customer</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column" style="width: 50.134%; flex: 0 0 auto;">
                    <div class="text-left">
                        <i class="icon ion-quote size-38"></i>
                    </div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                    <p class="size-14 tracking-wider" style="color: rgb(145, 145, 145);">— A Customer</p>
                </div>
                <div class="column xs-hidden">
                    <div class="spacer height-60"></div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-240e.png',
			'category': '15,6',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-heebo-ibmplexmono-2">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1200">
        <div class="row">
            <div class="column">
                <h2 class="text-left leading-09 size-104 font-light">Frequently Asked Questions</h2>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-infinite-outline size-48"></i>
                </div>
                <h3 class="font-light size-24">What services does [CompanyName] offer?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-chatboxes-outline size-48"></i>
                </div>
                <h3 class="font-light size-24">Why should we choose [CompanyName]?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <div class="text-left">
                    <i class="icon ion-ios-people-outline size-48"></i>
                </div>
                <h3 class="font-light size-24">Who will be working on my account?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p><a href="#" title="" class="font-medium size-14 tracking-wider">Find Out More</a></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-240f.png',
			'category': '15,7',
			'contentCss': 'type-heebo-ibmplexmono-2.css',
			'contentClass': 'type-heebo-ibmplexmono-2',
			'html': `
<div class="is-section is-box box-autofit type-heebo-ibmplexmono-2 is-section-60">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-16 leading-13 is-content-1260">
        <div class="row">
            <div class="column">
                <h2 class="leading-none font-medium size-50">Are you ready to elevate your business?</h2>
            </div>
            <div class="column">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded-none size-15" title="">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 241 */

		{
			'thumbnail': 'preview/item-241a.png',
			'category': '15,1',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-inconsolata min-height-70 is-content-bottom edge-y-3">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-123.jpg&quot;); background-position: 100% 44%;">
        <div class="is-overlay-color opacity-10"></div>
        </div>
    </div>
    <div class="is-container v2 is-content-700 leading-14 size-18 content-pb-50 is-content-left edge-x-3">
        <div class="row">
            <div class="column">
                <p class="tracking-75 size-16">Your reliable partner.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h1 class="leading-none size-72">Experience results-oriented IT consulting.</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 font-normal leading-relaxed border-transparent rounded-full tracking-wide hover:border-transparent size-15" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);" title="">Book a Call</a>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide size-15" title=""><i class="icon ion-android-arrow-dropright"></i>&nbsp; How We Work</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-241b.png',
			'category': '15,3',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-inconsolata">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1600 leading-12">
        <div class="row">
            <div class="column">
                <h2 class="size-54">Let us do the work.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row sm-autofit md-autofit">
            <div style="width: 38.7637%; flex: 0 0 auto;" class="column"><img src="[%IMAGE_PATH%]images/img-112.jpg" alt="" data-filename="img-112.jpg">
                <div class="spacer height-20"></div>
                <h3 class="size-24">Managed IT Services</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column xs-hidden sm-hidden md-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-165.jpg" alt="" data-filename="img-165.jpg">
                <div class="spacer height-20"></div>
                <h3 class="size-24">Network Solutions</h3>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-094.jpg" alt="" data-filename="img-094.jpg">
                <div class="spacer height-20"></div>
                <h3 class="size-24">Support Consulting</h3>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-241c.png',
			'category': '15,4',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-section-100 type-inconsolata">
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 size-17 is-content-800 is-content-right edge-x-0-5 leading-12">
            <div class="row">
                <div class="column">
                    <h2 class="size-42">Why choose us?</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-100"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-76">430+</p>
                    <p>Workstations Installed</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-136.jpg" alt="" data-filename="img-136.jpg"></div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-17 is-content-800 is-content-left edge-x-0-5 leading-12">
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p class="size-76">718</p>
                    <p>Servers Secured</p>
                </div>
                <div class="column">
                    <p class="size-76">1.125</p>
                    <p>Satisfied Clients</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-154.jpg" alt="" data-filename="img-154.jpg"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-241d.png',
			'category': '15,5',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-inconsolata min-height-50 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-166.jpg&quot;); background-position: 50% 60%;">
            <div class="is-overlay-color opacity-10"></div>
        </div>
    </div>
    <div class="is-container v2 leading-14 size-18 text-left is-content-900 is-content-right edge-x-0-5">
        <div class="row">
            <div class="column text-left">
                <div class="text-left">
                    <i class="icon ion-quote size-50"></i>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-46 leading-11">[Company Name] provide us with a forward thinking and well placed service. This has made significant impact on the efficiency and stability of our network.</h3>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="italic tracking-wider">— A User</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-241e.png',
			'category': '15,6',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-inconsolata">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1100 leading-12">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-120">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column" style="width: 67.1948%; flex: 0 0 auto;">
                <h3 class="size-24">How [CompanyName] helps your business.</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24">Services we provide.</h3>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-24">Benefits of IT consulting services.</h3>
                <div class="spacer height-20"></div>
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
			'thumbnail': 'preview/item-241f.png',
			'category': '15,7',
			'contentCss': 'type-inconsolata.css',
			'contentClass': 'type-inconsolata',
			'html': `
<div class="is-section is-section-60 type-inconsolata">
    <div class="is-box is-box-6 box-autofit is-light-text min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-133.jpg&quot;); background-position: 50% 100%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-540">
            <div class="row">
                <div class="column">
                    <div class="text-center">
                        <a href="#" title=""><i class="icon ion-android-arrow-dropright-circle size-88"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-17 leading-12 is-content-560">
            <div class="row">
                <div class="column">
                    <h2 class="leading-09 size-64">Let's do something great together.</h2>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since.</p>
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
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded-none size-16" title="">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 242 */

		{
			'thumbnail': 'preview/item-242a.png',
			'category': '15,1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box type-poppins box-autofit is-section-30">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 is-content-1700 size-16 content-pb-10">
        <div class="row sm-autofit md-autofit">
            <div class="column pt-2" style="width: 37.1134%; flex: 0 0 auto;">
                <h1 class="font-normal">No borders, no lines. Just you and the world.</h1>
            </div>
            <div class="column sm-hidden md-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div style="width: 27.7744%; flex: 0 0 auto;" class="column">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide size-16" title="">Let's Go!</a>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="is-section type-poppins box-space box-space-xxs is-section-70">
    <div class="is-box box-autofit min-height-30 is-box-7">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-171.jpg&quot;); background-size: cover; background-position-y: 38%;"></div>
        </div>
    </div>
    <div class="is-box box-autofit min-height-30 is-box-5">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-105.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-242b.png',
			'category': '15,3',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-1400">
        <div class="row">
            <div class="column">
                <h2 class="font-normal">Popular Destinations</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-175.jpg" alt="" data-filename="img-175.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21">Zurich</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-003.jpg" alt="" data-filename="img-003.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21">Osaka</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-102.jpg" alt="" data-filename="img-102.jpg">
                <div class="spacer height-20"></div>
                <h3 class="font-normal size-21">San Francisco</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-242c.png',
			'category': '15,4',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box type-poppins box-autofit is-section-70 min-height-50">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-153.jpg&quot;); background-position: 50% 46%;"></div>
    </div>
</div>

<div class="is-section is-box type-poppins box-autofit is-section-30">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-1660">
        <div class="row relative sm-items-3">
            <div class="column flex flex-col justify-center items-start">
                <h2 class="font-normal leading-none size-48">We're here to get you there.</h2>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-plane size-46"></i>
                </div>
                <h3 class="font-normal text-center size-21 tracking-wide">Service One</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-location-outline size-46"></i>
                </div>
                <h3 class="font-normal text-center size-21 tracking-wide">Service Two</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-home-outline size-46"></i>
                </div>
                <h3 class="font-normal text-center size-21 tracking-wide">Service Three</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
            </div>
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-ios-star-outline size-46"></i>
                </div>
                <h3 class="font-normal text-center size-21 tracking-wide">Service Four</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-242d.png',
			'category': '15,5',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section type-poppins is-section-50">
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1 min-height-50 is-light-text">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-061.jpg&quot;); background-position: 50% 34%;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 leading-13 is-content-left edge-x-0-5 is-content-420 size-16">
            <div class="row">
                <div class="column">
                    <p>An Adventurer<br>based in [City Name]</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 leading-13 is-content-500 is-content-left edge-x-0-5 content-pb-0 size-19">
            <div class="row">
                <div class="column">
                    <div class="text-left">
                        <i class="icon ion-quote size-48"></i>
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
                    <p class="font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section type-poppins is-section-50">
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 leading-13 size-19 is-content-500 is-content-right edge-x-0-5 content-pt-0">
            <div class="row">
                <div class="column">
                    <div class="text-left">
                        <i class="icon ion-quote size-48"></i>
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
                    <p class="font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit is-content-bottom edge-y-1 min-height-50 is-light-text">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-070.jpg&quot;); background-position: 50% 0%;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 leading-13 is-content-420 size-16 is-content-right edge-x-0-5">
            <div class="row">
                <div class="column text-right">
                    <p>An Adventurer<br>based in [City Name]</p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-242e.png',
			'category': '15,6',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-1300">
        <div class="row">
            <div class="column">
                <h2 class="font-normal size-72">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 font-normal">Choosing a trip</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-normal"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
            </div>
            <div class="column">
                <h3 class="size-24 font-normal">Bookings</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-normal"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-24 font-normal">Travelling in a group</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-normal"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
            </div>
            <div class="column">
                <h3 class="size-24 font-normal">Payments</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-normal"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward"></i></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-242f.png',
			'category': '15,7',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box type-poppins box-autofit is-section-60">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-700 leading-14 size-18">
        <div class="row">
            <div class="column">
                <div class="text-center">
                    <i class="icon ion-android-bicycle size-64"></i>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h2 class="text-center font-normal size-60 leading-none">Where do you want to go?</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column text-center">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide size-16" title="">Book Your Trip</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},


		/* 235 */


		{
			'thumbnail': 'preview/item-235a.png',
			'category': '15,1',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-100 type-ibmplexmono box-autofit min-height-60 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-065.jpg&quot;); background-position: 50% 60%;">
            <div class="is-overlay-color opacity-5"></div>
        </div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-1100">
        <div class="row">
            <div class="column">
                <h1 class="text-center leading-11 size-64 tracking-tighter">Let's find a place that you will love to live.</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="text-center"><a href="#" title="">Schedule a Tour</a></p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-235b.png',
			'category': '15,3',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-100 type-ibmplexmono box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1700 h-full flex flex-col justify-between content-pt-60 content-pb-60">
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h2 class="text-center tracking-tight size-35">Move to what moves you.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-119.jpg" alt="" data-filename="img-119.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-044.jpg" alt="" data-filename="img-044.jpg"></div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-006.jpg" alt="" data-filename="img-006.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-235c.png',
			'category': '15,4',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-section-100 box-space box-space-sm type-ibmplexmono md-boxes-1 md-boxes-wrap">
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 leading-13 is-content-780 size-16">
            <div class="row">
                <div class="column" style="width: 61.6231%; flex: 0 0 auto;">
                    <h2 class="tracking-tight font-normal size-50"><span class="underline size-50">Value</span> we give to you.</h2>
                </div>
                <div class="column" style="width: 34%; flex: 0 0 auto;">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-100"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3 class="size-24 tracking-tight">Quick Process</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="column">
                    <h3 class="size-24 tracking-tight">Property Insurance</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-20"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3 class="size-24 tracking-tight">Custom by Request</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="column">
                    <h3 class="size-24 tracking-tight">Best Price</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 is-light-text box-autofit min-height-60">
        <div class="is-overlay">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-087.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-520">
            <div class="row">
                <div class="column">
                    <div class="text-center">
                        <a href="#" title=""><i class="icon ion-android-arrow-dropright-circle size-84" style="color: rgb(255, 255, 255);"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-235d.png',
			'category': '15,5',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-100 type-ibmplexmono box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 is-content-1400 size-16">
        <div class="row">
            <div class="column" style="width: 34%; flex: 0 0 auto;">
                <h2 class="tracking-tight size-48 leading-11">What our clients think.</h2>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-38"></i>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-20"></div>
                <p class="size-14 italic">— A Client</p>
            </div>
            <div class="column">
                <div class="text-left leading-18">
                    <i class="icon ion-quote size-38"></i>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="spacer height-20"></div>
                <p class="size-14 italic">— A Client</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-053.jpg" alt="" data-filename="img-053.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-235e.png',
			'category': '15,6',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-100 type-ibmplexmono box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-16 is-content-780">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-76">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-normal size-24">What is [CompanyName]?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-24 font-normal">Why should we choose [CompanyName]?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="font-normal size-24">What the first step of the home buying process?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-24 font-normal">How do I want to customize my house?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-235f.png',
			'category': '15,7',
			'contentCss': 'type-ibmplexmono.css',
			'contentClass': 'type-ibmplexmono',
			'html': `
<div class="is-section is-box is-section-60 type-ibmplexmono box-autofit min-height-40 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-089.jpg&quot;); background-position: 50% 4%;">
            <div class="is-overlay-color opacity-6"></div>
        </div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-1000">
        <div class="row">
            <div class="column">
                <h2 class="text-center leading-none size-84">Get started with [CompanyName].</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="text-center">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-none uppercase tracking-125 size-14" title="">Explore</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},


		/* 236 */


		{
			'thumbnail': 'preview/item-236a.png',
			'category': '15,1',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-section-100 type-opensans">
    <div class="is-box box-autofit is-box-6">
        <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-720 is-content-right edge-x-0-5">
            <div class="row">
                <div class="column"><img src="[%IMAGE_PATH%]images/img-078.jpg" alt="" data-filename="img-078.jpg"></div>
            </div>
        </div>
    </div>
    <div class="is-box box-autofit is-box-6">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-17 leading-13 content-pt-0 is-content-620">
            <div class="row">
                <div class="column">
                    <p class="size-15 tracking-wider">IT Strategy &amp; Consulting</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="leading-none size-100 font-normal">Simplify Everything</h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-none uppercase tracking-widest size-14" title="">Contact</a>
                        <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 text-black leading-relaxed hover:border-transparent font-normal rounded-none border-transparent uppercase size-14 tracking-widest" style="background-color: rgb(240, 240, 240);">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-236b.png',
			'category': '15,3',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1400 content-pt-0">
        <div class="row">
            <div style="width: 27.2594%; flex: 0 0 auto;" class="column pb-6">
                <h2 class="size-48 leading-09 font-medium">Our recent works.</h2>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-027.jpg" alt="" data-filename="img-027.jpg">
                <div class="spacer height-40 xs-hidden"></div><img src="[%IMAGE_PATH%]images/img-188.jpg" alt="" data-filename="img-037.jpg">
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-084.jpg" alt="" data-filename="img-084.jpg">
                <div class="spacer height-40 xs-hidden"></div><img src="[%IMAGE_PATH%]images/img-037.jpg" alt="" data-filename="img-188.jpg">
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-236c.png',
			'category': '15,4',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans min-height-60 is-light-text is-content-bottom edge-y-4">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-109.jpg&quot;); background-position: 50% 83%;"></div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-1280">
        <div class="row">
            <div class="column">
                <p class="size-96 leading-16 font-semibold">01.</p>
                <h3 class="size-24 font-medium">IT Support</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <p class="size-96 leading-16 font-semibold">02.</p>
                <h3 class="size-24 font-medium">Cloud Consulting</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <p class="size-96 leading-16 font-semibold">03.</p>
                <h3 class="size-24 font-medium">IT Infrastructure Management</h3>
                <p>&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>

		`
		},
		{
			'thumbnail': 'preview/item-236d.png',
			'category': '15,5',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-880">
        <div class="row">
            <div class="column">
                <h2 class="size-38 font-medium">Testimonials.</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-075.jpg" alt="" style="border-radius: 500px; width: 17.6375%; height: auto;" data-filename="img-075.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="size-15 tracking-wider italic">— A Client</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column"><img src="[%IMAGE_PATH%]images/img-055.jpg" alt="" style="border-radius: 500px; width: 25.5263%; height: auto;" data-filename="img-055.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="size-15 tracking-wider italic">— A Client</p>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-010.jpg" alt="" style="border-radius: 500px; width: 25.5263%; height: auto;" data-filename="img-010.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="size-15 tracking-wider italic">— A Client</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-236e.png',
			'category': '15,6',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1100">
        <div class="row">
            <div class="column">
                <h2 class="size-54 text-left font-medium">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
            <div class="column" style="width: 66.7237%; flex: 0 0 auto;">
                <h3 class="size-28 font-medium">What does [CompanyName] do?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div style="width: 39.8631%; flex: 0 0 auto;" class="column">
                <h3 class="size-28 font-medium">Why should we choose [CompanyName]?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
            <div style="width: 52.9357%; flex: 0 0 auto;" class="column">
                <h3 class="size-28 font-medium">What will be delivered and when?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-236f.png',
			'category': '15,7',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-70 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1400">
        <div class="row">
            <div class="column flex flex-col justify-center items-center">
                <h2 class="text-center leading-09 size-64 font-medium">Let's connect and collaborate to create change.</h2>
                <div class="spacer height-40"></div>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 pt-3 pb-3 px-11 uppercase border-current hover:border-current font-normal leading-relaxed rounded-none size-13 tracking-125 mb-5" title="">Get Started</a>
                </div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-086.jpg" alt="" data-filename="img-086.jpg"></div>
        </div>
    </div>
</div>
		`
		},

		/* 244 */

		{
			'thumbnail': 'preview/item-244a.png',
			'category': '15,1',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit is-light-text min-height-70 type-opensans">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-139.jpg&quot;); background-position: 50% 92%;">
            <div class="is-overlay-color opacity-6"></div>
        </div>
    </div>
    <div class="is-container v2 leading-14 size-18 text-left is-content-left edge-x-2 is-content-760">
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h1 class="leading-none size-88 font-light">Every flavor tells a story</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="flex flex-col justify-center items-start column" style="width: 34%; flex: 0 0 auto;">
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 py-2 px-9 border-current hover:border-current font-normal leading-relaxed tracking-wide rounded-full size-15 mb-3 mt-3" style="color: rgb(255, 255, 255);" title="">Explore Menu</a>
                </div>
            </div>
            <div class="text-left flex flex-col justify-center items-start column">
                <div class="text-left">
                    <a href="#" title="" class="flex items-center underline"><i class="icon ion-android-arrow-dropright-circle size-76 mr-3"></i> Show Reel</a>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-244b.png',
			'category': '15,3',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1500">
        <div class="row">
            <div class="column">
                <h2 class="text-center size-48 font-normal">Heart for Food</h2>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="column p-7">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="spacer height-20"></div><img src="[%IMAGE_PATH%]images/img-100.jpg" alt="" data-filename="img-100.jpg">
            </div>
            <div class="column p-7"><img src="[%IMAGE_PATH%]images/img-101.jpg" alt="" data-filename="img-101.jpg">
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.</p>
            </div>
            <div class="column p-7">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                <div class="spacer height-20"></div><img src="[%IMAGE_PATH%]images/img-090.jpg" alt="" data-filename="img-090.jpg">

            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-244c.png',
			'category': '15,4',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-section-100 box-space type-opensans">
    <div class="is-box is-box-6 box-autofit min-height-50 is-light-text">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-076.jpg&quot;); background-position: 50% 60%;">
                <div class="is-overlay-color opacity-6"></div>
            </div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-800">
            <div class="row">
                <div class="column">
                    <h2 class="text-center size-48 font-normal">The Art of Food</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-860">
            <div class="row">
                <div class="column">
                    <div class="text-center">
                        <i class="icon ion-ios-nutrition-outline size-48"></i>
                    </div>
                    <h3 class="text-center size-21 font-normal">Fresh Ingredients</h3>
                    <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div class="column xs-hidden">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-80"></div>
                </div>
                <div class="column" style="width: 50%; flex: 0 0 auto;">
                    <div class="text-center">
                        <i class="icon ion-ios-flower-outline size-48"></i>
                    </div>
                    <h3 class="text-center size-21 font-normal">Millions of Recipes</h3>
                    <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div class="column xs-hidden">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="spacer height-40"></div>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-80"></div>
                </div>
                <div class="column">
                    <div class="text-center">
                        <i class="icon ion-ios-heart-outline size-48"></i>
                    </div>
                    <h3 class="text-center size-21 font-normal">Superb Services</h3>
                    <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-244d.png',
			'category': '15,5',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1600">
        <div class="row">
            <div style="width: 42.8203%; flex: 0 0 auto;" class="column">
                <h2 class="size-48 leading-none font-normal">A Loving Word From Our Customers</h2>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-049.jpg" alt=""></div>
            <div class="column flex flex-col justify-center items-center">
                <p class="text-center">"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type."</p>
                <p class="text-center size-14 tracking-150">— A Customer</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-244e.png',
			'category': '15,6',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box box-autofit is-section-60 min-height-40 type-opensans">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-036.jpg&quot;); background-position-y: 9%;"></div>
    </div>
    <div class="is-container v2 is-content-700 leading-14 size-18">
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-box box-autofit is-section-40 type-opensans">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1620 leading-13">
        <div class="row">
            <div class="column">
                <h2 class="size-76 font-light">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h3 class="size-21">Opening Hours</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-21">Online Booking</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column">
                <h3 class="size-21">Claim a Voucher</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-244f.png',
			'category': '15,7',
			'contentCss': 'type-opensans.css',
			'contentClass': 'type-opensans',
			'html': `
<div class="is-section is-box box-autofit is-section-60 type-opensans min-height-60 is-content-top edge-y-1">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-155.jpg&quot;); background-position: 50% 60%;"></div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-1600">
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column" style="width: 55.5251%; flex: 0 0 auto;">
                <h2 class="font-extralight size-72 leading-none">We're always in the mood for food</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-20"></div>
            </div>
        </div>
        <div class="row">
            <div class="column" style="width: 33.548%; flex: 0 0 auto;">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 font-normal leading-14 border-transparent size-17 tracking-wide hover:border-transparent rounded-none" title="" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Book a Table</a>
                </div>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
    </div>
</div>
		`
		},

		/* 229 */

		{
			'thumbnail': 'preview/item-229a.png',
			'category': '15,1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box type-poppins is-dark-text is-section-100 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1800 content-pt-50">
        <div class="row clearfix">
            <div style="width: 67.5072%; flex: 0 0 auto;" class="column">
                <h1 class="normal-case font-light size-80 tracking-tight leading-none"><span class="font-semibold">We're [CompanyName].</span><br class="size-80">Mobile app development with a spark of creativity.</h1>
                <div class="spacer height-40"></div>
                <div>
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide size-16" title=""><i class="icon ion-android-arrow-dropright"></i>&nbsp; Our Showreel</a>
                </div>
            </div>
            <div class="column flex flex-col justify-start items-end pt-3" style="width: 35.7593%;">
                <p class="size-42 font-medium leading-none"><a href="#" title="" class="size-38">Let's Talk</a></p>
                <p>You’ll be talking with our technology experts.</p>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row sm-autofit md-autofit">
            <div class="column sm-hidden xs-hidden md-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div class="column"><img src="[%IMAGE_PATH%]images/img-137.jpg" alt="" data-filename="img-137.jpg"></div>
        </div>
    </div>
</div>
		
		`
		},
		{
			'thumbnail': 'preview/item-229b.png',
			'category': '15,3',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
<div class="is-section is-box type-raleway-lato is-section-30 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 is-content-left leading-11 size-16 is-content-1000 edge-x-2">
        <div class="row">
            <div class="column">
                <h2 class="font-normal size-88">Fields of Expertise</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-40"></div>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-section-70 type-raleway-lato">
    <div class="is-box is-box-6 box-autofit min-height-50">
        <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
            <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-187.jpg&quot;); background-position: 50% 60%;"></div>
        </div>
        <div class="is-container v2 size-17 leading-13 is-content-520">
            <div class="row">
                <div class="column">
                    <div class="spacer height-80"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="is-box is-box-6 box-autofit">
        <div class="is-overlay">
        </div>
        <div class="is-container v2 size-16 leading-11 is-content-840">
            <div class="row">
                <div class="column">
                    <h3 class="font-normal">Fintech</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="column flex flex-col justify-center items-start">
                    <h3 class="font-normal">Messaging Apps</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="column">
                    <h3 class="font-normal">Internet of Things</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row">
                <div class="column xs-hidden">
                    <div class="spacer height-80"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3 class="font-normal">and much more..</h3>
                </div>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-229c.png',
			'category': '15,4',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-100 type-poppins-lekton box-autofit">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 is-content-1800 leading-none">
        <div class="row">
            <div class="column">
            <p class="uppercase size-19 tracking-175 font-medium">The Process</p>
            </div>
        </div>
        <div class="row">
            <div class="column" style="width: 56.1032%; flex: 0 0 auto;">
                <h2 class="tracking-tight size-54">How we get you from day one to launch and beyond.</h2>
            </div>
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="column">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-80"></div>
            </div>
            <div style="width: 19.7708%; flex: 0 0 auto;" class="column">
                <h3 class="text-left leading-08 size-192">01</h3>
            </div>
            <div class="column flex flex-col justify-center items-start" style="width: 29.7421%; flex: 0 0 auto;">
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row relative sm-items-2 md-items-2">
            <div class="column flex flex-col justify-center items-start">
                <h3 class="size-48">02</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column flex flex-col justify-center items-start">
                <h3 class="size-48">03</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="column" style="width: 35.3582%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/img-038.jpg" alt="" data-filename="img-038.jpg"></div>
            <div class="column" style="width: 35.3582%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/img-081.jpg" alt="" data-filename="img-081.jpg"></div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-229d.png',
			'category': '15,5',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins min-height-60 is-light-text">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/img-115.jpg&quot;); background-position: 50% 60%;">
            <div class="is-overlay-color opacity-8"></div>
        </div>
    </div>
    <div class="is-container v2 leading-14 size-18 is-content-1300 content-pt-50 content-pb-50">
        <div class="row">
            <div class="column flex flex-col justify-center items-start" style="width: 34%; flex: 0 0 auto;">
                <h3 class="font-normal leading-none size-24">Jessica McKay</h3>
                <p class="size-15">A User</p>
            </div>
            <div class="column">
                <p class="leading-12 size-48 font-normal">"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-160"></div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="leading-12 size-48 font-normal">"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</p>
            </div>
            <div class="column flex flex-col justify-center items-end" style="width: 34%; flex: 0 0 auto;">

                <h3 class="font-normal leading-none size-24">Morten N. Andersen</h3>
                <p class="size-15">A User</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-229e.png',
			'category': '15,6',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
<div class="is-section is-box is-section-100 box-autofit type-poppins">
    <div class="is-overlay"></div>
    <div class="is-container v2 leading-14 size-18 is-content-1680">
        <div class="row">
            <div class="column">
                <h2 class="size-54 text-left font-normal">FAQ</h2>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="xs-hidden column sm-hidden">
                <div class="spacer height-60"></div>
            </div>
            <div class="column">
                <h3 class="size-28 font-normal">What does [CompanyName] do?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="column sm-hidden xs-hidden">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="column" style="width: 34%; flex: 0 0 auto;">
                <h3 class="size-28 font-normal">Why should we choose [CompanyName]?</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="xs-hidden column sm-hidden">
                <div class="spacer height-60"></div>
            </div>
        </div>
        <div class="row">
            <div class="column xs-hidden">
                <div class="spacer height-40"></div>
            </div>
        </div>
        <div class="row sm-autofit">
            <div class="xs-hidden column sm-hidden">
                <div class="spacer height-40"></div>
            </div>
            <div class="column" style="width: 34%; flex: 0 0 auto;">
                <h3 class="size-28 font-normal">What will be delivered and when?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.</p>
            </div>
        </div>
    </div>
</div>
		`
		},
		{
			'thumbnail': 'preview/item-229f.png',
			'category': '15,7',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
<div class="is-section is-box is-section-60 box-autofit type-poppins-lekton">
    <div class="is-overlay"></div>
    <div class="is-container v2 size-18 leading-12 is-content-1500">
        <div class="row">
            <div class="column">
                <div class="spacer height-80"></div>
            </div>
        </div>
        <div class="row">
            <div class="flex flex-col justify-center items-start column">
                <h2 class="leading-11 size-72 font-normal text-left">Signup for a Free Demo</h2>
                <div class="spacer height-20"></div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="text-right flex flex-col justify-center items-end column" style="width: 34%; flex: 0 0 auto;">
                <div class="text-right">
                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full tracking-75">Get Started</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="spacer height-60"></div>
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