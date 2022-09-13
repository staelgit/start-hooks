import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
   const inputPef = useRef();
   const handleClick = () => {
      inputPef.current.focus();
      console.log("inputPef", inputPef.current);
   };
   const handleClickWidth = () => {
      inputPef.current.style.width = "350px";
   };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
           <Divider />
           <label htmlFor="email" className="form-label">Email</label>
           <input type='email' className="form-control" id="email" ref={inputPef}/>
           <button className="btn btn-primary" onClick={handleClick}>кнопочка</button>
           <button className="btn btn-secondary" onClick={handleClickWidth}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
