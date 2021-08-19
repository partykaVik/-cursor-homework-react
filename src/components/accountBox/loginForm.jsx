import React, { useContext, useEffect, useState } from 'react';
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from './styledComponents/styledComponents';
import { AccountContext } from './accountContext';

export function LoginForm() {
	const { switchToSignUp } = useContext(AccountContext);

	const [signedIn, setSignedIn] = useState();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formCheck, setFormCheck] = useState();
	const [emailCheck, setEmailCheck] = useState();
	const [passwordCheck, setPasswordCheck] = useState();

	useEffect(() => {
		if (emailCheck && passwordCheck) {
			setFormCheck(true);
		} else {
			setFormCheck(false);
		}
	}, [emailCheck, passwordCheck, formCheck]);

	useEffect(() => {
		const userEmail = localStorage.getItem('email');

		if (email !== userEmail) {
			setEmailCheck(false);
		} else {
			setEmailCheck(true);
		}

		const userPassword = localStorage.getItem('password');
		if (password !== userPassword) {
			setPasswordCheck(false);
		} else {
			setPasswordCheck(true);
		}
	}, [email, password]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		setPassword(localStorage.getItem('password'));
	}, []);

	if (signedIn) {
		localStorage.setItem('signedIn', signedIn);
	}

	const signInButtonHandler = () => {
		if (formCheck) {
			setSignedIn(true);
		} else {
			setEmail('');
			setPassword('');
		}
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
			</FormContainer>
			<MutedLink href="#">Forget your password?</MutedLink>
			<SubmitButton type="submit" onClick={() => signInButtonHandler()}>
				Sign In
			</SubmitButton>
			<MutedLink href="#">
				Don't have an account?{' '}
				<BoldLink onClick={switchToSignUp}>Sign Up</BoldLink>
			</MutedLink>{' '}
		</BoxContainer>
	);
}
