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
      } catch(e) {
        console.log(e);
      }
    };

    fetchTopics();
    fetchPhotos();

  },[]);



  const fetchPhotos = async () => {
    try {
      const data = await fetch(`https://api.unsplash.com/topics/${activeTopicId}`, { headers: authHeader });
      let photosArr = await data.json();
      photosArr = photosArr.map((photoData:any) => photoData.cover_photo)
      setPhotos(photosArr);
      console.log(`fetchPhotos -> photos`, photos)
    } catch(e) {
      console.log(e);
    }
  };

  const toggleSideBar = () => {
    setSideBarActive(!sideBarActive);
  }

  // if(photos.length == 0 || topics.length == 0) {
  //   <ClipLoader/>
  // }
  return (
    <div className="App">
      <Header toggleMenu={toggleSideBar}/>
      <SideBar topics = {topics} sideBarActive={sideBarActive}/>
      <Grid photos = {photos} sideBarActive={sideBarActive}/>
    </div>
  );
}

export default App;
