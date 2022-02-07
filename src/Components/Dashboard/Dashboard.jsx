import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import {useDatabase} from '../../Context/DatabaseContext'
import ProductCard from '../ProductCard/ProductCard';
import CarouselComp from '../../Components/Carousel/carousel';
import CategoryContainer from '../../Components/Category_container/Category_container'
import OfferCard from '../../Components/OfferCard/OfferCard';
import Contactform from '../../Components/contactform/contactform/Contactform'

export default function Dashboard() {
    const {getAllDocs,queryCollection } = useDatabase();
  const [offers, setOffers] = useState([]);
  const [category, setCategory] = useState('All');
  const [subcategory, setSubcategory] = useState('');
  const [product, setProducts] = useState([]);
  const categoryHandler = (cat)=>{
    setCategory(cat)
    setSubcategory('');
  }
  const subcatHandler = (subcat)=>{
    setSubcategory(subcat);
  }

  const getOffers = useCallback(async () => {
    const data = await getAllDocs('offers');
    let offerList = await data.docs.map(doc=>doc.data());
    setOffers(await offerList);
   
  }, [getAllDocs]);
  
  const getProducts = useCallback(async () => {
    if (category === "All") {
      const data = await getAllDocs("product");
      let productlist = await data.docs.map((doc) => doc.data());
      setProducts(await productlist);
    } else {
      queryCollection("product", "category", "==", category);
    }
  }, [getAllDocs, queryCollection,category]);

   
  
useEffect(() => {
  getOffers();
}, [getOffers]);

useEffect(() => {
  getProducts()
}, [getProducts,category,subcategory]);

useEffect(() => {
  console.log(category,subcategory);
}, [category,subcategory]);


  return (

    <>

                <CarouselComp />
                <div className='offerRow'>{offers.map(offer => <OfferCard key={"offer" + offer.offer} data={offer} />)}</div>
                <CategoryContainer categoryHandler={categoryHandler} subcatHandler={subcatHandler}>
                  {product.map(product => <ProductCard key={Math.random()} productInfo={product}></ProductCard>)}
                </CategoryContainer>
                <Contactform />
              </>
  );
}
