import React from "react";

const students = [
	{
		id: 1,
		name: "Mark",
	},
	{
		id: 2,
		name: "Peter",
	},
	{
		id: 3,
		name: "Andy",
	},
];

function AttendanceBook(props) {
	return (
		<ul>
			{students.map((student) => {
				return <li key={student.id}>{student.name}</li>;
			})}
		</ul>
	);
}

export default AttendanceBook;