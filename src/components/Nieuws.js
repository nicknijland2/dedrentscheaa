import Header from "./common/Header";
import { useHomeStyles, useGenericWrapper, useAboutStyles, useTableStyles, useContactStyles } from '../styles/overRides'
import {Button ,Paper, Grid, Typography, Avatar,IconButton,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import voor from '../images/fotojasjevoor.PNG'
import achter from '../images/fotojasjeachter.jpg';
import polo from '../images/fotopolo.jpg';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Nieuws = () => {
    console.log("NIEUWS lOADED")
    const generics = useGenericWrapper()
    const tableClasses = useTableStyles()
    const classes = useAboutStyles()
    const contactClasses = useContactStyles();
    return (
        <div className={generics.root}>
        <Grid container>
            <Grid item xs={12}>
                <Header title={`Clubkleding`} />
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={2} square >
                  <div className={contactClasses.grid} >
                    <Grid alignItems="flex-start" container>
                        <Grid item lg={3} md={12} sm={12} xs={12} >
                            <div className={contactClasses.imageHolder}>
                               <img  alt="voorkant van het jasje" className={contactClasses.image} src={voor} />
                            </div>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <div className={contactClasses.contact}>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Tijdens de ALV hebben we onze nieuwe clubkleding gelanceerd! Het betreft een mooi zwart jasje en een fijne zwarte polo. We hebben een heren en een dameslijn beschikbaar.</Typography>
                                </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Een behoorlijk aantal leden heeft de kleding inmiddels in huis, en de complimenten van buitenaf stromen binnen… Hoe leuk is het om tijdens de training, de les of op wedstrijd in clubkleding te verschijnen! Ook voor de grooms en familie een leuk item om te dragen.</Typography>
                                  </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >De prijs van het zwarte jasje met sponsoring van Stal Hulzebos en Trainingsstal Koolen komt op 70 euro per stuk. Hun logo op de borst en ons eigen logo achterop de rug.</Typography>
                                  </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >De polo heeft ons logo op de linkerborst en kost 25 euro.</Typography>
                                  </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Heb je belangstelling voor jas en/of polo dan kun je een mail sturen naar <a href="mailto:info.lrdedrentscheaa@gmail.com" style={{textDecoration:"none"}}>info.lrdedrentscheaa@gmail.com</a></Typography>
                                  </div>
                                <div className={contactClasses.member}>
                                  <Typography className={contactClasses.name} gutterBottom variant='body1' >Passen en bekijken is vrijblijvend mogelijk! We hebben een aantal stuks op voorraad, zo niet dan wordt het voor je besteld.</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={12} sm={12} xs={12} >
                            <div className={contactClasses.imageHolder}>
                               <img  alt="achterkant van het jasje" className={contactClasses.image} src={achter} />
                            </div>
                        </Grid>    
                    </Grid>
                    </div>
                    <div className={contactClasses.grid}>
                      <Grid item lg={12} md={12} sm={12} xs={12} >
                            <div className={contactClasses.imageHolder}>
                               <img  alt="polo" className={contactClasses.image} src={polo} />
                            </div>
                      </Grid>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
    )
}

export default Nieuws;