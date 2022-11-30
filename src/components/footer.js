import footerLogo from '../assets/footerLogo.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import twit from '../assets/twit.png'

function Footer(){
    return(
        <div className="footer">

            <footer>
                <div className="footer-logo">
                    <img src={footerLogo} alt="logo"/>
                </div>

                <div className="footer-nav">
                    <ul>
                        <li>About</li>
                        <li>Project</li>
                        <li>Service</li>
                        <li>Client</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                    <div className="footer-social">
                        <span>Flow</span>
                        <div>
                            <img src={facebook}alt="fb"/>
                            <img src={insta}alt="insta"/>
                            <img src={twit} alt="twit"/>
                        </div>
                    </div>    
                </div>                
            </footer>  
        </div>
    )
};

export default Footer;