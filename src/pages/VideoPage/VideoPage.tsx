import React, {useState} from 'react';
import classNames from "classnames";

import './styles.scss';
import {VideoItem} from "./types";
import videos from "../../videos.json";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoList from "../../components/VideoList/VideoList";

const VideoPage: React.FC = () => {
  const [theater, setTheater] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<VideoItem>(videos[0]);

  return (
    <div
      className={
        classNames(
          'video-page',
          {'video-page--default': !theater},
          {'video-page--theater': theater}
        )
      }
    >
      <VideoPlayer theaterMode={theater} setTheaterMode={setTheater} currentVideo={currentVideo}/>
      <VideoList onVideoClick={setCurrentVideo}/>
    </div>
  );
};

export default VideoPage;