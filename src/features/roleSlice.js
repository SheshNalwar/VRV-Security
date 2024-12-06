import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roles: [
        { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
        { id: 2, name: "User", permissions: ["Read"] },
    ]
}

const roleSlice = createSlice({
    name: "roles",
    initialState,
    reducers: {
        addRole: (state, action) => {
            state.push(action.payload);
        },
        updateRole: (state, action) => {
            const index = state.findIndex((role) => role.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteRole: (state, action) => {
            return state.filter((role) => role.id !== action.payload);
        },
    }
});