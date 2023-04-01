// error page
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error() {
    
    const handleClick = () => {
        history.push('/');
      };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              Sorry, this page was lost in transit..
            </Typography>
            <Button onClick={'handleClick'} variant="contained">Back Home</Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://grownuptravelguide.com/wp-content/uploads/2020/04/AdobeStock_323158365.jpeg"
              alt="Luggage not found."
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// const React = require('react');

// const error404 = () => {
//     return (
//         <def>
//             <main>
//                 <h1>404: PAGE NOT FOUND</h1>
//                 <img href="https://grownuptravelguide.com/wp-content/uploads/2020/04/AdobeStock_323158365.jpeg" alt="Luggage not found"></img>
//                 <p>Sorry, this page got lost in transit!</p>
//             </main>
//         </def>
//     )
// }

// module.export = error404