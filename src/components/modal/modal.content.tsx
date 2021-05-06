import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import React from 'react';
import { LocationState } from 'history';

type Props = {
	label: string
	path: string
	background: LocationState
}

const ModalContent = ({ label, path, background }: Props) => (
	<Link to={{
		pathname: path,
		state: {
			background: background,
			modal: true
		}
	}}>
		<Button label={label} />
	</Link>
);

export default ModalContent;
