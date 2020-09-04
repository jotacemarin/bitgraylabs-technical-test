import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default [
  { exact: true, path: '/', component: HomePage },
  { exact: true, path: '', component: NotFoundPage },
];
