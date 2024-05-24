// import React from 'react';
// import letsConnect from '../images/talk.png'

// const LetsConnect = () => {
//   return (
//     <>
//  <div className="icon-bar">
//   <a href="#">
//     <img src={letsConnect}  className="facebook" alt='talk'/>
//     <p className='talkCl mt-2'>Get in touch</p>
//     </a> 
    
// </div>
//     </>
//   )
// }

// export default LetsConnect

import React from 'react';
import { Link } from 'react-router-dom';
import letsConnect from '../images/talk.png';

const LetsConnect = () => {
  return (
    <>
      <div className="icon-bar">
        <Link to="/registration"> {/* Change this to the path of your registration page */}
          <img src={letsConnect} className="facebook" alt="talk" />
          <p className="talkCl mt-2">Get in touch</p>
        </Link>
      </div>
    </>
  );
}

export default LetsConnect;

