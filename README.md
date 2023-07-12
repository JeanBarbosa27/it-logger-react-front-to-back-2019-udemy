# IT Logger | React Front to Back 2019 | Udemy - Brad Traversy

This repository was created to follow the course React Front to Back 2019 from Udemy teached by Brad Traversy. For
studying purposes I just followed the layout and the application idea, but the implementation is completely different
once here I'm using TypeScript (in the course he uses JavaScript); I'm using the most recent Redux approach to
configure the store, using the hooks (in the course he uses the old approach, which has more boilerplate and also
`createStore` function from redux, which seems to be deprecated); and one last difference is that he uses the default
`create-react-app` CLI and I used Vite CLI.

## Technologies

- Node
- Express
- MongoDB
- Vite
- React
- Redux
- TypeScript

## Dependencies

Below you can see the list of dependencies used in this project which you must install in order to run it.

### Node

It's the only one which must be installed in your machine before being able to install the other ones, once they
require `npm` to be installed. Considering that `Vite` is being used as a `client` dependency and
[its documentation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), at the moment this files was
updated, at minimum Node on version 14.18+, 16+ or higher for some features, it's recommended to use the current LTS
version of it.

### Client

In order to install client dependencies, go to `/client` folder via terminal and run `npm install` or `npm i`. The
dependencies for this folder are:

- Vite
- React
- Redux
- TypeScript
- Json Server (to mock back-end)
- Materealize CSS
- Material Icons

### Server

In order to install server dependencies, go to `/server` folder via terminal and run `npm install` or `npm i`. The
dependencies for this folder are:

- TypeScript
- Express
- Mongoose
- Nodemon

## Run locally

To run the project locally you need to go to open one terminal for each folder `/client` and `/server` and run
`npm run dev` in each of them. On `/client` it'll setup React application through Vite and on `/server` it'll setup a
Node server with Express to serve as an API connected with a MongoDB.

## Deploy

There isn't any deploy for now.

## Roadmap of my own ideas

Each of these ideas will be created in separated branches stating by `roadmap/` and once the idea is completely
implemented, it'll be created a PR which will be merged into `main` branch, in order to have a more organized
history.

- [ ] Adapt back-end from JSON Server to have Node in TypeScript with Express and mongo to turn it into a MERN stack;
- [ ] Add automated tests for the back-end;
- [ ] Add mobile first approach;
- [ ] Add history for each log, which should be increased each time the user updates it after it has been created;
- [ ] Add "Show details" to each history item, which should go to another page and show all that was in the log on that moment;
- [ ] Add a description field () to the log form, which should be optional to fill, to explain deeper the problem / solution;
- [ ] Abstract both forms from add and edit log to a new component, which can be used by both;
- [ ] Show alerts for errors;
- [ ] Add a new button to keep adding more logs / techs without closing the modal;
- [ ] Add a check box to delete in batch for logs and techs lists;
- [ ] Add filter by date (from / to);
- [ ] Add filter by requires attention;
- [ ] Add filter by technician;
- [ ] Add order by field with asc and desc (tech, date,);
- [ ] Add register / login / logout features;
- [ ] Add favicon;
- [ ] Add automated tests for the front-end;
- [ ] Deploy it, maybe on Render or another with free tier;
