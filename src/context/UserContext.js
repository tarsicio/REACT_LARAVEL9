import { createContext } from 'react';

const user = {
	_token:     null,
    _name:      null,
    _mail:      null,
    _avatarUrl: null,
}
const UserContext = createContext(user);

export default UserContext;