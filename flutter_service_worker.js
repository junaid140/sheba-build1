'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c37ad45165b9c669b1e2078fa8ee34bf",
"assets/assets/3d/artist.png": "da432c402e729ba4f14199c3db9dc983",
"assets/assets/3d/influencer.png": "5e219854a85373b515103b6bb32d9567",
"assets/assets/3d/producer.png": "c1c8b5f0db2bbb439398c9ffcc4cafe0",
"assets/assets/3d/writer.png": "1a1d2886540aa09dbd0476625338947c",
"assets/assets/logo/logo_sheba_music.jpg": "231a609abbf62f271900672b571e8709",
"assets/assets/logo/logo_sheba_music_black.jpg": "c648064b2ddc873d8ad5daa1e7adfad6",
"assets/assets/mix/map.jpg": "d480c1891513137fb5d2e562246b6dd1",
"assets/assets/song/album.jpg": "f45b6b593bc7d598034f6ec3b1688620",
"assets/assets/song/bedroom.png": "4115f81e5c3aac0fdf7f656302049d9a",
"assets/assets/song/happier.png": "d4ecebb71ddca634e0572298761b33cd",
"assets/assets/song/without_me.png": "3b5f470f21eaf03fd08a829af4326e65",
"assets/assets/svg/arrow_back.svg": "0478622e44bbe7a685c900f24179851e",
"assets/assets/svg/audio.svg": "c0c4cf52ae893808404b6b70970cab9e",
"assets/assets/svg/audiowave.svg": "84aa404636132a039fb5c6f2dfe584f9",
"assets/assets/svg/bell.svg": "056d6e4b7620a05c1269763950ecf645",
"assets/assets/svg/bookmark.svg": "0babd532b053f93af2d9b6f69f63b85e",
"assets/assets/svg/calendar.svg": "3323dcf0539ac438d77427c58ed5c0c8",
"assets/assets/svg/card.svg": "a40056b191f2a5e4b8fd2532d92e6450",
"assets/assets/svg/chat.svg": "535027316d9a4e0da8abe5c9dce4c219",
"assets/assets/svg/dashboard.svg": "42c33d3c7291b6d41c1e5f6e4442ce75",
"assets/assets/svg/delete.svg": "32ac23ecc4758ac7fa3023712b5f9595",
"assets/assets/svg/dice.svg": "2eb1ae38ebd462eaf8cde80d0c66cc38",
"assets/assets/svg/email.svg": "c4d22a43e4c1ffcdf1d3e6fcb2b0a19a",
"assets/assets/svg/facebook.svg": "d3fe6a67a9edaf05bb3ea610b1fe3a6a",
"assets/assets/svg/folder.svg": "75a6e879501de7ae33859b264280ca0c",
"assets/assets/svg/hide.svg": "8711ae7bcc7f9a963025f235da885295",
"assets/assets/svg/home.svg": "8973f58ba788c0a3dc8fd5de71a38420",
"assets/assets/svg/instagram.svg": "0c1057ead196e680a81564ebb7117d95",
"assets/assets/svg/location.svg": "2fe32e1c4300ebee5659866324cbeca7",
"assets/assets/svg/menu.svg": "528c4c7f0d71b5ab9af6c3cdf53f86ee",
"assets/assets/svg/notification.svg": "7dc3037c8436d3c4e1e6542c58704984",
"assets/assets/svg/password.svg": "be87a6039d1195b2539fe2ca6456a44b",
"assets/assets/svg/play.svg": "46c9f1f3a281ef34a77be51737967744",
"assets/assets/svg/plus.svg": "0d7c7a3ffb42da8980d15e26b822a692",
"assets/assets/svg/power.svg": "9a240d5ba852a1ece70cf3838bd1f7d4",
"assets/assets/svg/profile.svg": "6644040441df955d0052e2b9d5606471",
"assets/assets/svg/search.svg": "07081c3a8d69e15a31f44134b4932c53",
"assets/assets/svg/send.svg": "bf35c3a1e35038e6cf6fcb271ca261a3",
"assets/assets/svg/shield.svg": "b637540c1b7aa3a17d3b0a0c4710627e",
"assets/assets/svg/show.svg": "1fd7cd52259f259f066ae14ed41ede63",
"assets/assets/svg/ticket.svg": "f07c3da43389d4c44c78d7c567a60c89",
"assets/assets/svg/ticket2.svg": "a69d0df332d40ef28d869015de6cbcdc",
"assets/assets/svg/twitter.svg": "dcdcd00cdfc2f32cdbeaa62183794961",
"assets/assets/svg/upload.svg": "d227ded8dda34fec96d0086bb357ddbd",
"assets/assets/svg/verify.png": "40601b2d4719987eda1cab6c743ecd9f",
"assets/assets/svg/verify.svg": "cb5e94dd18b6582552b945f67b4d487a",
"assets/assets/svg/wallet.svg": "edaf1ff53808baf98207365848f1f0e9",
"assets/assets/svg/youtube.svg": "a778fe60eea54a6e5ab74a6d4fff108d",
"assets/assets/user/detail_banner.jpg": "4de037f3fdeaaa76df36e37cc6434051",
"assets/assets/user/profile.jpg": "d29c29d55da1a309dbf732a9876a24b8",
"assets/assets/user/profile.png": "b9b9d182696a58c5a1e366a7c7ec940c",
"assets/assets/user/profile2.jpg": "f7ca7c47996586d9aa48668602ef6243",
"assets/assets/user/user.jpg": "265a0f36b9e93f3ffa6090a504ae64b0",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "26b38dcdbf59735869a8ab192eb305e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7aa7c2888cdee98e8e32f11adeeb7984",
"/": "7aa7c2888cdee98e8e32f11adeeb7984",
"main.dart.js": "1fcae11b788e0c9a7e6b0b3566cddd78",
"manifest.json": "4fc1b74eae672db7658c2cd7714fcb66",
"version.json": "7cc5a8525f074b8086fbc35e326ea72f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
