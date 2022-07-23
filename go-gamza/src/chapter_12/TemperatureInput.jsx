const scaleNames = {
	c: "섭씨",
	f: "화씨",
};

function TemperatureInput(props) {
	const handleChange = (event) => { // 온도값이 변경되었을 경우
		// onTemperatureChange를 호출하여 상위컴포넌트로 변경된 값을 전달
		props.onTemperatureChange(event.target.value);
	};

	return (
		<fieldset>
			<legend>
				온도를 입력해주세요(단위:{scaleNames[props.scale]});
			</legend>
			<input value={props.temperature} onChange={handleChange} />
		</fieldset>
	);
}

export default TemperatureInput;