import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { 
  Auth,
  Daily,
  Finder,
  Home,
  Membership,
  Themes, 
} from "@/pages";
import App from './App';
import './index.css'

const queryClient = new QueryClient(); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth', element: <Auth /> },
      { path: 'daily', element: <Daily /> },
      { path: 'finder', element: <Finder /> },
      { path: 'membership', element: <Membership /> },
      { path: 'themes', element: <Themes /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
)
