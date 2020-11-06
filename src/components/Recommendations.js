import React from 'react';

class Recommendations extends React.Component {
    render() {
        return(
            <div>
                 {/* <!-- Cities Recommendations Section--> */}
                 <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        {/* <!-- Recommendations Section Heading--> */}
                        <h2 className="page-section-heading text-center text-uppercase text-white mb-5">Our recommendations</h2>
                        {/* <!-- Recommendations Grid Items--> */}
                        <div className="row">
                            {/* <!-- Recommendations Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="img/dubai.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Recommendations Item 2--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="img/budapest.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Recommendations Item 3--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="img/shanghai.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Recommendations Item 4--> */}
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="img/newyork.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Recommendations Item 5--> */}
                            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="img/maldives.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Recommendations Item 6--> */}
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="img/brasov.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Recommendations;