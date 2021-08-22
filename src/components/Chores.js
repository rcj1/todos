import React from 'react';
import Chore from './Chore';

const Chores = ({choreList, onDone}) => {
	return (
		<div>
			{choreList.map(chore => 
				(<Chore date={chore.date}
				content={chore.task}
				onDone={onDone}/>))}
		</div>
	);
};

export default Chores;