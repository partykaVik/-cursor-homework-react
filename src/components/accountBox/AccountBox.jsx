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
	const [active, setActive] = useState('signin');

	const playExpandingAnimation = () => {
		setExpanded(true);
		setTimeout(() => {
			setExpanded(false);
		}, FormExpandingTransition.duration * 1000 - 1500);
	};

	const switchToSignUp = () => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive('signup');
		}, 400);
	};

	const switchToSignIn = () => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive('signin');
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
					{active === 'signin' && (
						<FormHeaderContainer>
							<FormHeaderText>Welcome</FormHeaderText>
							<FormHeaderText>Back</FormHeaderText>
							<FormSmallText>Please sign-in to continue!</FormSmallText>
						</FormHeaderContainer>
					)}
					{active === 'signup' && (
						<FormHeaderContainer>
							<FormHeaderText>Create</FormHeaderText>
							<FormHeaderText>Account</FormHeaderText>
							<FormSmallText>Please sign-up to continue!</FormSmallText>
						</FormHeaderContainer>
					)}
				</FormTopContainer>
				<FormInnerContainer>
					{active === 'signin' && <LoginForm />}
					{active === 'signup' && <SignUpForm />}
				</FormInnerContainer>
			</FormMainContainer>
		</AccountContext.Provider>
	);
}
