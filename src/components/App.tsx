import React from 'react';
import Title from './style/Title';
import Button from './style/Button';
import { SimpleContainer } from './style/Container';
import Chart from './style/Chart';

export class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SimpleContainer>
					<Chart
						data={[
							{ dayString: 11, number: 50 },
							{ dayString: 12, number: 100 },
							{ dayString: 13, number: 120 },
							{ dayString: 14, number: 200 }
						]}
						chartOption="price"
						currencyUnit="usd"
						symbol="eth"
					/>
					<Title title="We Got some Work to do" />
					<Button text="But here's a cool button" />
				</SimpleContainer>
			</React.Fragment>
		);
	}
}
