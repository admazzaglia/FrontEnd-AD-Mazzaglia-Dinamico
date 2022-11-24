// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'madportfolio',
    appId: '1:138012014083:web:79348d52e8d8d7d5310036',
    storageBucket: 'madportfolio.appspot.com',
    apiKey: 'AIzaSyAOiBosRhF7HSE616ErL6f_PR5sZMwJ7rg',
    authDomain: 'madportfolio.firebaseapp.com',
    messagingSenderId: '138012014083',
  },
  production: false,
  //URL: 'http://localhost:4200/'
  // URL:'http://heroku.backendmad.heroku.app.com/´
  URL: 'http://localhost:8080/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
