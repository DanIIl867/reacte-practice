import { Container, Title, ColorPickerOptions } from './ColorPicker.styled';

export const ColorPicker = ({ options }) => {
	return (
		<Container>
			<Title>Color Picker</Title>
			{options.map(({ label, color }) => (
				<ColorPickerOptions key={label}
					bgc={color}>
					<span >{label}</span>
				</ColorPickerOptions>
			))}
		</Container>
	)
}