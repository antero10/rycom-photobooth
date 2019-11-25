import Home from './components/home';
import Message from './components/message';
import Contact from './components/Contact';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/message', component: Message }
]

export default routes;
