import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles } from "../styles/overRides";
import { Grid, Typography,Paper } from "@material-ui/core";
const Nieuws = () => {
    console.log("NIEUWS lOADED")
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    return (
        <div className={generics.root}>
          <Grid container spacing={4}>
              <Grid item xs={12}>
                  <Header title={`Nieuws`} />
              </Grid>
              <Grid item xs={12}>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                               Er is nog geen nieuws van Paardensportvereniging De Drentsche Aa, maar als het er is komt het hier te staan.
                           </Typography> 
                        </Paper>
                  </div>
                </Grid>      
          </Grid>
    </div>
    )
}

export default Nieuws;