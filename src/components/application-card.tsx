

export function ApplicationCard({ imageUrl, siteUrl, text, title, imageBackgroundColor }: { imageBackgroundColor?: string; imageUrl: string; siteUrl: string; title: string; text: string; }) {
	return (
		<a href={siteUrl} target="_blank">
			<div className="card mx-4 mb-4" style={{
				width: '20rem',
			}}>
				<img style={{ background: imageBackgroundColor, height:'10rem' }} src={imageUrl} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
				</div>
			</div>
		</a>
	);
}
