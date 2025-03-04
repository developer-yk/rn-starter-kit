import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: null,
    authToken: null,
    data: {
        id: null,
        name: null,
        email: null,
        password: null,
        contactno: null,
        role: null,
        fcm_token: null,
        status: null,
        created_at: null,
        updated_at: null,
        image: null,
        address: null
    },

}

export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateAuthToken: (state, action) => {
            state.authToken = action.payload.authToken;
        },
        updateRole: (state, action) => {
            state.role = action.payload.role;
        },
        updateData: (state, action) => {
            state.data = action.payload.data;
        },
    }
});

export const updateAuthToken = User.actions.updateAuthToken;
export const updateRole = User.actions.updateRole;
export const updateData = User.actions.updateData;
export default User.reducer;