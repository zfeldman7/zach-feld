  
import React, { FC } from 'react';
import { Paper, Button, CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './App.theme';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header'
import './App.css'
import { ScrollTop } from './ScrollTop';
//import logo from './logo.svg';

export const App: FC = () => (
  <div id="main"> 
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Header/>
      <div id="back-to-top-anchor" style={{position: "absolute"}}/>
      <Container>
        <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis vero vitae quas a sequi modi facere sapiente nulla. Cum magni sunt magnam, temporibus culpa at distinctio dignissimos fugit repudiandae!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates veritatis totam fugiat eveniet cumque dolor magnam culpa, neque deleniti quibusdam possimus, pariatur aut corporis inventore, recusandae iure explicabo. Itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum totam dignissimos obcaecati quam, eius quos deserunt tenetur quidem et ea a, culpa voluptatem, maxime rem numquam aliquam cum!
           </Typography>
        <ScrollTop/>
      </Container>
      <Footer/>
    </ThemeProvider>
  </div>
)
