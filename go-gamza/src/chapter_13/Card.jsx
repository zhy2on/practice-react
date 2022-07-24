function Card(props) {
	const { title, backgroundColor, children } = props;

	return (
		<div
			style={{
				margin: 8,
				padding: 8,
				borderRadius: 8,
				boxShadow: "0px 0px 4px grey",
				backgroundColor: backgroundColor || "white" /*Specialization*/,
			}}
		>
			{title && <h1>{title}</h1> /*Specialization*/}
			{children /*Containment*/}
		</div>
	);
}

export default Card;