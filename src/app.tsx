import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";

import { Layout } from "./pages/layout";
import { Index } from "./pages";
import { Loading } from "./components/loading";


const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Layout />}>
		<Route path='/' element={<Index />} />
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

