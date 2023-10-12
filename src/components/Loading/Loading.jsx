import React from 'react';
import Loader from "react-js-loader";

const Loading = () => {
    return (

        <div  style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            
          }}>


            <Loader type="box-up" bgColor={"#4fa94d"} size={100} />
            <span
                style={{
                    color: "green",
                    fontWeight: "bolder",
                    letterSpacing: "2px",
                    position:"relative",
                    top:"-32px"
                }}
            >
                QuickSell
            </span>

        </div>

    )
}

export default Loading;

