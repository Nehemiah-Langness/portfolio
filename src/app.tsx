import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from './pages/layout';
import Profile from './pages/profile';
import Code from './pages/code';
import Experience from './pages/experience';
import { Loading } from './components/loading';
import Error from './pages/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<Error />}>
            <Route path='/' element={<Profile />} />
            <Route path='/' element={<Layout />}>
                <Route path='/experience' element={<Experience />} />
                <Route path='/code' element={<Code />} />
            </Route>
        </Route>
    )
);

function App() {
    return (
        <Loading>
            <RouterProvider router={router} />
        </Loading>
    );
}

export default App;
