import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Paper, Container, Drawer, List, ListItem, makeStyles, Theme, Grid } from '@material-ui/core';

import styled from 'styled-components';

import { Widget } from './widget';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    paper: {
        backgroundColor: 'rgb(245, 54, 92)',
        paddingBottom: '4.5rem',
        borderRadius: 0
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}))

const Section = styled.div`
    padding-top: 3em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Dashboard = () => {

    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar className={classes.appBar} position="fixed" elevation={2}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>Dashboard</Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Paper className={classes.paper} >
                <Container component="main" >
                    <Section>
                        <Widget />
                        <Widget />
                        <Widget />
                    </Section>
                </Container>
            </Paper>
        </React.Fragment>
    )
}