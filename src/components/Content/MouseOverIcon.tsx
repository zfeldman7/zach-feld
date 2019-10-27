import React, { FC } from 'react'
import { contentStyles } from './Content.theme'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { Popover, Typography } from '@material-ui/core'


type Props = {
    popoverText: string
    icon: React.ComponentType<SvgIconProps>
    id: string
}
export const MouseOverIcon: FC<Props> = ({popoverText, icon: Icon, id}) => {
    const classes = contentStyles()
    
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? id : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Icon className={classes.icon} />
            </Typography>
            <Popover
                id={id}
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{popoverText}</Typography>
            </Popover>
        </div>
    )
}
