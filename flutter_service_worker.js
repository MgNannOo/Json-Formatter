'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7710d49aa475c2f9424fc2a01ff8543f",
".git/config": "ae5ff01e7ad6b720d70dd980173b71af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff8a090f1e8097f926799af4e6c3c745",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd51268a67604902ad2803b2ece65a63",
".git/logs/refs/heads/main": "7194e4854a2a07cae3b626db4d712e88",
".git/objects/01/47b20577d27bed3420f32f29b0de8360919092": "839138b9ea819b69f3c30ab7a84868d5",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/05/e29c3468d3a7e4853b56c4308265e65e38fb37": "20796512cce879591a2f447d6a8b8524",
".git/objects/06/09edad3da5fbb0eb91b9846607da9309f2063c": "3664de1e72036bd367d7e2f008bd96cd",
".git/objects/0c/88dbd8ca718b61e2f6711392c511a0646905f2": "144995e0bd6e8ee5368a474a82d7b72c",
".git/objects/14/6a7e320ba4dd6c088c4d33fe9e39e885577011": "5f1dc6bb7569b3c92b70f477cda01f6b",
".git/objects/1b/ae2386131fa4e52d519ad421b87525d4630933": "260026b084978b3247d3afcfbb2c47a9",
".git/objects/1e/72f9d1f43d5ca20e9cdc9be07766dba12f5ba5": "ab1fa1b099007ca34d5aca1affff85ab",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/64a68de112dfc410ea9ef189e0df7ebbb077a6": "fb7fb5abe21b9547406c74a4e93ba7cf",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/1a4f4bcaee0a52853d1c98e988710f4e648fc6": "2d545eaed0bad5823ed12410e4f247cc",
".git/objects/34/5f51b08ba43258a661d363772581a130cb3afd": "1958d514ded0cffac63e48781ac7ef26",
".git/objects/38/ff3b3a2fc075d60c22b43e545d11c551cc37f5": "8d64f0241fa1e628424802ef947cc847",
".git/objects/46/4f2db4ed6e648b08e049c224680d41fd993b74": "eea282ea9930268594fc5bb076ad15f5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/55/4a1e28e5854942f219a420e1e9b9e7c764572a": "f4035c1b0fa1e0496b570135137a5bcb",
".git/objects/5a/29c76f6022d22036669b2fffbd4089df24e882": "147a7256b8f71cac210d589b4890e2a3",
".git/objects/5c/5eeec7c5394fabd50c224b7f2c148ddd3956db": "55508fbad3a04f1dbcd77230deb5a69f",
".git/objects/61/62546c8d9347204a543251d2b883de536d07dd": "46f032ea7a5e7015db4bfdda303d71b9",
".git/objects/66/a4597322f3e2fa103f5db4de6f3838e7a54c51": "2bb4a097519ef900018cd88615eae7f5",
".git/objects/67/a618d4e4672e5f6871c4054ba32e0233a00486": "523da513e204d46466e374cde87555e2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/03c55b578c4aee42edb2b33df26bb2698d4a2b": "c015703f5ff24bc318c0ca8cbaa8f889",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8b/f7b9eb7fe48866902c900fb12ab3dd8b1d0031": "95a3b1a47e01fef8b03bed664c90ac5d",
".git/objects/96/296a5991f1fb1265963df761963505866ee457": "73c921a0d9c988bcbe8d5df7d91934fe",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/0e5f0ea5db7fdf33b02e39b97ab8f05484c0df": "1d265806feda079e2c94e49c2d040a71",
".git/objects/99/59f5de511c7e3fdbd2ec246bdc040b1634f067": "a3479530eb44bf36799af19742c09175",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/e138e49ab8aacb70c3ad3a6e2c0961b25eaf7d": "957185a574afcbe47312c68dccddd950",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/5c9f51e2bb346bf432efde9e4637fc75618f0c": "052e6d2ffba80e2906b63eed88a49f21",
".git/objects/a4/7b3dd65c976d92ffa2b6190c0c2ecd94e766ca": "d223863fc7d631f62818b9fa7013d041",
".git/objects/a5/8e6b62f42ef741a55909d44fd6e75ccd5a02a9": "45f4bab2c50d60b304b4fd835afd0533",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/bc/f218daf61dd423941cff7e1d7753cb9cc86df1": "22ccbbe3016c7f6afebd360d51494350",
".git/objects/c1/66529bf2c4bdd44fe30c11bdf019d70d1ca96a": "44d8233d313c2da1ee814a143f9e1bfb",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/5c345cc784bac9f0c8fc4d2cb2574da4d71cc4": "90b14ff0240abb32c64ca45e7fc37f2f",
".git/objects/c7/a3166228c0cad129c70804b81fefca7afde2f4": "12b63e6053f8660a1634ab4393fb7031",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/559cdc9b3bcc0f65d6598317e2698f8a7463fc": "f1e053cfa61dbad28e0929ca24557581",
".git/objects/d2/8c68069269b7d6bf86c664452cfbdf627a0158": "6801d688b8e4de5e12ced4bcfbe47de2",
".git/objects/d3/a920de019545cc7e64b554247085323b178c19": "e3928c5a0be209acba93efcbffffef90",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b729dcf5577310075dc34fec7d2a68878538e0": "c6ef106ca70f0ddb9d0049a9a9ac3bcd",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dd/bc46a523b71b21337619d1387cd7ee8e64f0b6": "1d2be4b2eedbbb6cb9576b69af2e971d",
".git/objects/e3/4d24015469cb53faf5cbcd49eb3c786a519d24": "78980e795eecac4b90f8ddf78061df9e",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/a6bc5a6584e2ee18e6a46656f975d99158ccf8": "99d89502781e086909223103518e412c",
".git/objects/e9/387d70fd3d763c558212a9c83516596df8b204": "76ed5559d65dcaeb0e610712641c0174",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/18c491a7c17ec8d3db2ebb7e34c1724ab547d8": "d50453426d0a8d9eb3689a270216570d",
".git/objects/ed/99db6479b39d3adaafc5009dc3fba721b66588": "80c9af69432c1f1abddb1e111eb86867",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/609701591777147c158394f19bef2a31e65338": "d3f2080fac2163dd857dac42412fa5f3",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "55347f23681ee8f9b0561586f2c22509",
"assets/AssetManifest.bin": "11b4fe5ccb3e238de80260d884ecde91",
"assets/AssetManifest.bin.json": "f3532adf06e89c6ffedbbcf214c1b831",
"assets/AssetManifest.json": "e3e92d25a7a4d438fb03e7dddab504d5",
"assets/assets/fonts/english.ttf": "27836f0c46bfb03982e86c4ed5c8cc45",
"assets/assets/fonts/myanmar.ttf": "5c5a91aff52a5c4525c8f75b35ca3f4a",
"assets/assets/icons/clear.png": "58da5d7daf8eb59515b1da2e055bc9ea",
"assets/assets/icons/copy.png": "5845bd2bc8624ea240cc75a532cdad0b",
"assets/assets/icons/day_mode.png": "f9a584e15a94d84f3b17e5c5149d5d1a",
"assets/assets/icons/english.png": "648b791884e207b2772e8738437edfbb",
"assets/assets/icons/format.png": "8646810aeb798c6e4668c6666238411c",
"assets/assets/icons/myanmar.png": "e54b606d88482c123e21c6a7d76ad748",
"assets/assets/icons/night_mode.png": "b4a4df071148a52a5bc1c704f61ccc33",
"assets/assets/icons/replace.png": "5794006cc2982d50ca74d32ab2b76a1d",
"assets/assets/icons/text.png": "3ea5a2432d40c9bcd8cbfe4b8d199d01",
"assets/assets/icons/viewer.png": "835e5235b9713fddf9ebdb28b4eb9e85",
"assets/assets/languages/en.json": "56daa226ea68a68abbf4f23925281679",
"assets/assets/languages/my.json": "8ecc7ab7837023008eabd856a1e63f26",
"assets/FontManifest.json": "6b8b84ccbbd8dea6e3fcc16bc8bbf11a",
"assets/fonts/MaterialIcons-Regular.otf": "49f8e7138002a69dff4b1eacc54f386e",
"assets/NOTICES": "73619c85ea067646aefedafb7300a2ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "b5a514be3cbfc97007202b3b5d9fb5e9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "29da46c4749bfb846f5e4884917d4226",
"icons/Icon-192.png": "8c12d8ab5b428a56e0540a9ea2e89aa2",
"icons/Icon-512.png": "1d72f6985b26ed5ef968f709f949c9e3",
"icons/Icon-maskable-192.png": "8c12d8ab5b428a56e0540a9ea2e89aa2",
"icons/Icon-maskable-512.png": "1d72f6985b26ed5ef968f709f949c9e3",
"index.html": "1a4d93d597e89d8652fc7db5efb3d6bf",
"/": "1a4d93d597e89d8652fc7db5efb3d6bf",
"index.html.bak": "477349bbe29c41bb2401e8c5bbff5b55",
"main.dart.js": "34bbbb9e389a771dbd00582c993c6cb4",
"manifest.json": "722b351f2fa4c9e080751c00c49508bf",
"version.json": "2c64e157da4b5ecd4ae5d91a96c02153"};
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
