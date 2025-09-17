'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "76a4f006084e067090fc30551341f4ab",
"version.json": "fde2ea85d6bd9d39982bd7bfc586f332",
"index.html": "1cd093c1c72f82eb013283f28c1eeb34",
"/": "1cd093c1c72f82eb013283f28c1eeb34",
"main.dart.js": "be9bec35bcc8050d2bbe2d5d9f65426b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "662e19591f91c260b032500839dd6062",
"assets/AssetManifest.json": "534293a79195752a2845ce7f6eea55ae",
"assets/NOTICES": "c2278a01b75d3e50abc7ed564ad8358d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bdb095c25212401872c3bd047944dc23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d9f768ac08f34a72c4ceea030234a273",
"assets/fonts/MaterialIcons-Regular.otf": "03eeb932cd7b6770ee17fac55ef951a0",
"assets/assets/images/wrong.png": "593ec1571c2cc747a279c4d922367bad",
"assets/assets/images/level3.png": "d45613e1150f34669da7b94c99b1a86d",
"assets/assets/images/desert.png": "e2dd9a70d45db22ed0730c69eae847b7",
"assets/assets/images/level2.png": "b1bfb8697fea34946802a02dddd0be4f",
"assets/assets/images/fighter-plane4.png": "5f7e5e0ffd2326b9c432f8773bd4c3ed",
"assets/assets/images/soundfx.png": "2b50cbc01231d51fdade660aa16d0f64",
"assets/assets/images/fighter-plane5.png": "7babd57d7cbe30d4e3a3e1451b4ed5e2",
"assets/assets/images/level1.png": "21b0530ccf134e44e69a255861f12edb",
"assets/assets/images/_soundfx.png": "24a28bdb167c9e918307782cc472b23d",
"assets/assets/images/heli-8.png": "bed467ebfa1bf7a9fc587e3560448c14",
"assets/assets/images/carrier1.png": "63474c443587f52dabae161d4e7c9f97",
"assets/assets/images/level4.png": "5bcb607bd90f3e46f4e40ad271c35cc5",
"assets/assets/images/settings.png": "b621f471dc092412263436350ac27edf",
"assets/assets/images/plane.png": "51c8aeeaffbfb411979e8c6912f83554",
"assets/assets/images/fighter-plane2.png": "4c9f6e8a3e5abf412a61e6b08947f450",
"assets/assets/images/fighter-plane3.png": "4bf82e5d846c95cbdf519a84c0ab5ad8",
"assets/assets/images/island.png": "8ee42ea950e85388294d28940f8b37fb",
"assets/assets/images/city.png": "8865b767f93269908e7030bcce1c2ba3",
"assets/assets/images/fighter-plane.png": "79908a0dff0991af6b7cc5ae5d27ad7f",
"assets/assets/images/music.png": "a7e26b70815d34410ed513fb276261a8",
"assets/assets/images/path.png": "361500af59efc6c3cfbda694c9648a25",
"assets/assets/images/exclamation.png": "af9b538b8f11a0826389a3ecc21e2355",
"assets/assets/images/gmf.png": "cb655518fed9c64c5fe51ea6428d7b6e",
"assets/assets/images/pause.png": "32e235672e6feca32958edc913264870",
"assets/assets/images/island-phone.png": "560eb9162eda2f3407daabcbb0c5e382",
"assets/assets/images/runway.png": "3f9a3ec2fcf8894ec4c313e088327b1b",
"assets/assets/images/_runway.png": "b01d1ec9881d29aa4d5a50e680e4e0ec",
"assets/assets/images/military-heli1-3.png": "f717a22ec3be04b5ff7de646b8539f24",
"assets/assets/images/heli-7.png": "d6acbd8060f98d4827f5b8ed7dc019c1",
"assets/assets/images/heli-6.png": "f906938929277f49f099c65d53e842b0",
"assets/assets/images/military-heli1-2.png": "29562ce475066c9d1b3929ca15ef75c1",
"assets/assets/images/heli-4.png": "2456b100986a486c9be9c4dd6f9d856b",
"assets/assets/images/small-plane.png": "f148543a5558ddad8f78299be08ceb81",
"assets/assets/images/heli-5.png": "ef41cdf80e54eabcd304ca5eab017533",
"assets/assets/images/military-heli1-1.png": "4dde0956a968523a48c31aa4ed321d5e",
"assets/assets/images/airfield1.png": "a298dab7d498c4390c099e27b38b0973",
"assets/assets/images/heli-1.png": "1de46425fe04cd49af62bc13a3845e0a",
"assets/assets/images/military-heli1-4.png": "1d251e0cd05ab41a2763d4fba26fd1db",
"assets/assets/images/menu-background.jpg": "80267e2c9d5293e7b635df3a63df3d17",
"assets/assets/images/helipad.png": "57eb180fe522855069b953a64aa2fb33",
"assets/assets/images/heli-2.png": "c11ba74840ab0fb71b1af7d5761f5bf8",
"assets/assets/images/heli-3.png": "c063a76f30fcd9a60cc9ff9b7035d1e9",
"assets/assets/images/padlock.png": "e9c741e467ab4065b03b28eee1cfe235",
"assets/assets/audio/excellent.mp3": "ff9b754418149046029e8304f180e0d7",
"assets/assets/audio/background-music.mp3": "e72fa85754bbf3af9ada7d196549c646",
"assets/assets/audio/great.mp3": "4cd89e12455502ee6e0a27de29b07346",
"assets/assets/audio/crash.mp3": "864cf937e9aa7b4f129b72f757fd8597",
"assets/assets/audio/traffic.mp3": "ee6a74eb60e30cadb7b8a78331b5be94",
"assets/assets/audio/hold.mp3": "db34f0a5840b9aad66b3fefff1735c94",
"assets/assets/audio/perfect.mp3": "08f212560afaa087dcbcb627dd164921",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
