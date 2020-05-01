import React from 'react';
import { AppDispatch } from '../stores/app-thunk';
import { getAllBands } from '../stores/band-list-store';
import { connect } from 'react-redux';
import ApplicationState from '../stores/application-state';
import { TableGrid, TableHeader } from '../components/grid';
import { TableRow, TableCell, Link, Grid } from '@material-ui/core';
import { generatePath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../lib/consts';
import BandCard from '../components/band-card';

interface MainPageProps {
    getAllBands: () => void;
    gridData: Models.Band[];
}

const MainPage2 = (props: MainPageProps) => {
    React.useEffect(() => {
        props.getAllBands();
    }, []);
    return <Grid container>
        {
            props.gridData.map(band => {
                const url = generatePath(ROUTES.BAND_PAGE, {
                    bandName: band.id
                });

                return <Grid key={band.id} item md={3} xs={6}><Link component={RouterLink} to={url}><BandCard bandName={band.name} logo={band.logo} /></Link></Grid>;
            })}
    </Grid>;
}

const MainPage = (props: MainPageProps) => {
    const titles: TableHeader[] = [
        {
            title: "name"
        },
        {
            title: "genre"
        },
        {
            title: "location"
        },
        {
            title: "Status"
        }
    ];

    const rowRenderer: (row: Models.Band) => JSX.Element = (row: Models.Band) => {
        const url = generatePath(ROUTES.BAND_PAGE, {
            bandName: row.id
        });
        console.log(url);

        return (<TableRow key={row.id}>
            <TableCell><Link component={RouterLink} to={url}>{row.name}</Link></TableCell>
            <TableCell>{row.genre}</TableCell>
            <TableCell>{row.location}</TableCell>
            <TableCell>{row.status}</TableCell>
        </TableRow>);
    }

    React.useEffect(() => {
        props.getAllBands();
    }, []);
    return <TableGrid<Models.Band> headers={titles} rowRenderer={rowRenderer} data={props.gridData} />;
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    getAllBands: () => {
        dispatch(getAllBands());
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        gridData: state.bandList.displayBands
    };
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage2);

export default MainPageContainer;