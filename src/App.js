import "./styles.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Crousel from "./components/Crousel";
export default function App() {
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchShowList = async () => {
    setLoading(true);
    fetch("https://academics.newtonschool.co/api/v1/ott/show", {
      method: "GET",
      headers: {
        projectId: "k0oz8rtzq0n9"
        /* Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ" */ // this is how you set JWT token
      }
    })
      .then((response) => response.json())
      .then((data) => setShowList(data.data))

      .catch((error) => console.error("Error:", error));
    setLoading(false);
  };
  const fetchShow = async (id) => {
    fetch(`https://academics.newtonschool.co/api/v1/ott/show/:${id}`, {
      method: "GET",
      headers: {
        projectId: "k0oz8rtzq0n9"
        /*  Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ" */ // this is how you set JWT token
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchShowList();
    console.log(showList);
    //fetchShow("64cffee700bad552e8dcd509");
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/*  <Crousel />
      <div>
        {showList.map((show) => {
          return <p key={show._id}>{show.title}</p>;
        })}
      </div> */}
    </div>
  );
}
