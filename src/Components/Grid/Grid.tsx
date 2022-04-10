import "./Grid.scss";
import { gridProps } from "../../Services/types";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import HashLoader from "react-spinners/HashLoader";
import { authHeader } from "../../Services/utils";
import { Type } from "../../Services/interfaces";


function Grid({ photos, sideBarActive, topicId, dispatch}: gridProps) {
  const gridEl = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if(topicId === '' || !topicId) return;
    const fetchPhotos = async (topicId?:string) => {
      try {
        const data = await fetch(`https://api.unsplash.com/topics/${topicId}/photos`, { headers: authHeader });
        const photoArr = await data.json();
        dispatch({ type: Type.updatePhotos, stateData: {photos: photoArr} })
      } catch(e) {
        console.error(e);
      }
    };
  
    fetchPhotos(topicId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[topicId]);


  function next() {
    gridEl.current!.scrollLeft +=getGridDivWidth()
  }
  
  function prev() {
    gridEl.current!.scrollLeft -=getGridDivWidth()
  }

  function getGridDivWidth() {
    const gridItems = gridEl.current!.querySelector<HTMLDivElement>('.grid span')!;
    return gridItems.offsetWidth+15;
  }

  if(!photos || photos.length === 0) {
    return (
      <div className={`gridComponent ${sideBarActive? 'inactive':''} loading`}>
          <HashLoader/>
      </div>
    )
  }
  return (
    <div className={`gridComponent ${sideBarActive? 'inactive':''}`}>
      <div className="grid" ref={gridEl}>
        {photos.map((photo, index) => {
          return (
            <LazyLoadImage 
             effect="blur"
             key={index}
             src={photo.urls.small}
             alt={photo.description}
             width="100%"
             height="100%"
             placeholder={<h1>Loading..</h1>}
             />
           )
        })}
      </div>

      <div className="buttons">
        <button title="leftButton" className="prev" onClick={prev}>
          <CgArrowLeft className="buttonIcon"/>
        </button>
        <button title="rightButton" className="next" onClick={next}>
          <CgArrowRight className="buttonIcon"/>
        </button>
      </div>
    </div>
  );
}

export default Grid;
