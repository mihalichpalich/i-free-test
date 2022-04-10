import React, {useRef, useEffect} from 'react';
import classNames from "classnames";

import './styles.scss';
import {PlayerProps} from "./types";

const VideoPlayer: React.FC<PlayerProps> = ({theaterMode, setTheaterMode, currentVideo}) => {
  const videoRef = useRef(null as HTMLVideoElement | null);

  useEffect(() => {
    videoRef?.current?.play();
  }, [currentVideo]);

  const videoHandler = (control: 'theater' | 'fullscreen') => {
    if (control === 'fullscreen' && videoRef.current) {
      const ref = videoRef.current;
      ref.requestFullscreen();
    } else {
      setTheaterMode(!theaterMode);
    }
  };

  return (
    <div
      className={
        classNames(
          'video-player',
          {'video-player--default': !theaterMode},
          {'video-player--theater': theaterMode}
        )
      }
    >
      <video ref={videoRef} className="video-player__item" src={currentVideo.url}/>
      <div className="video-player__controls">
        <div className="video-player__controls-wrapper">
          <img
            src="/theater-mode.svg"
            alt="theater-mode"
            className="video-player__controls-icon"
            onClick={() => videoHandler('theater')}
          />
          <img
            src="/fullscreen.svg"
            alt="fullscreen"
            className="video-player__controls-icon"
            onClick={() => videoHandler('fullscreen')}
          />
        </div>
      </div>
      <h1 className="video-player__title">{currentVideo.title}</h1>
    </div>
  );
};

export default VideoPlayer;