import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
   const [data, setData] = useState({});
   const withOutCallBack = useRef(0);
   const withCallBack = useRef(0);
   const handleChange = ({ target }) => {
      setData(prevState => ({ ...prevState, [target.name]: target.value }));
   };

   const validateWithOutCallBack = (data) => {
      console.log("data WithOutCallBack", data);
   };
   useEffect(() => {
      withOutCallBack.current += 1;
   }, [validateWithOutCallBack]);

   const validateWithCallBack = useCallback((data) => {
      console.log("data WithCallBack", data);
   }, []);
   useEffect(() => {
      withCallBack.current += 1;
   }, [validateWithCallBack]);

   useEffect(() => {
      validateWithOutCallBack(data);
      validateWithCallBack(data);
   }, [data]);

   return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
           <Divider />
           <p>Render without callback {withOutCallBack.current}</p>
           <p>Render wit callback {withCallBack.current}</p>
           <label htmlFor="email" className="form-label">Email</label>
           <input type='email' className="form-control" name="email" id="email" onChange={handleChange} value={data.email || ""}/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
