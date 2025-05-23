'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8a9af1e1fd76d61a1759c2b0d10b245b",
"version.json": "cd4fa932c749b6402bd5073e786be8e6",
"index.html": "0018246363efa0fca3380c9c14320673",
"/": "0018246363efa0fca3380c9c14320673",
"main.dart.js": "f36096633dd0bc97512c04fff618c2f3",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ea9cd970e7d62f9c9c1d7273583ef37",
"assets/AssetManifest.json": "9ae32446775ffc34dd4ba393f8f79d4d",
"assets/NOTICES": "a082f791b8f05b29fdaa5f4c0af5b995",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D8%25A8%25D8%25B7%25D9%258A%25D8%25AE.jpg": "e0509e6b60244fd099a05e72410c2275",
"assets/img/lemon%2520with%2520mint.png": "a3cbfb16be0253fc47f5d49d2a4b40a6",
"assets/img/orange%2520juce.png": "662e530e80703e214711ceeaac460765",
"assets/img/hony%2520cake.JPG": "0608c8be10ca642eae2d1cf885b0e316",
"assets/img/post-2.jpg": "46170ba7a14d04f86707f9a24e5dd18d",
"assets/img/kortado.png": "dc449ee66de3e232616d6270eac1f74e",
"assets/img/margreta%2520piza.png": "c2b020ff4d683d8897295ddc3b16c689",
"assets/img/redbull.jpg": "e72d581a721f287af17c185d8fabba90",
"assets/img/tiktok-removebg-preview.png": "a1b327ff8f0861fd350655d7465d1801",
"assets/img/post-3.jpg": "f2a61e4663dbaabfe91354d37da1690c",
"assets/img/menu-burger.jpg": "f09ef995f26624ef9db14be48e8f38ac",
"assets/img/green%2520tea.png": "20fbdb4b428b3970415888852734ec21",
"assets/img/latee%2520cake.png": "c5d31620bbe33c25e28b3a7b3f2b9fd7",
"assets/img/cake%2520zaffaraan.jpg": "9c06fa1001eb24b65d5ae0ba61ebd174",
"assets/img/tektok-removebg-preview.png": "e6855363acaf38cf951765e92104987a",
"assets/img/7up.jpg": "da567d66f9bde31fbf03fd1bb181d6ec",
"assets/img/ice%2520%2520tea.png": "666502f91ee8cc0aec8b8bd0596092aa",
"assets/img/post-1.jpg": "3c65be75e30dd6845f91c9bb52fdaf2c",
"assets/img/cake.jpg": "8153a46ec19ae6d2df4fe4da270c92b7",
"assets/img/chekeen%2520royal.png": "71b06d6898172aab5bdbde99c46194bd",
"assets/img/dallah.png": "3f911ce46ee02b434680b30bdeda0f51",
"assets/img/ice%2520mecato.png": "c2f4a881e6f4e0fb5d10cee2124dbace",
"assets/img/coffee.JPG": "0f99e8f90e05c9cef6e6e3fb06769cc9",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D8%25A7%25D9%2584%25D9%2581%25D8%25B1%25D8%25A7%25D9%2588%25D9%2584%25D8%25A9.jpg": "ed4a0f5f4741f4da936d7ef8fe889fdd",
"assets/img/menu-snack-img.jpg": "1125947f38ca05fb219f8fa55cce8d91",
"assets/img/ice%2520mecatto%2520cramel.png": "af2cc27a3158d0ab54d925caadd5ad8e",
"assets/img/Lounge.png": "4b6b37c50374dbc7a361d04a7a5a1782",
"assets/img/ice%2520cheken.png": "68f1a01ef99ef86a07d7260e51867b2c",
"assets/img/turhish%2520coffee.png": "54f10a34e04fdf7cf82c70d7bc3359fc",
"assets/img/brad%2520green%2520tea.png": "6cd753bb34d9811544ec2d8107bd77c3",
"assets/img/strabery%2520chese%2520cake.png": "ab73cf4cb4e222da08605e38689d0081",
"assets/img/four%2520seson%2520piza.png": "88f1012f1ba0b46aa9e75e13be67deab",
"assets/img/latee.png": "7e45bbe01123765866d0cb3861f253b1",
"assets/img/post-4.jpg": "fe95ed6d518ecbe67fd69f02f1ec26fb",
"assets/img/hawai%2520salat.png": "c560ceda536bb9a544c90fbb1fe58891",
"assets/img/post-5.jpg": "b583165383c9f8e80b1697eebfc69ed7",
"assets/img/Bison.jpg": "d6fa3eea971f1a025dcb305f78b37410",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D8%25B1%25D9%2585%25D8%25A7%25D9%2586.jpg": "00c757874b56e4ad18d510d579948177",
"assets/img/7up%2520diet.jpg": "fcb712703f655033d8c9f1dbccf0d18e",
"assets/img/bistachio.png": "568bc1c71fff56ddba92e0ba3d21b2bf",
"assets/img/bnana%2520with%2520milk.png": "de8e2dec5b77dceed76cc869fc0b0e1b",
"assets/img/instgram.jpg": "653dc309a17fbcd1b581ce7959f53950",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D9%2584%25D9%258A%25D9%2585%25D9%2588%25D9%2586%2520%25D9%2586%25D8%25B9%25D9%2586%25D8%25A7%25D8%25B9.jpg": "9add5849c51cf0b62b525f278a4170ce",
"assets/img/roman%2520juce.png": "ca996ab98e7c6d71950233aa06826881",
"assets/img/menu-beverage.jpg": "bda00c92769c175afeca82a8ea643401",
"assets/img/spanish%2520latee.png": "e8dc3d910a360cc50e548258e5df2979",
"assets/img/fottshini.png": "a5339f4cafc3dd636765466a4db0522b",
"assets/img/cranshy%2520cake.JPG": "7a464ef0b07db83c215ce86f8ca47f41",
"assets/img/hplstien.jpg": "b8cd651c723af4268ccd9442127efb8b",
"assets/img/ice%2520chocolet.png": "771b0eb00ea593f3bc7d36eb60d4da6b",
"assets/img/ananas%2520juse.png": "417c2cbfec03cd1b60a521fdeedd065d",
"assets/img/brad%2520moraco%2520tea.png": "1cdea403a981581dcd7ffe12d649b636",
"assets/img/amrecano.png": "0ace04650b7792b7647a59ff28a05098",
"assets/img/whatsapp__1_-removebg-preview.png": "431d8c5d67e3b32c5b21bc1a9f695754",
"assets/img/lemon%2520juce.png": "74100bd0e98157694783106dcae5cd1f",
"assets/img/menu-beverage-img.jpg": "7f077f8ea21513499473bb0e777299fd",
"assets/img/beef%2520burger.png": "890da5d29ebe120bdfff3d2504b20fec",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D9%2583%25D8%25B1%25D8%25B2.jpg": "2408049ebc6c188ced8e15a3cee62ba3",
"assets/img/cheken%2520burger.png": "bbea31279dc8d798d448951a4af95cfb",
"assets/img/testimonial-4.jpg": "60bf1f6dddd0087487ffc3945ae6527b",
"assets/img/strabery%2520juce.png": "0a14839c4640d18afcb414b977245ca1",
"assets/img/mint.png": "db3df36bea2c5e43525e412a7886b71e",
"assets/img/tektok.jpg": "6142614116719fb8ea48bf9a70294e74",
"assets/img/Lounge-r.png": "795b661af27686614dac66524c9dfc8c",
"assets/img/arebiata.png": "9cc1f295eb540d70d3175e535d70b159",
"assets/img/pepsi%2520diet.jpg": "de69e2e3a8c26e997c4e915eed690691",
"assets/img/user.jpg": "3b6a6290110a957dc3931780c5ce2b44",
"assets/img/pizza1.jpg": "d8ab654b2f6dbc0616b79c88cabeaaaa",
"assets/img/turhish%2520coffee%2520with%2520milk.png": "22ae55383551658e9b9a3bc9ff925cf2",
"assets/img/mango%2520cake.JPG": "78dd81dc0969b83559c3bcd9c1f35700",
"assets/img/ice%2520spanish%2520latee.png": "6ab50ab5d2b59c2d4588bd24784f3836",
"assets/img/menu-burger-img.jpg": "504304374d2b8398fd82ea607e6fe058",
"assets/img/pepsi.jpg": "e58bb84a3d2851d1295a2386e806b15e",
"assets/img/black.jpg": "ac2036b8909b4ee85837e4efec1350bf",
"assets/img/testimonial-1.jpg": "a74d949921b2b25184c167f8e0453ff8",
"assets/img/doritos%2520piza.png": "ec08b3011f69f21d9949f26fcc1b51e2",
"assets/img/testimonial-3.jpg": "aa1d3ebbfce010780538fa152788d905",
"assets/img/codered.jpg": "1cb856abf6b718d1afab9077046ec633",
"assets/img/molten%2520cake.png": "7032025b2f86bb40f82263b6e2305a7b",
"assets/img/testimonial-2.jpg": "dbe1e1f062f1894bb0ba848c3b82561d",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D8%25AA%25D9%2588%25D8%25AA%2520%25D8%25A7%25D8%25AD%25D9%2585%25D8%25B1.jpg": "e7d16aef9c723cd94223a6f365ae76f2",
"assets/img/cesar%2520salat.png": "abc48db6d3419ae684c024a3daa9c87a",
"assets/img/birthday.jpg": "8d4b22dbf762e297836e345d029a4e5d",
"assets/img/avocado%2520juce.png": "ab612d22616b4b19aefeab0466c4a299",
"assets/img/tiktok.png": "52ad298e979a1cfd99dc22010be439d5",
"assets/img/%25D8%25A8%25D8%25A7%25D8%25B4%25D9%2586%2520%25D9%2581%25D8%25B1%25D9%2588%25D8%25AA.jpg": "2ce2a19818baea77bad0e555e0dac405",
"assets/img/feature-1.jpg": "20c219131793fd03d0ab603cf56623de",
"assets/img/shmam%2520with%2520milk.png": "eb5dffac1994d275f603428802abf476",
"assets/img/brad%2520red%2520tea.png": "80a5b39995dfde3f877b8a8caba5bd0e",
"assets/img/red%2520tea%2520with%2520mint.png": "0c6f0e6f3ab862a35ed694546d8dc748",
"assets/img/casadia%2520cheken.png": "29d4300b153c7ab9e416577251d7c405",
"assets/img/header.png": "f4085f60828f1634c53a2f21f0baeffc",
"assets/img/feature-3.jpg": "36c9cafa84a1893193e5a7657bde029c",
"assets/img/espreso.png": "c7a3b16ccdd54618237a6b6bcf3b2688",
"assets/img/Red_Tea.jpg": "7de9c96d819be88024f1c1c368618b9c",
"assets/img/%25D9%2586%25D9%2583%25D9%2587%25D8%25A9%2520%25D8%25AA%25D9%2588%25D8%25AA%2520%25D8%25A7%25D8%25B2%25D8%25B1%25D9%2582.jpg": "9e2ac897f3413579c3c6ce8c21bb7e9b",
"assets/img/cokis%2520ice%2520cream.png": "120ccd1c33f087f035b70b4a674e8374",
"assets/img/blog-4.jpg": "3c99412eba42f9c6fda9c1da59acbcf6",
"assets/img/koktel%2520juce.png": "9f914ee0ca7c92ac53b5561eba548ff3",
"assets/img/feature-2.jpg": "481e38774ffaf8bb2a628d6c62fa2e8e",
"assets/img/mango%2520juce.png": "57597fc6cf63409bc209a2500dcf8bc4",
"assets/img/reta.jpg": "8919a058c2db4585f2401147ed3ca439",
"assets/img/instgram-removebg-preview.png": "da9efa1be6f035b48b29b7b8f6befa44",
"assets/img/masel.JPG": "56eab8f17b175bdfe834f914d2950312",
"assets/img/ice%2520cream%2520cake.JPG": "fdc6b4e6461f322632d5232e74a45c68",
"assets/img/carousel-1.jpg": "901464776feeca762b3a9e423881bf3b",
"assets/img/strabray%2520with%2520milk.png": "c373787eba4b111658cf0489b5ea5a2f",
"assets/img/blog-1.jpg": "8fe9985170234f43f31a4dcd19fedd36",
"assets/img/menu-snack.jpg": "b78025e9008df95a37fe50959f72187c",
"assets/img/flat%2520white.png": "fd4f950bfa284b6eb8af7a7adeab6df5",
"assets/img/water.jpg": "02f66599f668fce4bc7627d8da09d12b",
"assets/img/shmam%2520juce.png": "49c62a93e1233a903dde73ec576d2f66",
"assets/img/blog-3.jpg": "fe5f90bbaef3081fd468706f612e743e",
"assets/img/carousel-3.jpg": "ef33ba9a4c60ac26d4572b50bc1a3028",
"assets/img/carousel-2.jpg": "d8f57ea87528ccdd10d7419d77da7279",
"assets/img/ice%2520moca.png": "13120ffd37121159011328035c3ed722",
"assets/img/blog-2.jpg": "642be8d09d4ad128608c80a95357b910",
"assets/img/zaafran%2520cake.JPG": "8bffa1a1cadd6c009077cf892d8e98b8",
"assets/img/mango%2520with%2520milk.png": "60462063f42180a252dcffaf959ad8a9",
"assets/img/doritos%2520salat.png": "a0b9313fa38ce1827071958b6c06c0e6",
"assets/img/feature-4.jpg": "4b852b238cf9f34fb4e520d36b4e9553",
"assets/img/franch%2520coffee.png": "19f951b3854576c5aef971d8d0b76b43",
"assets/img/single.jpg": "e34695a0869c08bf08b5d34c4204c153",
"assets/img/mikato%2520cramel.png": "07f19259c006252f4bdad388341dc7af",
"assets/img/WhatsApp%2520Image%25202025-02-28%2520at%25208.15.34%2520PM.jpeg": "4ce44892207338d4cc8534ea00d781d3",
"assets/img/spicial%2520ananas.png": "96e6859e76ad026edc6965fa77964cba",
"assets/img/stek%2520huose%2520beef.png": "2702bbe60bca6d0f2864ff6ae144b430",
"assets/img/team-1.jpg": "a76ff4d845ecccecac45cdcd326772a1",
"assets/img/luts%2520chese%2520cake.png": "076dbf625be90bc30771a2d3ee89e490",
"assets/img/hot%2520shocclete.png": "5019e88533116f13e39713440b1f471c",
"assets/img/pizza.jpg": "ed9f647787245a78b83a6285bb8a576d",
"assets/img/france%2520coffee%2520bndg.png": "d65f4e1d9cce30b80697e949f467f68f",
"assets/img/team-3.jpg": "22b7113942b9993897f1829f7bbcf2b1",
"assets/img/capitshino.png": "254e6603bf4d8fec1e1f95bbdd532d49",
"assets/img/WhatsApp%2520Image%25202025-02-28%2520at%25208.13.43%2520PM.png": "f959928e2879bdaec977355a10835561",
"assets/img/about.jpg": "a5b5fdb5bc9092a50836d739c457fced",
"assets/img/team-2.jpg": "2bb897c0acbac78f2f3e4cc6a47b3a77",
"assets/img/mikato.png": "1e794c8be155a044db3cc9d40e8b69ac",
"assets/img/fotcheni%2520cheken.png": "d6a5f4a32235848b0efa27db6f676bd3",
"assets/img/hot%2520moca.png": "2251e606bfdbdc34b483763ddc42d789",
"assets/img/moheto.jpg": "0398ef58848b13b17bc019a69f227238",
"assets/img/whatsapp%2520(1).jpg": "54a54e571246bfe05ac89c12b5e69b50",
"assets/img/ice%2520amrecano.png": "0eebc42ef994299a09965346051895eb",
"assets/img/cheken%2520piza.png": "a8cdef0069e01582e179614d3f10e219",
"assets/img/bebrony%2520piza.png": "e03b2f961092a1b0e8ced44edcd5580c",
"assets/img/pan%2520cake.JPG": "d44c456ef7b1008c145a324ab5b818ca",
"assets/img/WhatsApp%2520Image%25202025-02-28%2520at%25208.13.43%2520PM.jpeg": "6e97716e6aeabb9b6f4f12599583d4f8",
"assets/img/page-header.jpg": "563f025f23f767ff9fd5cf74da489e52",
"assets/img/piza%2520khodar.png": "5ba2970212a594c57dc0b8132969cbfa",
"assets/img/ice%2520latee.png": "141adee22663ed76baa4835f5353d61f",
"assets/img/team-4.jpg": "db5b78618dcac202810b2cfd4903a813",
"assets/img/ananas%2520with%2520orange.png": "de466c4e77211c9950c9af83db606c8c",
"assets/img/english%2520tea.png": "527a7777d615a849f5a74222e7fed124",
"assets/img/crispy%2520salat.png": "fa4aa2118a375090c9594c0ad5010e07",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "85bbf8f0d84fd5ae521f67353024c036",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "03d4d10f4ba51a280d186f2da3b9b456",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "39ce9f83781786acaf5e480430556972",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "55adf39f5f06b46af65132af789519b3",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
