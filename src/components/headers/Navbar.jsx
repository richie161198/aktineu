
import { Link } from "react-router-dom";

// export const Navbar = ({ hidePortfolio = false }) => {
//   return (
//     <nav className="td-main-menu-content">
//       <ul>
//         <li className="has-dropdown">
//           <Link to="/"> Home</Link>
//                  </li>
//   <li className="has-dropdown">

//           <Link to="/service">Solutions</Link>
//           <ul className="td-submenu submenu">
//             <li>
//               <Link to="/service">Service</Link>
//             </li>
//             <li>
//               <Link to="/service-details">Service Details</Link>
//             </li>
//           </ul>
//         </li>
//         <li className="has-dropdown">
//         <Link to="/about">About Us</Link>

//         </li>

//         <li className="has-dropdown">
//           <Link to="/blog">Blog</Link>
//           <ul className="td-submenu submenu">
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/blog-details">Blog Details</Link>
//             </li>
//           </ul>
//         </li>
//         {hidePortfolio ? null : (
//           <li className="has-dropdown">
//             <Link to="/portfolio">Portfolio</Link>
//             <ul className="td-submenu submenu">
//               <li>
//                 <Link to="/portfolio">Portfolio</Link>
//               </li>
//               <li>
//                 <Link to="/portfolio-details">Portfolio Details</Link>
//               </li>
//             </ul>
//           </li>
//         )}

//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export const Navbar = ({ hidePortfolio = false }) => {
  return (
    <nav className="td-main-menu-content">
      <ul>
        <li className="has-dropdown">
          <a href="#">Home</a>
        </li>

        <li className="has-dropdown">
          <a href="#solutions">Solutions</a>
        </li>

        <li className="has-dropdown">
          <a href="#aboutus">About Us</a>
        </li>

        <li className="has-dropdown">
          <a href="#blog">Why Us</a>
        </li>

        {!hidePortfolio && (
          <li className="has-dropdown">
            <Link to="/portfolio">Portfolio</Link>
            <ul className="td-submenu submenu">
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Portfolio Details</Link>
              </li>
            </ul>
          </li>
        )}

        <li>
          
          <a href="#contactus">Contact</a>
          {/* <Link to="/contact">Contact</Link> */}
        </li>
      </ul>
    </nav>
  );
};
