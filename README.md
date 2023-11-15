# Stories | Terribly Tiny Tales

Assignment submitted by [Shivam Dewangan](https://myoasis.tech) to [Terribly Tiny Tales](https://www.terriblytinytales.com/).

> Please read [Notice](#notice---on-ai-usage) for usage of AI before anything else.

> NOTE: Each post is clickable and opens a new post url.

## Preview

This assignment project is hosted on [Netlify](https://ttt-stories.netlify.app/).

The same can be viewed on [https://ttt-stories.netlify.app](https://ttt-stories.netlify.app/).

### Desktop Preview Image

![TTT Desktop Preview Image](https://ttt-stories.netlify.app/images/ttt-desktop.png)

### Mobile Device Preview Image

![TTT Mobile Preview Image](https://ttt-stories.netlify.app/images/ttt-mobile.png)

## Stories Profile Data

The stories profile data is hardcoded and the posts are generated using [OpenAI's ChatGPT](https://chat.openai.com/).

The same can be found at: `/src/data/stories.ts`

## Development environment

[Vite](https://vitejs.dev/) has been used as a frontend development environment, with [ReactJS](https://react.dev/) as the Javascript Frontend Library and [Typescript](https://www.typescriptlang.org/) as a type safe tool and [TailwindCSS](https://tailwindcss.com/) and [Sass](https://sass-lang.com/) as styling tools.

Why these tools?

- Vite - It's faster than [create-react-app](https://create-react-app.dev/) in terms of both development and production build.
- TypeScript - It extends JavaScript and provides type safety during development which reduces the number of bugs delivered in production.
- TailwindCSS - It helps in delivering less CSS to the production build and has simplified utility classes for faster use and easy to remember.
- Sass - It simplifies the usage of CSS and removes the hassle of elaborated query nesting.

### Additional packages

- [react-router-dom](https://reactrouter.com/) - Provides Routing between URLs giving accessibility to Single Page Applications.
- [lucide-react](https://lucide.dev/) - A react icons library with multiple icons and customization.
- [moment](https://momentjs.com/) - JavaScript package to parse time and convert into multiple output formats.
- [classnames](https://jedwatson.github.io/classnames/) - Combines multiple classes and also gives option to add conditional classes with much ease.
- [tailwind-merge](https://npmjs.com/package/tailwind-merge) - Helps with conflicts between two same tailwind utilities.

## Project structure

### Components

- `/src/components/FlatButton.tsx` - Flat button used in `<Header />`. Increases Reusability (while never used again).
- `/src/components/Follows.tsx` - Renders a Followers or Following count, nothing much.
- `/src/components/Footer.tsx` - The `<Footer />` of the App.
- `/src/components/Header.tsx` - The `<Header />` of the App.
- `/src/components/Icon.tsx` - Renders `lucide-icons` with provided bg, color and size.
- `/src/components/PostBody.tsx` - Renders the blog list at the posts section in home page.
- `/src/components/ProfileCover.tsx` - Renders the Profile data of the user.

### Context

- `/src/context/index.tsx` - Creates an Context JSX.Element to be used as a part of Context API.
- `/src/context/StoryContext.ts` - Provides the Context API export.
- `/src/context/useStories.ts` - Simplifies the usage of the ContextAPI.

### Data

- `/src/data/stories.ts` - Hardcoded data for the whole application.

### Layout

- `/src/layout/Posts.tsx` - Renders the posts section in the homepage.
- `/src/layout/PostContent.tsx` - Renders the blog post at the `/posts/:post_id` URL path.
- `/src/layout/NotFound.tsx` - Renders a Not found page in all exceptions.

### Types

Provides Types and Interfaces for different Variables used in the project.

### Utility functions

Helps in simplifying the basic JavaScript calculations.

- `/src/util/parseCount.ts` - Converts the numbers to strings suffixed with 'K' or 'M'.
- `/src/util/parseDate.ts` - Parses the `timestamp` into a much readable string using `moment` package.

### Main app

- `/src/main.tsx` - Provides the entrypoint for the whole application.
- `/src/App.tsx` - Defines the routing and fail-safe of the application.

## Notice - on AI Usage

Some features of the project including `hardcoded json data` and `utility functions` are generated by [OpenAI's ChatGPT](https://chat.openai.com/).

> We all know that some lines of codes can never be remembered. Like most of the developers don't know how to hide `input[type=search]`'s `X` icon or the `arrows` in the `input[type=number]` or how to remove special characters using `regex`.

AI is there to help use but we should not become depended on it.

Other than those two parts and some other lines of codes most of the features was incorporated by me. I can explain all the codes if required.

## Help and References

- [Google](https://www.google.com/)
- [OpenAI's ChatGPT](https://chat.openai.com/)
- [StackOverFlow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/)

## Submitted by

**Shivam Dewangan**

Phone no.: [+91 97544 73453](tel:9754473453)

Email address: [shivamsubam@gmail.com](mailto:shivamsubam@gmail.com)

Portfolio: [MyOasis Tech](https://myoasis.tech/)

LinkedIn: [shivamdewangan](https://www.linkedin.com/in/shivamdewangan/)

University: [Lovely Professional University](https://lpu.in/)

Uni. Roll no.: **12017103**


[©](/src/vite-env.d.ts)