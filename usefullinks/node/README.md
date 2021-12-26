https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_argv

https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
https://openweathermap.org/
https://www.npmjs.com/package/axios
https://nodejs.org/api/url.html#url_url_resolve_from_to
https://jscomplete.com/learn/node-beyond-basics/node-streams#what-exactly-are-streams
https://nodejs.org/docs/latest-v8.x/api/fs.html
https://node.readthedocs.io/en/latest/api/zlib/
https://zellwk.com/blog/publish-to-npm/
https://dev.to/bogicevic7/session-storage-vs-local-storage-vs-cookie-elc
https://supertokens.io/blog/cookies-vs-localstorage-for-sessions-everything-you-need-to-know
https://codepen.io/beaucarnes/pen/KmeRMx
https://www.youtube.com/watch?v=GihQAC1I39Q
https://developer.mozilla.org/en-US/docs/Web/API/FormData
https://jwt.io/introduction/

full slaxk wep app:
Full Stack Web App
To connect both React and NodeJs (ExpressJs) you need to follow these steps

$ npm init
or you can use the default initial by using

$ npm init -y
Then you need to install some packages

$ npm i express 
$ npm i nodemon --save-dev
$ npm i concurrently

For sure you need to create .gitignore , .env and then create folder server

To create React app you need to run, here we name our app clinet

$ npx create-react-app client
So your directory should look like

Project
│   README.md
|   .gitignore
|   .env
│   package.json
|   package-lock.json
└───server
│   |  server.js 
│   │  app.js
|   └───models
│   │
|   └───controllers
└───client
    │   README.md
    │   package.json
    |   package-lock.json
    └─── public
    |   
    └───src
        |   App.js
        |   index.js 
        └───sass
   
   
In package.json you need to add some scripts, where we run both front-end server and back-end server on the same time using concurrently package

"scripts": {
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently  \"npm run server\" \"npm run client\""
  }, 
In package.json on client directory we need to add proxy to fetch from our server

 "proxy": "http://localhost:5000"
Lastly you need to run

$ npm run dev
For farther steps refer to our live-coding example
