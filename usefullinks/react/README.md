https://techaffinity.com/blog/mvc-architecture-benefits-of-mvc/
https://reactjs.org/
https://create-react-app.dev/
https://web.dev/add-manifest/
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
https://developer.mozilla.org/en-US/docs/Glossary
https://reactjs.org/tutorial/tutorial.html
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application/
https://github.com/FBw-26/react-project-temp
https://www.freecodecamp.org/news/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56/
https://regex101.com/r/yWrgA9/2/
https://medium.com/@isharamalaviarachchi/how-to-deploy-your-react-app-into-github-pages-b2c96292b18e
https://levelup.gitconnected.com/componentdidmakesense-react-lifecycle-explanation-393dcb19e459
https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
https://www.digitalocean.com/community/tutorials/react-axios-react
https://developer.paypal.com/docs/checkout/
https://css-tricks.com/learning-react-router/
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
https://www.youtube.com/watch?v=qrsle5quS7A&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_
https://redux.js.org/introduction/getting-started
https://dev.to/hemanth/explain-redux-like-im-five
https://redux.js.org/introduction/examples
https://react-redux.js.org/api/connect
https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab
https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
https://www.freecodecamp.org/news/learn-the-basics-of-react-hooks-in-10-minutes-b2898287fe5d/
https://github.com/Fbw-48/lessons/blob/main/REDUX-README.md

create React App from scratch First step
$ npm init
or you can use the default initial by using

$ npm init -y
then you need to install some packages

$ npm i react
$ npm i react-dom
$ npm i react-scripts
$ npm i node-sass --save
for sure you need to create .gitignore and then create folders (src, public) so your directory should look like

Project
│   README.md
│   package.json
|   package-lock.json
└───public
│   └───index.html
└───src
    │   index.js
    └───js
    |   └───App.js
    └───scss
        └───main.scss
            _body.scss
            _var.scss
            
   
Remember to add the important scripts to your package.json

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
