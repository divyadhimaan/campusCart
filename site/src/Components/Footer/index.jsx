import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                {/* Company Info */}
                <div className="footer-col col-1">
                    <h4 className="footer__title">Company</h4>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/report-fraud">Report Fraud</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                {/* For Shops */}
                <div className="footer-col">
                    <h4 className="footer__title">For Shops</h4>
                    <ul>
                        <li><a href="/signup-shop">Add Your Shop</a></li>
                        <li><a href="/conduct">Shop Conduct</a></li>
                    </ul>
                </div>

                {/* For You */}
                <div className="footer-col">
                    <h4 className="footer__title">For You</h4>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/security">Security</a></li>
                        <li><a href="/affiliate-program">Affiliate Program</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="footer-col">
                    <h4 className="footer__title">Connect With Us</h4>
                    <div className="social__links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="social__link" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="social__link" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="social__link" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="social__link" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Additional Information */}
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
