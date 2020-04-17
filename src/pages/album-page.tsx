import React from 'react';
import { TableHeader, TableGrid } from '../components/grid';
import { TableCell, Box, Typography, Button } from '@material-ui/core';
import { AppDispatch } from '../stores/app-thunk';
import { getAlbum } from '../stores/album-page-store';
import ApplicationState from '../stores/application-state';
import { connect } from 'react-redux';
import Player from '../components/player';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { onPlay } from '../stores/player-store';
import moment from 'moment';

export interface AlbumPageProps {
    match: {
        params: {
            bandName: string;
            albumName: string;
        }
    }

    album?: Models.Album;
    onSongPlay: (entry: Models.PlayerEntry) => void;
    init: (bandKey: string, albumKey: string) => void;
}

const AlbumPage = (props: AlbumPageProps) => {
    React.useEffect(() => {
        props.init(props.match.params.bandName, props.match.params.albumName);
    }, []);

    const titles: TableHeader[] = [
        {
            title: "name"
        },
        {
            title: "length"
        },
        {
            title: ""
        }
    ];

    const rowRenderer: (row: Models.Song) => JSX.Element = (row: Models.Song) => {

        return (<>
            <TableCell>{row.name}</TableCell>
            <TableCell>{moment.utc(row.lenght * 1000).format('mm:ss')}</TableCell>
            <TableCell><Button onClick={() => { props.onSongPlay({ name: row.name, url: row.playUrl }) }} ><PlayCircleOutlineIcon /></Button></TableCell>
        </>);
    }

    if (props.album) {
        console.log("props", props.album);
    }
    return (
        <>
            {
                props.album ?
                    <Box>
                        <Typography>{props.album!.name}</Typography>
                        <Player />
                        <TableGrid<Models.Song> headers={titles} rowRenderer={rowRenderer} data={props.album.songs} />
                    </Box>
                    : null
            }
        </>
    );
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    init: (bandKey: string, albumKey: string) => {
        dispatch(getAlbum(bandKey, albumKey));
    },
    onSongPlay: (entry: Models.PlayerEntry) =>{
        dispatch(onPlay(entry));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        album: state.albumPage.album
    };
}

const AlbumPageContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumPage);

export default AlbumPageContainer;