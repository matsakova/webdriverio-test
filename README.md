# User register and User login tests WebDriverIO

### Installation:
mkdir webdriverio-test && cd webdriverio-test
npm init -y

#### Now, install the CLI:

npm i --save-dev @wdio/cli

#### Generate Configuration File:

./node_modules/.bin/wdio config -y

#### Create Spec Files:

mkdir -p ./test/specs

#### Create a new file in that folder:

touch ./test/specs/register.js

In this folder you can write your tests.

To run the tests:

* Type 'npm test' in Terminal or

* In package.json file on 'test script' line write: "./node_modules/.bin/wdio wdio.conf.js" 
and press the green triangle on this line.






