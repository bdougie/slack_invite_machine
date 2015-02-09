#SETUP

- brew update
- brew install npm
- nvm #must use latest node, 0.11.x
- npm install
  - `npm install -g nvm`
  - `export PATH=./node_modules/.bin:$PATH`
  - `source ~/.nvm/nvm.sh` - this runs it locally
  - `nvm ls`
  - `npm install unstable`

run `node --harmony index.js`

## Run forever
- npm install -g [forever](https://www.npmjs.com/package/forever)
- forever start index.js

## Better Interval [Solution](http://stackoverflow.com/questions/18120909/set-interval-in-node-js-vs-cron-job)

```node
var minutes = 1, the_interval = minutes * 60 * 1000;
  setInterval(function() {
    // Run code
  })
}, the_interval);
```

