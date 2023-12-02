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
import painting from './painting.json'
import { PaintingList } from './components/PaintingList/PaintingList'

export function App() {
	return (
		<div>
			{/* <Header>
				<nav>
					Навігація
				</nav>
			</Header> */}
			<PaintingList painting={painting} />
		</div>
	)
}
