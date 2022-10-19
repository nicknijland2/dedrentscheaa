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
                  <Header title={`Agenda 2022`} />
              </Grid>
              <Grid item xs={12}>
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
                                      8 september
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
                                      15 september
                                      </TableCell>
                                      <TableCell>
                                      sponsor borrel
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      22 september
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
                                      6 oktober
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
                                      20 oktober
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
                                      27 oktober
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
                                      3 november
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
                                      17 november
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
                                      1 december
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
                                      10 december
                                      </TableCell>
                                      <TableCell>
                                      selectie wedstrijd dressuur pony's
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                      <TableCell>
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell>
                                      15 december
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
                                      29 december
                                      </TableCell>
                                      <TableCell>
                                      vakantie/geen les
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