import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

export interface BandCardProps {
    bandName: string;
    logo: string;
}

const BandCard = (props: BandCardProps) => {
    return (
        <Card style={{ margin: "10px", padding: "10px" }}>
            {props.logo ?
                <CardMedia style={{ height: "200px" }} image={props.logo} />
                : null}
            <CardContent>{props.bandName}</CardContent>
        </Card>)
}

export default BandCard;