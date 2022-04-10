export declare interface Topic {
  id : string;
  slug : string;
  title : string;
}

export declare interface Photo {
  id : string;
  description: string;
  urls : {
    small : string
  };
}

export declare interface Action {
  type : Type,
  stateData : State
}

export declare interface State {
  topicId? : string,
  sideBarActive?: boolean,
  topics? : Topic[],
  photos? : Photo[]
}


export enum Type {
  sidebarToggle  = 'sidebarToggle',
  updatePhotos = 'updatePhotos',
  updateTopics = 'updateTopics',
  changeTopicId = 'changeTopicId'
}
