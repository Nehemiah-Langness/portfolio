import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError()

	return (<>
		<span className="display-5">Error</span>
		{JSON.stringify(error)}
	</>);
}
