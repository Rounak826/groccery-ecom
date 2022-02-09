
import { Delete, Trash, Trash2 } from 'react-feather';
import './Card.css';


export default function OfferCard(props) {
  return (

    <div id={props.id} className='Card' style={{ backgroundColor: props.data.hex }}>
      <Trash2 className="delete" onClick={props.event} />
      <div className="info">
        <h1>{props.data.offer + props.data.type}</h1>
        <p>{"On " + props.data.desc}</p>
      </div>

      <div className="img">
        <img src={props.data.img.url} alt="" />
      </div>  

    </div>
    );
}

