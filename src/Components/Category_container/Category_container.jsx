import React from 'react';
import { Filter } from 'react-feather';
import sort from '../../Assets/sort.svg'
import './category_container.css';
const category = ['All','brushes','chocolates','dental care', 'edible oil','biscuits','spices','grains','cereals','chips & snacks','detegrent','vegetables']
export default function CategoryContainer(props) {
  return (
      <div className="cat_container">
          <div className="category">
                {category.map(item=><div key={Math.random()} className="item">{item}</div>)}
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
