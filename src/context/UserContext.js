import {createContext} from 'react';

const UserContext = createContext({
	name: null,
	token: null,
	avatar: null,
	mail: null,
});

export default UserContext;