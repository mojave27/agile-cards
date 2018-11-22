import React, { Component } from 'react';
import * as avatars from '../util/avatars';

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
  render() {
    return (
      <div className='chooseUser'>
        <img src={avatars.r2d2} /> 
        <img src={avatars.ralph} /> 
        choose a user
      </div>
    );
  }
}

export default ChooseUser;
