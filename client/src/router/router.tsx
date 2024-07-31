import { createBrowserRouter } from "react-router-dom";

import { 
    Auth,
    AuthMain,
    Daily,
    Finder,
    Home,
    Membership,
    Profile,
    Search,
    Register,
    Themes,
    ThemeDetail,
    ThemesAll,
    Login,
    Landing,
    Subscribed,
  } from "@/pages";

import { getCarousels } from "@/apis/getAPIs";

import App from "@/App"; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, 
        element: <Home />,
        loader: async () => {
          const carousels = await getCarousels();
          return { carousels };
        }
      },
      { path: 'auth',
        element: <Auth />,
        children: [
          { index: true, element: <AuthMain /> },
          { path: 'register', element: <Register /> },
          { path: 'Login', element: <Login /> },
        ]
      },
      { path: 'daily', element: <Daily /> },
      { path: 'finder', element: <Finder /> },
      {
        path: 'membership',
        element: <Membership />,
        children: [
          { path: 'landing', element: <Landing /> },
          { path: 'subscribed', element: <Subscribed /> },
        ],
      },
      {
        path: 'themes',
        element: <Themes />,
        children: [
          { path: '', element: <ThemesAll />,
            
            }, 
          { path: ':id', element: <ThemeDetail /> }, 
        ],
      },
      { path: 'profile', element: <Profile /> },
      { path: 'search', element: <Search /> },
    ],
  },
]);