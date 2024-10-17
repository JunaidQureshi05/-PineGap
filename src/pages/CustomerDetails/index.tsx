import React, { useEffect, useState } from "react";
import s from "./CustomerDetails.module.css";
import { useSelector } from "react-redux";
import { getRandomImages } from "../../services/getRandomImages";
import { API_STATUS } from "../../types/other";
export const CustomerDetails = () => {
  const [dataAPIStatus, setDataAPIStatus] = useState<API_STATUS>(
    API_STATUS.default
  );
  const [images, setImages] = useState([]);
  const customerData = useSelector(
    (state: any) => state?.customerData?.selectedCustomer
  );
  console.log(">>>>>Customer Data", customerData);

  async function loadImages() {
    setDataAPIStatus(API_STATUS.in_progress);
    const { data, error } = await getRandomImages();
    if (data) {
      setImages(data);
      setDataAPIStatus(API_STATUS.success);
    }
    if (error) {
      // Show error test
      setDataAPIStatus(API_STATUS.failure);
    }
  }
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className={s.container}>
      <p className={s.customerName}>{customerData?.name}</p>
      <p className={s.title}>{customerData?.title}</p>
      <p className={s.address}> {customerData?.address}</p>
      {dataAPIStatus === API_STATUS.in_progress ? (
        <div>Loading...</div>
      ) : (
        <div className={s.gallery}>
          {images?.map((url) => (
            <img src={url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
