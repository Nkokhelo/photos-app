import { sideBarProps } from "../../Utils/types";
import "./SideBar.scss";

function SideBar({
  topics,
  sideBarActive,
  selectTopic,
  activeTopicId
}: sideBarProps) {
  
  
  return (
    <div className={`sidebar ${sideBarActive ? "active" : ""}`}>
      <ul>
        {topics.map((topic) => (
          <li
            key={topic.id}
            className={`${activeTopicId === topic.id ? "active" : ""}`}
            onClick={() => {selectTopic(topic.id)}}
          >
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
