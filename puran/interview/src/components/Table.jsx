import React, { useEffect, useState } from "react";
import axios from "axios";

export function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data.results);
    });
  }, []);

  const sortData = () => {
    let newData = data.sort((a, b)=>{
        return a.Population - b.Population;
    })
    setData([...newData])
  };

  return (
    <>
      <table>
        {data.map((item) => (
          <>
            <tr>
              <td>{item.Country}</td>
              <td>{item.Population}</td>
            </tr>
          </>
        ))}
      </table>
      <button onClick={sortData}>sort</button>
    </>
  );
}
