import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    ]
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const index = state.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },

        toggleStatus: (state, action) => {
            const index = state.findIndex((user) => user.id === action.payload);
            if (index !== -1) {
                state[index].status = state[index].status === "Active" ? "Inactive" : "Active";
            }
        },
    }
});

export const { addUser, updateUser, deleteUser, toggleStatus } = userSlice.actions;
export default userSlice.reducer;