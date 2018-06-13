# levelup-ionic-starter

this is a starter project for the level up hackathon

to run this project you need ionic
see instructions for installing and using ionic here:
https://ionicframework.com/docs/intro/installation/

in summary: 
$ npm install -g ionic cordova

### install dependencies
$ npm install

## DEV instructions
## Create environment.dev.ts as follows
	
~~~~
import { Environment } from './environment.model';

export const ENV: Environment = {
  mode: 'Development',
  authorization: 'YOUR_AUTHORIZATION_TOKEN_HERE',
  botsApiUrl: 'BOTS_API_URL_HERE'
}
~~~~
## Create environment.ts (Production) as follows
~~~~
import { Environment } from './environment.model';

export const ENV: Environment = {
  mode: 'Production',
  authorization: 'YOUR_AUTHORIZATION_TOKEN_HERE',
  botsApiUrl: 'BOTS_API_URL_HERE'
}


# run in web browser
$ ionic serve --browser 'google chrome'
or 
$ ionic serve --lab --browser 'google chrome'

# run on device

# android
$ ionic cordova run android

# ios
$ ionic cordova run ios --target iPhone-7


you may need to do this:
https://forum.ionicframework.com/t/issues-starting-ios-simulator-from-cli/107376
cd platforms/ios/cordova && npm install ios-sim@latest

~~~