import React, { useEffect, useState } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

import "./TopNav.css";
import { useDispatch, useSelector} from "react-redux";
import { selectData } from "../../Actions/DataAction";

const getGroup = () => {
  // console.log(localStorage.getItem("group"));

  if(localStorage.getItem("group")){
    return localStorage.getItem("group");
  }else{
    return "status";
  }
}

const getOrder = () => {
  if(localStorage.getItem("order")){
    return localStorage.getItem("order");
  }else{
    return "priority";
  }
}
const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const {allTickets, allUser} = useSelector(state => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if(valueBool){
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    }else{
      setOrderValue(e.target.value);
    setDisplayOnClick(!displayOnClick);
    localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if(groupValue === 'user'){
      dispatch(selectData(groupValue, {
        allTickets, allUser
      }, orderValue))
    }else{
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);
 
  
  return (
    <div className="top-header" style={{paddingLeft : "10px"}}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          {/* <TiThList style={{marginRight:"7px"}}/> */}
          <img style={{marginRight:"7px",position:"relative",top:"2px",width:"19px"}} src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-config-ui-basic-anggara-basic-outline-anggara-putra.png" alt="external"/>
          <span style={{position: "relative", top: "-2px"}}> Display</span> {displayOnClick ?(<CgChevronDown/>):<CgChevronUp/>}
        </button>
        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span style={{color:"gray"}}>Grouping</span>
                <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle" name="group" id="group">
                  <option style={{fontSize:"12px"}} value="status">Status</option>
                  <option style={{fontSize:"12px"}} value="user">User</option>
                  <option style={{fontSize:"12px"}} value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span style={{color:"gray"}}>Ordering</span>
                <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                  <option style={{fontSize:"12px"}} value="priority">Priority</option>
                  <option style={{fontSize:"12px"}} value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
