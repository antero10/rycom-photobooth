import Home from './components/Home';
import Message from './components/Message';
import Contact from './components/Contact';

const routes = [
  { path: '/', component: Contact },
  { path: '/home', component: Home },
  { path: '/message', component: Message }
]

export default routes;
