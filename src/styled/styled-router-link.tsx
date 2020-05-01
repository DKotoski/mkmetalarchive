import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StylableRouterLink = (props: any) => {
    return <RouterLink {...props}/>;
}

const StyledRouterLink =  styled(StylableRouterLink)`
    color: ${({ theme }) => theme.palette.common.white}

    :visited: ${({theme}) => theme.palette.common.white}
`
export { StylableRouterLink, StyledRouterLink };