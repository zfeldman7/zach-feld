import React, { FC } from 'react'
import { useScrollTrigger, Slide } from '@material-ui/core'

export const HideOnScroll: FC = ({ children }) => {
   
    const trigger = useScrollTrigger({
        disableHysteresis: true,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }