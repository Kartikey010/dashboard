import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import { BiAdjust,BiCircle} from "react-icons/bi"
import {IoCaretBackCircle} from "react-icons/io5"
import {BsExclamationSquareFill,BsThreeDots} from "react-icons/bs"
import Fullbar from "../../assets/signal_cellular_4_bar_FILL0_wght400_GRAD0_opsz24.svg"
import medbar from "../../assets/signal_cellular_3_bar_FILL0_wght400_GRAD0_opsz24.svg"
import lowbar from "../../assets/signal_cellular_1_bar_FILL0_wght400_GRAD0_opsz24.svg"
import photo from "../../assets/photo.jpg"
import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  
  const Swi=( title)=>{
   switch(title){
    case "In progress":
      return <BiAdjust style={{color:"orange"}}/>;
    case "Todo":
      return <BiCircle style={{color:"gray"}}/>
    case "Backlog":
      return <IoCaretBackCircle style={{color:"skyblue"}}/>
    case "Urgent":
      return <BsExclamationSquareFill style={{color:"#fc7840"}}/>
    case "Medium":
      return <img src={medbar} style={{width:"15px"}}/>
    case "High":
      return <img src={Fullbar} style={{width:"15px"}}/>
    case "Low":
      return <img src={lowbar} style={{width:"15px"}}/>
    case "No priority":
      return <BsThreeDots/>
    default:
      return <img src={Fullbar} style={{width:"10px"}}/>
   }
  }
  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                   {/* {console.log(elem[index]?.title)} */}
                    {!user ? (
                      Swi(elem[index]?.title)                  
                      
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src={photo}
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <div>
                      {" "}
                      {elem[index]?.title} <span style={{color:"gray",marginLeft:"10px",fontSize:"12px"}}>{elem[index]?.value?.length}</span>
                    </div>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <BsThreeDots/>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {/* {console.log(elem[index])} */}
                  {elem[index]?.value?.map((elem, ind) => {
                     {console.log(elem)}
                    return (
                      
                      <Card id={elem.id} title={elem.title} tag={elem.tag} status={elem.status} priority={elem.priority} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
