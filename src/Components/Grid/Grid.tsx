import "./Grid.scss";
import { gridProps } from "../../Utils/types";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import HashLoader from "react-spinners/HashLoader";


function Grid({ photos, sideBarActive }: gridProps) {
  const gridEl = useRef<HTMLDivElement>(null);

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

  if(photos.length === 0) {
    return (
      <div className={`gridComponent ${sideBarActive? 'inactive':''} loading`}>
          <HashLoader/>
      </div>
    )
  }
  return (
    <div className={`gridComponent ${sideBarActive? 'inactive':''}`}>
      <div className="grid" ref={gridEl}>
        {photos.concat(...photos, ...photos, ...photos).map((photo, index) => (
         <LazyLoadImage 
          effect="blur"
          key={index}
          src={photo.urls.full}
          alt={photo.description}
          width="100"
          height="100"
          />
        ))}
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
