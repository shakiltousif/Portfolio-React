import about_img from "./img/about-img.png";
import hero_bg from "./img/hero-bg.png";
import contact_form_thank from "./img/contact-form-thank.png"
import Testimonial from "./Testimonial";
import ContatForm from "./ContactForm";

export default function Main(){
    return(
        <main className="">

            <section className="hero" id="hero">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="hero-text">
                                <h2>Web Developer</h2>
                                <p className="text-start">Create a beautifully designed website with CMS brain With WordPress. As a web developer,
                I am Shakil Ahamed here to give you CMS brain and a beautifully designed Website With WordPress</p>
                                <a href="https://www.fiverr.com/shakilahamed_" className="btn btn-primary" role="button" data-bs-toggle="button">Hire Me</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img">
                                <img className="img-fluid" alt="Shakil Ahamed" src={hero_bg}/>
                            </div>
                        </div>

                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D0D12" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
            </section>
            <section className="about" id="about">

                <div className="container">
                    <div className="row">
                        <div className="section-head">
                            <h2 className="text-center">About Me</h2>
                            <div className="divider d-flex justify-content-center align-items-center d-flex justify-content-center align-items-center"><hr/></div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="about-img">
                                <img className="img-fluid" alt="Shakil Ahamed" height="256" width="256" src={about_img} />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="about-text">
                                <h4>Hello, I am Shakil Ahamed</h4>
                                <p>I specialize in responsive website design and mobile-friendly WordPress websites, creating custom themes as well as modifying existing themes, and writing custom code needed to achieve my client's goal. Also, I have extensive experience integrating the Woo-commerce shopping cart system for e-commerce websites. For large projects, I have a team to make these types of projects not also faster but also quality work. THANK YOU.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171820" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
            </section>

            <section className="services" id="services">

                <div className="container">
                    <div className="row">
                        <h2 className="text-center">Services</h2>
                        <div className="divider d-flex justify-content-center align-items-center"><hr/></div>
                        <div className="col-lg-4">
                            <div className="service-box">
                                <div className="icon"><span className="material-icons-outlined"> rocket_launch </span></div>
                                <h4>Website Speed</h4>
                                <p>If you're suffering from website speed. Then I am the solution. I specialize in solving the technical problem of WordPress.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box">
                                <div className="icon"><span className="material-icons-outlined"> dashboard </span></div>
                                <h4>Responsive Website</h4>
                                <p>I will help you to make your website more attractive and mobile-friendly. Which is one of the parts of website traffic and SEO-Friendly</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-box">
                                <div className="icon"><span className="material-icons-outlined"> lock_open </span></div>
                                <h4>Website Security</h4>
                                <p>One of the most important things is website security. I will set up your website security as strong as possible. It helps you to protect your data from hackers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D0D12" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
            </section>

            <Testimonial />
            
            <section className="plans" id="plans">
                <div className="container">
                    <div className="row">
                        <div className="section-head">
                            <h2>Pricing & Plans</h2>
                            <div className="divider d-flex justify-content-center align-items-center"><hr/></div>
                            <h3>Choose Your Package</h3>
                        </div>
                        <div className="col-lg-4">

                            <div className="plans-box text-center">
                                <h4>Basic</h4>
                                <div className="plans-price">
                                    $70
                                </div>
                                <div className="plans-features text-start">
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> 3 Pages Website</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Responsive Design</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Automatic Backup</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Dynamic Content</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">not_interested</span> Website Speed Up</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">not_interested</span> E-commerce Functionality</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">not_interested</span> Web Security</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            
                            <div className="plans-box text-center">
                                <h4>Standard</h4>
                                <div className="plans-price">
                                    $100
                                </div>
                                <div className="plans-features text-start">
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> 5 Pages Website</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Responsive Design</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Automatic Backup</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Dynamic Content</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">not_interested</span> Website Speed Up</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> E-commerce Functionality</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">not_interested</span> Web Security</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            
                            <div className="plans-box text-center">
                                <h4>Business</h4>
                                <div className="plans-price">
                                    $200
                                </div>
                                <div className="plans-features text-start">
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> 8 Pages Website</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Responsive Design</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Automatic Backup</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Dynamic Content</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Website Speed Up</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> E-commerce Functionality</li>
                                    <li className="list-group-item"><span className="material-icons-outlined list-icon">done_outline</span> Web Security</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D0D12" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
            </section>


            <section className="contact" id="contact">
                
                <div className="container">
                    <div className="row">
                        <div className="section-head">
                            <h2 className="text-center">Get In Touch</h2>
                            <div className="divider d-flex justify-content-center align-items-center"><hr/></div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <ContatForm />
                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="contact-box">
                                <img className="img-fluid" alt="Shakil Ahamed" src={contact_form_thank}></img>
                                <h3>Stay Connected With A Human</h3>
                                <p>Thank you</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}