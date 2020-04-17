import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";
import * as BandService from '../services/band-service';


export interface PlayerStore {
    playlist: Models.PlayerEntry[];
    currentPlaying?: Models.PlayerEntry;
    isPlaying: boolean;
}

export const initialState: PlayerStore = {
    playlist: [],
    isPlaying: false
};

export const slice = createSlice({
    name: "player-store",
    initialState: initialState,
    reducers: {
        setPlaylist: (state: PlayerStore, action: PayloadAction<Models.PlayerEntry[]>) => {
            state.playlist = action.payload;
        },
        setCurrentPlaying: (state: PlayerStore, action: PayloadAction<Models.PlayerEntry>)=>{
            state.currentPlaying = action.payload;
        },
        setIsPlaying: (state: PlayerStore, action: PayloadAction<boolean>)=>{
            state.isPlaying = action.payload;
        }
    }
});

export const { setPlaylist, setCurrentPlaying, setIsPlaying } = slice.actions;

// Thunk action;

export const addToPlaylist = (entry: Models.PlayerEntry): AppThunk => async (dispatch, store) => {
    let allEntries = [...store().player.playlist];
    allEntries.push(entry);
    dispatch(setPlaylist(allEntries));
    if(allEntries.length == 1){
        dispatch(setCurrentPlaying(entry));
    }
}

export const onPlay = (entry: Models.PlayerEntry): AppThunk => async(dispatch, store) => {
    dispatch(setPlaylist([entry]));
    dispatch(setCurrentPlaying(entry));
}