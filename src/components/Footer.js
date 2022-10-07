import React from 'react';

 function Footer() {
  return (
    <div id="footer">
      <div className="about-us">
      <em><p>A note book for you by you<br></br>
     ....  <br></br>
      ... <br></br>
      ...
      </p></em>
      </div>
      <div className="support">
      <h3>We love to here from you! Contact us</h3>
      <form id="contact-us">
        <input type="text" name="fname" value="First Name" required/> 
        <input type="text" name="lname" value="Last Name" placeholder="Last Name" required/>
        <input type="text" name="email" value="Email" placeholder="Email" required/>
        <textarea value="content" placeholder="Write here..."/>
        <input type="submit" value="Submit"/>
      </form>
      <strong><p>pour  out your thoughts&#128512;</p></strong>
      </div> 
     
    </div>
 )};



export default Footer;