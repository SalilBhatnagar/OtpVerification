import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Ditebanner from '../images/smart_chart.svg';
import Free from '../images/diet_free.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
         <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='div-img'>
                <img src={Ditebanner} width="10%"/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="div-footer">
                    <a>Get A Coustomised Diet Plan</a><img className='span-footer-free' src={Free} width="10%"/>
                    {/* <span className='span-footer-free'>Free</span> */}
                </div>
            </Grid>
         </Grid>
      </Grid>
    </Box>
  );
}