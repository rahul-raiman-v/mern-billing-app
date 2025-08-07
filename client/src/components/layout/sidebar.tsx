import { Boxes, LayoutDashboard, Settings } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToolTipComponent } from "../../components";
import { cn } from "../../lib";
import {
  CustomersImage,
  EmployeesImage,
  PurchasesImage,
  ReportsImage,
  SalesImage,
} from "../../assets";

export const Sidebar = () => {
  const [selected, setSelected] = React.useState("");
  React.useEffect(() => {
    const pathName = window.location.pathname.split("/")[1];
    if (pathName !== "") {
      setSelected(pathName);
    } else {
      setSelected("dashboard");
    }
  }, [selected, setSelected]);
  const router = useNavigate();
  const sidebarItems = [
    {
      name: "dashboard",
      icon: <LayoutDashboard className=" cursor-pointer size-7" />,
      route: "/",
    },
    {
      name: "sales",
      icon: <SalesImage className="cursor-pointer size-7" />,
      route: "/sales",
    },
    {
      name: "items",
      icon: <Boxes className="cursor-pointer size-7" />,
      route: "/items",
    },
    {
      name: "customers",
      icon: <CustomersImage className="cursor-pointer size-7" />,
      route: "/customers",
    },
    {
      name: "employees",
      icon: <EmployeesImage className="cursor-pointer size-7" />,
      route: "/employees",
    },
    {
      name: "reports",
      icon: <ReportsImage className="cursor-pointer size-7" />,
      route: "/reports",
    },
    {
      name: "purchases",
      icon: <PurchasesImage className="cursor-pointer size-7" />,
      route: "/purchases",
    },
    {
      name: "settings",
      icon: <Settings className="cursor-pointer size-7" />,
      route: "/settings",
    },
  ];
  return (
    <div className="px-3 py-6 bg-white border border-gray-300 rounded-lg h-[calc(100dvh-6.1rem)] flex flex-col gap-y-6">
      {sidebarItems.map((icon) => {
        return (
          <div
            key={icon.name}
            className={cn(
              "flex flex-col gap-y-3 text-gray-600 ",
              selected === icon.name && "text-orange-600",
            )}
          >
            <ToolTipComponent
              tooltipContent={icon.name}
              onButtonClick={() => {
                setSelected(icon.name);
                router(icon.route);
              }}
            >
              {icon.icon}
            </ToolTipComponent>
            <hr className="border-t-gray-400" />
          </div>
        );
      })}
    </div>
  );
};
