export function TimelineContent({
	children, year, logo, title, ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { year: string; logo?: React.ReactNode; title: string; }) {
	return (
		<div {...props} className={`d-flex px-5 ${props.className ?? ''}`}>
			<div className='timeline-content border rounded-2 p-4 flex-grow-1 shadow-sm'>
				<div className='me-5 py-2' style={{ fontSize: '3rem', lineHeight: 0.9 }}>
					{year}
				</div>
				<div className='pt-2'>
					<div className='fs-18'>{title}</div>
					<hr style={{ opacity: 0.2 }} />

					<div className='pb-4'>{logo}</div>

					{children}
				</div>
			</div>
		</div>
	);
}
