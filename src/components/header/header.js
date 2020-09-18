import React, { Component } from "react";
import IconMenu from '../../assets/menu-icon';
import { friends } from "../../assets/contant";
import { withRouter } from 'react-router-dom';

class Header extends Component {

    state = { 
        isMobile: (window.innerWidth <= 1199),
        user: {}
    };

    componentDidMount() {
        this.getUserDetails(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.getUserDetails(newProps);
    }

    getUserDetails(newProps) {
        if(newProps.location.pathname.includes('/message/')) {
            const path = newProps.location.pathname.split('/message/');
            if(path && path.length === 2) {
                const userId = path[1];
                const selectedUser = friends.filter(item => item.id.toString() === userId.toString());
                this.setState({user: selectedUser[0]});
            }
        }
    }

    toggleMenu = () => {
        let nav = document.querySelector('.left-pannel');
        let subNav = document.querySelector('.left-sub-pannel');
        if (nav) {
            nav.classList.toggle('left-sidebar')
        }
        if (subNav) {
            subNav.classList.remove('left-sub-sidebar')
        }
    };

    openProfile = () => {
        let nav = document.querySelector('.left-sidebar'),
            subNav = document.querySelector('.left-sub-sidebar'),
            rightNav = document.querySelector('.right-pannel');
        if (nav) {
            nav.classList.toggle('left-sidebar')
        }
        if (subNav) {
            subNav.classList.toggle('left-sub-sidebar')
        }
        if (rightNav) {
            rightNav.classList.toggle('right-sidebar')
        }
    }

    render() {
        return (
            <div className="title-call-wrap">
                <div className="menu-bar" onClick={this.toggleMenu} >
                    <IconMenu src={require('../../assets/images/menu.svg')}></IconMenu>
                </div>

                <div className="person-title">
                    <span className="msg-person-name">{this.state.user && this.state.user.name ? this.state.user.name : ''}</span>
                    <span className="msg-person-status"> {this.state.user && this.state.user.name ? ' is typing ...' : ''}</span>
                </div>
                <div className="rate-call-wrap">
                    <div className="rate-us"><span><img src={require('../../assets/images/rate.png')} alt="" /></span></div>
                    <div className="call-us"><span><img src={require('../../assets/images/call.png')} alt="" /></span></div>
                    <div className="video-us"><span><img src={require('../../assets/images/vcall.png')} alt="" /></span></div>
                    <div className="profile-info" onClick={this.openProfile}><span><img src={require('../../assets/images/profile-pic.png')} alt="" /></span></div>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);