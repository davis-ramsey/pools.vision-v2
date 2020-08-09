import React, { useState, useEffect } from 'react';
import { Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, AreaChart } from 'recharts';

const Chart = ({ data, chartOption, currencyUnit, symbol }) => {
	const [ chartData, setChartData ] = useState([]);
	useEffect(
		() => {
			setChartData([]);
			setChartData(data);
		},
		[ data, chartOption, currencyUnit ]
	);
	return (
		<ResponsiveContainer width={`50%`} height={`30%`}>
			<AreaChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
				<Area type="monotone" dataKey="number" stroke="#8884d8" />
				<CartesianGrid stroke="transparent" />
				<XAxis dataKey="dayString" />
				<YAxis dataKey="number" />
				<Tooltip />
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default Chart;
