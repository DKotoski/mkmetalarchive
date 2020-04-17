import React from 'react';
import { Box, LinearProgress, Typography, Grid, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TableCell, TableRow, Paper } from '@material-ui/core';
import { AppDispatch } from '../stores/app-thunk';
import ApplicationState from '../stores/application-state';
import { connect } from 'react-redux';
import * as PlayerStore from '../stores/player-store';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TableGrid } from './grid';
import moment from 'moment';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


export interface PlayerProps {
    currentPlay?: Models.Song;
    playlist: Models.Song[];
    playingIndex: number;
    // autoplay: boolean;
    isPlaying: boolean;
    // setAutoplay: (val: boolean) => void;
    setIsPlaying: (val: boolean) => void;
    onNext: () => void;
    onPrevious: () => void;
    onSongPlaylistPlay: (song: Models.Song) => void;
}

const _Player = (props: PlayerProps) => {
    const songRowRenderer = (row: Models.Song) => {
        return (<TableRow selected={props.playlist.indexOf(row) == props.playingIndex}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{moment.utc(row.lenght * 1000).format('mm:ss')}</TableCell>
            <TableCell><Button onClick={() => { props.onSongPlaylistPlay(row) }} ><PlayCircleOutlineIcon /></Button></TableCell>
        </TableRow>);
    }
    return (
        <>
            {props.playlist.length != 0 ?
                <Paper style={{ position: 'fixed', bottom: 0, left: 0, width: "100%",  maxHeight: "100%", borderTop: "1px black" }}>
                    <Typography>{props.currentPlay ? props.currentPlay.name : ""}</Typography>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={props.playlist.length <= 1 ? null : <ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <AudioPlayer
                                autoPlay
                                src={props.currentPlay ? props.currentPlay.playUrl : ""}
                                showSkipControls={props.playlist.length > 1}
                                onClickNext={props.onNext}
                                onClickPrevious={props.onPrevious}
                                onEnded={props.onNext}
                                onPlay={e => console.log("onPlay")}
                            />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ maxHeight: "400px" }}>
                            <Box style={{ overflow: "auto", width: "100%", maxHeight: "inherit" }}>
                                <TableGrid<Models.Song> data={props.playlist} headers={[]} rowRenderer={songRowRenderer} />
                            </Box>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Paper> : null
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
    },
    onSongPlaylistPlay: (song: Models.Song) => {
        dispatch(PlayerStore.onSongPlaylistPlay(song));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    const getCurrentPlay = () => {
        if (state.player.playlist.length == 0) {
            return undefined;
        }
        if (state.player.playlist.length == 1) {
            return state.player.playlist[0];
        }
        return state.player.playlist[state.player.currentPlayingIndex];
    }

    var curPlay = getCurrentPlay();
    console.log("CurentPlay: ", curPlay);

    return {
        currentPlay: getCurrentPlay(),
        playlist: state.player.playlist,
        isPlaying: state.player.isPlaying,
        playingIndex: state.player.currentPlayingIndex
    };
}

const Player = connect(mapStateToProps, mapDispatchToProps)(_Player);

export default Player;