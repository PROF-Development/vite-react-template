import React from 'react';
import { RouterProvider } from "react-router-dom"
import {router} from './utils/navigation/router'


function App() {
    return <RouterProvider router={router}/>
}

export default App;