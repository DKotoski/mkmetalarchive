import React from 'react';
import { AppDispatch } from '../stores/app-thunk';
import { getAllBands } from '../stores/band-list-store';
import { connect } from 'react-redux';
import ApplicationState from '../stores/application-state';
import { TableGrid, TableHeader } from '../components/grid';
import { TableRow, TableCell, Link } from '@material-ui/core';
import { generatePath} from 'react-router';
import {Link as RouterLink} from 'react-router-dom';
import { ROUTES } from '../lib/consts';

interface MainPageProps {
    getAllBands: () => void;
    gridData: Models.Band[];
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
        
        return (<TableRow>
            <TableCell><Link component={RouterLink} to={url}>{row.name}</Link></TableCell>
            <TableCell>{row.genre}</TableCell>
            <TableCell>{row.location}</TableCell>
            <TableCell>{row.status}</TableCell>
        </TableRow>);
    }

    React.useEffect(() => {
        props.getAllBands();
    }, []);
    return <TableGrid<Models.Band> headers={titles} rowRenderer={rowRenderer} data={props.gridData}  />;
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

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;