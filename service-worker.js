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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ccb7e0f635c04439825a4f999295c1a"
  },
  {
    "url": "api.html",
    "revision": "62f3219e5c86d491339d251978ad0338"
  },
  {
    "url": "assets/css/0.styles.9929af80.css",
    "revision": "a634d5757f0c5e154c517ea03830d30b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b9fa6a1e.js",
    "revision": "27ec2881572c5b2f5f652314654fca8d"
  },
  {
    "url": "assets/js/2.056a12d8.js",
    "revision": "b7786ebb47130d119af3f1645678a25a"
  },
  {
    "url": "assets/js/3.ad1e1797.js",
    "revision": "62ac904ae94f4d792b39f5f41d2e6cb9"
  },
  {
    "url": "assets/js/4.84a4c35b.js",
    "revision": "4cddb715c96d4130436592d3a3591feb"
  },
  {
    "url": "assets/js/5.d8b9aef6.js",
    "revision": "a118cb7ed54d8f75e96e461936354d6d"
  },
  {
    "url": "assets/js/6.d4b41953.js",
    "revision": "4c8f759a53aaca26a60927b9272307bf"
  },
  {
    "url": "assets/js/7.bc49aa56.js",
    "revision": "011a60f3666a6ad6dfc188463a371629"
  },
  {
    "url": "assets/js/app.fa5df233.js",
    "revision": "26d9f8e6058852f812a2b641eb905922"
  },
  {
    "url": "examples.html",
    "revision": "c08f9cbc7905605af790025e08f271ef"
  },
  {
    "url": "guide/binding.html",
    "revision": "4f441ff21a3c7ef029c54cd6efd4ab85"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "215ecdff810c667a43a6cc1cc3eea2f9"
  },
  {
    "url": "guide/index.html",
    "revision": "e7d0276fe1324a0b6786d91d4ecca55b"
  },
  {
    "url": "index.html",
    "revision": "a1887279748e60228b3911ef7d5f5c69"
  },
  {
    "url": "verte.png",
    "revision": "62230e64c80e22d25f2ccd33dbd427ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
