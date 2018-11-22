import React, { Component } from 'react';
import ChooseUser from './ChooseUser';
import TopNav from './TopNav';
// import Home from './Home.js';
// import { Route } from 'react-router-dom';
// import Meals from './Meals/Meals.js';
// import Tests from './Tests.js';
// import EditableReactTable from './Meals/EditableReactTable.js';

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <TopNav />
        <div>
          {/*if user hasn't chosen a name...*/}
          {true
            ?
            <ChooseUser />
            :
            <div>
              Main page...
            <div style={{border: '1px solid blue'}}>story section</div>
            <div style={{border: '1px solid maroon'}}>user votes section</div>
            </div>}
        </div>
        {/* <Route path='/' exact component={Home} />
      <Route path='/tests/:id?' exact component={Tests} />
      <Route path='/meals' exact component={Meals} />
      <Route path='/editable' exact component={EditableReactTable} /> */}
      </div>
    );
  }
}

export default Content;
