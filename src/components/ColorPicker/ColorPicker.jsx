import { Component } from 'react';
import { Container, Title, ColorPickerOptions } from './ColorPicker.styled';

export class ColorPicker extends Component {
	
	state={
		colorOptionIdx: 0
	}

	handleClick = (optionId) => {
		if(optionId === this.state.colorOptionIdx){
			return
		}
		console.log('сетимо стейт');

		this.setState({colorOptionIdx: optionId})
	}
	
	render(){
		const {options} = this.props
		const {colorOptionIdx} = this.state
		const label = options[colorOptionIdx].label
		return (
			<Container>
				<Title>Color Picker</Title>
				<span>Обраний колір:{label}</span>
				<br />
				{options.map(({ label, color }, idx) => (
					<ColorPickerOptions 
						onClick={()=>{this.handleClick(idx)}}
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
}