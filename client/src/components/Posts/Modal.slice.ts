import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    modalShow: boolean;
}

const initialState: ModalState = {
    modalShow: false
}


const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        //show modal
        show: (state: ModalState) => {
            state.modalShow = true;
        },
        //hide modal   
        hide: (state: ModalState) => {
            state.modalShow = false;
        }

    }
});

export const { show, hide } = modal.actions;


export default modal.reducer;