# Conference site

## Installation

Ensure to have Jekyll installed with this command:

```
sudo gem install jekyll
```

Install nodejs and the components you need:

```
npm install && cp node_modules/dustman/gulpfile.js .
```

## Build HTML

To build the site with HTTP server:

```
jekyll serve
```

## Build CSS

Now you can watch your CSS build with this:

```
./node_modules/.bin/gulp watch -S --config dustman.yml
```

## Build and view

```
./node_modules/.bin/gulp -S --config dustman.yml && jekyll serve
```
