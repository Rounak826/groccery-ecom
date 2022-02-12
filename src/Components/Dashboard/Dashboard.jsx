import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import {useDatabase} from '../../Context/DatabaseContext'
import ProductCard from '../ProductCard/ProductCard';
import CarouselComp from '../../Components/Carousel/carousel';
import CategoryContainer from '../../Components/Category_container/Category_container'
import OfferCard from '../../Components/OfferCard/OfferCard';
import Contactform from '../../Components/contactform/contactform/Contactform'
import { useAuth } from '../../Context/AuthContext';
export default function Dashboard() {
  const {currentUser} = useAuth();
  const {getAllDocs,queryCollection,createNestedDocWithId ,setReload,reload} = useDatabase();
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
  const HandelAddToCart=(data)=>{
    console.log(currentUser);
    createNestedDocWithId('UserInfo',currentUser.uid,'cart',data.productid,data).then(()=>{
        alert('added to cart');
        setReload(!reload);
    }).catch(e=>{
      console.log(e); 
    })
  }

  const getOffers = useCallback(async () => {
    const data = await getAllDocs('offers');
    console.log(data);
    let offerList = await data.docs.map(doc=>doc.data());
    console.log(offerList);
    setOffers(await offerList);
   
  }, [getAllDocs]);
  
  const getProducts = useCallback(async () => {
    if (category === "All") {
      const data = await getAllDocs("product");
      let productlist = await data.docs.map((doc) =>doc.data());
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
                  {product.map(product => <ProductCard key={Math.random()} add2Cart={HandelAddToCart} productInfo={product}></ProductCard>)}
                </CategoryContainer>
                <Contactform />
              </>
  );
}
