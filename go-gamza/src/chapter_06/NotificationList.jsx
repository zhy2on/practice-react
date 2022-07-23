import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
	{
		id: 1,
		message: "안녕하세요 오늘 일정을 알려드립니다.",
	},
	{
		id: 2,
		message: "점심식사 시간입니다.",
	},
	{
		id: 3,
		message: "돈 벌 시간입니다.",
	},
	{
		id: 4,
		message: "돈 벌 시간입니다.",
	},
	{
		id: 5,
		message: "돈 벌 시간입니다.",
	},
]

var timer;

class NotificationList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notifications: [],
		};
	}

	componentDidMount() {
		console.log("list did mount");
		const { notifications } = this.state;
		console.log("hi ");
		timer = setInterval(() => {
			if (notifications.length < reservedNotifications.length) {
				const index = notifications.length;
				notifications.push(reservedNotifications[index]);
				// state update 하려면 set함수 필요
				console.log("hi " + index);
				this.setState({ 
					notifications: notifications,
				});
				console.log(index);
			} else {
				clearInterval(timer);
			}
		}, 1000);
	}

	componentDidUpdate() {
		console.log(`list did update`);
	}

	componentWillUnmount() {
		console.log(`list will unmount`);
	}

	render() {
		return (
			<div>
				{this.state.notifications.map((notification) => {
					return (
						<Notification 
							key={notification.id}
							id={notification.id}
							message={notification.message}
						/>
					);
				})}
			</div>
		);
	}
}
export default NotificationList;