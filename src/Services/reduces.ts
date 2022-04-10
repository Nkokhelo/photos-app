import { Action, State, Type } from "./interfaces";


export function reducer(state: State, action: Action): State {

  const stateData = action.stateData;
  switch(action.type) {
    case Type.sidebarToggle: 
      return { ...state, sideBarActive : !state.sideBarActive }
    case Type.updatePhotos: 
      return { ...state, photos: stateData.photos }
    case Type.updateTopics: 
      return { ...state, topics: stateData.topics }
    case Type.changeTopicId:
      return { ...state, topicId: stateData.topicId }
    default: 
      return state; 
  }
}