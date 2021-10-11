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
                        <Typography className={classes.text} variant='body1' >Autoverhuur Drenthe: <a href="https://www.autoverhuurdrenthe.nl">www.autoverhuurdrenthe.nl</a></Typography>

                        <Typography className={classes.text} variant='body1' >Bootsman Medisch Adviesbureau</Typography>

                        <Typography className={classes.text} variant='body1' >Camping ’t Veenmeer: <a href="https://www.campingveenmeer.nl">www.campingveenmeer.nl</a> </Typography>

                        <Typography className={classes.text} variant='body1' >Coop Vries: <a href="http://www.openingstijden.nl/Coop/Vries/Oude-Asserstraat-2/">www.openingstijden.nl/Coop/Vries/Oude-Asserstraat-2/</a></Typography>  

                        <Typography className={classes.text} variant='body1' >Equine Business Resourse: <a href="http://www.equinebusinessresource.com">www.equinebusinessresource.com</a>  </Typography>

                        <Typography className={classes.text} variant='body1' >Expert Zuidlaren/Haren: Expert Haren | <a href="https://Expert.nl">Expert.nl</a> & <a href="https://Expert.nl">Expert Zuidlaren | Expert.nl</a> </Typography>

                        <Typography className={classes.text} variant='body1' >Huzen Omheiningen: <a href="https://www.huzen.com">www.huzen.com</a>  </Typography>

                        <Typography className={classes.text} variant='body1' >Koolen garage en bergingsbedrijf: <a href="http://www.koolenberging.nl">www.koolenberging.nl</a>  </Typography>

                        <Typography className={classes.text} variant='body1' >Loonbedrijf Peter Ziel:  </Typography>

                        <Typography className={classes.text} variant='body1' >Nyland: </Typography>

                        <Typography className={classes.text} variant='body1' >Dit verkoop ik: <a href="https://www.ditverkoopik.nl">www.ditverkoopik.nl</a> </Typography>

                        <Typography className={classes.text} variant='body1' >Stal Hulzebos: <a href="https://www.stal-hulzebos.nl">www.stal-hulzebos.nl</a> </Typography>

                        <Typography className={classes.text} variant='body1' >Trainingsstal Koolen: <a href="https://www.stalkoolen.nl">www.stalkoolen.nl </a>
                        </Typography>
                        <Typography className={classes.text} variant='body1' >Tynaarlo Dressage: <a href="https://www.facebook.com/Tynaarlo.Dressage">www.facebook.com/Tynaarlo.Dressage</a>  </Typography>

                        <Typography className={classes.text} variant='body1' >Reus Advocatuur: <a href="https://www.reusadvocatuur.nl">www.reusadvocatuur.nl</a></Typography>
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