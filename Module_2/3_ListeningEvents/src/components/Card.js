
import './Card.css';

function Card(props){

    const classes = 'card ' + props.className;      //card ke baad space dena imp h bcoz, browser needs to understand that these are two 
    //differnet class concateating with each other
    return(
        <div className={classes}>
            {props.children }
        </div>
    )
}

export default Card;