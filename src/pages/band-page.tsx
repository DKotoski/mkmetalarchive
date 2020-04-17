import React from 'react';
import { AppDispatch } from '../stores/app-thunk';
import { getBand } from '../stores/band-page-store';
import ApplicationState from '../stores/application-state';
import { connectAdvanced, connect } from 'react-redux';
import { Typography, Box, TableCell, Link, TableRow } from '@material-ui/core';
import { TableHeader, TableGrid } from '../components/grid';
import { generatePath } from 'react-router';
import {Link as RouterLink} from 'react-router-dom';
import { ROUTES } from '../lib/consts';
import moment from 'moment';

export interface BandPageProps {
    match: {
        params: {
            bandName: string;
        }
    }

    band?: Models.Band;
    albums: Models.Album[];
    init: (id: string) => void;
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
        
        return (<>
            <TableCell><Link component={RouterLink} to={url}>{row.name}</Link></TableCell>
            <TableCell>{row.year}</TableCell>
            <TableCell>{moment.utc(row.length * 1000).format('mm:ss')}</TableCell>
        </>);
    }

    return (
        <>
            {
                props.band ?
                    <Box>
                        <Typography>{props.band!.name}</Typography>
                        <TableGrid<Models.Album> headers={titles} rowRenderer={rowRenderer} data={props.albums}  />
                    </Box>
                    : null
            }
        </>
    );
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    init: (id: string) => {
        dispatch(getBand(id));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        band: state.bandPage.band,
        albums: state.bandPage.albums
    };
}

const BandPageContainer = connect(mapStateToProps, mapDispatchToProps)(BandPage);

export default BandPageContainer;