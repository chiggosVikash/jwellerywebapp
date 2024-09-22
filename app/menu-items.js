import { IoHome, IoAddCircle, IoCube, IoCart, IoPerson, IoSettings } from "react-icons/io5";

export const menuItems = [
  {
    title: "Dashboard",
    icon: <IoHome className="inline mr-2 text-secondary"/>,
    link: "/",
  },
  {
    title: "Add Products",
    icon: <IoAddCircle className="inline mr-2 text-secondary"/>,
    link: "/add-products",
  },
  {
    title: "Products",
    icon: <IoCube className="inline mr-2 text-secondary"/>,
    link: "/products-list",
  },
  {
    title: "Orders",
    icon: <IoCart className="inline mr-2 text-secondary"/>,
    link: "/orders",
  },
  {
    title: "Orders Details",
    icon: <IoPerson className="inline mr-2 text-secondary"/>,
    link: "/orders-details",
  },
  {
    title: "Settings",
    icon: <IoSettings className="inline mr-2 text-secondary"/>,
    link: "/settings",
  }
];