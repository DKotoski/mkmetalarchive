import React from 'react';
import { AppDispatch } from '../stores/app-thunk';
import { getBand } from '../stores/band-page-store';
import ApplicationState from '../stores/application-state';
import { connectAdvanced, connect } from 'react-redux';
import { Typography, Box, TableCell, Link, TableRow, Grid, Avatar } from '@material-ui/core';
import { TableHeader, TableGrid } from '../components/grid';
import { generatePath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../lib/consts';
import moment from 'moment';
import AlbumCard from '../components/album-card';
import { onInAlbumPlay } from '../stores/player-store';
import BandCard from '../components/band-card';

export interface BandPageProps {
    match: {
        params: {
            bandName: string;
        }
    }

    band?: Models.Band;
    albums: Models.Album[];
    init: (id: string) => void;
    onSongPlay: (songs: Models.Song[], songToPlay: Models.Song) => void;
    onAlbumPlay: (songs: Models.Song[]) => void;
}

const BandPage2 = (props: BandPageProps) => {
    React.useEffect(() => {
        props.init(props.match.params.bandName);
    }, []);

    return (
        <>{
            props.band ?
                <>
                    <Box alignContent="center">
                    <Avatar src={props.band.logo} style={{width:"400px", height:"400px", margin: "0 auto 0"}} />
                    <Typography variant="h3" align="center">{props.band.name}</Typography>
                    </Box>
                    {/* <BandCard logo={props.band.logo} bandName={props.band.name} /> */}
                    <Grid container>
                        {
                            props.albums.map(album => {
                                return (
                                    <Grid item xs={12} key={album.id}>
                                        <AlbumCard
                                            bandId={props.match.params.bandName}
                                            albumId={album.id}
                                            name={album.name}
                                            year={album.year}
                                            length={album.length}
                                            cover={album.cover}
                                            songs={album.songs}
                                            onAlbumPlay={props.onAlbumPlay}
                                            onSongPlay={props.onSongPlay} />
                                    </Grid>)
                            })
                        }

                    </Grid>
                </> : null}</>
    )
}

const BandPage = (props: BandPageProps) => {
    React.useEffect(() => {
        props.init(props.match.params.bandName);
    }, []);

    const titles: TableHeader[] = [
        {
            title: "name"
        },
        {
            title: "year"
        },
        {
            title: "length"
        }
    ];

    const rowRenderer: (row: Models.Album) => JSX.Element = (row: Models.Album) => {
        const url = generatePath(ROUTES.ALBUM_PAGE, {
            bandName: props.match.params.bandName,
            albumName: row.id
        });
        console.log(url);

        return (<TableRow key={row.id} >
            <TableCell><Link component={RouterLink} to={url}>{row.name}</Link></TableCell>
            <TableCell>{row.year}</TableCell>
            <TableCell>{moment.utc(row.length * 1000).format('mm:ss')}</TableCell>
        </TableRow>);
    }

    return (
        <>
            {
                props.band ?
                    <Box>
                        <Typography>{props.band!.name}</Typography>
                        <TableGrid<Models.Album> headers={titles} rowRenderer={rowRenderer} data={props.albums} />
                    </Box>
                    : null
            }
        </>
    );
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    init: (id: string) => {
        dispatch(getBand(id));
    },
    onSongPlay: (songs: Models.Song[], songToPlay: Models.Song) => {
        dispatch(onInAlbumPlay(songs, songToPlay));
    },
    onAlbumPlay: (songs: Models.Song[]) => {
        dispatch(onInAlbumPlay(songs, songs[0]));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        band: state.bandPage.band,
        albums: state.bandPage.albums
    };
}

const BandPageContainer = connect(mapStateToProps, mapDispatchToProps)(BandPage2);

export default BandPageContainer;