import "./Grid.scss";
import { gridProps } from "../../Utils/types";
import { useRef } from "react";

function Grid({ photos }: gridProps) {
  const wrapperEl = useRef<HTMLDivElement>(null);

  function next() {
    wrapperEl.current!.scrollLeft +=getGridDivWidth();
    getGridDivWidth();
  }

  function prev() {
    wrapperEl.current!.scrollLeft -=getGridDivWidth();
    getGridDivWidth();
  }

  function getGridDivWidth() {
    return wrapperEl.current!.querySelector<HTMLDivElement>('.grid div')!.scrollWidth+30;
  }


  return (
    <div className="wrapper" ref={wrapperEl}>

      <div className="grid" >
        {photos.concat(...photos, ...photos).map((photo, index) => (
          <div key={index} tabIndex={index}>
            <img
              src={photo.urls.full}
              width="100"
              height="100"
              alt={photo.description}
            />
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className="prev" onClick={prev}>Prev</button>
        <button className="next" onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default Grid;
