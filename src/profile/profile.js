import React from 'react'
import "./profile.css"
import PropTypes from 'prop-types'
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
Profile.defaultProps = {
  fullName:' ilyes triki' ,
  bio :'...' ,
  profession :'none' , 
}
Profile.ProtoTypes = {
  fullName: PropTypes.string ,
  bio:PropTypes.string,
  profession : PropTypes.string

}

export default Profile
