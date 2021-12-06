import { Grid,Link,Typography } from '@material-ui/core';

import { withRouter } from "react-router";
import { useFooterStyles } from "../styles/overRides";
import EXPERT from '../images/expert.jpg';
import ST from '../images/st.jpg';
import TR from '../images/tr.png';
import DR from '../images/dressage.jpg';
import NY from '../images/nyland.jpg';

import CV from '../images/camping-veenmeer.jpg';
import CO from '../images/coop.jpg';
import PN from '../images/pensionstal.jpg';
//import EQ from '../images/equine.png';
import DI from '../images/dit-logo.jpg';
import Impex from '../images/Impex.png';

import LOGO1 from '../images/1-drenthe.jpeg';
import LOGO2 from '../images/2-koolen.jpeg';
import LOGO3 from '../images/3-reus.jpeg';
import LOGO4 from '../images/4-om.jpeg';


const Footer = (props) => {
  const classes = useFooterStyles()
  
  const handleRoute = (route) => {
    props.history.push(route);
  }

return(
    <div className={ classes.footerWrapper } >
       <Grid  alignItems="center" justifyContent="space-around" container spacing={6}>
          <Grid item>
              <div className={classes.imgHolder} >
                  <a href="https://www.stal-hulzebos.nl/" target="_blank"> <img alt="sponsor" className={classes.img} src={ST} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                <a href="https://www.expert.nl/" target="_blank"><img alt="sponsor" className={classes.img} src={EXPERT} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                <a href="https://www.stalkoolen.nl/" target="_blank"><img alt="sponsor" className={classes.img} src={TR} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                <a href="https://impextrailers.nl/" target="_blank"><img alt="sponsor" className={classes.img} src={Impex} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                <a href="https://www.facebook.com/Tynaarlo.Dressage" target="_blank"><img alt="sponsor" className={classes.img} src={DR} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
                <a href="https://www.campingveenmeer.nl/" target="_blank"><img alt="sponsor" className={classes.img} src={CV} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="https://www.openingstijden.nl/Coop/Vries/Oude-Asserstraat-2/" target="_blank"><img alt="sponsor" className={classes.img} src={CO} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="#"><img alt="sponsor" className={classes.img} src={PN} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="#" > <img alt="sponsor" className={classes.img} src={NY} /></a>
              </div>
          </Grid>

          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="https://www.drenthetours.nl/" target="_blank">  <img alt="sponsor" className={classes.img} src={LOGO1} /></a>
              </div>
          </Grid>

          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="http://www.koolenberging.nl/" target="_blank"> <img alt="sponsor" className={classes.img} src={LOGO2} /></a>
              </div>
          </Grid>
          
          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="https://www.reusadvocatuur.nl/" target="_blank"><img alt="sponsor" className={classes.img} src={LOGO3} /></a>
              </div>
          </Grid>

          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="https://huzen.com/" target="_blank">  <img alt="sponsor" className={classes.img} src={LOGO4} /></a>
              </div>
          </Grid>
          <Grid  item>
              <div className={classes.imgHolder} >
              <a href="https://ditverkoopik.nl/" target="_blank">  <img alt="sponsor" className={classes.img} src={DI} /></a>
              </div>
          </Grid>
       </Grid>
       <Grid alignItems="center" justifyContent="center" container spacing={3}>
           
          
       </Grid>
       <Grid alignItems="center" justifyContent="center" container spacing={3} style={{marginTop:'2em'}}>
            <Typography gutterBottom variant="body1">
                Ontwerp en ontwikkeling bij     <a href="#"><img src="/nyland-thumb.jpg" alt="nyland thumb" style={{marginLeft:"2px",position:"absolute"}} /></a>
            </Typography>    
       </Grid>
    </div>
)} 

export default withRouter(Footer);