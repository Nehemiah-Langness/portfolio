import { CSSProperties } from "react";

export default function Education() {
	return (<>
		<span className="display-5">Education</span>
		<div className="ps-3">
			<div className="my-5" style={{ '--school-color': '#172b54' } as CSSProperties}>
				<div>
					<a href="https://cune.edu/" target="_blank">
						<img src='https://cune.edu/application/themes/icarus/images/logo_full_color.svg' style={{ width: '15rem' }} />
					</a>
				</div>
				<hr style={{
					borderColor: 'var(--school-color)',
				} as CSSProperties} />

				<dl className="row">
					<dt className="col-sm-2" style={{ color: 'var(--school-color)' }}>
						Graduated
					</dt>
					<dl className="col-sm-10">
						2012
					</dl>
					<dt className="col-sm-2" style={{ color: 'var(--school-color)' }}>
						Degrees
					</dt>
					<dl className="col-sm-10">
						Theology - <span className="fst-italic">B.A.</span><br/>
						Computer Science - <span className="fst-italic">B.A.</span><br/>
					</dl>
				</dl>
			</div>
		</div>

	</>);
}
