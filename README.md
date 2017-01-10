oneday-conf-template
====================

## Build site

To build the site ensure to have Jekyll installed and run:

```
jekyll serve
```


## Frontend

To build the frontend, **install** the components you need first:

```
npm install && cp node_modules/dustman/gulpfile.js .
```

Now you can watch your CSS build with this:

```
./node_modules/.bin/gulp watch -S --config dustman.yml
```
