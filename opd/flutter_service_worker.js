'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cb04b451ada6b3e905a3d141284165c",
"index.html": "cae06f1c4d85c6c8d42739e8cb836d90",
"/": "cae06f1c4d85c6c8d42739e8cb836d90",
"main.dart.js": "de63d28db21310141ad5c9e8f29231e8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b9cdc6eccdff1c0e77906323dd63397",
"assets/AssetManifest.json": "8e0ed8a33e3d7a8c78a34d950949772a",
"assets/NOTICES": "0976e12e2a91e29d951e86670468125e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/myhealth.png": "ce73961ce4f2b70d1a14a679b5f21c86",
"assets/assets/wallet.png": "f79bc33bc845f0a2c34c31bd85358879",
"assets/assets/erza.jpg": "4d67cb0f5e4219f3546d51cf99ad25d9",
"assets/assets/myplan.png": "a976d22c77b4d86dfaa03f320b7456ee",
"assets/assets/images/lab2.png": "cba81aa3042d48911586ad2267f7a0fb",
"assets/assets/images/stomach.png": "543aaf92f8974f65887006d33c7a6ca0",
"assets/assets/images/topic_0.png": "17c7f01d67ff4d64078b85eaed1c989a",
"assets/assets/images/lab3.png": "440a4727cdc6e2884b373ccc08a83fc2",
"assets/assets/images/lab1.png": "7d60de55c8ec36c8fcbe73d86dd1d819",
"assets/assets/images/hair.png": "3983cfaab18effe5e6a1762dc3bf998d",
"assets/assets/images/lab.png": "0b05a3338e3007b99679f9447afb3e63",
"assets/assets/images/diabetic.png": "5461f21764ec66da8d50ae5d045f1f39",
"assets/assets/images/healthLogo.jpeg": "a92538479275c05acdff10f2683a0855",
"assets/assets/images/health.png": "2977b1d3e2a63743303e86d9e0cf4c6c",
"assets/assets/images/ortho.png": "d8a361ced2723641904a3f85b39f51ad",
"assets/assets/images/psychat.png": "11edaeb9f32a7ab826a0ae2c4f69e8a5",
"assets/assets/images/women_issue.png": "aa075a366b7e7635b15d534688de3e15",
"assets/assets/images/lab_test.png": "862c0af7db547cbac06cbbb0fe9621a8",
"assets/assets/images/extra.png": "3bd0ef272a47974b506442577439712d",
"assets/assets/images/person.png": "4e9d1938bfad1d40f150c4ead9824edb",
"assets/assets/images/neuro.png": "24a937e5e97cde4ace732d618ae460ad",
"assets/assets/images/sexual.png": "9dc654fb8a8d5106c3c880d2bd507119",
"assets/assets/images/add_cart.png": "20b29b410a78385aed398c1febfd0dd5",
"assets/assets/images/general_physician.png": "31ae7d9a6bf2c64921eebc8ce84738ec",
"assets/assets/images/opth.png": "6ea0c92b9d717457c7bcb6b9f5284838",
"assets/assets/images/heart.png": "cde7ee00ee2d839547fecda4a3e78aaf",
"assets/assets/images/weight.png": "885092ddf31d0e3d674061b118ba3551",
"assets/assets/images/doctor_4.png": "efa408951db9b11680b3d102863fc9b0",
"assets/assets/images/doctor_5.png": "6fc63fba2839c2569e9fc9b434b5c7d9",
"assets/assets/images/cancer.png": "8852c841536d85b3633acca7748245e0",
"assets/assets/images/doctor_2.png": "c6d445ea61ad7dcdf35387c6ee0add5a",
"assets/assets/images/doctor_3.png": "f649c106612df517aacc8792e80254c2",
"assets/assets/images/twitter.png": "4b5f1d614651e5b48e70ba96cf4b9062",
"assets/assets/images/dentisity.png": "c034f60e9c05ca8f63ce2ba7131d1cd8",
"assets/assets/images/doctor_1.png": "65562cc013da49e96afc1c6202480538",
"assets/assets/images/skin.png": "fdaba1b50b6de963ca4014bbd3157943",
"assets/assets/images/cardiac.png": "cde7ee00ee2d839547fecda4a3e78aaf",
"assets/assets/images/conceive.png": "4a865adc0215db458bd8844b8b874b75",
"assets/assets/images/endo.png": "938260438bbe290cd8b1e596d6f6cdc7",
"assets/assets/images/HealthAssure.png": "e9fad730b9adbe3239cc354f54afcbc3",
"assets/assets/images/google.png": "89263d68fe1de2da136af72630be3fc1",
"assets/assets/images/facebook.png": "25f80f238baafa160364e78744b1d607",
"assets/assets/images/nephrology.png": "b616da3768075980ed02682961095b43",
"assets/assets/images/home_care_dummy_pic.png": "67754d4d8146043e15027a6f05ee09f7",
"assets/assets/images/child.png": "1a031745cf86cc722f4150f676e6f6a8",
"assets/assets/images/pregnancy.png": "e8963b560fa6aba6d46bdeb44bc7034f",
"assets/assets/images/acid.png": "543aaf92f8974f65887006d33c7a6ca0",
"assets/assets/instagram.svg": "fafffc53e10d666f07334fc3367620ac",
"assets/assets/other/60.png": "bca813f1d2442209fee5c157a23305dc",
"assets/assets/other/blood-sugar-chronic-diabetes-46173-192x128.jpg": "ab4a3759a3ecb87808d91393c44bc5d7",
"assets/assets/other/rsz_1rsz_1rsz_14962-192x128.jpg": "78d785ce38e4aaf2ac98737ca1374e48",
"assets/assets/other/Health-Conditions.png": "4778b40e9e2fa81d70c44b639e54d712",
"assets/assets/other/49.png": "bc5ffea734b301d6592632b14c1f3ef6",
"assets/assets/other/Food-and-Nutrition.jpg": "6ba2e078d57bff5140e35c587021a54d",
"assets/assets/other/employees-closeup-young-nurse-service_1301-3095-1-192x128.jpg": "8705644ef0c4b983820860474c172286",
"assets/assets/other/65.png": "fd699d4eeb4904d9a5ecf95cdd7dec33",
"assets/assets/other/58.png": "e7fd31f7a13b4348f95ef450788b91b3",
"assets/assets/other/8.png": "d06d8415e95c4e8e8c8f1e10c1475e84",
"assets/assets/other/corona-2-192x128.png": "02102180cf79964f690f42bdc67b56f1",
"assets/assets/other/banner_2.jpg": "1966604c1e194ba35ac17d524f557e3a",
"assets/assets/other/Mens-Health-192x128.jpg": "0f489af7a4fb35198aef36612a7fb8f2",
"assets/assets/other/14.png": "095aa4eca11a2bffcab99b49d0f8fc1a",
"assets/assets/other/red-sphere-others-grey_110488-324-192x124.jpg": "61896fbe450623837fd8e9adde8b91e2",
"assets/assets/other/29.png": "1f2fe722de8d2a37aa617a02aa73ce0b",
"assets/assets/other/15.png": "99cb690e8424819dea86a305f3b97aab",
"assets/assets/other/map.png": "9a64fb770bef284424e895e7af25d69b",
"assets/assets/other/shutterstock_388571149-2-1-192x128.jpg": "34fd555f351b3a6d4c2a8c63e30c0291",
"assets/assets/other/67136.jpg": "c94bdf5fcba1d6c71b50a286051c5e58",
"assets/assets/other/Doctor-Consultations-Offline-or-Online-1.jpg": "ed19529f6c46505adc4a0144302d54b1",
"assets/assets/other/blood-pressure-monitor-1952924_1280-192x128.jpg": "e682a68a0a35ee7be55b680719bce581",
"assets/assets/other/The-Challenges-of-Post-Pregnancy-Weight-Loss-1.jpg": "1ab84268dbbebbef3d871e1b09c5493a",
"assets/assets/other/39.png": "f4d1562e3832992089dfea41c5b391bd",
"assets/assets/other/Why-You-Should-Not-Take-High-BP-Lightly-1.jpg": "024be7913876f544f9b7b428763d9dc1",
"assets/assets/other/38.png": "0f1a892f8aeaf1906556ddc8c75e741b",
"assets/assets/other/stork_home_building_1.jpg": "9d0cf67b479d5007f8638715a0c2d692",
"assets/assets/other/34.png": "caf65715cb114746a470d81232669783",
"assets/assets/other/package_final.jpg": "a807f631fd72ea5a61f68ed71501059e",
"assets/assets/other/22.png": "98d1506b4889e2d27c9ff6e6ffecc2ed",
"assets/assets/other/36.png": "45f7d9a796fedcec3e23759a1d4d28bf",
"assets/assets/other/rsz_1rsz_16724-192x128.jpg": "30aab986d6c890eede2682db018a95c8",
"assets/assets/other/32.png": "0de1c795408c57f0753e716cdec8758f",
"assets/assets/other/24.png": "03985585549173f2ae0d7c987582fa0d",
"assets/assets/other/4.png": "5cf52cd306ba630c673d331270d49e47",
"assets/assets/other/Fitness.jpg": "e39d1d44134e398b362d3b63f4b089c6",
"assets/assets/other/hands-holding-red-heart-144x144.jpg": "05fadcac6be923018798354481b7e46b",
"assets/assets/other/UTI-in-Women-When-to-Consult-a-Doctor-1.jpg": "c3b6c295f2a5cafa10f3eccab155bfe1",
"assets/assets/other/Carousel_Image_Hairfall_.jpg": "7ebd49c24e403ddeaf27cbc29c38d7d5",
"assets/assets/other/41.png": "f1feb264dc592e4aead1f55d020514a7",
"assets/assets/other/55.png": "6b611fe4631d7d702aa531955cf3e8d4",
"assets/assets/other/69.png": "7abb86e416cfa80c89ff10869203c112",
"assets/assets/other/Parenting.jpg": "6330603b584d3498716593a2d07d87b6",
"assets/assets/other/68.png": "cfe3ac373aef2f7214305ed19833da71",
"assets/assets/other/54.png": "25e14f5325f8b39408a9fff4bae25b2d",
"assets/assets/other/6.png": "72cfc1c0d8d9621036d636e66f156440",
"assets/assets/other/40.png": "04cdc29b2dec56814da56da99f76b263",
"assets/assets/other/50.png": "59db8ef07e80472d79205401966d152b",
"assets/assets/other/3.png": "4ab43579dba0e02dd414aa27d81b128f",
"assets/assets/other/Anorexia-The-most-dangerous-form-of-eating-disorder-1.jpg": "fbbe3464594f1fb10f5211c9dcbdc744",
"assets/assets/other/47.png": "8ffb160ae2833dea89d1cf0b88987c7b",
"assets/assets/other/Mental-Health.jpg": "0e2ebcbd90d963c83d05de35ee81786b",
"assets/assets/Map-Pointer.svg": "5e8821589f126ec83102b3a043ea4d13",
"assets/assets/email.svg": "5054add9382d1456807321253177d5e1",
"assets/assets/default_profile.png": "d22b9e83655b17f9b0a9523cc7e7c444",
"assets/assets/heart_active.svg": "4e1a685c9e3f848a6cbbd29f3a1fad1b",
"assets/assets/facebook.svg": "3a8d5aa5b0524f95573d91c914075fb9",
"assets/assets/filter.png": "84d95ca0bab775c8a8f16ed10f841938",
"assets/assets/NewImages/doctorImageLogin.png": "cbd228ec55b7f7314f53a877439c87dd",
"assets/assets/NewImages/splash.png": "f8bf3bf07ee0fad7b48af681ed1053d6",
"assets/assets/NewImages/logoImageLogin.png": "ee0f7cd39bfa0950659f804dcfe5a822",
"assets/assets/location.png": "a9e5232ab1f1d8a0bdfcdca6adc20c55",
"assets/assets/heartInactiveNew.svg": "3b1f1db3ce3c918f497b3ba0da46e4a9",
"assets/assets/footer_bg.svg": "ffdf9b6dcec1c597543fbb83c5a19571",
"assets/assets/call.svg": "907dd8c87dd2afa4b43f7b16c839d259",
"assets/assets/linkedin.svg": "3b974a44e080b6ded1851e4112630cd7",
"assets/assets/Twitter.svg": "b7a2b9e84f2dfd068e18ac248ab0b597",
"assets/assets/explore.png": "2bf693e2a8e555989e17940d8cdb0216",
"assets/assets/notification.png": "60ede26326928f94774452e0a7983372",
"assets/assets/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/mycart.png": "e59a786502180274d7f00657cd9da666"
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
