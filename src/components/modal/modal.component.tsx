import React from 'react';
import { Route, RouteComponentProps, Switch, useHistory } from 'react-router-dom';
import { Close, ModalContainer, ModalOverlay } from './modal.styles';
import ModalContent from './modal.content';
import './modal.styles';
import { LocationState, Path } from 'history';

type Props = {
	background: LocationState
}

const ModalComponent = ({ background }: Props) => {
	const history = useHistory();

	const close = (e: { stopPropagation: () => void; }) => {
		e.stopPropagation();
		history.push(background as Path);
	};

	return (
		<>
			<ModalOverlay onClick={close} />
			<ModalContainer>
				<Close onClick={close}>X</Close>
				<h1>Modal</h1>
				<Switch>
					<Route path={'/modal/next'} children={<ModalContent background={background} label={'Prev'} path={'/modal'} />} />
					<Route path={'/modal'} children={<ModalContent background={background} label={'Next'} path={'/modal/next'}  />} />
				</Switch>
			</ModalContainer>
		</>
	)
}

export default ModalComponent;
