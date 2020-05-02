STEP 1:
- Install webpack: $ npm install webpack -g

STEP 2:
- A typical Jekyll folder structure
```
.
├── _config.yml
├── _includes
│ ├── …
├── _layouts
│ ├── default.html
│ ├── page.html
│ └── post.html
├── _posts
│ ├── …
├── _sass
│ ├── _base.scss
│ ├── _layout.scss
│ └── _syntax-highlighting.scss
├── about.md
├── css
│ └── main.scss
├── feed.xml
└── index.html
```

The structure for webpack with react
```
.
├── _config.yml
├── package.json
├── public
│ ├── …
├── src
│ ├── _includes
│ │ ├── …
│ ├── _layouts
│ │ ├── default.html
│ │ ├── page.html
│ │ └── post.html
│ ├── _posts
│ │ ├── …
│ ├── _sass
│ │ ├── …
│ ├── about.md
│ ├── assets
│ │ ├── css
│ │ ├── images
│ │ └── js
│ │ └── bundle.js
│ ├── feed.xml
│ └── index.html
├── webpack
│ ├── entry.js
│ └── components
│ └── …
└── webpack.config.js
```   

STEP 3:
- npm won’t install your modules unless it can find a `package.json` in your root with a recognizable object (i.e. the file cannot be blank). Create the file with `$ touch package.json` and add an empty json object with `$ echo {} >> package.json`. Or, your can let npm create the package.json for you by running `$ npm init` in the root, which will walk you through a setup in the terminal and then generate a populated `package.json`

STEP 4:
- Create a webpack/ directory in the root project with an entry.js file. This folder is for development only.

STEP 5:
- Create a webpack.config.js in the root
```
const path = require('path');
module.exports = {
  // webpack folder’s entry js — excluded from jekyll’s build process.
  entry: "./webpack/entry.js",
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.4
    path: path.resolve(__dirname, "assets/js/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader", // "babel-loader" is also a legal name to reference
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    ]
  }
};
```

STEP 6:
- need to tell both github and Jekyll to ignore node_modules/
- In .gitignore, add assets/bundle.js and node_modules.
```
...
node_modules
assets/bundle.js
...
```   

Tell Jekyll to ignore node_modules when building in your config.yml:
```
...
exclude: ['node_modules']
...
```

STEP 7:
- In _layouts/default.html, add compiled bundle.js file.
```html
<!DOCTYPE html>
<html>
 …
 <body>
 …
<script type="text/javascript" src="/assets/js/bundle.js" charset="utf-8"></script>
</body>
</html>
```

STEP 8:
- install dependencies
```
$ npm install webpack babel-core babel-loader babel-preset-react react react-addons-update react-dom --save-dev
```
The save-dev flag will write the packages to the package.json

I had to install some more dependencies:
```
$ npm install --save-dev @babel/preset-react
$ npm install --save-dev @babel/preset-env
$ npm install --save-dev @babel/core
```   

STEP 9:
- run `$ webpack` to generate the new bundle.js from entry.js
- run `$ jekyll build` to build the site
- run `$ jekyll serve` to run the server

STEP 10:
- create a components/ folder inside our webpack directory
- create a new file called Hello.js
```javascript
import React, { Component } from 'react';
class Hello extends Component {
 render() {
  return (
    <div>Hello World!</div>
  )
 }
}
export default Hello;
```   

- In entry.js load react and import the component:
```javascript
import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';
class App extends Component {
 render() {
  return (
    <Hello />
  )
 }
}
render(<App />, document.getElementById('root'));
```

STEP 11:
- Add the div React will render your component in the `default.html`
```html
<!DOCTYPE html>
<html>
  ...
  <body>
    ...
    <div id="root"></div>
    ...
  </body>
</html>
``` 

STEP 12:
- Run `$ webpack` to compile js and `$ jekyll build` so Jekyll will catch the newly compiled file. - React component should be rendered on the Jekyll page!
