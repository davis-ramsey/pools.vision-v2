import React, { ReactFragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

interface ContainerProps {
	children: ReactFragment;
}

export function SimpleContainer(props: ContainerProps) {
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
					{props.children}
				</Typography>
			</Container>
		</React.Fragment>
	);
}
