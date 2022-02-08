
import './Card.css';


export default function OfferCard(props) {
  return (<div id={props.id} className='Card' style={{backgroundColor:props.data.color}} onClick={props.event}>
  <div className="info">
    <h1>{props.data.offer}</h1>
    <p>{props.data.desc}</p>
  </div>
  
  <div className="img">
    <img src={props.data.img} alt="" />
  </div>
  
</div>);
}

