import Header from "./common/Header";
import { useGenericWrapper, useAboutStyles } from "../styles/overRides";
import { Grid, Typography, Paper } from "@material-ui/core";
const Sponsors = () => {
    console.log("Sponsors Loaded");
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    return (
        <div className={generics.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Header title={`Sponsoren`} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                        <Typography className={classes.text} variant='body1' > <a href="https://www.autoverhuurdrenthe.nl">Autoverhuur Drenthe</a></Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.campingveenmeer.nl">Camping ’t Veenmeer</a> </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="http://www.openingstijden.nl/Coop/Vries/Oude-Asserstraat-2/">Coop Vries</a></Typography>  

                        <Typography className={classes.text} variant='body1' > <a href="https://Expert.nl">Expert Zuidlaren/Haren | Expert.nl</a> </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://impextrailers.nl/">Impex trailers</a></Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.huzen.com">Huzen Omheiningen</a>  </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="http://www.koolenberging.nl">Koolen garage en bergingsbedrijf</a>  </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.ditverkoopik.nl">Dit verkoop ik</a> </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.stal-hulzebos.nl">Stal Hulzebos</a> </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.stalkoolen.nl">Trainingsstal Koolen </a></Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.facebook.com/Tynaarlo.Dressage">Tynaarlo Dressage</a>  </Typography>

                        <Typography className={classes.text} variant='body1' > <a href="https://www.reusadvocatuur.nl">Reus Advocatuur</a></Typography>
                        
                        <Typography className={classes.text} variant='body1' >Bootsman Medisch Adviesbureau</Typography>

                        <Typography className={classes.text} variant='body1' >Loonbedrijf Peter Ziel  </Typography>

                        <Typography className={classes.text} variant='body1' >Nyland </Typography>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography gutterBottom className={classes.text} variant='body1' >
                            Wilt u ook sponsor worden van de vereniging? Wie bieden diverse pakketten aan. Neem hiervoor vrijblijvend contact op met Marcel Hulzebos. 
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Sponsors;