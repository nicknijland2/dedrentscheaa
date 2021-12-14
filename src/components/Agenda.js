import Header from "./common/Header";
import { useGenericWrapper,useAboutStyles, useTableStyles } from "../styles/overRides";
import {Button ,Paper, Grid, Typography, Avatar,IconButton,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
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
                  <Header title={`Agenda 2022`} />
              </Grid>
              <Grid item xs={12}>
              <div className={aboutclasses.paragraph}>
                  <Paper className={aboutclasses.paper} elevation={2} square >
                      <Typography className={aboutclasses.lessonHeader} gutterBottom variant="h5">
                          Kwartaal 1
                      </Typography>
                      <TableContainer>
                          <Table className={tableClasses.table} aria-label='data table'>
                                <TableBody>
                                  <TableRow>
                                      <TableCell>
                                      13 januari
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
                                      20 januari
                                      </TableCell>
                                      <TableCell>
                                      algemene ledenvergadering
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      27 januari
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
                                      3 februari
                                      </TableCell>
                                      <TableCell>
                                      bestuursvergadering
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      10 februari
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
                                      24 februari
                                      </TableCell>
                                      <TableCell>
                                      lesavond (voorjaarsvakantie)
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      10 maart
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
                                      24 maart
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
                                      31 maart
                                      </TableCell>
                                      <TableCell>
                                      bestuursvergadering
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
                          Kwartaal 2
                      </Typography>
                      <TableContainer>
                          <Table className={tableClasses.table} aria-label='data table'>
                                <TableBody>
                                  <TableRow>
                                      <TableCell>
                                      7 april
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
                                      14 april
                                      </TableCell>
                                      <TableCell>
                                      bestuursvergadering
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      21 april
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
                                      5 mei
                                      </TableCell>
                                      <TableCell>
                                      lesavond (meivakantie)
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      15 mei
                                      </TableCell>
                                      <TableCell>
                                      officiële dressuurwedstrijd
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      19 mei
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
                                      2 juni
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
                                      9 juni
                                      </TableCell>
                                      <TableCell>
                                      bestuursvergadering
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      16 juni
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
                                      26 juni
                                      </TableCell>
                                      <TableCell>
                                      officiële springwedstrijd
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      30 juni
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
                                      2 juli
                                      </TableCell>
                                      <TableCell>
                                      officiële dressuurwedstrijd
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      14 juli
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
                                      28 juli
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
                                      25 augustus
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
                                       25 september
                                      </TableCell>
                                      <TableCell>
                                      1 jarig bestaan!!!!
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