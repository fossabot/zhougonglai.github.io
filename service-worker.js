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

importScripts("http://pdw9699pn.bkt.clouddn.com/production/workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "http://pdw9699pn.bkt.clouddn.com/production/workbox-v3.4.1"});

importScripts(
  "http://pdw9699pn.bkt.clouddn.com/production/precache-manifest.bf7280768345b1a8b836db9c7d72d1b0.js"
);

workbox.core.setCacheNameDetails({prefix: "landi_ui"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
