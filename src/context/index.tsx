import React from "react";
import StoryContext from "./StoryContext";
import storyMetadata from "../data/stories";


function Stories({ children }: { children: React.ReactNode }) {

    return (
        <StoryContext.Provider value={{ ...storyMetadata }}>
            {children}
        </StoryContext.Provider>
    );
}

export default Stories;