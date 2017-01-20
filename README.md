# Conference site

## Edit contents

#### Conference data

All dynamic data is **ONLY** inside `_data` folder

#### Page contents

Every content page is inside `_includes/page-name-folder`

#### Frontend code

CSS and JavaScript source code are inside `_frontend` folder

- CSS: `_frontend/frontsize`
- JavaScript: `_frontend/js`

The source code is built inside `/css` and `/js` folder in the root of the project.

---

## Installation

Ensure to have [Jekyll](jekyll) installed with this command:

```
sudo gem install jekyll
```

Install [nodejs](nodejs) and the components you need:

```
npm install && cp node_modules/dustman/gulpfile.js .
```

---

## Build

#### HTML

To build the site with [HTTP server](localhost):

```
jekyll serve
```

#### CSS and JavaScript

Now you can watch your CSS build with this:

```
./node_modules/.bin/gulp watch -S --config dustman-confname.yml
```

#### CSS and JavaScript + view HTML pages

```
./node_modules/.bin/gulp -S --config dustman-confname.yml && jekyll serve
```

For test the local view go to [http://127.0.0.1:4000](localhost)

---

Coded with &#9825; by [@vitto](https://github.com/vitto) in [@ideato](https://www.ideato.it)

[jekyll]: https://jekyllrb.com/
[localhost]: http://127.0.0.1:4000
[nodejs]: https://nodejs.org/
