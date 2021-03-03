import React, { useRef } from "react";

import "./ResizeBoard.css";

type RisezeBoardProps = {
  children: any
};

const RisezeBoard: React.FC<RisezeBoardProps> = ({ children }): JSX.Element => {
  const fullscreenElement = useRef<HTMLDivElement | null>(null);
  function handleFullScreen() {
    let doc: any = window.document;
    let docEl: any = fullscreenElement.current|| doc.documentElement;

    let requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    let cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  }
  return (
    <div ref={fullscreenElement} className="fullscreen">
      <div className="fullscreen__wrapper">
        {children}
        <div className="fullscreen__btn" onClick={handleFullScreen}></div>
      </div>
    </div>
  );
};
export default RisezeBoard;