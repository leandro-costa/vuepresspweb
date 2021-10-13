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
    "revision": "edbdd80e588e30615e0ca862e72be791"
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
    "url": "assets/js/11.7276860e.js",
    "revision": "0fd0a880bf4bc69f4c4c726fe6168b0b"
  },
  {
    "url": "assets/js/12.b112bb9c.js",
    "revision": "3787d986fc98933394aa4211df071d47"
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
    "url": "assets/js/2.79bd373b.js",
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
    "url": "assets/js/app.364df4c4.js",
    "revision": "d685cf135e1097733d2ee751cf68394c"
  },
  {
    "url": "home.html",
    "revision": "c4321d4eaff8e67c59401d96da6f7bd8"
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
    "revision": "5b717b4aeefd55f6f8f523b9b4adf322"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "dc26c4396468be2dc214b32e36ddccad"
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
