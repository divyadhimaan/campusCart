import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content" >
                <div className="footer-col col-1">
                    <h4 className="White">Company</h4>
                    <ul>
                        <li>about us</li>
                        <li>Contact</li>
                        <li>Report Fraud</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="White">For Shops</h4>
                    <ul>
                        <li href="/signup-shop">Add Your shop</li>
                        <li>Conduct</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="White">For you</h4>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Security</li>
                        <li>affiliate program</li>
                    </ul>
                </div>
            
            
                <div className="footer-col">
                    <h4 className="White">Social Links </h4>
                    <div className="social__links">
                        <FacebookIcon className="social__link" />
                        <TwitterIcon className="social__link"/>
                        <InstagramIcon className="social__link"/>
                        <LinkedInIcon className="social__link"/>
                    </div>             

                </div>

            </div>          
                           
  </div>
    )
};

export default Footer;