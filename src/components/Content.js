import React, { Component } from "react";
import ChooseUser from "./ChooseUser";
import Vote from "./Vote";
import { getCookie } from '../util/cookie-utils';

class Content extends Component {
  state = {
    chosenAvatar: {}
  }

  handleAvatarClick = (avatar) => {
    // set active user into state and cookie
    document.cookie = `agile-user=${JSON.stringify(avatar)}`;
    this.setState({ chosenAvatar: avatar })

    // make active user unavailable to other browsers/users
    // add active user to some db entry which tracks this particular voting session
  }

  hasChosenAvatar = () => {
    const cookie = getCookie('agile-user');
    // let avatar = null;
    if (cookie !== "" && cookie !== null) {
      let avatar = JSON.parse(cookie);
      if (avatar.name) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div className="content">
        <div>
          {this.hasChosenAvatar() ? (
            <Vote />
          ) : (
              <ChooseUser handleClick={this.handleAvatarClick} activeUser={this.state.chosenAvatar} />
            )}
        </div>
      </div>
    );
  }
}

export default Content;
