import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";
import * as BandService from '../services/band-service';


export interface PlayerStore {
    playlist: Models.PlayerEntry[];
    currentPlayingIndex: number;
    isPlaying: boolean;
}

export const initialState: PlayerStore = {
    playlist: [],
    isPlaying: false,
    currentPlayingIndex: 0
};

export const slice = createSlice({
    name: "player-store",
    initialState: initialState,
    reducers: {
        setPlaylist: (state: PlayerStore, action: PayloadAction<Models.PlayerEntry[]>) => {
            state.playlist = action.payload;
        },
        setIsPlaying: (state: PlayerStore, action: PayloadAction<boolean>)=>{
            state.isPlaying = action.payload;
        },
        setCurrentPlayingIndex: (state: PlayerStore, action: PayloadAction<number>)=>{
            state.currentPlayingIndex = action.payload;
        }
    }
});

export const { setPlaylist, setIsPlaying, setCurrentPlayingIndex} = slice.actions;

// Thunk action;

export const addToPlaylist = (entry: Models.PlayerEntry): AppThunk => async (dispatch, store) => {
    let allEntries = [...store().player.playlist];
    allEntries.push(entry);
    dispatch(setPlaylist(allEntries));
}

export const onInAlbumPlay= (songs: Models.Song[], toPlay: Models.Song): AppThunk => async(dispatch, store) =>{
    var songIndex = songs.indexOf(toPlay);
    var playlist = songs.slice(songIndex);
    dispatch(setPlaylist(playlist.map(x=> {return {name: x.name, url: x.playUrl}})));
    dispatch(setCurrentPlayingIndex(0));
};

export const onPlayNext = (): AppThunk => async(dispatch, store) => {
    var newIndex = store().player.currentPlayingIndex +1;
    if(store().player.playlist.length > newIndex){
        console.log(newIndex);
        dispatch(setCurrentPlayingIndex(newIndex));
    }
}

export const onPlayPrevious = (): AppThunk => async(dispatch, store) => {
    var newIndex = store().player.currentPlayingIndex - 1;
    if(newIndex >= 0){
        dispatch(setCurrentPlayingIndex(newIndex));
    }
}