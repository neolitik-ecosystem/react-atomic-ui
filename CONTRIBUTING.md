# Contributing code

We follow [GitFlow process](http://nvie.com/posts/a-successful-git-branching-model/).

## New feature

 1. Create a `feature/{feature-name}` branch from `develop` branch 
 2. Code your feature
 3. Create stories
 4. Create tests (threshold to 90%)
 
 When commiting code, `precommit` task is launch to ensure lint and test are ready. To pre-validate code you can manually run :
 ```shell
 npm run review
```

During `precommit`, task will try to fix lint issue. If lint or test tasks failed, commit will not be accepted.

## Fix a bug

TODO

## Good to know

By contributing code to neolitik you agree to license the contributed code under the project's MIT license.

Confirm that you have the right to contribute and license the code in question. (Either you hold all rights on the code, or the rights holder has explicitly granted the right to use it like this, through a compatible open source license or through a direct agreement with you.)

## Coding standards
ES6 syntax, targeting an ES5 runtime
Airbnb base react