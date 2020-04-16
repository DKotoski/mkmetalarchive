import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";
import * as BandService from '../services/band-service';

export interface BandStore {
    allBands: Models.Band[],
    displayBands: Models.Band[]
}

export const initialState: BandStore = {
    allBands: [],
    displayBands: []
}

export const slice = createSlice({
    name: "band-store",
    initialState: initialState,
    reducers: {
        setAllBands: (state: BandStore, action: PayloadAction<Models.Band[]>) => {
            state.allBands = action.payload;
        },
        setDisplayBands: (state: BandStore, action: PayloadAction<Models.Band[]>) => {
            state.displayBands = action.payload;
        }
    }
});

export const { setAllBands, setDisplayBands } = slice.actions;

// thunks

export const getAllBands = (): AppThunk => async (dispatch, store) => {
    var result = await BandService.getAllBands();
    dispatch(setDisplayBands(result));
    console.log(result);
}