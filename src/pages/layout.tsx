import {
	Link,
	Outlet
} from "react-router-dom";
import Branding from '../assets/logo.svg?react';

export function Layout() {
	return <div className="h-100 d-flex flex-column">
		<nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<Branding height='3rem' />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to='/'>Home</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<Outlet />
		<div className="fs-10 text-end p-2">
			&copy; {new Date().getFullYear()} Nehemiah Langness
		</div>
	</div>;
}
