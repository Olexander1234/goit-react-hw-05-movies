
import {NavLink} from "react-router-dom"
import {Outlet} from "react-router-dom"
import { Movies } from "./Movies";
export const App = () => {
  
  return (
    <div>
       <nav>

<ul>
    <li><NavLink to = '/'>Home</NavLink></li>
    <li><NavLink to= '/movies'>Movies</NavLink></li>
</ul>

</nav>
<Outlet> <Movies></Movies></Outlet>
    </div>
  );
};
