// export const App = () => {
// 	return (
// 		<div
// 			style={{
// 				height: '100vh',
// 				display: 'flex',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				fontSize: 40,
// 				color: '#010101'
// 			}}
// 		>
// 			React homework template
// 		</div>
// 	);
// };

import './App.css';
// import { Header } from './components/Header'
// import painting from './painting.json'
import paintingData from '../../painting'
import { PaintingList } from '../PaintingList/PaintingList'
// import styles from 'App.module.css'
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { Alert } from 'components/Alert/Alert';
// const box = { color: 'red', fontSize: 18, margin: '50px 50px' };
// import { Container, Title } from './App.styled';
import { colorPickerOptions } from 'components/ColorPicker/ColorPicker.styled';
import { Counter } from 'components/Counter/Counter';
import { Component } from 'react';
import {Dropdown} from '../DropdownMenu/DropdownMenu'

export class App extends Component {

	state = {
		data: paintingData
	}

	render() {
		return (
			<div>

				{/* <Dropdown/> */}
				{/* <Counter /> */}
				{/* <Container>
					<Title>Title</Title>
				</Container> */}

				{/* <Header>
					<nav>
						Навігація
					</nav>
				</Header> */}
				{/* <PaintingList painting={this.state.data} /> */}

				{/* <div style={box}>бокс</div>
				<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex totam non optio eligendi! Porro autem quae non nisi quam nam aut nesciunt, tempore fuga sequi totam mollitia eligendi nobis?</p>
				<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex totam non optio eligendi! Porro autem quae non nisi quam nam aut nesciunt, tempore fuga sequi totam mollitia eligendi nobis?</p> */}

				<ColorPicker options={colorPickerOptions}/>
	
				{/* <Alert text="Останнє попередження" type="warning" />
				<Alert text="Ура! Все ок!" type="success" />
				<Alert text="О жах - все пропало" type="error" /> */}
				{/* <GlobalStyle /> */}
			</div >
		)
	}

}
