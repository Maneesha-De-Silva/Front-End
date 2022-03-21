import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
             Dashboard
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Sales
            </li>
            <Link to="/order" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Orders
            </li>
            </Link>

            <div className="sidebarMenu">
            <Link to="/productList" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
               Products
              </li>
            </Link>
            <Link to="/employee" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              Employees
            </li>
            </Link>
            <Link to="/customer" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
             Customers
            </li>
            </Link>

            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              Notifications
            </li>
           
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
        </div>
        <div className="sidebarMenu">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            </div>
          </ul>
        </div>  
        </div>
        </div>
    
  );
}