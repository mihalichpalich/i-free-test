import React from 'react';

import videos from '../../videos.json';
import './styles.scss';
import {ListProps} from './types';

const VideoList: React.FC<ListProps> = ({onVideoClick}) => {
  return (
    <div className="video-list">
      {
        videos.slice(1).map((video) => (
          <div className="video-list__item" key={video.id} onClick={() => onVideoClick(video)}>
            <video src={video.url} className="video-list__item-video" />
            <span className="video-list__item-title">{video.title}</span>
          </div>
        ))
      }
    </div>
  );
};

export default VideoList;