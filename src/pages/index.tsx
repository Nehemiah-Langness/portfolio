export function Index() {
	return <div className="flex-grow-1 container pt-5">

		<span className="display-5">Web Apps</span>
		<div className="d-flex p-2">
			<div className="card mx-4" style={{
				width: '20rem'
			}}>
				<img style={{ background: 'var(--bs-primary)' }} src="https://contact.n-lang.dev/icon-192.svg" className="card-img-top" alt="Contact Card" />
				<div className="card-body">
					<h5 className="card-title">Contact Card</h5>
					<p className="card-text">Build a digital contact card with sharing and vCard capabilities</p>
					<a href="https://contact.n-lang.dev" target="_blank" className="btn btn-primary">Visit Application</a>
				</div>
			</div>

			<div className="card mx-4" style={{
				width: '20rem'
			}}>
				<img style={{ background: 'var(--bs-white)' }} src="https://nehemiah-langness.github.io/Notes/favicon.svg" className="card-img-top" alt="Notes" />
				<div className="card-body">
					<h5 className="card-title">Notes</h5>
					<p className="card-text">Keep sticky notes of things you need to remember</p>
					<a href="https://nehemiah-langness.github.io/Notes/" target="_blank" className="btn btn-primary">Visit Application</a>
				</div>
			</div>
		</div>


	</div>;
}
