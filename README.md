# Full-stack Engineer: Frontend Challenge

-   my step by step solution on this challenge can be seen as git commits in the `develop` branch in this project

## Set up

1. Created a ReactJS application using `create-react-app` with TypeScript

    ```
    npx create-react-app ichigo-fe --template typescript
    ```

    - ran `npm start` to run the app in development mode

2. Pushed initial codebase to github

    ```
    git remote add origin git@github.com:xyzarivera/ichigo-fe.git
    git branch -M main
    git push -u origin main
    ```

    - created a new branch, `develop`

3. Created `.eslintrc.js` for eslint rules, especially for TypeScript

## Thought Process

-   I decided to create a reusable stateless component for the boxes that can be customed based on the given behavior and layout

### Dynamic Color change

-   created a stateless Box component, `Box.tsx` that receives these props: `color`, `onClick`, `gridArea`
    -   `onClick` is a callback function that excutes when the Box component is cliked
    -   `color` is a string for the hex color of the box component
    -   `gridArea` is a string for the CSS grid-area name for that specific Box component
-   These props are supplied by the state of its parent component, `App.tsx`
    -   `changeColors` function is the supplied callback function to the Box component
    -   `colors` is an array of hex colors generated from the `changeColors`, initially by `generateColors` on render

### Display Behavior and responsive web design

-   Initially, I thought using CSS Flex would suffice but based on the given layout, using also CSS Grid can be easier to implement the given design. It also makes the box sizes uniform.

## Demo

[Link to Demo](https://luminous-cascaron-01796f.netlify.app/)

-   I tried using CodeSandbox to host my demo, however, it sends me an CORS issue. It maybe because of my project set up, but to time constraints, I decided to host my demo in Netlify.
