import Header from "./common/Header";
import { useGenericWrapper, useAboutStyles, useTableStyles } from "../styles/overRides";
import { Button, Grid, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

const Members = () => {
    console.log("Members Loaded")
    const generics = useGenericWrapper()
    const classes = useAboutStyles();
    const tableClasses = useTableStyles();

    const openPdf = (file) =>{
        //window.location.href = file;
        var link = document.createElement('a');
        link.href = file;
        link.download = 'Aanmeldingsformulier.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    return (
           <div className={generics.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Header title={`Lidmaatschap en contributie`} style={{marginRight: "20px"}} />
                </Grid>
                <Grid item xs={12}>
                <div className={classes.paragraph}>
                      <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} variant='body1' >
                            Meld je hier aan voor een lidmaatschap bij PSV de Drentsche Aa. Via de link kun je het aanmeldformulier downloaden en ingevuld opsturen naar 
                            &nbsp;
                            <a href="mailto:secretaris.lrdedrentscheaa@gmail.com" >secretaris.lrdedrentscheaa@gmail.com</a></Typography> 
                          
                           <Button style={{marginTop:'20px'}} variant="contained" size="large" onClick={()=> openPdf('/Aanmeldingsformulier.pdf')}>Aanmeldigsformulier downloaden</Button>
                        </Paper>
                  </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar volwassene 1ste gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                            € 27,50
                                            </TableCell>
                                            <TableCell>
                                            € 27,50
                                            </TableCell>
                                            <TableCell>
                                            € 3,50
                                            </TableCell>
                                            <TableCell align="right">
                                            € 58,50
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar tot en met 18 jaar (pony) 1ste gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                            € 22,50
                                            </TableCell>
                                            <TableCell>
                                            € 27,50
                                            </TableCell>
                                            <TableCell>
                                            € 3,50
                                            </TableCell>
                                            <TableCell align="right">
                                            € 53,50
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar volwassene volgend gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                            € 22,50
                                            </TableCell>
                                            <TableCell>
                                            € 27,50
                                            </TableCell>
                                            <TableCell>
                                            € 3,50
                                            </TableCell>
                                            <TableCell align="right">
                                            € 53,50
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lidmaatschap per jaar tot en met 18 jaar (pony) volgend gezinslid
                            </Typography>
                            <TableContainer>
                                <Table className={tableClasses.table} aria-label='data table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Contributie
                                            </TableCell>
                                            <TableCell>
                                                Afdracht KNHS
                                            </TableCell>
                                            <TableCell>
                                                Afdracht regio
                                            </TableCell>
                                            <TableCell align='right'>
                                                Totaal
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                            € 17,50
                                            </TableCell>
                                            <TableCell>
                                            € 27,50
                                            </TableCell>
                                            <TableCell>
                                            € 3,50
                                            </TableCell>
                                            <TableCell align="right">
                                            € 48,50
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Donateurs
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            € 25,00 per jaar
                            </Typography>
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.lessonHeader} gutterBottom variant="h5">
                                Lessen
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            € 69,00 per kwartaal voor 1x per 2 weken groepsles.
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            € 138,00 per kwartaal voor 1x per week groepsles.
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            De lessen gaan het gehele jaar door met uitzondering van 4 weken vakantie (1 week kerstvakantie en 3 weken zomervakantie).
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                            De opzegtermijn van de lessen bedraagt 1 volledig kwartaal. Voorbeeld: wordt in februari opgezegd, dan worden de lessen en betaling stopgezet per 1 april.
                            </Typography>
                            <Typography className={classes.text} gutterBottom variant="body1">
                                De contributie en overige lidmaatschapskosten worden geïncasseerd via automatische incasso.
                            </Typography>
              
                        </Paper>
                    </div>
                    <div className={classes.paragraph}>
                        <Paper className={classes.paper} elevation={2} square >
                            <Typography className={classes.text} gutterBottom variant="body1">
                                Bij inschrijving wordt eenmalig een bedrag van € 5,00 in rekening gebracht.
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Members;