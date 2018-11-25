import React, { Component } from 'react';
import User from './User';

class ChooseUser extends Component {
  state = {
    userList: [
      {id: 1, name: 'r2d2'},
      {id: 2, name: 'ralph'}
    ]
  }

  componentWillMount(){
    // axios call to retrieve 'users'
    // const images = importImages(require.context('../assets/images', false, '/.png/'));
    // this.setState({avatars: images})
  }

  handleUserClick = (event) => {
    const userId = event.target.id;
    const userList = [...this.state.userList];
    let user = null;

    // get avatar from list
    for(let i = 0; i < userList.length; i++){
      if(userList[i].id == userId){
        user = userList[i];
      }
    }
    
    this.props.handleClick(user);
  }

  render() {
    //TODO: add functionality to allow user to pick different avatar
    return (
      <div className='chooseUser'>
        choose a user:
        {this.state.userList.map( user => {
          return (<User key={user.id} name={user.name} id={user.id} handleClick={this.handleUserClick} />);
        })}
      </div>
    );
  }
}

export default ChooseUser;
