import React, { useCallback, useEffect } from 'react'
import { Check, X } from 'react-feather';
import './table.css';
import {useDatabase} from '../../Context/DatabaseContext';
import { useState } from 'react';
export default function StocksTable() {
  let [tabel,setTabel]=useState([]);
  const {queryCollection}= useDatabase();

const fetchStockTable = useCallback(()=>{
  queryCollection("product","stock","<",50).then(e=>{
    console.log(e.docs[0].data());
    let x = e.docs.map(doc=>{
      return {...doc.data(),status:"Stocks Ending",id:doc.id} 
    })
    setTabel(x);
  })
  .catch(e=>{
    console.log(e);
  })
  queryCollection("product","stock","<",50).then(e=>{
    console.log(e.docs[0].data());
    let x = e.docs.map(doc=>{
      return {...doc.data(),status:"Stocks Ending"} 
    })
    setTabel(x);
  })
  .catch(e=>{
    console.log(e);
  })

}, [queryCollection]);



  useEffect(() => {
    fetchStockTable();
  }, [fetchStockTable]);
  
  return (
    <div className="table-container">
      <table className=" ghg flex-container">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody bgcolor="#f1f1f1">
          {tabel.map(e=>{
            console.log(e)
            return(
              <tr>
              <td>{e.productId}</td>
              <td>{e.name}</td>
              <td>{e.status}</td>
              <td>{e.stock}</td>
              <td>Expired</td>
              <td>0</td>
              <td>
                <div className="Flex-buttons">
                  <button className='B9' variant="primary">
                    <Check />
                  </button>{'  '}
                  <button className='B10' variant="primary" >
                    <X />
                  </button>{'  '}
                </div>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}