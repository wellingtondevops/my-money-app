import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { selectTab} from './tabActions'


class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;'
                    data-toggle='tag'
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i>{this.props.label}
                </a>
            </li>
        )
    }
}

export default TabHeader