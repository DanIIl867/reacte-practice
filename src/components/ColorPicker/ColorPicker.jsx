import { Component, useState } from 'react';
import { Container, Title, ColorPickerOptions } from './ColorPicker.styled';



export const ColorPicker = ({options}) => {

	const [colorOptionIdx, setColorOptionIdx] = useState(0);


	const handleClick = (optionId) => {
		if(optionId === colorOptionIdx){
			return
		}
		setColorOptionIdx(optionId)
	}

	const label = options[colorOptionIdx].label;

	return(
		<Container>
			<Title>Color Picker</Title>
				<span>Обраний колір:{label}</span>
				<br />
				{options.map(({ label, color }, idx) => (
					<ColorPickerOptions 
						onClick={()=>{handleClick(idx)}}
						key={label}
						bgc={color}
						idx = {idx}
						currentIdx={colorOptionIdx}
						>
					</ColorPickerOptions>
				))}
		</Container>
	)
}













// export class oldColorPicker extends Component {
	
// 	state={
// 		colorOptionIdx: 0
// 	}

// 	handleClick = (optionId) => {
// 		if(optionId === this.state.colorOptionIdx){
// 			return
// 		}
// 		console.log('сетимо стейт');

// 		this.setState({colorOptionIdx: optionId})
// 	}
	
// 	render(){
// 		const {options} = this.props
// 		const {colorOptionIdx} = this.state
// 		const label = options[colorOptionIdx].label
// 		return (
// 			<Container>
// 				<Title>Color Picker</Title>
// 				<span>Обраний колір:{label}</span>
// 				<br />
// 				{options.map(({ label, color }, idx) => (
// 					<ColorPickerOptions 
// 						onClick={()=>{this.handleClick(idx)}}
// 						key={label}
// 						bgc={color}
// 						idx = {idx}
// 						currentIdx={colorOptionIdx}
// 						>
// 					</ColorPickerOptions>
// 				))}
// 			</Container>
// 		)
// 	}
// }