import React, {component} from 'react';
import '../styles/modals.css'

class Modals extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Recommendations Modals --> */}
                {/* <!-- Portfolio Modals--> */}
                    {/* <!-- Portfolio Modal 1--> */}
                    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                                <div class="modal-body text-center">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                {/* <!-- Portfolio Modal - Title--> */}
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4" id="portfolioModal1Label">Dubai</h2>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img class="img-fluid rounded mb-5" src="img/dubai.jpg" alt="" />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-5">Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.
                                                </p>
                                                <button class="btn btn-dark" data-dismiss="modal">
                                                    <i class="fas fa-times fa-fw"></i>
                                                    Close Window
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio Modal 2--> */}
                    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                                <div class="modal-body text-center">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                {/* <!-- Portfolio Modal - Title--> */}
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4" id="portfolioModal2Label">Budapest</h2>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img class="img-fluid rounded mb-5" src="img/budapest.jpg" alt="" />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-5">Budapest, Hungary’s capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest. A funicular runs up Castle Hill to Buda’s Old Town, where the Budapest History Museum traces city life from Roman times onward. Trinity Square is home to 13th-century Matthias Church and the turrets of the Fishermen’s Bastion, which offer sweeping views.
                                                </p>
                                                <button class="btn btn-dark" data-dismiss="modal">
                                                    <i class="fas fa-times fa-fw"></i>
                                                    Close Window
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio Modal 3--> */}
                    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                                <div class="modal-body text-center">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                {/* <!-- Portfolio Modal - Title--> */}
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4" id="portfolioModal3Label">Shanghai</h2>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img class="img-fluid rounded mb-5" src="img/shanghai.jpg" alt="" />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-5">Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres. Sprawling Yu Garden has traditional pavilions, towers and ponds.</p>
                                                <button class="btn btn-dark" data-dismiss="modal">
                                                    <i class="fas fa-times fa-fw"></i>
                                                    Close Window
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio Modal 4--> */}
                    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                                <div class="modal-body text-center">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                {/* <!-- Portfolio Modal - Title--> */}
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4" id="portfolioModal4Label">New York</h2>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img class="img-fluid rounded mb-5" src="img/newyork.jpg" alt="" />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-5">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
                                                </p>
                                                <button class="btn btn-dark" data-dismiss="modal">
                                                    <i class="fas fa-times fa-fw"></i>
                                                    Close Window
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio Modal 5--> */}
                    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                                <div class="modal-body text-center">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                {/* <!-- Portfolio Modal - Title--> */}
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4" id="portfolioModal5Label">Maldives</h2>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img class="img-fluid rounded mb-5" src="img/maldives.jpg" alt="" />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-5">The Maldives, officially the Republic of Maldives, is a small island nation in South Asia, situated in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 700 kilometres from the Asian continent's mainland.</p>
                                                <button class="btn btn-dark" data-dismiss="modal">
                                                    <i class="fas fa-times fa-fw"></i>
                                                    Close Window
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio Modal 6--> */}
                    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                                <div class="modal-body text-center">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                {/* <!-- Portfolio Modal - Title--> */}
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4" id="portfolioModal6Label">Poiana Brasov</h2>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img class="img-fluid rounded mb-5" src="img/brasov.jpg" alt="" />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-5">Peaceful Poiana Brașov is home to a ski resort of the same name, with trails on Postăvaru Mountain, plus an ice-skating rink, an indoor recreation center, and a sports complex with tubing and luging. In the summer, hikers and bikers explore verdant mountain paths, and stables offer horseback riding tours. Luxury hotels, guest houses, ski shops, and traditional Romanian restaurants dot the area.</p>
                                                <button class="btn btn-dark" data-dismiss="modal">
                                                    <i class="fas fa-times fa-fw"></i>
                                                    Close Window
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Modals;