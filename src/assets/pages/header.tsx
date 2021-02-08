import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'app-header',
    
})
export class AppHeader {

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

        { /** Start Header Area  */ }
        <div class="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
        { /** End Header Area  */ }

        { /** Start Header Area  */ }
        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-content">
                            <p>
                                <a href="#">The fund will go to the poor... <span>Donate Now</span></a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="top-header-social">
                            <span>Follow us:</span>
                            <a href={this.obj.reachOut.facebook} target="_blank">
                                <i class='flaticon-facebook'></i>
                            </a>

                            <a href={this.obj.reachOut.twitter} target="_blank">
                                <i class='flaticon-twitter'></i>
                            </a>

                            <a href={this.obj.reachOut.instagram} target="_blank">
                                <i class='flaticon-instagram'></i>
                            </a>

                            <a href={this.obj.reachOut.linkedin} target="_blank">
                                <i class='flaticon-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { /** End Header Area  */ }

        </span> );
    }
}
