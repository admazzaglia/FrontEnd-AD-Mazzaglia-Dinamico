// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'madbackend-8cd1a',
    appId: '1:754473665599:web:28e33e81a8b624dc30648a',
    storageBucket: 'madbackend-8cd1a.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyC-4GyvVuQoHbi13lU_WK1-9y96Yqi7CM0',
    authDomain: 'madbackend-8cd1a.firebaseapp.com',
    messagingSenderId: '754473665599',
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
