import { images } from '../../constants';
import { IconScroll } from '../../components';
import './Hero.css';

const Hero = () => {

  const redirectToGPTApp = () => {
    window.location.href = 'https://chat.openai.com/g/g-rWl30Kf8V-study-asking';
  };

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Try to learn asking questions</h1>
          <p className="py-4">Ask, learn, solve quizzes, and explore other users' thoughts. Join our vibrant community today - no registration required! All you need is curiosity 📖</p>
          <button className="btn-studyasking" onClick={redirectToGPTApp}>Go to GPT App</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <IconScroll />
    </div>
  );
};

export default Hero;
