
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import whiteBackgroundLogo from '../assets/images/main/whitebg_logo.png'; 

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mainLink = document.querySelector('.main-link');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        if (!link.classList.contains('main-link')) {
          mainLink.classList.add('no-border');
          link.classList.add('hover-border');
        }
      });

      link.addEventListener('mouseout', () => {
        mainLink.classList.remove('no-border');
        link.classList.remove('hover-border');
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('mouseover', () => {
          if (!link.classList.contains('main-link')) {
            mainLink.classList.add('no-border');
            link.classList.add('hover-border');
          }
        });

        link.removeEventListener('mouseout', () => {
          mainLink.classList.remove('no-border');
          link.classList.remove('hover-border');
        });
      });
    };
  }, []);

  return (
    <nav className='navbar'>
      <img src={whiteBackgroundLogo} alt="project_logo" className='nav-logo' />
      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className='nav-links'>
          <li>
            <Link to="/" className='nav-link main-link'>MAIN</Link>
          </li>
          <li>
            <Link to="/gallery" className='nav-link gallery-link'>GALLERY</Link>
          </li>
          <li>
            <Link to="/projects" className='nav-link project-link'>PROJECTS</Link>
          </li>
          <li>
            <Link to="/certifications" className='nav-link'>CERTIFICATIONS</Link>
          </li>
          <li>
            <Link to="/contact" className='nav-link'>CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
