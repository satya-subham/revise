import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function TableHead() {
    const [tableHead, setTableHead] = useState([])
    useEffect(()=>{
        axios.get('/data.json').then((response)=>{
            setTableHead(response.data.columnNames)
        })
    },[])
  return (
    <>
    <thead>
        <tr>
            <th>{tableHead[0]}</th>
            <th>{tableHead[1]}</th>
            <th>{tableHead[2]}</th>
            <th>{tableHead[3]}</th>
            <th>{tableHead[4]}</th>
            <th>{tableHead[5]}</th>
            <th>{tableHead[6]}</th>
        </tr>
    </thead>
    </>
  )
}
