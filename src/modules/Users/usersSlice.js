import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersInfo",
    initialState: {},
    reducers: {
        updateUsers: (state, actions) => {
            const { userInfo } = actions.payload;
            if(userInfo) {
                return userInfo;
            }
        }
    }
});


export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer