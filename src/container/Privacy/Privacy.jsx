import { IconScroll } from '../../components';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="Privacy" id='privacy'>
      {/* Privacy Policy Section */}
      <div className="section-padding">
        <h2>Privacy Policy</h2>
        <h3>Introduction</h3>
        <p>Welcome to our ChatGPT-based app, focused on fostering an engaging learning environment. Our app allows you to interact, learn, and participate in quizzes, leveraging the power of ChatGPT.</p>
        <h3>Data Collection</h3>
        <p>We collect only behavioral data related to your interactions with the app. This includes your queries, quiz responses, and engagement patterns. Personal data, such as names, email addresses, or any personally identifying information, is not collected by our app.</p>
        <h3>Use of Data</h3>
        <p>The collected data is used to enhance your experience, improve the app's functionality, and guide our educational content. We do not use your data for any purpose other than to enhance the service we offer.</p>
        <h3>Data Responsibility</h3>
        <p>Our app is built on top of OpenAI's ChatGPT. We are not responsible for how OpenAI collects or handles data. For information on OpenAI’s data practices, please refer to their privacy policy. We ensure that the behavioral data we collect is handled with the utmost respect for your privacy.</p>
        <h3>Policy Changes</h3>
        <p>We reserve the right to modify this privacy policy at any time. Any changes will be communicated through the app.</p>
        <h3>Contact Us</h3>
        <p>For any questions or concerns regarding your privacy, please contact us at studyasking@gmail.com.</p>
          </div>
          <IconScroll />
    </div>
  );
}

export default Privacy;
