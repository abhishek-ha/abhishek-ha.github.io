'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cb04b451ada6b3e905a3d141284165c",
"index.html": "10b83ca0c834bd6c8967e4fe59bff85c",
"/": "10b83ca0c834bd6c8967e4fe59bff85c",
"main.dart.js": "a42b14c45b73d7d5a172cbde846b18ac",
"favicon.png": "04e710fbd264209d75c68aedd9674dda",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b9cdc6eccdff1c0e77906323dd63397",
".dart_tool/package_config.json": "479dcc229e66f05ccf45ab3bee66a2d4",
".dart_tool/package_config_subset": "477acb83b99cad142262485b3371ffde",
".dart_tool/version": "21f47a5b35d016c2f0f8f57704079407",
"assets/AssetManifest.json": "f1d1684ba2c3c692964ef680d35d8629",
"assets/NOTICES": "67fb59ff6a87b86947dbed43db07153b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/payments.html": "56e8321e1386d62c4e95dcc32fd84914",
"assets/assets/png/health_assure_logo.png": "48acf571ff323008f87953fe289bba82",
"assets/assets/png/email.png": "e34c64cc8a1b814c3b91b165ee71670b",
"assets/assets/png/calling.jpg": "868ad43c1fe67c2cf5406710729d4f1b",
"assets/assets/png/lab_test_icon.png": "b602b1e45ffe65e2122391dd4346b82f",
"assets/assets/png/instagram.png": "dd1078384b7944d9dc3e85c5b26c0c84",
"assets/assets/png/address.png": "46b3358d67abb6ffc01cbb22bb22c3fb",
"assets/assets/png/talk_to_advisor.png": "3f0d980941dbad40cbeed4386386fa06",
"assets/assets/png/FB.png": "1149f0a0363c401667a7c1b8e277124a",
"assets/assets/png/search_icon.png": "201e8bbd25f41e28d8016f73221cd881",
"assets/assets/png/item_added_tick_icon.png": "3494cf0593ed63099b9bf9b81de50565",
"assets/assets/png/arrow_down_icon.png": "b2be1bae5ab9087d4f4c5992093c44be",
"assets/assets/png/debit_card.png": "cba0584453ad8b5a8f5fb8ed7ff231c1",
"assets/assets/png/twitter.png": "a0d7902c4465549364ae7ae37c97fb86",
"assets/assets/png/footer.png": "1c700b93fe8f1809ff28b5cd96ed21fd",
"assets/assets/png/linkedin.png": "d1cf5c7ee60e0aa77966bff2f85facb4",
"assets/assets/png/location_icon.png": "125c96239cab7ff29577ceede5033484",
"assets/assets/png/location.png": "a9e5232ab1f1d8a0bdfcdca6adc20c55",
"assets/assets/png/call.png": "66f68ff4c7df8d7b1c22a3d7168b8395",
"assets/assets/png/app_drawer_icon.png": "645968ec34710d2bad5668804e7bacab",
"assets/assets/png/banner_sash.png": "7ea9f094c3f5dd00ae147778c3d53d50",
"assets/assets/png/srl_diagnostic_logo.png": "7929f13ee828784fa744beb4c5d46777",
"assets/assets/png/google.png": "89263d68fe1de2da136af72630be3fc1",
"assets/assets/png/cart_icon.png": "264035fa507226daabde4574651e434e",
"assets/assets/congratulations.svg": "7f085c082f79acfb60fd81a32c55454b",
"assets/assets/congratulations.png": "f4471117e913cc0ce848663c38b113da",
"assets/assets/gif/banner_file.gif": "8a853f2c37d8ee3194494418b2f6e7ae",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "8922932eb3a38065df76142a70c1387f",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
