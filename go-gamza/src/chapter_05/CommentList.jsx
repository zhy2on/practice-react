import React from "react";
import Comment from "./Comment"

function CommentList(props) {
	return (
		<div>
			<Comment name={"오지현"} comment={"제가 만든 첫 컴포넌트입니다."}/>
			<Comment name={"감자"} comment={"감자에 싹이나서 이파리에 싸이싸이싸이"}/>
		</div>
	);
}

export default CommentList;