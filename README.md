# Full-stack Engineer: Frontend Challenge

[Confluence documentation](https://tokyotreat.atlassian.net/wiki/external/1591017766/NjE3MzhkNWMyNjU2NDg2ZmIxM2Y1YmRiODc1ZDJmZDg)

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

## Thoughts

### Dynamic Color change

-   I made the Box component, stateless and just receives props such as color for its background and an onClick function that changes the color of all the boxes.
-   It's parent component, App, has the color state and the functions itself. Clicking on the Box component just triggers the function and does the color state change.

### Display Behavior and responsive web design

-   I've combined using flex and grid display to achieve the layout.
