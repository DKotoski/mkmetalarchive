import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";
import * as BandService from '../services/band-service';


export interface AlbumPageStore {
    album?: Models.Album;
}

export const initialState: AlbumPageStore = {
};

export const slice = createSlice({
    name: "album-page-store",
    initialState: initialState,
    reducers: {
        setAlbum: (state: AlbumPageStore, action: PayloadAction<Models.Album | undefined>) => {
            state.album = action.payload;
        }
    }
});

export const { setAlbum } = slice.actions;

// Thunk action;

export const getAlbum = (bandKey: string, albumKey: string): AppThunk => async (dispatch, store) => {
    var albumResult = await BandService.getAlbum(bandKey,albumKey);
    console.log(albumResult);
    dispatch(setAlbum(albumResult));
}