import React from 'react';
import { Box, LinearProgress, Typography, Grid, Button } from '@material-ui/core';
import { AppDispatch } from '../stores/app-thunk';
import ApplicationState from '../stores/application-state';
import { connect } from 'react-redux';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import * as PlayerStore from '../stores/player-store';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export interface PlayerProps {
    currentPlay?: Models.PlayerEntry;
    playlist: Models.PlayerEntry[];
    // autoplay: boolean;
    isPlaying: boolean;
    // setAutoplay: (val: boolean) => void;
    setIsPlaying: (val: boolean) => void;
    onNext: () => void;
    onPrevious: () => void;
}

const _Player = (props: PlayerProps) => {
    return (
        <>
            {props.playlist.length != 0 ?
                <Box>
                    <Typography>{props.currentPlay ? props.currentPlay.name : ""}</Typography>
                    <AudioPlayer
                        autoPlay
                        src={props.currentPlay ? props.currentPlay.url : ""}
                        showSkipControls={props.playlist.length > 1}
                        onClickNext={props.onNext}
                        onClickPrevious={props.onPrevious}
                        onEnded={props.onNext}
                        onPlay={e => console.log("onPlay")}
                    />
                </Box> : null
            }
        </>
    )
}





const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setIsPlaying: (val: boolean) => {
        dispatch(PlayerStore.setIsPlaying(val))
    },
    onNext: () => {
        dispatch(PlayerStore.onPlayNext());
    },
    onPrevious: () => {
        dispatch(PlayerStore.onPlayPrevious());
    }
});

const mapStateToProps = (state: ApplicationState) => {
    const getCurrentPlay = () =>{
        if(state.player.playlist.length == 0){
            return undefined;
        }
        if(state.player.playlist.length == 1){
            return state.player.playlist[0];
        }
        return state.player.playlist[state.player.currentPlayingIndex];
    }

    var curPlay = getCurrentPlay();
    console.log("CurentPlay: ", curPlay);

    return {
        currentPlay: getCurrentPlay(),
        playlist: state.player.playlist,
        isPlaying: state.player.isPlaying
    };
}

const Player = connect(mapStateToProps, mapDispatchToProps)(_Player);

export default Player;