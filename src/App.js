import React from 'react';
import Profile from './profile/profile'


function App() {
  const alertMyInput = name => alert(name);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
     <Profile name='ilyes triki' bio='...' profession='none' alertMyInput={alertMyInput} >
       <img src='/image.jpg' alt='hell' width="200px" />
       </Profile>
    </div>
  );
}

export default App;
