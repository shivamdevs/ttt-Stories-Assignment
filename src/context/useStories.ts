import React from "react";
import StoryContext, { StoryContextValue } from "./StoryContext";

export default function useStories(): StoryContextValue {
    const context = React.useContext(StoryContext);
    if (!context) throw new Error("Unable to access Stories Context API.");
    return context;
}