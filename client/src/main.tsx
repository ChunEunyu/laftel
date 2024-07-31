import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import * as ReactDOM from "react-dom/client";
import { router } from './router/router';
import { RouterProvider } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './app/store';

import './index.css';

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
)

{/*
  
  <React.StrictMode></React.StrictMode>,
  */}
