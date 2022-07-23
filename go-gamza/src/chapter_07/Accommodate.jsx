import React, { useState, useEffect, useMemo } from "react";
import { useCallback } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
	const [isFull, setIsFull] = useState(false);
	const [count, increaseCount, decreaseCount] = useCounter(0);

	useEffect(() => {
		console.log("=====================");
		console.log("useEffect() is called")
		console.log(`isFull: ${isFull}`);
	});

	useEffect(() => {
		increaseCount();
		console.log(`Current count value: ${count}`);
	});

	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
		console.log(`Current count value: ${count}`);
	});

	return (
		<div style={{ padding: 16 }}>
			<p>{`총 ${count}명 수용했습니다.`}</p>

			<button onClick={increaseCount} disabled={isFull}>
				입장
			</button>
			<button onClick={decreaseCount}>퇴장</button>

			{isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
		</div>
	);
}

export default Accommodate;