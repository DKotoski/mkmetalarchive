import React from 'react';
import { TableHeader, TableGrid } from '../components/grid';
import { generatePath } from 'react-router';
import { ROUTES } from '../lib/consts';
import { TableRow, TableCell, Link, Box, Typography } from '@material-ui/core';
import { AppDispatch } from '../stores/app-thunk';
import { getAlbum } from '../stores/album-page-store';
import ApplicationState from '../stores/application-state';
import { connect } from 'react-redux';

export interface AlbumPageProps {
    match: {
        params: {
            bandName: string;
            albumName: string;
        }
    }

    album?: Models.Album;
    init: (bandKey: string, albumKey: string) => void;
}

const AlbumPage = (props: AlbumPageProps) =>{
    React.useEffect(() => {
        props.init(props.match.params.bandName, props.match.params.albumName);
    }, []);

    const titles: TableHeader[] = [
        {
            title: "name"
        },
        {
            title: "length"
        }
    ];

    const rowRenderer: (row: Models.Song) => JSX.Element = (row: Models.Song) => {
        
        return (<TableRow>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.lenght}</TableCell>
        </TableRow>);
    }

    if(props.album){
        console.log("props" , props.album);
    }
    return (
        <>
            {
                props.album ?
                    <Box>
                        <Typography>{props.album!.name}</Typography>
                        <TableGrid<Models.Song> headers={titles} rowRenderer={rowRenderer} data={props.album.songs}  />
                    </Box>
                    : null
            }
        </>
    );
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    init: (bandKey: string, albumKey: string) => {
        dispatch(getAlbum(bandKey, albumKey));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        album: state.albumPage.album
    };
}

const AlbumPageContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumPage);

export default AlbumPageContainer;