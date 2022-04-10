import { useEffect } from "react";
import { Type } from "../../Services/interfaces";
import { sideBarProps } from "../../Services/types";
import { authHeader } from "../../Services/utils";
import "./SideBar.scss";

function SideBar({ topics, sideBarActive, activeTopicId, dispatch }: sideBarProps) {
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await fetch(`https://api.unsplash.com/topics`, { headers: authHeader });
        const topicsArr = await data.json();
        dispatch({ type: Type.changeTopicId, stateData: {topicId: topicsArr[0].id} })
        dispatch({ type: Type.updateTopics, stateData: {topics: topicsArr} })
      } catch(e) {
        console.error(e);
      }
    };

    fetchTopics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(!topics) {
    return <h4>Loading...</h4>
  }
  
  return (
    <div className={`sidebar ${sideBarActive ? "active" : ""}`}>
      <ul>
        {topics!.map((topic) => (
          <li
            key={topic.id}
            className={`${activeTopicId === topic.id ? "active" : ""}`}
            onClick={() => {dispatch({ type: Type.changeTopicId, stateData: {topicId: topic.id} })}}
          >
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
