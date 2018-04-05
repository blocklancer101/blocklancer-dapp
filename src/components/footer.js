import React from 'react'

const Footer = (props) => {
  return (
    <footer className="dark-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="logo-container">
              <img src="/images/logo.png"
                srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x"
                className="logo" alt="Blocklancer Protocol"/>
            </div>
            <p className="company-mission">
            Blocklancer is building the sharing economy of tomorrow. Buyers & Sellers will be able to transact without rent-seeking middlemen. We believe in lowering transaction fees, reducing censorship & regulation, and giving early participants in the community a stake in the network.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  Documentation
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="https://blocklancer.vn/product-brief">Product Brief</a>
                  </li>
                  <li>
                    <a href="https://blocklancer.vn/whitepaper">Whitepaper</a>
                  </li>
                  <li>
                    <a href="https://github.com/blocklancer101" target="_blank">Github</a>
                  </li>
                  <li>
                    <a href="http://docs.blocklancer.vn/" target="_blank">Docs</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  Community
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="https://www.facebook.com/blocklancer101" target="_blank">Facebook</a>
                  </li>                
                  <li>
                    <a href="https://m.me/blocklancer101" target="_blank">Chatbot</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">Twitter</a>
                  </li>
                  <li>
                    <a href="https://medium.com/" target="_blank">Medium</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  Organization
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="http://blocklancer.vn/team">Team</a>
                  </li>
                  <li>
                    <a href="http://blocklancer.vn/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="http://blocklancer.vn/partners">Partners</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/LANDMARK+1+-+VINHOMES+CENTRAL+PARK/@10.793588,106.7215461,223m/data=!3m2!1e3!4b1!4m5!3m4!1s0x317528a98d565de7:0xe024168c5aec8798!8m2!3d10.793588!4d106.7220946">Sài Gòn, Vietnam</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
