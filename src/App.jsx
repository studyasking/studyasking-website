import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer } from './container';
import { Hero} from './container';
import { Menu } from './components';



const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Footer />
  </div>
);

export default App;
