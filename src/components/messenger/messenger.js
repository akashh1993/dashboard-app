import React, { Component } from "react";
import { friends, messages } from "../../assets/contant";

export default class Messenger extends Component {

    state = {
        user: friends[0],
        selfDetails: friends[0],
        message: "",
        messages: messages
    };

    componentDidMount() {
        this.getUserDetails(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.getUserDetails(newProps);
    }

    getUserDetails(newProps) {
        const userId = newProps.match.params.user;
        const selectedUser = friends.filter(item => item.id.toString() === userId.toString());
        this.setState({user: selectedUser[0]});
    }

    onTypeMessage = (e) => {
        this.setState({ message: e.target.value })
    }

    sendMessage = (ev) => {
        const value = this.state.message.trim();
        if (value) {
            this.state.messages.push({
                time: new Date().getHours().toString() + ':' + new Date().getMinutes().toString(),
                message: value,
                self: true
            })
            const chatWindow = document.querySelector(".chat-wrap");
            if (chatWindow) {
                setTimeout(() => {
                    chatWindow.scrollTo(0, chatWindow.scrollHeight);
                }, 10);
            }
        }
        this.setState({ message: '' });
        ev.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="chat-wrap">
                    {this.state.messages.map((message, i) => {
                        if (message.self) {
                            return <div className="send right message" key={i}>
                                <div className="message">{message.message}</div>
                                <div className="profile-img-wrap">
                                    <div className="profile-img">
                                        <img src={require(`../../assets/images/${this.state.selfDetails.image}.png`)} alt="" />
                                    </div>
                                    <div className="time">{message.time}</div>
                                </div>
                            </div>
                        } else {
                            return <div className="receive left message" key={i}>
                                <div className="profile-img-wrap">
                                    <div className="profile-img">
                                        {(this.state.user) ?
                                            <img src={require(`../../assets/images/${this.state.user.image}.png`)} alt="" />
                                            : ''}
                                    </div>
                                    <div className="time">{message.time}</div>
                                </div>
                                <div className="message">{message.message}</div>
                            </div>
                        }
                    })}
                </div>
                <form className="tyeing-message-wrap" onSubmit={this.sendMessage}>
                    <div className="attach"><img src={require('../../assets/images/attach.png')} alt="" /></div>
                    <div className="type-wrap">
                        <input type="text" value={this.state.message} onChange={this.onTypeMessage} placeholder="Type your message .." />
                    </div>
                    <div className="send-wrap">
                        <div className="emoji"><img src={require('../../assets/images/emoji.png')} alt="" /></div>
                        <div className="send" onClick={this.sendMessage}><img src={require('../../assets/images/send.png')} alt="" /></div>
                    </div>
                </form>
            </div>
        );
    }
}