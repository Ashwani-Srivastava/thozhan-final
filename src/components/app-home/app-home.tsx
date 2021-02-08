import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
})
export class AppHome {

    @State() obj: any = {
        name:"",
        vision:"",
    };
    async componentWillLoad(){
        const response = await fetch("../../assets/thozhan.json");
        this.obj = await response.json();
        console.log(this.obj);
    }
    render() {
        return ( <span>

        <app-header></app-header>

        { /** Start Navbar Area  */ }
        <div class="navbar-area navbar-default navbar-fixed-top">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="src/index.html">
                            <img src={this.obj.logo.url} class="white-logo" alt="logo" height="165" width="186"/>
                            <img src={this.obj.logo.url} class="black-logo" height="68" width="202" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light navbar-fixed-top">
                        <a class="navbar-brand" href="index.html">
                            <img src={this.obj.logo.url} class="white-logo" alt="logo" height="165" width="186"/>
                            <img src={this.obj.logo.url} class="black-logo" height="68" width="202" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">
                                        <span>o1</span>
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link">
                                                Home One
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">
                                                Home Two
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-3.html" class="nav-link">
                                                Home Three
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-4.html" class="nav-link active">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="assets/pages/about.html" class="nav-link">
                                        <span>o2</span>
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o3</span>
                                        Causes 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="causes.html" class="nav-link">
                                                Causes
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-causes.html" class="nav-link">
                                                Single Causes
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o4</span>
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="assets/pages/about.html" class="nav-link">
                                                About
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="assets/pages/team.html" class="nav-link">
                                                Team
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="assets/pages/gallery.html" class="nav-link">
                                                Gallery
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Events 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="events.html" class="nav-link">
                                                        Events
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="single-events.html" class="nav-link">
                                                        Events Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">
                                                Faq
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="feedback.html" class="nav-link">
                                                Feedback
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                User 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="log-in.html" class="nav-link">
                                                        Log In
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="sign-up.html" class="nav-link">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="recover-password.html" class="nav-link">
                                                        Recover Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">
                                                404 Error
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="contact.html" class="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o5</span>
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog-1.html" class="nav-link">
                                                Blog Grid
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-2.html" class="nav-link">
                                                Blog Right Sidebar
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-blog.html" class="nav-link">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">
                                        <span>o6</span>
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options">
                                {/* <div class="dropdown language-switcher d-inline-block">
                                    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/flag/france-flag.jpg" class="shadow" alt="image"/>
                                        <span>Eng <i class='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/germany-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ger</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/italy-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Fre</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/spain-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Spa</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/russia-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Rus</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/us-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ita</span>
                                        </a>
                                    </div>
                                </div> */}

                                <div class="option-item"><i class="search-btn bx bx-search"></i>
                                    <i class="close-btn bx bx-x"></i>
                                    <div class="search-overlay search-popup">
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text"/>

                                                <button class="search-button" type="submit">
                                                    <i class="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        { /** End Navbar Area  */ }

        { /** Sidebar Modal  */ }
        <div class="sidebar-modal">
            <div class="sidebar-modal-inner">
                <div class="sidebar-about-area">
                    <div class="title">
                        <h2>About Us</h2>
                        <p>{this.obj.description}</p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
							<a href="#">
								<img src="assets/img/sidebar/1.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/2.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/3.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/4.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/5.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/6.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/7.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/8.jpg" alt="image"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href={this.obj.reachOut.phone1}>
                                    {this.obj.reachOut.phone1}
                                </a>
                                <span>OR</span>
                                <a href={this.obj.reachOut.email}>
                                    {this.obj.reachOut.email}
                                </a>
                            </h2>
    
                            <ul class="social">
                                <li>
                                    <a href={this.obj.reachOut.facebook} target="_blank">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.twitter} target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.instagram} target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.linkedin} target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.pinterest} target="_blank">
                                        <i class="flaticon-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span class="close-btn sidebar-modal-close-btn">
                    <i class="flaticon-close"></i>
                </span>
            </div>
        </div>
        { /** End Sidebar Modal  */ }

        { /** Start Slider Area  */ }
        <div class="slider_area">
            <div id="rev_slider_1078_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="classic4export" data-source="gallery" style={{ 'margin': '0px auto', 'background-color': 'transparent', 'padding': '0px', 'margin-top': '0px', 'margin-bottom': '0px' }} >
                { /** START REVOLUTION SLIDER 5.4.1 fullwidth mode  */ }
                <div id="rev_slider_1078_1" class="rev_slider fullwidthabanner" style={{ 'display': 'none' }} data-version="5.4.1">
                    <ul>
                        { /** SLIDE   */ }
                        {this.obj.photos.slice(0,3).map(s =>(
                            <li data-index="rs-3049" data-transition="zoomin" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="/assets/huruma/img/main-banner1.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="First Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" >
                            { /** MAIN IMAGE  */ }
                            <img src={s} alt="" data-bgposition="center center" data-kenburns="on" data-duration="7000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 -500" data-offsetend="0 500" data-bgparallax="10" class="rev-slidebg" data-no-retina />
                            
                            <div class="tp-caption NotGeneric-Icon tp-resizeme" id="slide-3049-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                            {this.obj.name}
                            </div>

                            <div class="tp-caption NotGeneric-Title tp-resizeme" id="slide-3049-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme" id="slide-3049-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                {/* <p>{this.obj.vision}</p> */}
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li>
                        ))}
                        {/* <li data-index="rs-3049" data-transition="zoomin" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="/assets/huruma/img/main-banner1.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="First Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" > */}
                            { /** MAIN IMAGE  */ }
                            {/* <img src="/assets/huruma/img/main-banner1.jpg" alt="" data-bgposition="center center" data-kenburns="on" data-duration="7000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 -500" data-offsetend="0 500" data-bgparallax="10" class="rev-slidebg" data-no-retina />
                            
                            <div class="tp-caption NotGeneric-Icon tp-resizeme" id="slide-3049-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                            {this.obj.slug}
                            </div>

                            <div class="tp-caption NotGeneric-Title tp-resizeme" id="slide-3049-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme" id="slide-3049-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <p>{this.obj.vision}</p>
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li> */}

                        { /** SLIDE   */ }
                        {/* <li data-index="rs-3045" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="/assets/huruma/img/main-banner2.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Second Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" > */}
                            { /** MAIN IMAGE  */ }
                            {/* <img src={"/assets/huruma/img/main-banner2.jpg"} alt="" data-bgposition="center center" data-kenburns="on" data-duration="7000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 500" data-offsetend="0 -500" data-bgparallax="10" class="rev-slidebg" data-no-retina />

                            <div class="tp-caption NotGeneric-Icon tp-resizeme" id="slide-3049-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                            {this.obj.slug}
                            </div>
                            
                            <div class="tp-caption NotGeneric-Title tp-resizeme" id="slide-3045-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme" id="slide-3045-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                            {this.obj.vision}
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li> */}

                        { /** SLIDE   */ }
                        {/* <li data-index="rs-3046" data-transition="fadetotopfadefrombottom" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="/assets/huruma/img/main-banner3.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Third Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" > */}
                            { /** MAIN IMAGE  */ }
                            {/* <img src="/assets/huruma/img/main-banner3.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina />

                            <div class="tp-caption NotGeneric-Icon tp-resizeme rs-parallaxlevel-1" id="slide-3046-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                            {this.obj.slug}
                            </div>
                            
                            <div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-3" id="slide-3046-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme rs-parallaxlevel-2" id="slide-3046-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                            {this.obj.vision}
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li> */}
                    </ul>
                    <div class="tp-bannertimer" style={{ 'height': '7px', 'background-color': 'rgba(255, 255, 255, 0.25)' }}></div>
                </div>
            </div>{ /** END REVOLUTION SLIDER  */ }
        </div>
        { /** End Slider Area  */ }

    {/*<!-- Start Top Feature Area --> */}
        <section class="feature-section">
            <div class="container-fluid">
                <div class="row my-row justify-content-around align-items-stretch">
                { this.obj.sdg.slice(0, 4).map(s => (
                            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                            <div class="feature-card">
                                <div class="icon">
                                    <img src={s.photo.url} alt="image"/>
                                    <img src={s.photo.url} alt="image"/>
                                </div>
                                
                                <h3>{s.name}</h3>
                                <p>{s.description}</p>
    
                                <a href="#" class="feature-btn">
                                    Join now +
                                </a>
                            </div>
                        </div>
                            )) }

                </div>
            </div>
        </section>
       {/*  <!-- End Top Feature Area -->*/}


    {/*<!-- Start About Area --> */}
        <section class="about-section pt-70 pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-item">
                            <span>
                                <i class="flaticon-care-about-plants"></i>
                                About us
                            </span>
                            <h3>An International Independent Charity Organization</h3>
                            <p class="main-color">
                                Your support will help us to make life better living for poor vulnerable children.
                            </p>
                            <p>{this.obj.description} </p>

                            <div class="about-btn">
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                    <span></span>
                                </a>
                                <a class="optional-btn" href="assets/pages/about.html">
                                    More about us
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="about-image about-four">
                            {this.obj.photos.slice(0,2).map(s =>(
                                <img src={s} class="shadow" alt="image"/>
                            ))}
                            {/* <img src={this.obj.photos[1]} class="shadow" alt="image"/>
                            <img src={this.obj.photos[0]} class="shadow" alt="image"/> */}
                        </div>

                        <div class="about-video">
                            <a href={this.obj.video.url} class="video-btn popup-youtube">
                                <i class="bx bx-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End About Area -->*/}

        { /** Start Country Area  */ }
        {/* <section class="country-section pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="country-area-content">
                            <span>
                                <i class="flaticon-selection"></i>
                                Our Area
                            </span>
                            <h3>People generous is your state</h3>
                            <p>We are working wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. incididunt ut labore et dolore labore et dolore.</p>
                        </div>

                        <div class="skill-bar" data-percentage="68%">
                            <p class="progress-title-holder">
                                <span class="progress-title">Australia</span>
                                <span class="progress-number-wrapper">
                                    <span class="progress-number-mark">
                                        <span class="percent"></span>
                                        <span class="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div class="progress-content-outter">
                                <div class="progress-content"></div>
                            </div>
                        </div>

                        <div class="skill-bar" data-percentage="90%">
                            <p class="progress-title-holder">
                                <span class="progress-title">Argentina</span>
                                <span class="progress-number-wrapper">
                                    <span class="progress-number-mark">
                                        <span class="percent"></span>
                                        <span class="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div class="progress-content-outter">
                                <div class="progress-content-two"></div>
                            </div>
                        </div>

                        <div class="skill-bar" data-percentage="95%">
                            <p class="progress-title-holder">
                                <span class="progress-title">Netherland</span>
                                <span class="progress-number-wrapper">
                                    <span class="progress-number-mark">
                                        <span class="percent"></span>
                                        <span class="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div class="progress-content-outter">
                                <div class="progress-content-three"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="map-img" >
                        <img src="/assets/huruma/img/map.png" alt='map' />
                            
                            <div class="location">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Australia</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location2">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Russia</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location3">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Argentina </h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location4">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>USA</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location5">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Netherland</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location6">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Mexico</h5>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        { /** End Country Area  */ }

        { /** Start Fun Facts Area  */ }
        {/* <section class="fun-facts-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Average Rating</p>
                            <h3>
                                <span class="sign-icon dolor">$</span>
                                <span class="odometer" data-count="500">00</span>
                                <span class="sign-icon">M</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Happy Donators</p>
                            <h3>
                                <span class="odometer" data-count="458">00</span>
                                <span class="sign-icon">+</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Volunteer</p>
                            <h3>
                                <span class="odometer" data-count="45">00</span>
                                <span class="sign-icon">+</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Donated Poor</p>
                            <h3>
                                <span class="odometer" data-count="20">00</span>
                                <span class="sign-icon">K</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        { /** End Fun Facts Area  */ }

        { /** Start Causes Area  */ }
        <section class="causes-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-ribbon"></i>
                        Our Causes
                    </span>
                    <h2>Our Projects</h2>
                        
                    </div>

                <div class="row my-row justify-content-md-around align-items-stretch">
                { this.obj.projects.slice(0, 3) .map(p => (
                             <div class="col-lg-4 col-md-6">
                             <div class="single-causes">
                                 <img src={p.photo.url} alt="image"/ >
                                 <div class="icon">
                                     <i class="flaticon-book-1"></i>
                                 </div>
     
                                 <div class="causes-content">
                                     {/* <span>{p.photo.caption}</span> */}
                                     <h3>{p.name}</h3>
                                     {/* <p>{p.description}</p> */}
     
                                     {/* <div class="causes-progress-bar">
                                         <div class="causes-progress-content">
                                             <span>Raised: $5,000.00</span>
                                             
                                             <div class="text-right">
                                                 <span>Goal: $8,000.00</span>
                                             </div>
                                         </div>
                                         <p>Raised by 60 people within 10 days</p>
                                     </div> */}
                                     
                                     <a href="single-causes.html" class="causes-btn-one">
                                         Donate Now
                                         <i class="flaticon-right"></i>
                                     </a>
                                 </div>
                             </div>
                         </div>
                            )) }

                    {/* <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/1.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-book-1"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Education</span>
                                <h3>Education for poor child</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $5,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 60 people within 10 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/2.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-laptop"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Donation</span>
                                <h3>Massive donation to poor</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $4,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 40 people within 12 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="single-causes">
                            <img src="assets/img/causes/3.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-blood-bag"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Helpless</span>
                                <h3>Huge help to homeless pupil</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $1,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $5,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 50people within 20days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        { /** End Causes Area  */ }

        
        { /** Start Solve Area  */ }
        <section class="solve-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-to-do-list"></i>
                        Activities
                    </span>
                    <h2>A mission to solve a problem</h2>
                    <p>{this.obj.vision}</p>
                </div>

                <div class="row align-items-stretch">
                    {this.obj.activities.slice(0,4).map(s => (
                        <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/1.png" alt="image"/>
                            </div>
                            <h3>{s}</h3>
                            {/* <p>Roknin sanso dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p> */}
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/1.png" alt="image"/>
                            </div>
                            <h3>Education Facilities</h3>
                            <p>Roknin sanso dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/2.png" alt="image"/>
                            </div>
                            <h3>Medical Facilities</h3>
                            <p>Dobani Kulie dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/3.png" alt="image"/>
                            </div>
                            <h3>Healthy Food</h3>
                            <p>Horith ipsum dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/4.png" alt="image"/>
                            </div>
                            <h3>Pure Water</h3>
                            <p>Warek ipsum dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        { /** End Solve Area  */ }

        { /** Start Mission Area  */ }
        <section class="mission-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 p-0">
                        <div class="mission-image">
                            <img src="assets/7.jpeg"/>
                        </div>
                    </div>

                    <div class="col-lg-6">
						<div class="mission-tab">
                            <span>
                                <i class="flaticon-target"></i>
                                Our Mission
                            </span>
							<h2>Concern about Our Mission</h2>
							<div class="tab mission-list-tab">
								<ul class="tabs">
									<li>
										<a href="#">
											Our Mission
										</a>
									</li>
									<li>
										<a href="#">
											Our Vision
										</a>
									</li>
									{/* <li>
										<a href="#">
											Our Goal
										</a>
									</li> */}
                                </ul>
                                
								<div class="tab_content">
									<div class="tabs_item">
										<p>{this.obj.mission}</p>

										{/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p> */}
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>{this.obj.vision}</p>

										{/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p> */}
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    {/* <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div> */}
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </section>
        { /** End Mission Area  */ }
        

        { /** Start Donor Area  */ }
        <section class="donor-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Why Volunteer Here</h2>
                </div>

                <div class="row justify-content-around">
                    {this.obj.whyVolunteerHere.slice(0,3).map(m=>(
                        <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-support"></i>
                            </div>
                            <h3>{m.text}</h3>
                            {/* <p>Lorem ipsum dolor siamet ecteturadipisicing</p> */}
                            
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-support"></i>
                            </div>
                            <h3>Select Position</h3>
                            <p>Lorem ipsum dolor siamet ecteturadipisicing</p>
                            <a href="#" class="donor-btn">Give Requist +</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-confirmation"></i>
                            </div>
                            <h3>Get Confirmation</h3>
                            <p>Dolor Lorem ipsumsiamet ecteturadipisicin</p>
                            <a href="#" class="donor-btn">Get Reaction +</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-md-6 offset-md-3 offset-lg-0">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-enjoy"></i>
                            </div>
                            <h3>Get Enjoyed</h3>
                            <p>Lorem ipsum dolor siamet ecteturadipisicing</p>
                            <a href="#" class="donor-btn">Enjoy Now +</a>
                        </div>
                    </div> */}
                </div>
            </div>

            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        { /** End Donor Area  */ }





        { /** Start Team Area  */ }
        <section class="team-section pt-100 pb-70">
            <div class="container">
                <div class="team-title-area">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="section-title text-left">
                                <span>
                                    <i class="flaticon-support"></i>
                                    Meet Our Team
                                </span>
                                <h2>Talented Team behind {this.obj.name}</h2>
                                {/* <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p> */}
                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="team-btn text-right">
                                <a href="assets/pages/team.html" class="optional-btn">
                                    Meet Our Team
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-md-around">
                    {this.obj.team.slice(0,3).map(s => (
                        <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src={s.photo.url} alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href={s.reachOut.facebook}>
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href={s.reachOut.twitter}>
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href={s.reachOut.instagram}>
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>{s.name}</h3>
                                <span>{s.role}</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/7.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Alex Maxwel</h3>
                                <span>CEO & Founder</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/8.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Smith Jhon</h3>
                                <span>Manager</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/9.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Ched Kurtsovski</h3>
                                <span>Volunteer</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/10.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Ched Kurtsovski</h3>
                                <span>Volunteer</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        { /** End Team Area  */ }

        { /** Start Events Area  */ }
        {/**<section class="event-section pt-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-clipboard"></i>
                        Upcoming Events
                    </span>
                    <h2>Be ready for Our Events</h2>
                    <p>Event makes suspendice  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                </div>

                <div class="event-slider owl-carousel owl-theme">
                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-130</h3>
                                    <span>5 December 2020</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Huruma  Con Donation 2020</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            8:00 - 10:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Newyork City
                                        </li>
                                    </ul>
                                    <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-140</h3>
                                    <span>10 January 2021</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Poor funding for helpless</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            9:00 - 12:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Calfornia City
                                        </li>
                                    </ul>
                                    <p>Suspendice quis ipsum  consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-130</h3>
                                    <span>5 December 2020</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Huruma  Con Donation 2020</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            8:00 - 10:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Newyork City
                                        </li>
                                    </ul>
                                    <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-140</h3>
                                    <span>10 January 2021</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Poor funding for helpless</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            9:00 - 12:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Calfornia City
                                        </li>
                                    </ul>
                                    <p>Suspendice quis ipsum  consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>*/}
        { /** End Events Area  */ }

        { /** Start Testimonials Area  */ }
        <section class="testimonials-section pt-140 pb-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-testimonial"></i>
                        Testimonials
                    </span>
                    <h2>Don’t Believe Us? See review</h2>
                </div>
                <div class="testimonials-slider owl-carousel owl-theme">
                    {this.obj.review.slice(0).map( s=> (
                        <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src={s.volunteer.photo.url} alt="image"/>
                                    <h3>{s.name}</h3>
                                    <span><b>Tamil Nadu</b></span>
                                    <ul class="social-info">
                                        
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>{s.event.name}</h3>
                                <p>{s.feedback}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src="assets/img/testimonials/1.jpg" alt="image"/>
                                    <h3>Juhan Luis</h3>
                                    <span>Charity Bingo <b>Uk</b></span>
                                    <ul class="social-info">
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Precious Journey With You”</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src="assets/img/testimonials/2.jpg" alt="image"/>
                                    <h3>juhon Dew</h3>
                                    <span>Charity Bingo <b>Canada</b></span>
                                    <ul class="social-info">
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Precious Journey With You”</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div class="testimonials-shape">
                <img src="assets/img/testimonials/shape.png" alt="image"/>
            </div>
        </section>
        { /** End Testimonials Area  */ }

        { /** Start Donate Area  */ }
        <section class="donate-section ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Why Help Matters?</h2>
                    <p>{this.obj.whyHelpMatters.slice(0,3).map(s=>(
                        <p>{s.text}</p>
                    ))}</p>
                    <a href="#" class="donate-btn">
                        Donate Now
                        <i class="flaticon-right"></i>
                    </a>
                </div>
            </div>

            <div class="default-shape">
                <img src="assets/img/donate/1.png" alt="image"/>
                <img src="assets/img/donate/2.png" alt="image"/>
            </div>
        </section>
        { /** End Donate Area  */ }


        


        { /** Start Blog Area  */ }
        <section class="blog-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-book"></i>
                        Our Blog
                    </span>
                    <h2>Check Out Our Latest News</h2>
                </div>

                <div class="row justify-content-md-around align-self-stretch">
                    {this.obj.media.slice(0,3).map(s=>(
                        <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src={s.photo.url} alt="image"/>

                            <div class="content">
                                <a href={s.link}>
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>{s.date._seconds}</span>
                                <h3>
                                    <a href={s.link}>
                                        {s.name}
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    ))}
                    {/* <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/1.jpg" alt="image"/>

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Poor, 22 January</span>
                                <h3>
                                    <a href="#">
                                        Poverty not only money it can be food sometimes
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/2.jpg" alt="image"/>

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Food, 21 December</span>
                                <h3>
                                    <a href="#">
                                        Strawberry-Banana Quinoa Muffins Recipe for poor
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                        <div class="single-blog">
                            <img src="assets/img/blog/3.jpg" alt="image"/>

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Healthy, 21 June</span>
                                <h3>
                                    <a href="#">
                                        The Plant-Powered Dietitian To Consume Habit
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        { /** End Blog Area  */ }

        <app-footer></app-footer>

        { /** Start Go Top Section  */ }
        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>
        { /** End Go Top Section  */ }

        </span> );
    }
}
