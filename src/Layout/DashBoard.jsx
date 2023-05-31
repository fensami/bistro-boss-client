import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCarts();


  //TODO : load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
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
          {
            isAdmin ? <>
            <li><NavLink to='/'><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to='/'><FaUtensils></FaUtensils> Add Items</NavLink></li>
            <li><NavLink to='/'><FaHome></FaHome> Manage Items</NavLink></li>
            <li><NavLink to='/'><FaBook></FaBook> Manage Booking</NavLink></li>

            <li><NavLink to='/dashboard/allUsers'><FaUser></FaUser> All Users</NavLink></li>


              {/* <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart <span>+{cart?.length}</span></NavLink> </li>
              <li><NavLink to='/dashboard/revervation'><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
              <li><NavLink to='history'><FaWallet></FaWallet>Payment History</NavLink></li> */}
            
            </> : <>


              <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
              <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart <span>+{cart?.length}</span></NavLink> </li>
              <li><NavLink to='/dashboard/revervation'><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
              <li><NavLink to='history'><FaWallet></FaWallet>Payment History</NavLink></li>
            </>
          }



          <div className="divider"></div>
          <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
          <li><NavLink to='/menu' > <AiOutlineMenu></AiOutlineMenu> Menu</NavLink></li>


        </ul>

      </div>
    </div>
  );
};

export default DashBoard;