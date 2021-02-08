import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'app-about',
    
})
export class AppAbout {

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
            <ion-content overflow-scroll="true">
            <app-header></app-header>

{ /** Start Navbar Area  */ }
<div class="navbar-area navbar-default navbar-fixed-top">
    <div class="huruma-responsive-nav">
        <div class="container">
            <div class="huruma-responsive-menu">
                <div class="logo">
                    <a href="index.html">
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
                            <a href="about.html" class="nav-link">
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
                                    <a href="about.html" class="nav-link">
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="team.html" class="nav-link">
                                        Team
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="gallery.html" class="nav-link">
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
                {this.obj.photos.slice(0).map(s =>(
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
                        <a class="optional-btn" href="#">
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
            
        </div>
    </div>
</section>
{ /** End Team Area  */ }

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
            
        </div>
    </div>

    <div class="testimonials-shape">
        <img src="assets/img/testimonials/shape.png" alt="image"/>
    </div>
</section>
{ /** End Testimonials Area  */ }


<app-footer></app-footer>

{ /** Start Go Top Section  */ }
<div class="go-top">
    <i class="bx bx-chevron-up"></i>
    <i class="bx bx-chevron-up"></i>
</div>
{ /** End Go Top Section  */ }

            </ion-content>
        
        </span> );
    }
}
