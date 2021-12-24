import React, {useEffect, useState} from 'react';
import Navigation from './component/react-native/navigation/react-native/Navigation';
import User from '../src/user/User';
import getUsers from '../src/user/User';


const App = () => {


  // const [users, setUsers] = useState();

  // useEffect(() => {
  //   getUsers().then(res => {
  //     console.log(res);
  //   });
  // }, []);

  return <Navigation />;

};
export default App;
