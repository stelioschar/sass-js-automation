sass-js-automation
==================


Dependencies
--------------

You need to have ruby installed and to be added to your windows' PATH variables

Also you need to install sass

```sh
gem install sass
```

The v0.0.1 uses CSS source maps, that's why compass v1.0.0.alpha.19 is needed. To install this version you need to run  

```sh
gem install compass --pre
```

if you don't need to have CSS source maps you can just install the stable version of Compass, but you need to remove the 'sourcemaps' option from your GruntFile into the compass task

```sh
gem install compass
```

Installation
--------------

First you need to download load all the node depend modules using the node package manager(npm)

```sh
npm install
```



Usage
----

Just run

```sh
grunt
```

Feel free to change: 
- the ** *.scss ** files under the ** scss ** folder, compiled to ** css/main.css ** file
- the ** *.js ** files under the ** js ** folder, compiled to ** js/scripts.min.js ** file
- add as more ** *.png ** files under your * 'img/my-icons/' * folder


Todo
----

- add coffeescript support
- make sprites.scss load on 'my-icons' files' change
- add autoprefixer support
- 

License
----

MIT

**Free Software, Hell Yeah!**