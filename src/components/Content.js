import "../style/content.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
export default function Content() {
  const [show, setShow] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const fetchShow = async () => {
    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=2&limit=10",
      {
        headers: {
          projectID: "k0oz8rtzq0n9",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjBhOWRlYzE3ZGEyNTMyYTM1MzI4NiIsImlhdCI6MTY5MzQ5MzkzMiwiZXhwIjoxNzI1MDI5OTMyfQ.G7iEnDNK3eNO9TPRmPVIpL7bFc-UIQBqd4OQciTxVms",
        },
      }
    );
    const data = await res.json();

    console.log(data.data);
    setShow([...data.data]);
  };
  useEffect(() => {
    fetchShow();
  }, []);

  return (
    <Carousel responsive={responsive}>
      {show.map((item) => {
        return (
          <>
            <img className="slide_img" src={item.thumbnail} alt={item.title} />
          </>
        );
      })}
    </Carousel>
  );
}
