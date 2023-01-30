import React, { useEffect, useState } from "react";
import axios from "axios";
import { TableHead } from "./TableHead";

export function Table() {
  const people = [
    "Shashi Koshy",
    "Dhriti Taneja",
    "Dipa Mishra",
    "Ansh Thakkar",
    "Lakshmi Thaker",
    "Sushila Matthai",
    "Shresth Nigam",
    "Bhavana Biswas",
    "Vasudha Mangat",
    "Priya Saran",
    "Puran Chandra Lohar",
  ];
  const [name, setName] = useState("");
  const [list, setList] = useState(people);
//   const [showPerson, setShowPerson] = useState(people);

//   useEffect(() => {
//     let filterPerson = list.filter((item) => {
//       return item.toLowerCase().includes(name);
//     });
//     setList(filterPerson);
//   }, [name]);

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setTableData(response.data.raw_broadmatch_data);
    });
  }, []);
  return (
    <>
      <h1>Table</h1>
      <table>
        <TableHead />
        {tableData.map((item) => (
          <tbody>
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td>{item[5]}</td>
              <td>{item[6]}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <h1>Search here</h1>
      <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
      {
        list.filter((item) => {
            return item.toLowerCase().includes(name.toLowerCase())
          })
        .map((person)=>(
          <p>{person}</p>
        ))
      }
    </>
  );
}
