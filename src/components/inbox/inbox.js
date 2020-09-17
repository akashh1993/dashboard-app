import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Inbox extends Component {

    state = {
        selectedInbox: "all"
    }

    openMessages(messgae) {
        this.setState({ selectedInbox: messgae });
        let nav = document.querySelector('.left-sidebar');
        let subNav = document.querySelector('.left-sub-pannel');
        if (nav) {
            nav.classList.toggle('left-sidebar');
            subNav.classList.toggle('left-sub-sidebar');
        }
        document.querySelector('.left-sub-pannel').style.display = 'block';
    }

    openPage(page) {
        this.setState({ selectedInbox: page });
        this.props.history.push(page);
        let nav = document.querySelector('.left-sidebar');
        if (nav) {
            nav.classList.toggle('left-sidebar');
        }
        document.querySelector('.left-sub-pannel').style.display = 'none';
    }

    render() {
        return (
            <div className="inbox-wrapper">
                <div className="title-wrap">
                    <div className="title">Inbox</div>
                    <div className="people-plus">
                        <img src={require('../../assets/images/add.png')} alt="" />
                    </div>
                </div>
                <div className="message-list-wrap">
                    <div className={this.state.selectedInbox === 'all' ? 'm-list active' : 'm-list'} onClick={() => this.openMessages('all')}>
                        <div className="sub-title">All Message</div>
                        <div className="count">25</div>
                    </div>
                    <div className={this.state.selectedInbox === 'unread' ? 'm-list active' : 'm-list'} onClick={() => this.openMessages('unread')}>
                        <div className="sub-title">Unread</div>
                        <div className="count">20</div>
                    </div>
                    <div className={this.state.selectedInbox === 'important' ? 'm-list active' : 'm-list'} onClick={() => this.openMessages('important')}>
                        <div className="sub-title">Importnat</div>
                        <div className="count">15</div>
                    </div>
                    <div className={this.state.selectedInbox === 'drafts' ? 'm-list active' : 'm-list'} onClick={() => this.openMessages('drafts')}>
                        <div className="sub-title">Drafts</div>
                        <div className="count">30</div>
                    </div>
                </div>
                <div className="message-list-wrap">
                    <div className="m-list">
                        <div className="sub-title">Teams</div>
                        <div className="count">25</div>
                    </div>
                    <div className="m-list">
                        <div className="sub-title">Groups</div>
                        <div className="count">25</div>
                    </div>
                    <div className="m-list">
                        <div className="sub-title">Channels</div>
                        <div className="count">25</div>
                    </div>
                    <div className="m-list">
                        <div className="sub-title">Location</div>
                    </div>
                    <div className="m-list">
                        <div className="sub-title">Modes</div>
                        <div className="count">25</div>
                    </div>
                </div>
                <div className="message-list-wrap">
                    <div className={this.state.selectedInbox === '/help' ? 'm-list active' : 'm-list'} onClick={() => this.openPage('/help')}>
                        <div className="sub-title">Help</div>
                    </div>
                    <div className={this.state.selectedInbox === '/setting' ? 'm-list active' : 'm-list'} onClick={() => this.openPage('/setting')}>
                        <div className="sub-title">Settings</div>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Inbox);