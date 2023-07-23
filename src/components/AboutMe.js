import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import './AboutMe.css';
import lili from '../assets/lili.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const AboutMe = () => {
    return (
        <Grid container spacing={2} className="aboutme-container">
            <Grid item xs={8} className='about-text'>
                Hi! I'm Lili, a second-year computer science student at MIT. I'm interested in human-computer interaction, accessible machine learning, and AI ethics + policy. I also love to teach!
                <br/><br/>
                Most recently, I worked as a software engineer intern at <a href="https://www.govividly.com/" rel="noreferrer" target="_blank">Vividly (formerly Cresicor)</a> and conducted CS + neuroscience research at MIT with the <a href="https://www.metaconscious.org/" rel="noreferrer" target="_blank">MetaConscious Group</a>.
                <br/><br/>
                On campus, I co-direct <a href="https://hackmit.org" rel="noreferrer" target="_blank">HackMIT</a> and play a <i>lot</i> of ultimate frisbee.
                <br/><br/>
                Feel free to reach out: lmwilson [at] mit [dot] edu
                <br/><br/>
                <br/><br/>
                Check out some of my projects <a href="/projects" rel="noreferrer">here</a>!
            </Grid>
            <Grid item xs={3.5}>
                <Img src={lili}/>
            </Grid>
            <Grid item xs={0.5} className="platforms">
                <a href="https://github.com/liliwilson" rel="noreferrer" target="_blank">
                    <GitHubIcon/>
                </a>
                <a href="https://linkedin.com/in/lili-m-wilson" rel="noreferrer" target="_blank">
                    <LinkedInIcon/>
                </a>
            </Grid>
        </Grid>
    );
}

export default AboutMe;