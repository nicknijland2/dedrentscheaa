import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles, useTableStyles } from "../styles/overRides";
import {Button ,Paper, Grid, Typography, Avatar, IconButton,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
const Agenda = () => {
  console.log("Agenda lOADED")
    const generics = useGenericWrapper()
    const tableClasses = useTableStyles()
    const aboutclasses = useAboutStyles()
    const classes = useAboutStyles();
    return (
      <div className={generics.root} style={{marginTop:'80px'}}>
      <Grid container spacing={4}>
      <Grid item xs={12}>
                  <Header title={`Agenda 2023`} />
              </Grid>
              <Grid item xs={12}>
              <div className={aboutclasses.paragraph}>
                  <Paper className={aboutclasses.paper} elevation={2} square >
                      <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                          Kwartaal 2
                      </Typography>
                      <TableContainer>
                          <Table className={tableClasses.table} aria-label='data table'>
                                <TableBody>
                                  <TableRow>
                                      <TableCell>
                                      6 april
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      20 april
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      22 april
                                      </TableCell>
                                      <TableCell>
                                      schriktraining Stal Koolen
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      4 mei
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      18 mei
                                      </TableCell>
                                      <TableCell>
                                      geen les Hemelvaart
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      1 juni
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      15 juni
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                       29 juni
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
                  </Paper>
              </div>
              <div className={aboutclasses.paragraph}>
                  <Paper className={aboutclasses.paper} elevation={2} square >
                      <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                          Kwartaal 3
                      </Typography>
                      <TableContainer>
                          <Table className={tableClasses.table} aria-label='data table'>
                                <TableBody>
                                  <TableRow>
                                      <TableCell>
                                      13 juli
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      27 juli
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      10 augustus
                                      </TableCell>
                                      <TableCell>
                                      geen les zomervakantie
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      24 augustus 
                                      </TableCell>
                                      <TableCell>
                                      geen les zomervakantie
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      7 september
                                      </TableCell>
                                      <TableCell>
                                      geen les zomervakantie
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      21 september
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  </TableBody>
                          </Table>
                      </TableContainer>
                  </Paper>
              </div>
              <div className={aboutclasses.paragraph}>
                  <Paper className={aboutclasses.paper} elevation={2} square >
                      <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                          Kwartaal 4
                      </Typography>
                      <TableContainer>
                          <Table className={tableClasses.table} aria-label='data table'>
                                <TableBody>
                                  <TableRow>
                                      <TableCell>
                                      5 oktober
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      19 oktober
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      2 november
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      16 november
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      30 november
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      14 december
                                      </TableCell>
                                      <TableCell>
                                      lesavond
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      28 december
                                      </TableCell>
                                      <TableCell>
                                      geen les Kerstvakantie
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                </TableBody>
                          </Table>
                      </TableContainer>
                  </Paper>
              </div>
          </Grid>
      </Grid>
  </div>
    )
}

export default Agenda;