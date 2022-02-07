import React from 'react';
import { useState } from 'react';
import {  ChevronDown,ChevronUp } from 'react-feather';

export default function CategoryItem(props) {
    const [expand, setExpand] = useState(false);
    const catHandler = (name)=>{
        setExpand(!expand);
        props.categoryHandler(name);
    }
    const subcategoryHandler= (subcat)=>{
        props.subcatHandler(subcat);
    }
  return (
                  <div key={props.name} className="category">
                      <div onClick={()=>catHandler(props.name)} className="cat-name">{props.name}{expand?props.subList.length>0&&<ChevronUp />:props.subList.length>0&&<ChevronDown />}</div>
                      {expand&&<div className="sub-category">
                        {props.subList.length>0&&props.subList.map(subList => <div onClick={()=>subcategoryHandler(subList)} key={subList} className="item">{subList}</div> )}
                      </div>}
                  </div>
                
                )
              

}
