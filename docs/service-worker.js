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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d7afe99bb849611d449d54ffcfb548d"
  },
  {
    "url": "assets/css/0.styles.9d71368a.css",
    "revision": "7f3d8b55d3b49f151334c629f15c04df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6bc93f31.js",
    "revision": "e86f8a0505f60e07646020b1af0981a2"
  },
  {
    "url": "assets/js/11.2db05a2c.js",
    "revision": "f1218e62769d3fd6684ed66173238fe4"
  },
  {
    "url": "assets/js/12.347c121c.js",
    "revision": "f3e9699f7b0a72c78b1a6ad7735d8bde"
  },
  {
    "url": "assets/js/13.10973b92.js",
    "revision": "532b19a7b9b81c3c14ff729121d23e83"
  },
  {
    "url": "assets/js/14.55771bef.js",
    "revision": "5d7b00742242503a7f5aa1720e726cdb"
  },
  {
    "url": "assets/js/2.9a6c3ec1.js",
    "revision": "c56de4557269c9f13ecd1ae6a94b8a9e"
  },
  {
    "url": "assets/js/3.04d5c157.js",
    "revision": "96ba39a517750edb6f95992f4bd4cd8b"
  },
  {
    "url": "assets/js/4.4f60c97b.js",
    "revision": "7fbb1976cd4efe5a1183f043557ad04a"
  },
  {
    "url": "assets/js/5.3e5b1eb8.js",
    "revision": "083f2fa3daaea6f67dfbe3bf5954e32b"
  },
  {
    "url": "assets/js/6.0b9ba727.js",
    "revision": "4474b619312b441408d3a33d36b5a103"
  },
  {
    "url": "assets/js/7.35ec370d.js",
    "revision": "57b0d70ffc6e4f408e1a49eed90d79c3"
  },
  {
    "url": "assets/js/8.b19ffb8f.js",
    "revision": "60a6cd3c32a8251b85a5740e1e633a90"
  },
  {
    "url": "assets/js/9.60310529.js",
    "revision": "091aa8930f07de5dcf7ab6b42bcaf76f"
  },
  {
    "url": "assets/js/app.f6fda0ad.js",
    "revision": "551d5fa2e70c686238e27f402ec7bd7c"
  },
  {
    "url": "home.html",
    "revision": "126a05313a583cf64737891e56312632"
  },
  {
    "url": "icon-192x192.png",
    "revision": "5ece80f031902e56942acad6fb63133d"
  },
  {
    "url": "icon-256x256.png",
    "revision": "43304b267b884bcbc582bc60bb3e16c8"
  },
  {
    "url": "icon-384x384.png",
    "revision": "67a9c81ecdf0ba691d4e38fffa903a11"
  },
  {
    "url": "icon-512x512.png",
    "revision": "efbd3ec066773aeba25d9a5248e9217e"
  },
  {
    "url": "index.html",
    "revision": "3f092b6eb5c079208f6b975c193ce772"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "fc8aea0db7760c072f28de85e27beccb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
