import React, { FC } from 'react';
import { Grid, Typography, Box, Link } from '@material-ui/core';


export const Coursework: FC = () => {
    const green = "#59CD90"
    const blue = "#3FA7D6"
    const yellow = "#FAC05E"
    const orange = "#F79D84"
    const purple = "#CABAC8"

    return (
        <Grid>
        <Typography variant="h5" align="center">Coursework</Typography>
        <br />
        <Box borderLeft="5px solid" borderColor={green} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 150 - Intro to Data and Information Management</b> <br />
                <i>Fall 2018</i><br />
                In CS 150 I learned about information management and relational databases. 
                I used Microsoft Access to modify many example databases, touching everything from cardinality to form design. 
                At the end of the course I designed and tested a simple database for a vinyl store.
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={yellow} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 180 - Programming Fundamentals</b> <br />
                <i>Fall 2018</i><br />
                In my programming fundementals class I took a step back from what I thought I knew about programming in a high-level language, 
                and I learned best practices for programming in the Java language. As I honed my syntax skills, I was driven to deliver the best 
                possible solutions for my problem sets. You can find my java assignments for this class <Link href="https://github.com/zfeldman7/java-assignments">here!</Link>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={orange} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 280 - Object-Oriented Application Development</b> <br />
                <i>Spring 2019</i><br />
                After completing my programming basics, I moved onto more complex principles in the Java language. 
                I gained deeper knowledge of the four object oriented principles. Using these principles, 
                I was able to create objects to manipulate databases, 
                read and write text and binary files, and create graphics using the Swing library. 
                You can find the assignments from this class <Link href="https://github.com/zfeldman7/java-assignments">here!</Link>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={blue} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 240 - Business Processing and Communications Infrastructure</b> <br />
                <i>Spring 2018</i><br />
                The title of this course is abusurdly superfluous. In CS 240 I studied how computers work on a lower level. 
                Some topics of discussion were: computing structure, computer architecture, and networking protocols. 
                Throughout the semester I gained a better understanding for how computers process information and how the 
                internet relays that information from point A to point B.
            </Typography>
        </Box>
        <Box width="50%"><br /> <hr /> <br /></Box>
        <Box borderLeft="5px solid" borderColor={purple} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 401 - Directed Study: Data Structures and Algorithms</b> <br />
                <i>Fall 2019</i><br />
                Since my school does not offer a traditional algorithms class, I took it upon myself to find a professor to teach me. 
                I created the curriculum based around the MIT Introduction to Algorithms course. 
                I am currently studying the structure and performance of various data structures and algorithms. 
                I store all of my work for this class in a GitHub Repository <Link href="https://github.com/zfeldman7/data-structures-algorithms">here!</Link>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={purple} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 380 - Multi-Tiered Application Development</b> <br />
                <i>Fall 2019</i><br />
                I was excited for my web application class as soon as I finished my programming fundementals. 
                This class uses PHP, apache, and mySQL to teach web app basics. Moving from a strict language 
                like Java to the loose PHP has been a fun change of pace, and I have enjoyed the learning process. 
                I have learned about ways to protect against malicious users trying to find weak points in a given web application, 
                and I have been able to practice my design skills too. 
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={purple} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 350 - Database Management Systems</b> <br />
                <i>Fall 2019</i><br />
                My database management class has helped me take a break from the code and focus on important design principles 
                when building an application. At first I struggled with overthinking the entity relationship diagrams 
                I was tasked to build, but as I distanced myself from previous knowledge I was able to design at a higher level 
                of abstraction. In this class I also use the Oracle Developer DBMS to execute SQL queries on both self designed 
                and professor supplied databases.
            </Typography>
        </Box>
        <br />

    </Grid>
    )
}