import './Footer.css';
import { images, data } from '../../constants';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.logofooter} alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8 col-12">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4">
          <a href="https://twitter.com/studyasking" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>{' '}
          <a href="https://linkedin.com/in/TuUsuarioDeLinkedIn" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="rights">
          <p>© {new Date().getFullYear()} Study Labs LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
