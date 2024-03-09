import {useEffect, useState } from "react";
import "components/Counter/Counter.css"
// import { Buttons } from "./Buttons";
// import { CaunterValue } from "./CounterValue";

// export class Counter extends Component {

// 	state = {
// 		value: 0,
// 	}

// 	handleIncrement = () => {
// 		// this.setState({
// 		// 	value: 5,
// 		// })

// 		this.setState((prevState) => {
// 			return {
// 				value: prevState.value + 1
// 			}
// 		})

// 	}
// 	handleDecrement = () => {
// 		this.setState((prevState) => {
// 			return {
// 				value: prevState.value - 1
// 			}
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="Counter Counter__controls">
// 				<CaunterValue value={this.state.value} />
// 				<Buttons onIncrement={this.handleIncrement}
// 					onDecrement={this.handleDecrement} />
// 			</div>
// 		)
// 	}
// }


export const Counter = () => {
	const [counterA, setCounterA] = useState(0)
	const [counterB, setCounterB] = useState(0)

	const handleCounterAIncrement = () => {
		setCounterA( prevCounterA=> prevCounterA + 1)
	}

	const handleCounterBIncrement = () => {
		setCounterB(prevCounterB => prevCounterB + 1)
	}

	useEffect(() => {
		const totalClicks = counterA + counterB
		console.log(`Всього клікнули ${totalClicks} разів`);
	}, [counterA, counterB])

	return (
		<>
			<button className='btn' type="button" onClick={handleCounterAIncrement}>
				Клікнули counterA {counterA} разів
			</button>
			
			<button className='btn' type="button" onClick={handleCounterBIncrement}>
				Клікнули counterB {counterB} разів
			</button>
		</>
	);
}