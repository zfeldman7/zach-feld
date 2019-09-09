import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const footerStyles = makeStyles ((theme:Theme) => createStyles ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        //'#061826' deep dark blue
        maxWidth: 'none',
        marginTop: '50px',
        padding: '75px',
    },
    hyperlink: {
        color: theme.palette.primary.contrastText,
        '&:hover': {
            textDecoration: 'underline',
            backgroundColor: theme.palette.primary.dark,
        },
    },
    icon: {
        paddingRight: '7px',
    },

}))
