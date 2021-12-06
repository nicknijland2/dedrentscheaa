import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles } from "../styles/overRides";
import { Grid, Typography,Paper } from "@material-ui/core";
const Agenda = () => {
  console.log("Agenda lOADED")
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    return (
        <div className={generics.root}>
          <Grid container spacing={4}>
              <Grid item xs={12}>
                  <Header title={`Agenda`} />
              </Grid>
              <Grid item xs={12}>
                  <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                           <Typography className={classes.text} variant='body1' >
                           Paardensportvereniging de Drentsche Aa organiseert met enige regelmaat leuke activiteiten en officiële wedstrijden. Wil je hier als vrijwilliger een bijdrage aan leveren of heb je zelf een leuk idee, neem dan contact op met onze secretaris.
                           </Typography> 
                        </Paper>
                  </div>
             </Grid>      
          </Grid>
    </div>
    )
}

export default Agenda;