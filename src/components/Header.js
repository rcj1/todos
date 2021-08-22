import React from 'react';

const Header = ({name, number}) => {
	return (
		<p className='center'>{`${name}, you have ${number} todos.`}</p>
	);
};

export default Header;