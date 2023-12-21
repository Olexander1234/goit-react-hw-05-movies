
import {NavLink} from "react-router-dom"
import {Outlet} from "react-router-dom"
import  {Movies} from "./Movies";
import { Suspense } from "react";
export default function App  () {
  
  return (
    <Suspense fallback={<div>Loader...</div>}>
    <div>
       <nav>

<ul>
    <li><NavLink to = '/'>Home</NavLink></li>
    <li><NavLink to= '/movies'>Movies</NavLink></li>
</ul>

</nav>
<Outlet> <Movies></Movies></Outlet>
    </div>
    </Suspense>
  );
};
