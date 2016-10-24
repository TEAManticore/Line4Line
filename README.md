# Line4Line

This app allows people to write a story together one line at a time -- with a twist. The user whose turn it is to write can only see the most previously written line in the story. This limited context makes for random stories that do not make sense but do make you laugh.

##Tech
- Node
- Express
- React
- Mongo
- Socket.io

##Features we wanted to add but didn't have time
- The current implementation of Socket.io only allows for one active story at a time. Look into channels to solve this.
- Use Socket to update the lobby when a new story is created.
- Allow users to create private stories that only their friends can join.
- A profile page where the user can see all the stories he/she contributed to.
- Invite your friends from Facebook.
- Share stories on Facebook.

#Starting It Up

```
npm install
```

Start up the Express server on port 8081 with `npm start`.

npm install webpack-dev-server@1.16.2 -g
npm install -g request
npm install --save-dev json-loader
npm install extract-text-webpack-plugin
npm install style-loader
npm install css-loader


##Starting up MongoDB
We recommend creating a folder on your desktop with the name of your db. Then cd to your desktop and run:
```
mongod --dbpath=./your-db-name --port=51707
```
From there you can open a new terminal tab and run:

```
mongo
```
The you can type `show dbs` to see all your databases. Then type `use line4line`.

##Webpack
```
npm run webpack
```
Running  `npm run webpack` will create a bundle in the `dist` folder. This folder is what gets served to the web browser. Unfortunately, you will have to run this command every time you update a React component then restart your Express server with `npm start`. Webpack does come with a dev-server that you can run with `npm run dev`. The webpack dev server quickly rebundles for you every time you save an edit. However, this dev server runs on port 8080 and will give you CORS errors when you try to login with Facebook. There is a way to get the Express server and webpack dev server to play together but we did not figure it out.
