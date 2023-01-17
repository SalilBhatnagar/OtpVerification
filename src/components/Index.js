import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Ditebanner from '../components/images/ditebanner.jpg';
import { Link } from 'react-router-dom';

// card image
import Diteplan from '../components/images/alpha_dietplaner.svg';
import Healthyrecipes from '../components/images/healthy.svg';
import Smarttraker from '../components/images/smart_traker.svg';
import Start from '../components/images/star.svg';

// card story image
import card1 from '../components/images/card1.jpg';
import card2 from '../components/images/card2.jpg';
import card3 from '../components/images/card3.jpg';
import card4 from '../components/images/card4.jpg';

// footer
import Footer from '../components/Footer/Footerpage'


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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <>
            {/* <Link to="/VarificationForm">
               <a>
                <img src={Ditebanner} width="100%" />
               </a>
            </Link> */}

            <div className='div-dis-container-main'>
                 <div className='div-dis-container1'>
                      <h4 className='dis1'>banner</h4>
                      <h3 className='dis2'>need help to</h3>
                      <h1 className='dis3'>curate your lifestyle?</h1>
                 </div>
                 <p className='div-dis-container2'>
                   <h4 className='p-dis1'>
                      maintaining your health is <span style={{color:'#000',fontSize:'bold'}}>70% diet & 30% exercise</span>
                   </h4>
                   <br/>
                   <h4 className='p-dis2'>
                      Coustomise your health journey with kapiva for free!
                   </h4>
                 </p>
            </div>

            <br />
            <div className='div-headingcontainer'>
              <h3 className='dis4'>why Choose</h3>
              <h1 className='dis5'>A Customised diet plan?</h1>
              <br />
              <h3 className='dis6'>kapiva helps you personalise your diet without </h3>
              <h3 className='dis7'>compromissing on your tast/food habit.</h3>
            </div>
            <br/>
            <div className='div-card-container'>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                   <img src={Diteplan} width="20%" />
                    <span className='span-head-container1'>
                       <h3 className='dis8'>ai-based diet plan</h3>
                       <h4 className='dis9'>personalised with
                           the help of nutrition experts
                        </h4>
                    </span>
                </Grid>
                <Grid item xs={4}>
                  <img src={Healthyrecipes} width="20%" />
                   <span className='span-head-container2'>
                       <h3 className='dis10'>healthy recipes</h3>
                       <h4 className='dis11'>matching your food
                        preferences and health goals</h4>
                    </span>
                </Grid>
                <Grid item xs={4}>
                 <img src={Smarttraker} width="20%" />
                   <span className='span-head-container3'>
                       <h3 className='dis12'>smart trackers</h3>
                       <h4 className='dis13'>track your health goals daily</h4>
                    </span>
                </Grid>
              </Grid>
            </div>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <div className='div-sneak-peak1'>
                        <h1 className='h1-sneakpeak1'>sneak peak<span style={{color:'#333333',fontSize:'30px',padding:'0px 6px',textTransform: 'uppercase'}}>For You</span></h1>
                   </div>
                    <br/>
                      {/* <img src={Ditebanner} width="100%" /> */}
                      <div className='div-dis-container3'>
                          <h4 className='dis8'>screenshort</h4>
                      </div>
                </Grid>
            </Grid>    
            <br/><br/>
                <Grid item xs={12}>
                   <div className='div-sneak-peak2'>
                        <h1 className='h1-sneakpeak2'>Real People, Real Stories</h1>
                   </div>
                   <br/>
                      <div className='div-card-dis'>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <div className='div-card-rating-container'>
                                <Grid container>
                                       <Grid item xs={6}>
                                        <div className='div-card1'>
                                           <img className='img-card-img1' src={card1} width="50%" />
                                              <h5 className='dis14'>Divya G, Bangalore</h5>
                                                <img className='img-card-star1' src={Start} width="15%" />
                                                  <p className='p-card-contain1'>
                                                  Works On All Layers Of Skin From Within<br/>
                                                  Works On All Layers Of Skin From Within<br/>
                                                  Works On All Layers Of Skin From Within<br/>
                                                  </p>
                                          </div>
                                       </Grid>
                                       <Grid item xs={6}>
                                        <div className='div-card2'>
                                          <img className='img-card-img2' src={card1} width="50%" />
                                          <h5 className='dis15'>Divya G, Bangalore</h5>
                                                <img className='img-card-star2' src={Start} width="15%" />
                                            <p className='p-card-contain2'>
                                                Works On All Layers Of Skin From Within<br/>
                                                Works On All Layers Of Skin From Within<br/>
                                                Works On All Layers Of Skin From Within<br/>
                                            </p>
                                           </div>
                                       </Grid>
                                       <Grid item xs={6}>
                                        <div className='div-card3'>
                                           <img className='img-card-img3' src={card1} width="50%" />
                                           <h5 className='dis16'>Divya G, Bangalore</h5>
                                                <img className='img-card-star3' src={Start} width="15%" />
                                              <p className='p-card-contain3'>
                                              Works On All Layers Of Skin From Within<br/>
                                              Works On All Layers Of Skin From Within<br/>
                                              Works On All Layers Of Skin From Within<br/>
                                              </p>
                                          </div>
                                       </Grid>
                                       <Grid item xs={6}>
                                        <div className='div-card4'>
                                          <img className='img-card-img4' src={card1} width="50%" />
                                          <h5 className='dis17'>Divya G, Bangalore</h5>
                                                <img className='img-card-star4' src={Start} width="15%" />
                                            <p className='p-card-contain4'>
                                            Works On All Layers Of Skin From Within<br/>
                                            Works On All Layers Of Skin From Within<br/>
                                            Works On All Layers Of Skin From Within<br/>
                                            </p>
                                           </div>
                                       </Grid>
                                </Grid>
                                </div>
                            </Grid>
                            <br/>
                            {/* <Grid item xs={6}>
                              <figer>
                              <img src={card2} width="50%" />
                              <figcaption>
                              <spna>
                                Works On All Layers Of Skin From Within<br/>
                                Works On All Layers Of Skin From Within<br/>
                                Works On All Layers Of Skin From Within<br/>
                                </spna>
                              </figcaption>
                              </figer>
                            </Grid> */}
                            <br/>
                          </Grid>
                          <br/>
                          <Grid container spacing={2}>
                            {/* <Grid item xs={6}>
                            <figer>
                            <img src={card3} width="25%" />
                            <figcaption>
                            <spna>
                                Works On All Layers Of Skin From Within<br/>
                                Works On All Layers Of Skin From Within<br/>
                                Works On All Layers Of Skin From Within<br/>
                                </spna>
                            </figcaption>
                            </figer>
                            </Grid> */}
                            <br/>
                            {/* <Grid item xs={6}>
                            <figer>
                            <img src={card4} width="25%" />
                                <figcaption>
                                <spna>
                                Works On All Layers Of Skin From Within<br/>
                                Works On All Layers Of Skin From Within<br/>
                                Works On All Layers Of Skin From Within<br/>
                                </spna>
                                </figcaption>
                            </figer>
                            </Grid> */}
                          </Grid>
                      </div>
                  </Grid>
                  <br/><br/>
                  {/* <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid item xs={6}>
                          <div className='div-img'>
                            <img src={Smarttraker} width="10%" />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className="div-footer-contain">
                            Get A Coustomised Diet Plan
                          </div>
                        </Grid>
                      </Grid>
                    </Grid> */}
                      {/* <Grid item xs={6}>
                           <div className='div-img'>
                          <img src={Smarttraker} width="10%" />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="div-footer-contain">
                          Get A Coustomised Diet Plan
                        </div>
                      </Grid> */}
                     
               <br/> <br/>
               <div className='div-footer-container'>
                  <Link to="/VarificationForm">
                     <a>
                        <Footer/>
                     </a>
                  </Link>
               </div> 
               <br/>
            </>
        </Grid>
      </Grid>
    </Box>
  );
}