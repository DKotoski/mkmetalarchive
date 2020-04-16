import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";
import * as BandService from '../services/band-service';


export interface BandPageStore {
    band?: Models.Band;
    albums: Models.Album[];
}

export const initialState: BandPageStore = {
    albums: []
};

export const slice = createSlice({
    name: "band-page-store",
    initialState: initialState,
    reducers: {
        setBand: (state: BandPageStore, action: PayloadAction<Models.Band | undefined>) => {
            state.band = action.payload;
        },
        setAlbums: (state: BandPageStore, action: PayloadAction<Models.Album[]>)=>{
            state.albums = action.payload;
        }
    }
});

export const { setBand, setAlbums } = slice.actions;

// Thunk action;

export const getBand = (id: string): AppThunk => async (dispatch, store) => {
    var bandResult = await BandService.getBand(id);
    var albumsResult = await BandService.getMultipleFromLinkList<Models.Album>(bandResult.albums);
    dispatch(setBand(bandResult));
    dispatch(setAlbums(albumsResult));
}