import { Component } from "react";
import "components/Counter/Counter.css"
import { Buttons } from "./Buttons";
import { CaunterValue } from "./CounterValue";

export class Counter extends Component {

	state = {
		value: 0,
	}

	handleIncrement = () => {
		// this.setState({
		// 	value: 5,
		// })

		this.setState((prevState) => {
			return {
				value: prevState.value + 1
			}
		})

	}
	handleDecrement = () => {
		this.setState((prevState) => {
			return {
				value: prevState.value - 1
			}
		})
	}

	render() {
		return (
			<div className="Counter Counter__controls">
				<CaunterValue value={this.state.value} />
				<Buttons onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement} />
			</div>
		)
	}
}
