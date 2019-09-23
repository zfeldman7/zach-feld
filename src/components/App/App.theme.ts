import { createMuiTheme, makeStyles } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4059AD'
        },
        secondary: {
            main: '#6B9AC4'
        },
        error: {
            main: '#EE6352'
        },
        background: {
            default: '#C8C8C8',
            paper: '#EFF2F1',
        }
    },
    overrides: {
        MuiDivider: {
            root: {
                backgroundColor: '#FFFFFF',
                width: '100%',
            },
            vertical: {
                height: '200px',
            },

        },
    },
});

export const styles = makeStyles((theme) => ({
    scrollTop: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
    },
}))