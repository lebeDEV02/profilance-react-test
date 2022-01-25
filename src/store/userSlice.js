import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: { user: { login: '', password: '' } },
	reducers: {
		login(state, action) {
			state.user.login = action.payload.login;
			state.user.password = action.payload.password;
		},
		logout(state) {
			state.user.login = '';
			state.user.password = '';
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
