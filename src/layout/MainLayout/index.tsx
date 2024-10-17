import React from "react";
import "./MainLayout.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCustomer } from "../../store/reducers/customerReducer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  const { customers: data, selectedCustomer } = useSelector(
    (state: any) => state?.customerData
  );
  const dispatch = useDispatch();
  console.log("data", selectedCustomer);

  function handleCustomerClick(index: number): void {
    dispatch(setSelectedCustomer({ id: index }));
  }

  return (
    <div className="container">
      <div className="container--navigation">
        {data?.map((customer: any, index: number) => (
          <div
            className={[
              "customer--card",
              index === selectedCustomer?.id ? "selected--customer--card" : "",
            ].join(" ")}
            onClick={() => handleCustomerClick(index)}
          >
            <span className="customer--card--name">{customer?.name}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              perferendis exercitationem quam magnam libero accusantium harum
              reprehenderit necessitatibus nostrum corrupti, sint laborum saepe?
              Deleniti voluptate illum soluta in necessitatibus blanditiis
              commodi beatae veniam, quos, non vero ullam nobis dolore molestias
              provident dolor harum recusandae sapiente molestiae accusantium?
            </p>
          </div>
        ))}
      </div>
      <div className="container--view-section">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
