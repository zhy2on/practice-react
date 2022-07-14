import React, { useState } from "react";

function SignUp(props) {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("남자");

	const handleChangeName = (event) => {
		setName(event.target.value);
	};

	const handleChangeGender = (event) => {
		setGender(event.target.value);
	};

	const handleSubmit = (event) => {
		alert(`이름: ${name} 성별: ${gender}`);
		event.preventDefault();
	};

	return (
		// input태그의 value로 내용을 넣어줌. 여기선 name을 ""로 초기화 했었기 때문에 빈 입력으로 들어가 있음
		<form onSubmit={handleSubmit}>
			<label>
				이름:
				<input type="text" value={name} onChange={handleChangeName} />
			</label>
			<br />
			<label>
				성별:
				<select value={gender} onChange={handleChangeGender}>
					<option value="남자">남자</option>
					<option value="여자">여자</option>
				</select>
			</label>
			<button type="submit">제출</button>
		</form>
	);
}

export default SignUp;