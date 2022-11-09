function DateTime({ millisec }) {
	const date = new Date(millisec * 1000);
	const day = date.toLocaleDateString();
	const time = date.toLocaleTimeString("en-US");

	return (
		<div className="d-flex text-secondary">
			<div>
				<i className="fa fa-clock-o"></i>
				<span className="ms-2">{time}</span>
			</div>
			<div className="ms-4">
				<i className="fa fa-calendar-o"></i>
				<span className="ms-2">{day}</span>
			</div>
		</div>
	);
}

export default DateTime;