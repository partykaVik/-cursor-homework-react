import React, { useState } from 'react';
import { LoginForm } from './loginForm';

import { SignUpForm } from './signUpForm';
import { AccountContext } from './accountContext';
import {
	FormMainContainer,
	FormTopContainer,
	FormBackDrop,
	FormHeaderContainer,
	FormHeaderText,
	FormSmallText,
	FormInnerContainer,
	FormBackdropVariants,
	FormExpandingTransition,
} from './styledComponents/styledComponents';

export function AccountBox() {
	const [isExpanded, setExpanded] = useState(false);
	const [active, setActive] = useState('signIn');

	const playExpandingAnimation = () => {
		setExpanded(true);
		setTimeout(() => {
			setExpanded(false);
		}, FormExpandingTransition.duration * 1000 - 1500);
	};

	const switchToSignUp = () => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive('signUp');
		}, 400);
	};

	const switchToSignIn = () => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive('signIn');
		}, 400);
	};

	const contextValue = {
		switchToSignUp,
		switchToSignIn,
	};

	return (
		<AccountContext.Provider value={contextValue}>
			<FormMainContainer>
				<FormTopContainer>
					<FormBackDrop
						initial={false}
						animate={isExpanded ? 'expanded' : 'collapsed'}
						variants={FormBackdropVariants}
						transition={FormExpandingTransition}
					/>
					{active === 'signIn' && (
						<FormHeaderContainer>
							<FormHeaderText>Welcome</FormHeaderText>
							<FormHeaderText>Back</FormHeaderText>
							<FormSmallText>Please sign-in to continue!</FormSmallText>
						</FormHeaderContainer>
					)}
					{active === 'signUp' && (
						<FormHeaderContainer>
							<FormHeaderText>Create</FormHeaderText>
							<FormHeaderText>Account</FormHeaderText>
							<FormSmallText>Please sign-up to continue!</FormSmallText>
						</FormHeaderContainer>
					)}
				</FormTopContainer>
				<FormInnerContainer>
					{active === 'signIn' && <LoginForm />}
					{active === 'signUp' && <SignUpForm />}
				</FormInnerContainer>
			</FormMainContainer>
		</AccountContext.Provider>
	);
}
