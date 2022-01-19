export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg nav-pills">
        <div className="container">
            <a className="navbar-brand" href="#">Shakil Ahamed</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <a className="nav-link n-active" aria-current="page" href="#hero">Home</a>
                <a className="nav-link ms-2" href="#about">About</a>
                <a className="nav-link ms-2" href="#services">Service</a>
                <a className="nav-link ms-2" href="#testimonial">Testimonial</a>
                <a className="nav-link ms-2" href="#plans">Plans</a>
                <a className="nav-link ms-2" href="#contact">Contact</a>
            </div>
            </div>
        </div>
        </nav>
    )
}