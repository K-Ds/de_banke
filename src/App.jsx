import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './routes/index';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
