import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = ({target}) => {
  const [counterOn, setcounterOn] = useState(false);

  return(
    <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(false)}>
      <div>
        {counterOn && <CountUp start={0}  end={target} duration={2} delay={0}/>}
        +
      </div>
    </ScrollTrigger>
  );
};

export default Counter;