import { createBrowserRouter, LoaderFunctionArgs } from "react-router-dom";

import { 
    Auth,
    AuthMain,
    Daily,
    Finder,
    Home,
    Membership,
    Profile,
    Search,
    Inventory,
    Register,
    Themes,
    ThemeDetail,
    ThemesAll,
    Login,
    Landing,
    Subscribed,
  } from "@/pages";

import { 
  getRecommendsAllThemes, 
  getRecommendsThemesById,
  getDiscover, 
} from "@/apis/getAPIs";
import App from "@/App"; 
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/',
        element: <Home />,
      },
      { path: 'auth',
        element: <Auth />,
        children: [
          { index: true, element: <AuthMain /> },
          { path: 'register', element: <Register /> },
          { path: 'Login', element: <Login /> },
        ]
      },
      { path: 'daily', 
        element: <Daily /> 
      },
      { 
        path: 'finder', 
        element: <Finder />, 
      },
      {
        path: 'membership',
        element: <Membership />,
        children: [
          { 
            path: 'landing', 
            element: <Landing /> 
          },
          { 
            path: 'subscribed', 
            element: <Subscribed />, 
          },
        ],
      },
      {
        path: 'inventory',
        element: <ProtectedRoute><Inventory /></ProtectedRoute>,
      },
      {
        path: 'themes',
        element: <Themes />,
        children: [
          { path: '', 
            element: <ThemesAll />,
            loader: async () => {
              const themesAll = await getRecommendsAllThemes();
              return { themesAll };
            }
          }, 
          { path: ':id', 
            element: <ThemeDetail />,
            loader: async ({ params }: LoaderFunctionArgs) => {
              const id = Number(params.id);
              if (id) {
                const themesById = await getRecommendsThemesById(id);
                return { themesById };
              }
            }
          }, 
        ],
      },
      { 
        path: 'profile', 
        element: <ProtectedRoute><Profile /></ProtectedRoute>, 
      },
      { 
        path: 'search', 
        element: <Search /> 
      },
    ],
  },
]);