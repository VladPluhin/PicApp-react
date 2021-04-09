import React, {Component} from 'react';
import  './nav.scss';
import {Link} from 'react-router-dom';

export default  class ListItem extends Component {
    render() {
        return (
            <li>
                <Link to={'/'+ this.props.navitem.link.toLowerCase().trim()}>
                    {this.props.navitem.label}
                </Link>
            </li>
        )
    }
}

