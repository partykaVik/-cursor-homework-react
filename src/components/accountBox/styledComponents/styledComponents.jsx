import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const BoxContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`;

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
	font-size: 16px;
	color: rgba(200, 200, 200, 0.8);
	font-weight: 500;
	text-decoration: none;
	margin: 5px 4px;
	z-index: 1001;
`;

export const BoldLink = styled.a`
	font-size: 16px;
	color: red;
	font-weight: 500;
	text-decoration: none;
	margin: 10px 4px;
	z-index: 1000;
`;

export const Input = styled.input`
	background: white;
	width: 100%;
	height: 42px;
	outline: none;
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-bottom: 1.4px solid transparent;
	transition: all 200ms ease-in-out;
	font-size: 12px;

	&::placeholder {
		color: rgba(200, 200, 200, 1);
	}

	&:not(:last-of-type) {
		border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
	}

	&:focus {
		outline: none;
		border-bottom: 2px solid rgb(241, 196, 15);
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 11px 40%;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	border: none;
	border-radius: 100px 100px 100px 100px;
	cursor: pointer;
	transition: all, 240ms ease-in-out;
	background: rgb(241, 196, 15);
	background: linear-gradient(
		58deg,
		rgba(241, 196, 15, 1) 20%,
		rgba(243, 172, 18, 1) 100%
	);
	margin: 10px;

	&:hover {
		filter: brightness(1.03);
	}
`;

export const FormMainContainer = styled.div`
	width: 550px;
	min-height: 550px;
	display: flex;
	flex-direction: column;
	background-color: #05286d;
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	overflow: hidden;
`;

export const FormTopContainer = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1.8em;
	padding-bottom: 5em;
`;

export const FormBackDrop = styled(motion.div)`
	width: 170%;
	height: 550px;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 50%;
	transform: rotate(60deg);
	top: -290px;
	left: -70px;
	background: rgb(241, 196, 15);
	background: linear-gradient(
		58deg,
		rgba(241, 196, 15, 1) 20%,
		rgba(243, 172, 18, 1) 100%
	);
`;

export const FormHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const FormHeaderText = styled.h2`
	font-size: 45px;
	font-weight: 600;
	line-height: 1.24;
	color: #fff;
	z-index: 10;
	margin: 0;
`;

export const FormSmallText = styled.h5`
	color: #fff;
	font-weight: 500;
	font-size: 20px;
	z-index: 10;
	margin: 0;
	margin-top: 7px;
`;

export const FormInnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 1.8em;
`;

export const FormBackdropVariants = {
	expanded: {
		width: '125%',
		height: '1050px',
		borderRadius: '20%',
		transform: 'rotate(60deg)',
	},
	collapsed: {
		width: '100%',
		height: '500px',
		borderRadius: '50%',
		transform: 'rotate(50deg)',
	},
};

export const FormExpandingTransition = {
	type: 'spring',
	duration: 2.3,
	stiffness: 30,
};
