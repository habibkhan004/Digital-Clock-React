import { useEffect, useState } from "react";

let ClockTime = () => {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("hi");
    let timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <p>
      The Time is: {time.toLocaleTimeString()} - {time.toLocaleDateString()}
    </p>
  );
};

export default ClockTime;
