import React, { useEffect, useState } from "react";
import axios from "axios";

export function Table() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data.results);
    });
  }, []);

  //   useEffect(()=>{
  //   let sortData = data.sort((a, b)=> {
  //     return a - b
  //   })
  //   setShowData(sortData)
  //   }, [showData])

  const sortData = () => {
    // let filteredData = data.sort((a, b)=>{
    //     return a - b;
    // })
    // console.log(filteredData)
    // setShowData(filteredData)

    let arr = [];
    let filterData = data.map((item) => {
      for (let key in item) {
        console.log(key);
        if (key == "Population") {
          arr.push(item[key]);
        }
      }

      arr.sort((a, b)=>{
        return a - b 
      })
    });
    setShowData(filterData)
    console.log(arr);
    console.log(filterData)
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
