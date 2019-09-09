import { createMuiTheme } from '@material-ui/core';

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
        MuiPaper: {
            root: {
                margin: '50px',
            },
        },
    },
});