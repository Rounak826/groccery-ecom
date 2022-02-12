import React, { useCallback, useEffect } from 'react'
import { Check, X } from 'react-feather';
import './table.css';
import {useDatabase} from '../../Context/DatabaseContext';
import { useState } from 'react';
export default function StocksTable() {
  const [tabel,setTabel]= useState([]);

  const {queryCollection}= useDatabase();
  const newDate=Date.parse(new Date()) + 4*30*24*60*60*1000;
const fetchStockTable = useCallback(()=>{


  queryCollection("product","stock","<",50).then(e=>{
    let x = e.docs.map(doc=>{
      return {...doc.data(),status:"Stocks Ending",id:doc.id} 
    }) 
    queryCollection("product","exp","<",newDate).then(e=>{
      let y = e.docs.map(doc=>{
        return {...doc.data(),status:"Expiring soon"} 
      })
      setTabel([]);
       setTabel(merge(unique(x),unique(y)));
    })
    .catch(e=>{
      console.log(e);
    })
  })
  .catch(e=>{
    console.log(e);
  })
  

}, [queryCollection,newDate]);



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
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tabel.map(e=>{
            return(
              <tr key={e.productId+e.status}>
              <td>{e.productId}</td>
              <td>{e.name}</td>
              <td>{e.status}</td>
              <td>{e.stock}</td>
              <td>{millisToDate(e.exp)}</td>


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
function merge(tabel1,tabel2){
  let tabel = [];
  if(tabel1.length>tabel2.length){
      
      tabel = tabel1;
      
      for(let i=0; i<tabel2.length;i++){
          for(let j=0; j<tabel1.length;j++){
              var flag1 = true;
              if(tabel1[j].productId===tabel2[i].productId){
                  tabel[j].status= "Stocks Ending And Expiring Soon";
                  flag1 = false;
                  break;
              }
          }
          if(flag1) tabel.push(tabel2[i]);
      }
  } else{
      tabel = tabel2;
      for(let i=0; i<tabel1.length;i++){
          for(let j=0; j<tabel2.length;j++){
              var flag2 = true;
              if(tabel1[i].productId===tabel2[j].productId){
                  tabel[j].status= "Stocks Ending And Expiring Soon";
                  flag2 = false;
                  break;
              }
          }
          if(flag2) tabel.push(tabel2[i]);
      }

  }    
  return tabel;
}
function unique(arr){
  return arr.filter((v,i,a)=>a.findIndex(t=>['productId'].every(k=>t[k] ===v[k]))===i)
}
function millisToDate(ms){
  const date = new Date(ms);
  return date.toDateString();
}