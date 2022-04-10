import {VideoItem} from "../../pages/VideoPage/types";

export interface ListProps {
  onVideoClick: (video: VideoItem) => void;
}