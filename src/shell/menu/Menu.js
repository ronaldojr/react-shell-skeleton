import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clickMenu} from '../../actions'


class Menu extends Component {

    render() {
        const {open} = this.props
        return(
            <Drawer open={open} onClose={() => this.props.clickMenu(false)}> 
                <h1>Teste</h1>
            </Drawer>
        )
    }

}

const mapStateToProps = store => ({
    open: store.clickMenuState.open
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({clickMenu}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)