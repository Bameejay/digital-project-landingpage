import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight,} from '@fortawesome/free-solid-svg-icons';
import slideNumbers from '../../assets/images/main/slide_numbers.png';
import heroImage from '../../assets/images/main/project_lorum_hero.png';
import aboutImage from '../../assets/images/main/project_lorum_about.png';
import mainFocus1 from '../../assets/images/main/project_lorum_mainfocus1.png';
import mainFocus2 from '../../assets/images/main/project_lorum_mainfocus2.png';
import sampleImage from '../../assets/images/main/project_lorum_ourprojectsection_img1.png';
import sampleImage2 from '../../assets/images/main/project_lorum_ourprojectsection_img2.png';
import sampleImage3 from '../../assets/images/main/project_lorum_ourprojectsection_img3.png';
import sampleImage4 from '../../assets/images/main/project_lorum_ourprojectsection_img4.png';
import sampleImage5 from '../../assets/images/main/project_lorum_ourprojectsection_img5.png';
import contactUs from '../../assets/images/main/project_lorum_contactus_img.png';
import './main.css'

function Main() {
  return (
    <div className="main">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Start Left-Item Section */}
        <div className="left-item">
          <div className='first-para'>
            <p><span className='top-text'>PROJECT</span><br></br><span>Lorum</span></p>
          </div>
            <div className='nav-arrows'>
              <button>
                <FontAwesomeIcon icon={faArrowLeft} className='prev-button' />
              </button>
              <button>
                <FontAwesomeIcon icon={faArrowRight} className='next-button'/>
              </button>
            </div>
            <div>
              <img src={slideNumbers} alt="slidenumbers" />
            </div>
          </div>

        {/* Start Right-Item Section */}
        <div className="right-item">
          <img src={heroImage} alt="hero_image" />
        </div>
      </div>

      {/* About Section */}
    <div className='about-page'>
      <div className='left-item'>
        <img src={aboutImage} alt="" />
      </div>
      <div className='right-item'>
        <div className='about-title'>
          <p>About</p>
        </div>
        <div className='about-para'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam fuga omnis autem sit doloribus consectetur distinctio quia perspiciatis labore, non earum quibusdam quam consequatur voluptate in! Eligendi, soluta recusandae.
          Porro illum explicabo dolor, illo recusandae consequuntur odit esse repellat ipsam unde velit reprehenderit. A, iusto adipisci fugit facilis incidunt, neque, expedita similique sint culpa officia eligendi hic rerum maxime.</p>
        </div>
        <div className='readmore-button'>
          <p>READ MORE</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>

    {/* Main Focus Section */}
    <div className='mainfocus'>
        <div className='mainfocus-title'>
          <p>Main Focus/Mission Statement</p>
        </div>
        <div className="boxes">
      <div className='focus-left-item'>
        <div className='focus-left-img'>
          <img src={mainFocus1} alt="" />
        </div>
        <div>
          <p className='focus-left-item-para'>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat</p>
        </div>
      </div>
      <div className='focus-right-item'>
        <div className='focus-right-img'>
          <img src={mainFocus2} alt=""/>
        </div>
        <div> 
          <p className='focus-right-item-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
        </div>
      </div>
      </div>
      </div>

      {/* Our Project Section */}
      <div className='our-project'>
        <div className='project-heading'>
          <p>Our Projects</p>
        </div>
      {/* First row image */}
      <div className='first-row-container'>
      <div className='first-column'>
        <div className='sample-project'>
          <img src={sampleImage} alt="" />
        {/* <div className='text'>
          <h1>Sample Project</h1>
          <div>
          <p>VIEW MORE</p>
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div> */}
        </div>
        
      </div>
      <div className='second-column'>
        <div>
          <img src={sampleImage2} alt="sample_project2" />
        </div>
      </div>
      </div>

      {/* Second row image */}
      <div className='second-column-container'>
        <div className='image-wrapper'>
          <img src={sampleImage3} alt="sample_image" />
        </div>
        <div className='image-wrapper'>
          <img src={sampleImage4} alt="sample_image" />
        </div>
        <div className='image-wrapper'>
          <img src={sampleImage5} alt="sample_image" />
        </div>
      </div>
      <div className='our-project-button'>
      <button>
          ALL PROJECTS <FontAwesomeIcon icon={faArrowRight} className='arrow-right'/>
      </button>
      </div>
      </div>

      {/* Contact US Section */}
      <div className='contact-us'>
        <p>Contact US</p>
      </div>
      <div className='contactus-container'>
        <div className='form-container-img'>
        <div className='form-container'>
          <form action="">
              <input type="text" placeholder='Name' className='input-box'/><br />
              <input type="number" placeholder='Phone Number' className='input-box'/><br />
              <input type="email" placeholder='Email' className='input-box'/><br />
              <input type="text" placeholder='Interested' className='input-box'/><br />
              <textarea name="" id="" placeholder='Message'></textarea>
            </form>
            <button className='contactus-button'>
                SEND EMAIL <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className='right-item'>
            <img src={contactUs} alt="contact_image" />
          </div>
        </div>
      </div>

      {/* Footer Section */}

          {/* <div className="footer-container">
            <div className='white-color-logo'><img src={blackbackgroundLogo} alt="" /></div>
            <div className='information-footer'>
              <h1>Information</h1>
              <p>Main</p>
              <p>Gallery</p>
              <p>Projects</p>
              <p>Contacts</p>
            </div>
            <div className='contacts-footer'>
              <h1>Contacts</h1>
              <p>1234 sample Street Austin Texas 78704</p>
              <p>512-333-2222</p>
              <p>sampleemail@gmail.com</p>
            </div>
            <div className='social-media'>
              <h1>Social Media</h1>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faPinterest} />
            </div>
          </div> */}
{/* <Footer/> */}





    </div>
  );
}

export default Main;
