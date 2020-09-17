import React, { Component } from "react";

export default class Profile extends Component {
    state = {};

    hideProfile = () => {
        let nav = document.querySelector('.right-sidebar');
        if (nav) {
            nav.classList.toggle('right-sidebar')
        }
    }

    render() {
        return (
            <section className="right-pannel">
                <div className="right-pannel-menu">
                    <div className="profile-name-wrap">
                        <div className="subscribe">
                            <span>
                                <img src={require('../../assets/images/notification.png')} alt="" />
                            </span>
                        </div>
                        <div className="profile-name" onClick={this.hideProfile}>Matt Thompson</div>
                    </div>
                    <div className="chat-more-wrap">
                        <div className="chat-img">
                            <img src={require('../../assets/images/messanger.png')} alt="" />
                        </div>
                        <div className="more">...</div>
                    </div>
                    <div className="profile-image">
                        <img src={require('../../assets/images/profile-pic.png')} alt="" />
                    </div>
                    <div className="person-name">
                        <div className="name">Matt Thompson</div>
                        <div className="designation">Cape Town, RSA</div>
                    </div>
                    <div className="person-detail">
                        <div className="detail-list">
                            <div className="title">Nick Name:</div>
                            <div className="value">Killa Kella</div>
                        </div>
                        <div className="detail-list">
                            <div className="title">Tell:</div>
                            <div className="value">072 143 9920</div>
                        </div>
                        <div className="detail-list">
                            <div className="title">Date of birth:</div>
                            <div className="value">Dec 13, 1986</div>
                        </div>
                        <div className="detail-list">
                            <div className="title">Gender:</div>
                            <div className="value">Male</div>
                        </div>
                        <div className="detail-list">
                            <div className="title">Language:</div>
                            <div className="value">Englsh</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}