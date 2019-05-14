# ThisAndThat

## Instructions
1. Clone repo;
2. ```npm run install``` to install dependencies;
3. ```npm run dev``` to launch servers (client on port 3000 and server on port 5000);

## Introduction
This is a Todo app made with React (using create-react-app) in the frontend with a Koa.js backend serving as a database/api.

## Client side
The app is made with React + Redux + React Router and following the presentational/container component strategy where relevant.
All components are functional (vs class based) and react-hooks are used where additional state control is required.
SCSS is used for styles

## Server side
A Node.js + Koa.js + GraphQL is used as a DB and api for the todo list.

## Self critique
Well... I made a huge mistake by not starting simple and then adding features/technologies. My main regret is adding a GraphQL
backend to the mix and thus creating additional problems to solve which I did not have time for. In my mind the task was
too simple to do without arbitrarily adding unnecessary features technology-wise. I was wrong.

## If I had to do it again
If I would make this app for myself, I would try to survive with just localstorage, no GraphQL or other persistent DB storage.
Use ContextAPI instead of Redux (I knew Redux was overkill, but it's so wide spread I figured it would be better to show I
can use it). Spend more time on UX (add color options and animations). In general create a perfectly working simple app
and then add fancy additional stuff.

## Final thoughts
It is what it is. However disappointed I am at myself and however many improvements I can think of
it's still an undeniable reflection of my current abilities.

## Disclaimer
My girlfriend helped with the design, she offered her view on how it could look and made the SVGs for me.
