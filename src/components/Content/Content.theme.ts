import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const contentStyles = makeStyles ((theme:Theme) => createStyles ({
    root: {
       
    },
    hyperlink: {
       
    },
    icon: {
        height: '100%',
        fontSize: '100px',
    },
    button: {
        margin: theme.spacing(1),
    },
    card: {
        maxWidth: 200,
    },
    cardContent: {
        height: '280px',
    },
    skillGrid: {
        textAlign: "center",
        alignItems: "center",
        width: '100%',
        margin: '0',
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        maxWidth: 200,
        textAlign: "center",
    },
}))
