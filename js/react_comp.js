'use strict';

const e = React.createElement;

class LikeButton extends React.Component { 
    render() {
        return ('Copyright © '+ (new Date().getFullYear())+ ' Hydrova Chemicals... All Rights Reserved.' );
    }
  }


  const domContainer = document.querySelector('#react_copyright_time');ReactDOM.render(e(LikeButton), domContainer);