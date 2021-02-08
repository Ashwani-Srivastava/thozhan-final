import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'app-footer',
    
})
export class AppFooter{

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
            { /** Start Footer Area  */ }
        <footer class="footer-section pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Contact info</h3>

                            <div class="footer-info-contact">
                                <i class="flaticon-pin"></i>
                                <h3>Location</h3>
                                <span>{this.obj.address}</span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-call"></i>
                                <h3>Call Us</h3>
                                <span><a href={this.obj.reachOut.phone1}>{this.obj.reachOut.phone1}</a></span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-email"></i>
                                <h3>Email Us</h3>
                                <span>
                                    <a href={this.obj.reachOut.email}>
                                        {this.obj.reachOut.email}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Our Support</h3>

                            <ul class="footer-quick-links">
                                <li>
                                    <a href="#">
                                        Private Policies
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Donate Now
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Become a Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Paid programs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Partnership
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Our Services</h3>

                            <ul class="footer-quick-links">
                                <li>
                                    <a href="#">
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Sponsor
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Fundraise
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Form 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Recent News</h3>
                            {this.obj.media.slice(0,2).map(s => (
                                <div class="footer-news">
                                <a href={s}>
                                     <img src={s.photo.url} alt="image" width="100" />
                                     <h4>{s.name}</h4>
                                     <span>{s.date._seconds}</span>
                                </a>
                             </div>
                            ))}
                            {/* <div class="footer-news">
                               <a href="single-blog.html">
                                    <img src="assets/img/footer-news/1.jpg" alt="image"/>
                                    <h4>Support about poverty to poor family</h4>
                                    <span>Poor, 22 January</span>
                               </a>
                            </div>

                            <div class="footer-news">
                               <a href="single-blog.html">
                                    <img src="assets/img/footer-news/2.jpg" alt="image"/>
                                    <h4>Mostly suffered school Boys care</h4>
                                    <span>Health, 24 February</span>
                               </a>
                            </div>*/}
                        </div> 
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-area-content">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="copyright-logo">
                                    <img src="assets/img/white-logo.png" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <p>
                                    <i class="far fa-copyright"></i> 
                                    2020 Huruma. All Rights Reserved by
                                    <a href="https://envytheme.com/" target="_blank">
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <ul>
                                    <li>
                                        <a href="terms-condition.html">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        { /** End Footer Area  */ }

        </span> );
    }
}
