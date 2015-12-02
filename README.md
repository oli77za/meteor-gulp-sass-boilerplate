# meteor-gulp-sass-boilerplate #

## Description ##
This project is a simple gulp task runner for my meteor projects.
Simply avoids doing all the boilerplate stuff, simply include it in the 
project as a git submodule

Once added, run npm install in the submodule, and run gulp to watch/compile SASSfiles

**note**: The watch task of gulp watches existing files, so, if you add new files, restart gulp to re-compile


```sh
$ cd <root of your meteor proj>i
$ git submodule add https://github.com/oli77za/meteor-gulp-sass-boilerplate.git .gulp
$ cd .gulp
$ npm install
```

## License ##
MIT
