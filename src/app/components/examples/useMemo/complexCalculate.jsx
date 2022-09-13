import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
   return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
   console.log("run Factorial");
   return factorial(n);
}

const ComplexCalculateExample = () => {
   const [value, setValue] = useState(100);
   const [otherState, setOtherState] = useState(false);

   const buttonColor = otherState ? "primary" : "danger";
   useEffect(() => {
      console.log("render button color");
   }, [buttonColor]);

   const fact = useMemo(() => runFactorial(value), [value]);
   return (
      <>
         <CardWrapper>
            <SmallTitle>Кэширование сложных вычислений</SmallTitle>
            <p>value {value}</p>
            <p>Result fact {fact}</p>
         </CardWrapper>
         <button className="btn btn-primary mx-2"
                 onClick={() => setValue(prevState => prevState + 10)}
         >
            Increment
         </button>
         <button className="btn btn-primary mx-2"
                 onClick={() => setValue(prevState => prevState - 10)}
         >
            Decrement
         </button>
         <CardWrapper>
            <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            <button className={`btn btn-${buttonColor} ms-md-2`}
                    onClick={() => setOtherState(prevState => !prevState)}
            >
               поменять цвет
            </button>
         </CardWrapper>

      </>
   );
};

export default ComplexCalculateExample;
