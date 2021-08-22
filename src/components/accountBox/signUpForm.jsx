import React, { useState, useContext } from 'react';

import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from './styledComponents/styledComponents';
import { AccountContext } from './accountContext';

export function SignUpForm() {
	const { switchToSignIn } = useContext(AccountContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fullName, setFullName] = useState('');

	const getEmail = e => {
		const validValues = /^\S{3,}@\S{2,}\.\D{2,}/;

		if (!validValues.test(String(e.target.value).toLowerCase())) {
			setEmail('');
		} else {
			setEmail(e.target.value);
		}
	};

	const getPassword = e => {
		const validValues = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
		if (!validValues.test(String(e.target.value))) {
			setPassword('');
		} else {
			setPassword(e.target.value);
		}
	};

	const getFullName = e => {
		const validValues = /^.{3,}$/;

		if (!validValues.test(String(e.target.value))) {
			setFullName('');
		} else {
			setFullName(e.target.value);
		}
	};

	const getSignUpButton = () => {
		localStorage.setItem('firstName', fullName);

		localStorage.setItem('email', email);
		localStorage.setItem('password', password);
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input
					onChange={e => getFullName(e)}
					type="text"
					placeholder="Full Name"
				/>
				<Input
					onChange={e => getEmail(e)}
					name="email"
					type="text"
					placeholder="Email"
				/>
				<Input
					onChange={e => getPassword(e)}
					type="password"
					placeholder="Password"
				/>
			</FormContainer>

			<SubmitButton
				type="text"
				onClick={() => {
					getSignUpButton();
				}}
			>
				SignUp
			</SubmitButton>

			<MutedLink>
				Already have an account?
				<BoldLink onClick={switchToSignIn}>SignIn</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
