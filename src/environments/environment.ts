// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.dfsa

export const environment = {
  production: false,
  // apiBaseLink: 'https://v2.api.esquireelectronicsltd.com',
  // ftpBaseLink: 'https://ftp.esquireelectronicsltd.com',
  apiBaseLink: 'http://localhost:3000',
  ftpBaseLink: 'http://localhost:3000',
  appBaseUrl: '/',
  userBaseUrl: '/account',
  userLoginUrl: '/login',
  adminLoginUrl: 'admin/login',
  adminBaseUrl: 'admin',
  storageSecret: 'SOFT_2021_IT_1998',
  sslIpnUrl: 'https://v2.api.esquireelectronicsltd.com/api/payment-ssl/ipn',
  smsUser: 'EsquireAPI',
  smsPass: 'f>77T627',
  smsSid: 'ESQUARECAREAPI',
  firebaseConfig: {
    apiKey: 'AIzaSyCtwO_4F74Eo6fmRA6W56M6gRhUAGEOiU8',
    authDomain: 'esquire-electronics-23467.firebaseapp.com',
    projectId: 'esquire-electronics-23467',
    storageBucket: 'esquire-electronics-23467.appspot.com',
    messagingSenderId: '91313515423',
    appId: '1:91313515423:web:7e8406f5216c6926652baa',
    measurementId: 'G-G102PDVQQ6',
  },
  VERSION: 4,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
