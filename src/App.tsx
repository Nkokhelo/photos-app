import { useEffect, useState } from "react";
import "./App.scss";
// import { css } from "@emotion/react";
import Grid from "./Components/Grid/Grid";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import { Photo, Topic } from "./Utils/interfaces";
import { authHeader } from "./Utils/utils";
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [topics, setTopics] = useState<Topic[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [activeTopicId, setActiveTopicId] = useState<string>("");
  const [sideBarActive, setSideBarActive] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await fetch(`https://api.unsplash.com/topics`, { headers: authHeader });
        const topicsArr = await data.json();
        setTopics(topicsArr);
        setActiveTopicId(topicsArr[0].id)
        fetchPhotos(topicsArr[0].id);
      } catch(e) {
        console.error(e);
      }
    };

    fetchTopics();
  },[]);



  const fetchPhotos = async (topicId:string) => {
    try {
      const data = await fetch(`https://api.unsplash.com/topics/${topicId}/photos`, { headers: authHeader });
      const topicData = await data.json();
      setPhotos(topicData);
    } catch(e) {
      console.error(e);
    }
  };

  const toggleSideBar = () => {
    setSideBarActive(!sideBarActive);
  }

  const setTopic = (topicId:any) => {
    setActiveTopicId(topicId)
    fetchPhotos(topicId);
  }

  return (
    <div className="App">
      <Header toggleMenu={toggleSideBar}/>
      <SideBar topics = {topics} sideBarActive={sideBarActive} activeTopicId={activeTopicId} selectTopic={setTopic} />
      <Grid photos = {photos} sideBarActive={sideBarActive}/>
    </div>
  );
}

export default App;
