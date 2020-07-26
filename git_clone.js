const git = require('simple-git')();
const rimraf = require('rimraf');

this.gitURL = 'https://github.com/hurlbertlab/dietdatabase';
this.localPath = `./dietDatabase`;

rimraf(this.localPath, function() {console.log('Done deleting ' + this.localPath); });

this.callback = () => {
    console.log('Successfully cloned ' + this.gitURL)
}

git.clone(this.gitURL, this.localPath, this.options, this.callback);
