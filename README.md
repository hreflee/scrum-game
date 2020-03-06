# scrum-game ([online demo](https://hreflee.github.io/scrum-game/))

## Project setup
You should have `nodejs` >= 10.0 on your computer. And have installed `yarn` `@vue/cli` with npm.


* Develop

```
yarn install
yarn serve
```

* Build

```
yarn install
yarn serve
```

### Project structure
[A brief system design](https://drive.google.com/file/d/13cq_dwREi-ScT4ablY6bY8jX3foHvQpk/view?usp=sharing)
```text
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── Game                         --- the folder for Game system 
│   │   ├── DAO.js                   --- model of Game system
│   │   └── index.js                 --- APIs of Game system
│   ├── TaskMgr                      --- the folder for TaskMgr system 
│   │   ├── DAO.js                   --- model of TaskMgr system
│   │   └── index.js                 --- APIs of TaskMgr system
│   └── View
│       ├── assets
│       │   └── logo.png
│       ├── components
│       │   └── xxx.vue
│       ├── store
│       │   ├── index.js
│       │   └── fsm.js
│       ├── app.vue                  --- page frame
│       └── main.js                  --- entry of view
├── babel.config.js
├── package.json
├── postcss.config.js
├── README.md
├── vue.config.js
└── yarn.lock
```

### Code style
1. JavaScript version: ES6
2. Try to follow ESLint rule
