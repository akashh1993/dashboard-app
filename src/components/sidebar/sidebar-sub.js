import React, { Component } from "react";
import FriendList from '../friend-list/friend-list';

export default class SidebarSub extends Component {

    render() {
        return (
            <div className="left-sub-pannel">
                <FriendList></FriendList>
            </div>
        );
    }
}