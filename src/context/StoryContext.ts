import React from "react";
import storyMetadata from "../data/stories";
import StoryType from "../types/Stories";

export type StoryContextValue = StoryType;


const StoryContext = React.createContext<StoryContextValue>({ ...storyMetadata });

export default StoryContext;
