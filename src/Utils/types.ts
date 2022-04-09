import { Photo, Topic } from "./interfaces"

export type sideBarProps = {
  topics : Topic[],
  activeTopicId: string,
  selectTopic:any
  sideBarActive : boolean
}

export type gridProps = {
  photos : Photo[],
  sideBarActive: boolean;
}
