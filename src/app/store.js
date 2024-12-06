import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/userSlice"
import { rolesReducer } from "../features/roleSlice"

export const store = configureStore({
    reducer: {
        users: userReducer,
        roles: rolesReducer
    }
});