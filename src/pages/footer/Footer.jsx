// import { faLinkedin, faTwitter, faPinterest  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import blackbackgroundLogo from '../../assets/images/main/blackbg_logo.png';
import { Link } from 'react-router-dom';
import "./footer.css"




export default function Footer() {
  return (
    <div className='footer-bg'>
      <div className="footer-container">
            <div className='white-color-logo'><img src={blackbackgroundLogo} alt="" /></div>
            <div className='information-footer'>
              <h1>Information</h1>
              <p><Link to="/" className='footer-link'>Main</Link></p>
        <p><Link to="/gallery" className='footer-link'>Gallery</Link></p>
        <p><Link to="/projects" className='footer-link'>Projects</Link></p>
        <p><Link to="/certifications" className='footer-link'>Certification</Link></p>
        <p><Link to="/contact" className='footer-link'>Contacts</Link></p>
            </div>
            <div className='contacts-footer'>
              <h1>Contacts</h1>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Sample Street Austin, Texas 78704</p>
        <p><FontAwesomeIcon icon={faPhone} /> 512-333-2222</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> sampleemail@gmail.com</p>
            </div>
            <div className='social-media'>
              <h1>Social Media</h1>
              <div>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faPinterest} />
              </div>
            </div>
          </div>
          <hr className='footer-line' />
          <div className='footer-copyright'>
            <p>© 2024 All rights Reserved</p>
          </div>
    </div>
  )
}
