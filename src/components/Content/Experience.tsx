import React, { FC } from 'react';

import { contentStyles } from './Content.theme';
import { Grid, Typography, Box, Divider } from '@material-ui/core';

export const Experience: FC = () => {
    const classes = contentStyles()
    const red = "#EE6352"
    const green = "#59CD90"
    const blue = "#3FA7D6"
    const yellow = "#FAC05E"
    const orange = "#F79D84"
    const grey = "#403F4C"
    const purple = "#CABAC8"

    return (
    <Grid>
        <Typography variant="h5" align="center">Experience</Typography>
        <br />
        <Box borderLeft="5px solid" borderColor={green} paddingLeft="15px">
            <Typography variant="body1">
                <b>Bentley University IPM Department, Waltham, MA</b> <br />
                <i>Research Assistant – Front-End Software Developer <br />
                May 2019 - Sept. 2019</i><br />
                ● Refactored page layouts utilizing Bootstrap 4 to be responsive across devices <br />
                ● Built regex-validated user management forms such as password change and recovery <br />
                ● Developed Django models for mapping Python objects to SQL tables <br />
                ● Created Django views for rendering web application <br />
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={yellow} paddingLeft="15px">
            <Typography variant="body1">
                <b>MLH Codestellation Hackathon, Waltham, MA</b> <br />
                <i>Lead Back-End Software Developer <br />
                Nov. 2018</i> <br />
                ● Managed team of developers to create a sustainability web application <br />
                ● Developed HTTP server and RESTful API to handle query requests to a MySQL database <br />
                ● Coordinated back-end to front-end integration using JSON <br />
                ● Awarded “Best Hack to Benefit Greater Waltham Community” <br />
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={orange} paddingLeft="15px">
            <Typography variant="body1">
                <b>Bentley University IT Department, Waltham, MA</b> <br />
                <i>Workday Change Management Analyst <br />
                Sept. 2018 - Sept. 2019 </i> <br />
                ● Student liaison for university-wide change management solutions <br />
                ● Beta tested product and provide feedback to ensure quality for new infrastructure <br />
                ● Reviewed Workday update notes to determine impact of new features and fixes <br />
                ● Provided first level support to staff and faculty for Workday issues and questions <br />
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={blue} paddingLeft="15px">
            <Typography variant="body1">
                <b>CIS Sandbox, Waltham, MA</b> <br />
                <i>Undergraduate Computer Information Systems Tutor <br />
                Dec. 2017 - Present</i> <br />
                ● Encourage critical thinking among students trying to solve complex CS problems <br />
                ● Trained 20+ graduates and undergraduates on tutoring policies and lab setup <br />
                ● Orchestrated computer configuration seminar for 800+ incoming students <br />
            </Typography>
        </Box>
        <br />
        

    </Grid>
    )
}