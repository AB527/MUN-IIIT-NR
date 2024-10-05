import React from 'react';
import "./Testimonials.css";
import testData from "../../../../data/testimonials.js";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Testimonials = ({ data=[] }) => {
  return (
    <div className='test-cont'>
      <div className="test-head">
        <h3>TESTIMONIALS</h3>
      </div>
      <br />
      <br />
      <div className="testimonials">
        {data.map((test, index) => (
          <Card sx={{ maxWidth: 345, backgroundColor: '#511E03', padding: "12px", borderRadius: "1rem" }} key={index}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={test.name}
              subheader={test.desig}
              titleTypographyProps={{ color: '#FF862F', fontSize: "1rem" }}
              subheaderTypographyProps={{ color: '#FF862F' }}
            />
            <CardContent>
              <Typography variant="body2" color="white">
                {test.cont}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
