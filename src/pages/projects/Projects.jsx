import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight,} from '@fortawesome/free-solid-svg-icons';
import firstImage from "../../assets/images/project/projectimg1.png"
import secondImage from "../../assets/images/project/projectimg2.png"
import thirdImage from "../../assets/images/project/projectimg3.png"
import slideNumbersProject from "../../assets/images/project/slide-numbers-project.png"
import "./projects.css"



function Projects() {
  return (
    <div className="Project-container">
      <div className="text-heading">
        <p>Our</p>
        <h2>Projects</h2>
      </div>
      
      {/* Card Section */}
      <div className="card-container">
        {/* Left Item */}
        <div className="card-image">
          <img src={firstImage} alt="Project" />
        </div>

        {/* Right Item */}
        <div className="text-container">
          <h2>Sample Project</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut porro quae blanditiis eius temporibus molestias sunt vero veniam? Error beatae impedit, tempora architecto itaque sapiente veritatis corrupti perferendis a.</p>
          <button className='view-more'>
            View More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

       
      {/* Card Section */}
      <div className="card-container">
        {/* Left Item */}
        <div className="card-image">
          <img src={secondImage} alt="Project" />
        </div>

        {/* Right Item */}
        <div className="text-container">
          <h2>Sample Project 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut porro quae blanditiis eius temporibus molestias sunt vero veniam? Error beatae impedit, tempora architecto itaque sapiente veritatis corrupti perferendis a.</p>
          <button className='view-more'>
            View More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      
       
      {/* Card Section */}
      <div className="card-container">
        {/* Left Item */}
        <div className="card-image">
          <img src={thirdImage} alt="Project" />
        </div>

        {/* Right Item */}
        <div className="text-container">
          <h2>Sample Project 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut porro quae blanditiis eius temporibus molestias sunt vero veniam? Error beatae impedit, tempora architecto itaque sapiente veritatis corrupti perferendis a.</p>
          <button className='view-more'>
            View More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className='pagination'>
      <div>
        <img src={slideNumbersProject} alt="slidenumbers" />
      </div>
      <div className='nav-arrows'>
        <button className='pagination button'>
          <FontAwesomeIcon icon={faArrowLeft} className='prev-button'/>
        </button>
        <button className='pagination button'>
          <FontAwesomeIcon icon={faArrowRight} className='next-button'/>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Projects;
