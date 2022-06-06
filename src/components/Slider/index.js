import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export const PaginationSlider = ({ images = [], ...props }) => {
  const { descricao } = props;
  const imagesArray = Array.isArray(images) ? images : [images];
  const hasPagination = imagesArray?.length > 0;

  return (
    <Swiper pagination={hasPagination} modules={[Pagination]}>
      {imagesArray?.map((url) => (
        <SwiperSlide key={`slider_${url}`}>
          <img src={url} alt={descricao} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
