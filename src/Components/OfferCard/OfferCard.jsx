
import './Card.css';


export default function OfferCard(props) {
  return (<div className='Card'>
  <div className="info">
    <h1>{props.data.offer}</h1>
    <p>{props.data.desc}</p>
  </div>
  
  <div className="img">
    <img src={props.data.img} alt="" />
  </div>
  
</div>);
}

