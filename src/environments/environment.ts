// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'https://api.github.com/users/imrobbin/repos',
  apiUrl: 'https://api.github.com/search/repositories?q=user:imrobbin',
  firebaseConfig: {
    apiKey: 'AIzaSyC4IyyNmz3mXG7p0pAdeIJuwgUmjUsCBHY',
    authDomain: 'dev-imrobbin.firebaseapp.com',
    projectId: 'dev-imrobbin',
    storageBucket: 'dev-imrobbin.appspot.com',
    messagingSenderId: '949491206765',
    appId: '1:949491206765:web:eed313949accab9cef8d64',
    measurementId: 'G-K1MQXE52YP',
  },
  gitHubToken: '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',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// 04a853e8da1b70c25669298daa752c18a407a0f7