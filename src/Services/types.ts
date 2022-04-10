import { Dispatch } from "react"
import { Action, Photo, Topic } from "./interfaces"

export type sideBarProps = {
  topics? : Topic[],
  activeTopicId?: string,
  dispatch: Dispatch<Action>
  sideBarActive? : boolean
}

export type gridProps = {
  topicId? : string,
  photos? : Photo[],
  sideBarActive?: boolean;
  dispatch:  Dispatch<Action>
}
