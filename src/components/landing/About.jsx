import React from 'react'
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";


function About() {
    return (
        <Container maxWidth="lg" className='my-5 text-center'>
            <h1 style={{color:'#00aeef'}} className='fw-bolder'>About The CCES & SAP?</h1>
            <h5 className='mt-4'>Click below to get the detailed FAQ of the survey!</h5>
            <Button variant="contained" href='https://docs.google.com/document/d/1npsz975WKSjIf0RK8Kn4fjjUAPQvzgid/edit?usp=sharing&ouid=101782985184335958667&rtpof=true&sd=true'>Click here</Button>
        </Container>
    )
}

export default About