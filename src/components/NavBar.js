import {useState} from 'react';
import { IconButton } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import SideDrawer from "./common/SideDrawer";
import { CustomHeader,CustomButton,CustomToolBar,useHeaderStyles } from '../styles/overRides';
//import PlaceHolder from '../images/logo.jpg';
import PlaceHolder from '../images/Logo Drentsche Aa.png';
import { withRouter } from "react-router";

const NavBar = (props) => {
  console.log("Navbar Loaded");
    const classes = useHeaderStyles();
    const [state, setState] = useState({
        right: false,
      })

      const toggleDrawer = (anchor, open) => event => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return
        }
        setState({ ...state, right: open })
      }
    const handleRoute = (route) => {
      props.history.push(route);
    }
    return (
    <div className={classes.root}>
      <CustomHeader elevation={0} position="static">
        <CustomToolBar>
          <div className={classes.logo}>
            <img className={classes.img}  onClick={()=> handleRoute('/')} alt="De Drentsche Aa paardensportvereniging" src={PlaceHolder} />
          </div>
          <div className={classes.menu}>
              <CustomButton  
                onClick={()=> handleRoute('/')}
              
              size="small">
                  Home
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/about')}
              
              size="small">
                  Over ons 
              </CustomButton>

              <CustomButton 
                onClick={()=> handleRoute('/nieuws')}
              
              size="small">
                  Nieuws
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/management')}
              
              size="small">
                  Bestuur
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/lessons')}
              
              size="small">
                  Lessen
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/members')}
              size="small">
                  Lidmaatschap
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/agenda')}
              size="small">
                  Agenda
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/rules')}
              size="small">
                  Reglement
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/sponsors')}
              size="small">
                  Sponsoren
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/contact')}
              size="small">
                  Contact
              </CustomButton>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={toggleDrawer("right", true)}
          >
            <Menu />
          </IconButton>
        </CustomToolBar>
        <SideDrawer state={state} toggleDrawer={toggleDrawer} />
      </CustomHeader>
    </div>
    )
}

export default  withRouter(NavBar);