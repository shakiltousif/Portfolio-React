
import classes from "./styles/Testimonial.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonial_image from "./img/testimonial-img.jpg";

export default function Testimonial(){
    return(
        
        <section className="testimonial" id="testimonial">

            <div className="container">

                <div className="row">
                    <div className="section-head">
                        <h2>The client said about me</h2>
                        <div className="divider d-flex justify-content-center align-items-center"><hr/></div>
                    </div>
                    <div className="testimonial-carousal">
                    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
                    <div>
                        <img alt="clients-img-Shakil-Ahamed" src={testimonial_image} />
                        <div className={classes.myCarousel}>
                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                        </div>

                        <div>
                        <img alt="clients-img-Shakil-Ahamed" src={testimonial_image} />
                        <div className={classes.myCarousel}>
                            <h3>Daniel Keystone</h3>
                            <h4>Designer</h4>
                            <p>
                            The simple and intuitive design makes it easy for me use. I highly
                            recommend Fetch to my peers.
                            </p>
                        </div>
                        </div>

                        <div>
                        <img alt="clients-img-Shakil-Ahamed" src={testimonial_image} />
                        <div className={classes.myCarousel}>
                            <h3>Theo Sorel</h3>
                            <h4>Designer</h4>
                            <p>
                            I enjoy catching up with Fetch on my laptop, or on my phone when
                            I'm on the go!
                            </p>
                        </div>
                        </div>
                    </Carousel>
                    </div>
                </div>
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171820" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
        
        </section>

    );
}