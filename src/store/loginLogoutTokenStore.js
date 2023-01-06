import create from 'zustand';

export const userToken = create((set,get) => 
({
	_token:     null,   	
   	_user: 		{},    
    setToken: (value) => set(state => ({ _token: value })),
    setUser: (value) => set(state => ({ _user: value })),
    logoutUser: () =>{set({},true)}
}));