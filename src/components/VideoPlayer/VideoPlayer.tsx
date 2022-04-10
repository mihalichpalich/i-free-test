import React, {useRef, useEffect} from 'react';
import classNames from "classnames";

import './styles.scss';
import {PlayerProps} from "./types";
import fullscreenIcon from '../../assets/fullscreen.svg';
import theaterModeIcon from '../../assets/theater-mode.svg';

const VideoPlayer: React.FC<PlayerProps> = ({theaterMode, setTheaterMode, currentVideo}) => {
  const videoRef = useRef(null as HTMLVideoElement | null);

  useEffect(() => {
    console.log('currentVideo', currentVideo);
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
      <video ref={videoRef} className="video-player__item" src={currentVideo.url} autoPlay muted/>
      <div className="video-player__controls">
        <div className="video-player__controls-wrapper">
          <img
            src={theaterModeIcon}
            alt="theater-mode"
            className="video-player__controls-icon"
            onClick={() => videoHandler('theater')}
          />
          <img
            src={fullscreenIcon}
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