import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../menu/Menu'
import {bindActionCreators} from 'redux'
import {clickMenu} from '../../actions/index'
import {connect} from 'react-redux'



class Header extends Component {
    
    render() {

        return(
            <div>
                <AppBar >
                    <Toolbar>
                        <IconButton  color="inherit" aria-label="Menu"  onClick={() => this.props.clickMenu(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            {this.props.AppName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Menu  />
            </div>

        )
    }


}

const mapStateToProps = store => ({
    open: store.clickMenuState.open
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({clickMenu}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Header)