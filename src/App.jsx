import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, Privacy, Hero } from './container';
import { Menu } from './components';



const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Privacy />
    <Footer />
  </div>
);

export default App;
