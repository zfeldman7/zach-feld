import React, { FC } from 'react'
import { useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { styles } from './App.theme'

export const ScrollTop: FC = () => {

    const classes = styles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 300,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div className={classes.scrollTop} onClick={handleClick} role="presentation">
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUp />
              </Fab>
        </div>
      </Zoom>
    );
  }