import { createSlice } from "@reduxjs/toolkit";
import { modalStateType } from "../Types/SliceTypes";

const initialState:modalStateType = {
    isModalVisible: false,
    isModalAdded: false,
}

export const showModalSlice = createSlice({
    name: "showModal",
    initialState,
    reducers: {
        showModal: (state) => {
            state.isModalAdded = true;
            (!state.isModalVisible) ? state.isModalVisible = true :
            state.isModalVisible = false;
            }
    }
});

export const {showModal} = showModalSlice.actions;
export default showModalSlice.reducer;  