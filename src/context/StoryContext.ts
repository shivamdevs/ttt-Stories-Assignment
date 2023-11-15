import React from "react";
import storyMetadata from "../data/stories";

export type StorySetter<T> = (key: keyof T, value: string) => void;

export type StoryContextValue = typeof storyMetadata;


const StoryContext = React.createContext<StoryContextValue>({ ...storyMetadata });

export default StoryContext;
