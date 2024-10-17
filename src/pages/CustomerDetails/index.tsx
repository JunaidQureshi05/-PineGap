import { useEffect, useState, useRef } from "react";
import s from "./CustomerDetails.module.css";
import { useSelector } from "react-redux";
import { getRandomImages } from "../../services/getRandomImages";
import { API_STATUS } from "../../types/other";
import { RootState } from "../../store/store";
import AnimatedImage from "../../components/AnimatedImage";

export const CustomerDetails = (): any => {
  const [dataAPIStatus, setDataAPIStatus] = useState<API_STATUS>(
    API_STATUS.default
  );
  const [images, setImages] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const customerData: any = useSelector(
    (state: RootState) => state.customerData.selectedCustomer
  );

  console.log("@@@@@@", customerData);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const pageNumber = useRef(1);

  const loadImages = async () => {
    setDataAPIStatus(API_STATUS.in_progress);
    setErrorMessage(null);

    const { data, error } = await getRandomImages(pageNumber.current);

    if (data) {
      setImages(data);
      setDataAPIStatus(API_STATUS.success);
      pageNumber.current = pageNumber.current + 1;
    } else if (error) {
      setDataAPIStatus(API_STATUS.failure);
      setErrorMessage("Failed to load images. Please try again.");
    }
  };

  useEffect(() => {
    if (!customerData) {
      return;
    }
    loadImages();
    pageNumber.current = 1;
    timerId.current = setInterval(loadImages, 10000);

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [JSON.stringify(customerData)]);
  if (!customerData) {
    return (
      <div className={s.notDataPage}>
        <div className={s.heading}>No Data Found !!!</div>
        <div className={s.subheading}>
          Please select a customer from nav bar for details
        </div>
      </div>
    );
  } else
    return (
      <div className={s.container}>
        <p className={s.customerName}>{customerData?.name}</p>
        <p className={s.title}>{customerData?.title}</p>
        <p className={s.address}>{customerData?.address}</p>
        {dataAPIStatus === API_STATUS.in_progress ? (
          <div>Loading...</div>
        ) : dataAPIStatus === API_STATUS.failure && errorMessage ? (
          <div className={s.error}>{errorMessage}</div>
        ) : (
          <div className={s.gallery}>
            {images.map((url: string, idx: number) => (
              <>
                <AnimatedImage src={url} key={idx} alt={`Image ${idx + 1}`} />
              </>
            ))}
          </div>
        )}
      </div>
    );
};

export default CustomerDetails;
