import React from 'react';
import { Card, CardHeader, Avatar, CardContent, TableRow, TableCell, Button, IconButton } from '@material-ui/core';
import { TableGrid, TableHeader } from './grid';
import moment from 'moment';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { generatePath } from 'react-router';
import { ROUTES } from '../lib/consts';
import { Link as RouterLink } from 'react-router-dom';
import { StylableRouterLink } from '../styled/styled-router-link';

export interface AlbumCardProps {
    bandId: string;
    albumId: string;
    name: string;
    year: number;
    cover: string;
    length: number;
    songs: Models.Song[];
    onSongPlay: (songs: Models.Song[], songToPlay: Models.Song) => void;
    onAlbumPlay: (songs: Models.Song[]) => void;
}

const AlbumCard = (props: AlbumCardProps) => {
    const titles: TableHeader[] = [
        {
            title: "TITLE"
        },
        {
            title: "LENGTH"
        },
        {
            title: ""
        }
    ];

    const rowRenderer: (row: Models.Song) => JSX.Element = (row: Models.Song) => {
        return (<TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{moment.utc(row.lenght * 1000).format('mm:ss')}</TableCell>
            <TableCell><IconButton onClick={() => { props.onSongPlay(props.songs, row) }} ><PlayCircleOutlineIcon /></IconButton></TableCell>
        </TableRow>);
    }

    const url = generatePath(ROUTES.ALBUM_PAGE, {
        bandName: props.bandId,
        albumName: props.albumId
    });

    return (
        <Card>
            <CardHeader
                component={StylableRouterLink}
                to={url}
                avatar={props.cover ? <Avatar variant="square" style={{ height: "120px", width: "120px" }} src={props.cover} /> : null}
                title={props.name}
                titleTypographyProps={{ variant: "h4" }}
                subheader={props.year}
                subheaderTypographyProps={{ variant: "h5" }}
                action={
                    <IconButton onClick={() => { props.onAlbumPlay(props.songs) }}>
                        <PlayCircleOutlineIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <TableGrid<Models.Song> headers={titles} rowRenderer={rowRenderer} data={props.songs} />
            </CardContent>
        </Card>);
}

export default AlbumCard;