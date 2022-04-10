import {VideoItem} from "../../pages/VideoPage/types";

export interface PlayerProps {
  currentVideo: VideoItem;
  theaterMode: boolean;
  setTheaterMode: (value: boolean) => void;
}