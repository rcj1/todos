import React from 'react';
import {Link} from "react-router-dom";

const Signout = ({onSignout}) => {
	return (
		<Link className='pr3 link dim underline pointer f3' 
			 style={{display: 'flex', justifyContent: 'flex-end'}}
			 onClick={onSignout}
			 to="/">
			 Sign Out </Link>

	);
};

export default Signout;