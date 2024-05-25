import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </div>
  );
}

export default App;
