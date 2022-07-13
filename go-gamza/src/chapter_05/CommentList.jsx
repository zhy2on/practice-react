import React from "react";
import Comment from "./Comment"

const comments = [
	{
		name: "오지현",
		comment: "안녕하세요, 오지현입니다.",
	},
	{
		name: "이민형",
		comment: "I'm a child",
	},
	{
		name: "이장원",
		comment: "캔 위 메이컵 인 더 모닝",
	},
	{
		name: "익스",
		comment: "잘 부탁드립니다",
	},
];

function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}

export default CommentList;