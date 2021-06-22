
import MyFirstComponent from "./Components/01-intro/MyFirstComponent";
import MySecondComponent from "./Components/01-intro/MySecondComponent";
import MyMain from "./Components/02-Parent-Child/MyMain";
import Parent from "./Components/03-Props/01-Simple/Parent";
import PropsWithDifferentTypes from "./Components/03-Props/02-Intermediate/PropsWithDifferentTypes";
import FirstContactCard from "./Components/03-Props/03-ContactCard/FirstContactCard";
import Album from "./Components/03-Props/static/Album";
import ClassClock from "./Components/04-LifeCycle/ClassClock";
// import DifferentStates from "./Components/05-States/DifferentStates";
import Counter from "./Components/05-States/AddingState/Counter";
import UncontrolledInput from './Components/06-Forms/UncontrolledInput';
import ControlledInput from "./Components/06-Forms/ControlledInput";
import SearchList from "./Components/07-LiftingStates/SearchStates/SearchList";
import FunctionClock from "./Components/08-Hooks/FunctionClock";
import Director from "./Components/09-Routing/Director";
import DataRequestExample from "./Components/10-Data-Requests/DataRequestExample";

const App =()=> {
  const date = new Date().toLocaleTimeString();
  return (
    <div className="container">

      <h1>APPP says the time is {date}</h1>
      {/* <MyFirstComponent/> */}
      {/* <MySecondComponent/> */}
      {/* <MyMain/> */}
      {/* <Parent/> */}
      {/* <PropsWithDifferentTypes/> */}
      {/* <FirstContactCard/> */}
      {/* <Album/> */}
      {/* <ClassClock/> */}
      {/* <DifferentStates/> */}
      {/* <Counter/> */}
      {/* <UncontrolledInput/> */}
      {/* <ControlledInput/> */}
      {/* <SearchList/> */}
      {/* <FunctionClock/> */}
      {/* <Director/> */}
      <DataRequestExample/>


     
    </div>
  );
}

export default App;
