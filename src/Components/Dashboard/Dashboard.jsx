import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import {useDatabase} from '../../Context/DatabaseContext'
import ProductCard from '../ProductCard/ProductCard';
import CarouselComp from '../../Components/Carousel/carousel';
import CategoryContainer from '../../Components/Category_container/Category_container'
import OfferCard from '../../Components/OfferCard/OfferCard';
import Contactform from '../../Components/contactform/contactform/Contactform'
let data = [];
export default function Dashboard() {
    const {getAllDocs} = useDatabase();
  const [offers, setOffers] = useState([]);

  const getOffers = useCallback(async () => {
    const data = await getAllDocs('offers');
    let offerList = await data.docs.map(doc=>doc.data());
    setOffers(await offerList);
   
  }, [getAllDocs]);
  
  
   
  
useEffect(() => {
  getOffers();
}, [getOffers]);

  return (

    <>

                <CarouselComp />
                <div className='offerRow'>{offers.map(offer => <OfferCard key={"offer" + offer.offer} data={offer} />)}</div>
                <CategoryContainer>
                  {data.map(product => <ProductCard key={Math.random()} productInfo={product}></ProductCard>)}
                </CategoryContainer>
                <Contactform />
              </>
  );
}
