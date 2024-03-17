import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";

import { Layout } from "./pages/layout";
import Index from "./pages";
import Education from "./pages/education";
import { Loading } from "./components/loading";
import Error from "./pages/error";

const router = createBrowserRouter(
	createRoutesFromElements(

		<Route path="/" errorElement={<Error />}>
			<Route path="/" element={<Layout />}>
				<Route path='/education' element={<Education />} />
				<Route path='/' element={<Index />} />
			</Route>
		</Route>)
);

function App() {
	return (
		<Loading>
			<RouterProvider router={router} />
		</Loading>
	)
}

export default App;

