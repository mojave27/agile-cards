import React, { Component } from "react";

import '../css/header.css'

/* Header will use the default colors in header.css  * 
 * unless they are by provided props                 */
class Header extends Component {
  render() {
    return ( 
      <div>
        <table style={{ width:'100%'}}>
        <tbody>
          <tr>
            <td
              className='header' 
              style={{ 
                  backgroundColor:this.props.backgroundColor,
                  color:this.props.textColor,
              }}
            >
              {this.props.headerText}
            </td> 
          </tr> 
          </tbody>
        </table> 
        <div className='spacer' /> 
      </div>
    )
  }
}

export default Header;
