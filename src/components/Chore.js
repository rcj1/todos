import React from 'react';

const Chore = ({date, content, onDone}) => {

	const color = (date) => {
		var convertedTime = new Date(date);
		convertedTime.setDate(convertedTime.getDate() + 1);
		const formattedTime = convertedTime.toString().split(" ").slice(1, 4).join(" ");
		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		var nextWeek = new Date();
		nextWeek.setDate(nextWeek.getDate() + 7);
		if (convertedTime < tomorrow) {
			return ['bg-red', formattedTime];
		} else if (convertedTime < nextWeek) {
			return ['bg-yellow', formattedTime];
		} else {
			return ['bg-green', formattedTime];
		}
	};

	return (
		<div className='mv3 w-70-ns w-90 center'>
			<p className={`w-50-ns w-60 ${color(date)[0]} pv3 b`}>{`${content} by ${color(date)[1]}`}</p>
			<button className='w-10-ns w-30 ml3 mv3 grow bg-light-blue'
			onClick={() => onDone(date, content)}
			>Done ✅</button>
		</div>
	);
};

export default Chore;