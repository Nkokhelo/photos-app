import { useReducer } from "react";
import "./App.scss";
// import { css } from "@emotion/react";
import Grid from "./Components/Grid/Grid";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import { reducer } from "./Services/reduces";
import { initState } from "./Services/utils";

function App() {

  const [store, dispatch] = useReducer(reducer, initState)


  return (
    <div className="App">
      <Header dispatch={dispatch}/>
      <SideBar topics = {store.topics} sideBarActive={store.sideBarActive} activeTopicId={store.topicId} dispatch={dispatch} />
      <Grid photos = {store.photos} sideBarActive={store.sideBarActive} topicId={store.topicId} dispatch={dispatch} />
    </div>
  );
}

export default App;
