import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home';
import DictionaryPage from './pages/dictionary';
import SettingsPage from './pages/settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dictionary',
        element: <DictionaryPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);