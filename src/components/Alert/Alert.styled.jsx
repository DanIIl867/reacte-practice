/* Alert */
// .alert {
// 	line-height: 1.5;
// 	padding: 10px 20px;
// 	background-color: gray;
// 	color: #fff;
// }

// .error {
// 	composes: alert;
// 	background-color: red;
// }

// .warning {
// 	composes: alert;
// 	background-color: orange;
// }

// .success {
// 	composes: alert;
// 	background-color: green;
// }

import styled from "styled-components";
import { theme } from "theme";

export const StyledAlert = styled.p`
	line-height: 1.5;
 	padding: 10px 20px;
 	background-color: ${({ type }) => {
		switch (type) {
			case 'error':
				return theme.color.error;
			case 'warning':
				return theme.color.warning;
			case 'success':
				return theme.color.success;
			default:
				return theme.color.grey;
		}
	}};
`