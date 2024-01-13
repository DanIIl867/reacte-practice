import styled from "styled-components";

export const colorPickerOptions = [
	{ label: 'red', color: '#F44336' },
	{ label: 'green', color: '#4CAF50' },
	{ label: 'blue', color: '#2196F3' },
	{ label: 'grey', color: '#607D8B' },
	{ label: 'pink', color: '#E91E63' },
	{ label: 'indigo', color: '#3F51B5' },
];

export const Container = styled.div`
	padding:10px;
`

export const Title = styled.h2`
	line-height: 1.3;
`

export const ColorPickerOptions = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;
	margin: 8px;
	background-color: ${({ bgc }) => bgc};
	border: ${(props)=>props.idx === props.currentIdx ? '2px solid black' : 'none'};
`
