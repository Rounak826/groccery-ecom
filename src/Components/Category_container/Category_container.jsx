import React from 'react';
import { Filter } from 'react-feather';
import sort from '../../Assets/sort.svg'
import CategoryItem from './CategoryItem';
import './category_container.css';
const categoryList = [
  {name:"All",subList:[]},
  {name:"Bathing",subList:["Soap","Shampoo","Conditioner","Body-Wash"]},
  {name:"Chocolates",subList:["Dark","Caremal","Candy","Sweet","Chewingum"]},
  {name:"Oral Health",subList:["Brushes","tooth-paste","toungue-cleaner"]},
  {name:"Spices",subList:[]},
  {name:"Biscuits",subList:[]},
  {name:"Oils",subList:[]},
  {name:"Cereals",subList:[]},
  {name:"Snacks",subList:[]},
  {name:"Ready to Eat",subList:[]},
]
export default function CategoryContainer(props) {
  return (
      <div className="cat_container">
        <div className="category-list">
                {categoryList.map(item=><CategoryItem categoryHandler={props.categoryHandler} subcatHandler={props.subcatHandler} key={item.name} name={item.name} subList={item.subList} />)
              }
          </div>
          <div className="prod_container">
              <div className="controls">
                <button><Filter/></button>
                <button><img src={sort} alt="" /></button>
              </div>
              <div className="pContainer">
                {props.children}
                </div>
          </div>
      </div>
      );
}
