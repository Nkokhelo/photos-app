import { Photo, Topic } from "./interfaces"

export type sideBarProps = {
  topics : Topic[],
  sideBarActive : boolean
}

export type gridProps = {
  photos : Photo[],
  sideBarActive: boolean;
}
