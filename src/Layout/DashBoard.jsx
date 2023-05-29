import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { AiOutlineMenu} from "react-icons/ai";

import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";

const DashBoard = () => {
  const [cart] = useCarts()
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu font-bold p-4 w-80 bg-[#D1A054] text-base-content uppercase">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>



      <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart <span>+{cart?.length}</span></NavLink> </li>



      <li><NavLink to='/dashboard/revervation'><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
      <li><NavLink to='history'><FaWallet></FaWallet>Payment History</NavLink></li>

      <div className="divider"></div>
      <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
      <li><NavLink to='/menu' > <AiOutlineMenu></AiOutlineMenu> Menu</NavLink></li>


    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;