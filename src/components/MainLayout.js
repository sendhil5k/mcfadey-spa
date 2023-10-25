import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Notfound from './Notfound';
import Newarrivals from "./Newarrivals";
import Theedit from "./Theedit";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
      const history = useNavigate();
      return <Component history={history} {...props} />
  }
  return Wrapper;
}
function MainLayout() {


  return (

    <Routes>
      <Route exact path="/home" caseSensitive={false} element={<Home />} />
      <Route path="/newarrivals" caseSensitive={false} element={<Newarrivals />} />
      <Route path="/theedit" caseSensitive={false} element={<Theedit />} />
      <Route path="*" element={<Notfound />} />
    </Routes>

  )
}
export default withRouter(MainLayout);
