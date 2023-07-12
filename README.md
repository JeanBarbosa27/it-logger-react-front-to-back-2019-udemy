# IT Logger | React Front to Back 2019 | Udemy - Brad Traversy

This repository was created to follow the course React Front to Back 2019 from Udemy teached by Brad Traversy. For
studying purposes I just followed the layout and the application idea, but the implementation is completely different
once here I'm using TypeScript (in the course he uses JavaScript); I'm using the most recent Redux approach to
configure the store, using the hooks (in the course he uses the old approach, which has more boilerplate and also
`createStore` function from redux, which seems to be deprecated); and one last difference is that he uses the default
`create-react-app` CLI and I used Vite CLI.

## Technologies

- Vite
- React
- Redux
- TypeScript
- Json Server (to mock back-end)
- Materealize CSS
- Material Icons

## Dependencies

- Node: It must be at least 14.18+, 16+ or higher depending on the feature will be used from Vite, but it's
recommended always using the LTS verion.

## Run locally

To run the project locally just run in the terminal the command `npm run dev`, and it will setup both JSON Server and
React application. You can also run each of them separately by the following commands `npm run dev:server` and
`npm run dev:client` respectively.

## Deploy

There isn't any deploy for now.

## Roadmap of my own ideas

Each of these ideas will be created in separated branches stating by `roadmap/` and once the idea is completely
implemented, it'll be created a PR which will be merged into `main` branch, in order to have a more organized
history.

- [ ] Adapt back-end from JSON Server to have Node in TypeScript with Express and mongo to turn it into a MERN stack;
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
- [ ] Deploy it, maybe on Render or another with free tier;
