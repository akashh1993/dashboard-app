import React, { Component } from "react";
import Inbox from '../inbox/inbox';

export default class Sidebar extends Component {

    state = {
        isMobile: (window.innerWidth <= 1199),
        inboxExpanded: false,
        inbox: {},
        friends: [{}]
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        if (window.innerWidth > 1199) {
            let nav = document.querySelector('.left-sidebar'),
                subNav = document.querySelector('.left-sub-sidebar'),
                rightNav = document.querySelector('.right-sidebar');
            if (nav) {
                nav.classList.toggle('left-sidebar')
            }
            if (subNav) {
                subNav.classList.toggle('left-sub-sidebar')
            }
            if (rightNav) {
                rightNav.classList.toggle('right-sidebar')
            }
        } else {
            document.querySelector('.left-sub-pannel').style.display = 'none';
        }
    }

    hideInboxMenu = () => {
        let nav = document.querySelector('.left-pannel');
        if (nav) {
            nav.classList.remove('left-sidebar')
            nav.classList.remove('left-sub-sidebar')
        }
    }

    render() {
        return (
            <section className="left-pannel">
              <div className="icon-wrapper">
                <div className="menu-icon" onClick={this.hideInboxMenu}><span className="menu"><img src={require('../../assets/images/menu.svg')} alt="" /></span></div>
                <div className="whatsapp-icon"><span className="menu"><img src={require('../../assets/images/whatsapp.png')} alt="" /></span></div>
                <div className="messanger-icon active"><span className="messanger"><img src={require('../../assets/images/messanger.png')} alt="" /></span></div>
                <div className="call-icon"><span className="call"><img src={require('../../assets/images/skype.png')} alt="" /></span></div>
                <div className="v-icon"><span className="vchat"><img src={require('../../assets/images/vchat.png')} alt="" /></span></div>
                <div className="new-icon"><span className="new"><img src={require('../../assets/images/new.png')} alt="" /></span></div>
              </div>
              <Inbox></Inbox>
            </section>
        );
    }
}