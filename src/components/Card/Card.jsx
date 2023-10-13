import React from 'react'
import './Card.css';
import { BiAdjust,BiCircle } from 'react-icons/bi';
import { IoCaretBackCircle } from 'react-icons/io5';
import {BsThreeDots,BsExclamationSquareFill} from "react-icons/bs"
import Fullbar from "../../assets/signal_cellular_4_bar_FILL0_wght400_GRAD0_opsz24.svg"
import medbar from "../../assets/signal_cellular_3_bar_FILL0_wght400_GRAD0_opsz24.svg"
import lowbar from "../../assets/signal_cellular_1_bar_FILL0_wght400_GRAD0_opsz24.svg"
import photo from "../../assets/photo.jpg"
import {GoDotFill} from "react-icons/go"

 const swit=(status)=>{
   switch (status){
    case "In progress":
        return <BiAdjust style={{color:"orange"}}/>;
    case "Todo":
        return <BiCircle style={{color:"gray"}}/>;
    case "Backlog":
        return <IoCaretBackCircle  style={{color:"skyblue"}}/> 
    default:
        return "--";
        
   }
 }
 const swit2=(priority)=>{
    switch (priority){
     case 0:
         return <BsThreeDots style={{color:"gray"}}/>;
     case 1:
         return <img style={{width:"11px"}} src={lowbar} alt='lowbar'/>;
     case 2:
         return <img style={{width:"11px"}} src={medbar} alt='lowbar'/>
     case 3:
         return <img style={{width:"11px"}} src={Fullbar} alt='fullbar'/>
     case 4:
        return <BsExclamationSquareFill style={{color:"#fc7840",width:"11px"}}/>
     default:
         return "--";
         
    }
  }



const Card = ({id, title, tag, status,priority}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase",fontSize:"14px"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={photo} alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 600}} >
            {/* {console.log(status)} */}
            <p className='flexit'><div style={{marginRight:"5px",marginLeft:"8px"}}>{swit(status)}</div><div style={{fontSize:"14px",marginLeft:"14px"}}>{title}</div></p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey" > {swit2(priority)} </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey flexit"><div style={{marginRight:"5px"}}> <GoDotFill/></div><div> {elem} </div></div>
                })
            }
        </div>
    </div>
  )
}

export default Card;

