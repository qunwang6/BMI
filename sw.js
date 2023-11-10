/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/favicon.ico",
    "revision": "0cef76cde9c840e353161cb83e4dfac0"
  },
  {
    "url": "assets/icon.png",
    "revision": "a0912a40780d8835a46c7a07ae1c8eaa"
  },
  {
    "url": "build/app.js",
    "revision": "6edc600846f331f619945791d2204ac0"
  },
  {
    "url": "build/app/2v2nxmh5.es5.js",
    "revision": "62827be5983aeea98341b64054caae9e"
  },
  {
    "url": "build/app/2v2nxmh5.js",
    "revision": "4dd8d8097e3e1b5a3ad2506095b069ef"
  },
  {
    "url": "build/app/app.ewp1uenq.js",
    "revision": "39afcd5ecb1446caface53ba684ca041"
  },
  {
    "url": "build/app/app.nlzey9i5.js",
    "revision": "384ebbaeb970cf014fc8084306966a1e"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "11da65ada28968dab56dfc305a85d6d6"
  },
  {
    "url": "build/app/chunk1.es5.js",
    "revision": "43928c84aef81b3c57c4a6a523d79127"
  },
  {
    "url": "build/app/chunk1.js",
    "revision": "95d10931cf93593b5ac246057e17411d"
  },
  {
    "url": "build/app/n4vazjd2.es5.js",
    "revision": "fea6bbe6a57e1e9b08bccce3b05a41cc"
  },
  {
    "url": "build/app/n4vazjd2.js",
    "revision": "49011cd4175b8c72977bb6413802d123"
  },
  {
    "url": "host.config.json",
    "revision": "7480745686a620fb0a5b695006b454e2"
  },
  {
    "url": "index.html",
    "revision": "51cd3469e6497f44de4359e9575c57a5"
  },
  {
    "url": "manifest.json",
    "revision": "63c2b9c676a3d4f39928f68401dd9be0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
