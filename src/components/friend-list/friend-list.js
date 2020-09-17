import React, { Component } from "react";
import { friends } from "../../assets/contant";
import { withRouter } from 'react-router-dom';

class FriendList extends Component {
    
    state = {
        friends: friends,
        searchValue: ""
    };

    handleSearchChange = (e) => {
        const value = e.target.value;
        this.setState({
            searchValue: value
        });
        if (value === "") {
            this.setState({
                friends: friends
            });
        } else {
            this.setState({
                friends: friends.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            });
        }
    };

    openMessage(person) {
        let nav = document.querySelector('.left-sub-sidebar');
        if (nav) {
            nav.classList.toggle('left-sub-sidebar');
            document.querySelector('.left-sub-pannel').style.display = 'none';
        }
        const location = `/message/${person.id}`;
        this.props.history.push(location);
    }

    render() {
        return (
            <div className="serach-wrapper">
                <div className="search-wrap">
                    <form>
                        <input type="text" value={this.state.searchValue} placeholder="Search" onChange={this.handleSearchChange} />
                    </form>
                </div>
                <div className="message-list">
                    {this.state.friends.map((friend, i) => (
                        <div className="list" key={i} onClick={() => this.openMessage(friend)}>
                            <div className="profile-pic"><img src={require(`../../assets/images/${friend.image}.png`)} alt="profile-pic" />
                                <div className="disc-wrap">
                                    <div className="name">{friend.name}</div>
                                    <div className="discription">{friend.lastMessage}</div>
                                </div>
                            </div>
                            <div className="dotted-time">
                                <div className="dotted">...</div>
                                <div className="time">{friend.lastMessageAt}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default withRouter(FriendList);