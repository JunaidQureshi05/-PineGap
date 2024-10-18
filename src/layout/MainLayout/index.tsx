import React from "react";
import s from "./MainLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCustomer } from "../../redux/reducers/customerReducer";
import { Outlet } from "react-router-dom";
import cn from "classnames";
const MainLayout = () => {
  const { customers: data, selectedCustomer } = useSelector(
    (state: any) => state?.customerData
  );
  const dispatch = useDispatch();

  function handleCustomerClick(index: number): void {
    dispatch(setSelectedCustomer({ id: index }));
  }

  return (
    <div className={s.container}>
      <div className={s.containerNavigation}>
        {data?.map((customer: any, index: number) => (
          <div
            className={cn(s.customerCard, {
              [s.selectedCustomerCard]: index === selectedCustomer?.id,
            })}
            onClick={() => handleCustomerClick(index)}
          >
            <span className={s.customerCardName}>{customer?.name}</span>
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
      <div className={s.containerViewSection}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
