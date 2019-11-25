import Home from './components/Home';
import Message from './components/Message';
import Contact from './components/Contact';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/message', component: Message }
]

export default routes;
