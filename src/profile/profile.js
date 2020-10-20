import React from 'react'
import "./profile.css"
function Profile(props) {
    return (
        <div className="cardProfile">
          <h2> fullName:{props.name} </h2> <h2> bio:{props.bio}</h2>  <h2>profession:{props.profession} </h2>  
          {props.children}
          <button onClick={() => props.alertMyInput(props.name)}>
     my name
   </button>
        </div>
    )
}

export default Profile
