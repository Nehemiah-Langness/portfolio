import GitHub from '../assets/github.svg?react';
import { ApplicationCard } from '../components/application-card';


export default function Index() {
	return (<>
		<span className="display-5">Applications</span>
		<div className="d-flex p-2 flex-wrap justify-content-center">
			<ApplicationCard
				imageUrl='https://contact.n-lang.dev/icon-192.svg'
				siteUrl='https://contact.n-lang.dev'
				title='Contact Card'
				text='Build a digital contact card with sharing and vCard capabilities'
				imageBackgroundColor='var(--bs-primary)'
			/>

			<ApplicationCard
				imageUrl='https://notes.n-lang.dev/favicon.svg'
				siteUrl='https://notes.n-lang.dev'
				title='Notes'
				text='Keep sticky notes of things you need to remember'
				imageBackgroundColor='var(--bs-white)'
			/>
		</div>

		<div className="mt-5"></div>
		<span className="display-5">Source Code</span>
		<div className="ps-3">
			<div className="my-5">
				<a href="https://github.com/Nehemiah-Langness?tab=repositories" target="_blank">
					<div className="d-flex align-items-center">
						<GitHub height="1.5rem" className='me-2' style={{ color: '#171515' }} /> All GitHub Repositories
					</div>
				</a>
			</div>

			<div className="my-5">
				<a href="https://github.com/Nehemiah-Langness/contact-card" target="_blank">
					<div className="d-flex align-items-center">
						<GitHub height="1.5rem" className='me-2' style={{ color: '#171515' }} /> Contact Card
					</div>
				</a>
			</div>

			<div className="my-5">
				<a href="https://github.com/Nehemiah-Langness/Notes" target="_blank">
					<div className="d-flex align-items-center">
						<GitHub height="1.5rem" className='me-2' style={{ color: '#171515' }} /> Notes
					</div>
				</a>
			</div>
		</div>


	</>);
}
