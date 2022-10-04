import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';


import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import About from './routes/about/about.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Footer from './routes/footer/footer.component';
import { checkUserSession } from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { getCurrentUser } from './utils/firebase/firebase.utils';





const App = () => {
  
  // const user = useSelector((state) => state.user.currentUser);
  
  // console.log('From App', user)
const dispatch = useDispatch()

//  useEffect(() =>{
//     getCurrentUser().then((user)=>console.log(user))
//  }, [dispatch])
 useEffect(() =>{
    dispatch(checkUserSession());
 }, [])

 
return (
  <Fragment>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
    <Footer />
  </Fragment>
);
};

export default App;

