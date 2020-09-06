import React from 'react';

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Preventive measures</h2>
              <h3 className="section-subheading text-muted">Follow all these precautionary measures and stay safe</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title, img_add}, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                            <img className="img-fluid" src={img_add} alt="portfolio_img" />
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}