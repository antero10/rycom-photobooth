import Home from './components/Home';
import Message from './components/Message';
import Contact from './components/Contact';
import Config from './components/configs/config';

const routes = [
  { path: Config.routes.contact, component: Contact },
  { path: Config.routes.home, component: Home },
  { path: Config.routes.message, component: Message }
]

export default routes;
