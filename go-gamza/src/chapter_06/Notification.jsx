import React from "react";
import {unmountComponentAtNode} from 'react-dom';

const styles = {
	wrapper: {
		margin: 8,
		padding: 8,
		display: "flex",
		flexDirection: "row",
		border: "1px solid grey",
		borderRadius: 16,
	},
	messageText: {
		color: "black",
		fontSize: 16,
	},
};

class Notification extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		console.log(`${this.props.id} DidMount() called`);
	}

	componentDidUpdate() {
		console.log(`${this.props.id} DidUpdate() called`);
	}

	componentWillUnmount() {
		console.log(`${this.props.id} WillUnmount() called`);
	}

	handleClick() {
		unmountComponentAtNode(document.getElementById('root'));
	}
	render() {
		return (
			<div style={styles.wrapper}>
				<span style={styles.messageText}>{this.props.message}</span>
				{/* <button onClick={this.handleClick}>Unmount</button> */}
			</div>
		);
	}
}
export default Notification;