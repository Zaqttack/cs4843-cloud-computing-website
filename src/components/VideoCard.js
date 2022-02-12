import * as React from 'react';
import '../index.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player'

export default function ImgMediaCard() {
  return (
    <Card id="videocard" sx={{ maxWidth: 750 }}>
      <ReactPlayer
        className='react-player fixed-bottom'
        url= 'videos/sonic-commercial.mp4'
        width='100%'
        height='100%'
        controls = {true}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Think <i>Corn dog</i>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://portfolio.zaquariah.dev">Check me Out</a></Button>
      </CardActions>
    </Card>
  );
}