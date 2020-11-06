import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- About Section--> */}
                <section className="page-section bg-dark text-white mb-0" id="about">
                    <div className="container">
                        {/* <!-- About Section Heading--> */}
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                        {/* <!-- Icon Divider--> */}
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        {/* <!-- About Section Content--> */}
                        <div className="row">
                            <div className="col-lg-4 ml-auto"><p className="lead"> </p><b>logos.ro</b> is a multi-award winning travelling website located in Romania. The website is run by a group of friends who are passionate about travelling.</div>
                            <div className="col-lg-4 mr-auto"><p className="lead"></p>The website was founded in late 2019 and the main idea of the app was to find the cheapest flights on the market.</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;