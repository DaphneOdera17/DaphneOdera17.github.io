/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4f4926a2f33d6b27eb50413946b724ac"],["/about/index.html","e61378b8ed2676792320a7e786463989"],["/archives/2024/02/index.html","1b4d604bb3088c7f81cb519543e625e9"],["/archives/2024/03/index.html","fbe9d037c6dd1622241c9af53adf0bdc"],["/archives/2024/04/index.html","8bb708f98ae25226a8d6948dbbc8d20f"],["/archives/2024/05/index.html","b543b408cadcf9988ad24855b28b7a72"],["/archives/2024/06/index.html","a0bb4618e38d02e8165d616c763a52c2"],["/archives/2024/07/index.html","f6d6a7228fae2c5306182973f8770016"],["/archives/2024/08/index.html","9ef067c13c3a299567c50dcdc0923f11"],["/archives/2024/index.html","e3a54554c1fbb0fd472e053e1eb52e9e"],["/archives/2024/page/2/index.html","b05d5c42c8a45a4a0b8a82fa10b20730"],["/archives/2024/page/3/index.html","cc614b9283a8783669daeb92e238d8e7"],["/archives/index.html","2324bd6924a81f28ad3a2c6f90c66f48"],["/archives/page/2/index.html","94e2ff58160ca09877feafaa41a24c6b"],["/archives/page/3/index.html","704317acda852da7b72db3ad55122ce4"],["/artitalk/index.html","888bfae41fd9d4e1d0d36fe5c66ce572"],["/books/index.html","2e1f9ed9eca3c7ff0aa0497dd163f444"],["/categories/CSAPP/index.html","e0b917b99bcaee898b5c82f37e064e63"],["/categories/Docker/index.html","074880c17be0cbf53dd36445629bfe96"],["/categories/Linux/index.html","f5f0454b9484aa73292586ae29f4878e"],["/categories/NJU-PA/index.html","3f3b5cce8d5b3abd90b6042230e717f6"],["/categories/OpenCV/index.html","ab95be336da9ac6964fe938dc7c961e6"],["/categories/VsCode/index.html","8621b4277247e57eb0201878e5704248"],["/categories/cs61B/index.html","18b4ec7aa05965e04231f78586c3ee94"],["/categories/cs61C/index.html","dc43744aa146a17d753c3959b62a3ab4"],["/categories/hexo魔改系列/index.html","22bba390eeca0f001751e63117c2977b"],["/categories/index.html","d92dce41a51d9539f41069644296f6ec"],["/categories/一生一芯/index.html","f5b875aa3de9f01d9ce95027b099d1aa"],["/categories/技术/index.html","93a7ff3945c0b7e5f30bb72c1327e55a"],["/categories/深度学习/index.html","4d6ab3136d15a05689ad05f3fc004dc8"],["/categories/科普/index.html","6d94b00181e9f9e44643f54624fae1e7"],["/categories/算法/index.html","463e56b8327c0e0ca6aa16ead613dec1"],["/categories/虚拟机/index.html","4c997bd67258e020f50f818a652d6468"],["/categories/问题解决实录/index.html","5d5cbaec45a3fab1949feb1427e8af38"],["/css/background.css","a642f783acf2890bf902cd90c262b9bb"],["/css/bbtalk.css","327aa6913af737d545826341284699ef"],["/css/color.css","3baec6076afa4c7cce680b539b1bb8a2"],["/css/cursor.css","324c54c8d7f8d5550ce1ed6001d9db5d"],["/css/font.css","bc8780f7ae40be7a71ac46efa4640815"],["/css/icon.css","a7a4185061448e3c62bac3a6126811c1"],["/css/image.css","aafe6e0ce2ef6ccb9c7c1a7de474541a"],["/css/index.css","88c494be3c52b1fdd5e6473be676cfdd"],["/css/modify.css","606567c410f645cb5cb42c971e215d64"],["/css/nav.css","0230701a709c337f327d47f28efa5443"],["/css/own.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/size.css","d896988187dc4be5ee7810d9aa4fb416"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","28f9f70bce079318fb8955a39ef75b32"],["/gallery/index.html","492144b2f72f0c59517219ab9cfd1ae2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","add602bf3490ec7a735e1c7582b662d5"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/nyancat.gif","9d07a1dba684c1c56b54e15793d8f498"],["/img/wechat.png","f4badf6716dc1d0499e9343f0cab316c"],["/index.html","dccfdc5122059948983445ca27ef5ca8"],["/js/bbtalk.js","4124c77c2fff77b3c1b6d1a4e5c8d505"],["/js/cursor.js","4d59c1cc67d7a3d5be97eba2a2a5ba9e"],["/js/githubcalendar.js","ebb18b313c62ac561ed6be5ac8a7edce"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/modify.js","bd415ea84b32bdf5b6b458415481be79"],["/js/sakura.js","66157c0791f07a00ecf06a15aa5ac4c9"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","07c6bf80c8ee240fca1dd0311c7c38de"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","e245e777064718778ceac7ff41eca956"],["/page/2/index.html","bc1bc5cf45ab6436403fb027add1e8b3"],["/page/3/index.html","efd0173de3620b08926abb2b76db78cb"],["/post/184dbe6a.html","093b7914182c07302f0e99829e596b37"],["/post/22c14ef5.html","6e6a2bc3f72aa90bd82423524500f986"],["/post/25ac8aec.html","ea97f160de400b667b0d4dc04a5e08d2"],["/post/2b409a66.html","585ac948e2f4c547ec3a5b8b05408bef"],["/post/3296e98d.html","2666f76300ef78bac0662729562eefd6"],["/post/3345e4e9.html","f3b5e6f8576a5973df463ce14ec96a13"],["/post/4560477.html","03395e2a0b86943821627f4755881464"],["/post/52abba7a.html","9370c8f08375d59de4faa7ce1f530ec2"],["/post/55c67e63.html","b1d24d83a66199ea7877d861919685c3"],["/post/5dd3bd60.html","5d5525e7517c7440c6b05105aca9c5d1"],["/post/60917e5c.html","0283f1c984bfa29fe5d20aa2986f3a0f"],["/post/639f0c9.html","93f742139230aea2aedcc2a1efe8dc1a"],["/post/6c4989a3.html","903833ee718c46661d470ffd23e3ec7c"],["/post/790c8b8.html","0a5399da67138658c93515692596f76f"],["/post/7c1f4ae8.html","29cf5eb9e9ca07e2c69cb612449b3db2"],["/post/aa87ba6f.html","aad26963a3274cf7ec1d4667ec701a66"],["/post/b187a7e.html","96c6589c641de3d153284baf3c7f1717"],["/post/b513977d.html","288cec6b15d385dc73bef09862dd0179"],["/post/b5141e1c.html","9d0440018a0fd567d00240e46cbece41"],["/post/b8742b63.html","6d2c7c645ed8dbcff23f93dac3d59aa2"],["/post/bca5db56.html","5cb390e376ea39920cf45402f08558f8"],["/post/c0d75012.html","450568cac5df53f83515ec62fabbaf7b"],["/post/c214a7eb.html","a40e85296c587a4af472da27b21179d3"],["/post/c390144.html","abe55e391a907030668052eb7aed4de7"],["/post/c689e876.html","73d7b6be9eaef66abb3e9a84ea0d2248"],["/post/cba2ebc0.html","eb74aa0f951c158ab1f11d84e7c19c44"],["/post/cccf2fd9.html","4bdfa77ff3bd86241008fc0b5c5dd76f"],["/post/cec4690b.html","9ef1ea0b8add33f5cc9c71eb903cdfd0"],["/post/e03cfb73.html","cdcca65f9bd22cf37be31831e19bf3be"],["/post/e4aae5e6.html","fddf5792b5235fe6d4420493c6397788"],["/post/e5161b52.html","a5d59538351bd114daef925111425d1b"],["/post/e8b77b1.html","67eb2a23a26c11dc12c9e1f3db44714d"],["/post/f1db88d.html","474e6afb89d1394ee29df92d58c2539f"],["/post/f4ee2029.html","ee16315d320ea5c9f676cdde981ef62c"],["/post/f6ba7c15.html","00eaf19c3ca0983b10382c9ef818ade6"],["/post/f849bb21.html","056e6b5c1d029ec9b7337fb783024f48"],["/post/ff8ad698.html","daca51511c15ef8c966341ab57c24493"],["/sakura.js","7b6fb201a7522a07474f0ad830fc6c3e"],["/sw-register.js","21bf62f7f90dc0eb385256e568f39d24"],["/tags/2048/index.html","5452e313ecffd679bfa7614093645ad6"],["/tags/Anaconda/index.html","cf9289205def581ec204e72a349568c0"],["/tags/CSAPP/index.html","8fa04c925b11605031786a5d94c0e102"],["/tags/Deep-Learning/index.html","e07a782589090dd07401d04399f2dac9"],["/tags/Docker/index.html","21c22832e3546799f39ba878128dd72b"],["/tags/EECS-498-007-598-005/index.html","5fa0f6be4ff8192453fca482e727d8b3"],["/tags/Github/index.html","b7f064737005785fba631f769ca13510"],["/tags/Linux/index.html","9c20d94dc82087d4af8304a56068d276"],["/tags/Logo/index.html","bd94297f190eed4d160dcba90cdefffb"],["/tags/NJU-PA/index.html","deada0a48f2b4782e1a168b444f068af"],["/tags/OpenCV/index.html","97e30ea85ce119e848a25fa3d58ba8b9"],["/tags/SSH/index.html","e3652b63a71a99964a23512258d797ce"],["/tags/Ubuntu/index.html","51ce9d99a17c6b5e4c1274d941cd8c43"],["/tags/VMware/index.html","74a3c1f19fda6d8adeb6947e014ee953"],["/tags/Valine/index.html","08c8e4d46c9183a65be4a9f7feaf1351"],["/tags/VsCode/index.html","c73dffea09a8280622715c140892ddd0"],["/tags/aplayer/index.html","5fafa8ca2e422bbc1908879c824ba191"],["/tags/base64/index.html","d886bf672db3a98b7a453342efc4f8f5"],["/tags/butterfly/index.html","a519758456d2f1c87db7f856d6f9b5a3"],["/tags/cs61B/index.html","ddc63f7ad421d316263ea9a6ead3784f"],["/tags/cs61C/index.html","5f7a643f2ef6905c59245f1be939c9a2"],["/tags/hexo/index.html","83cc2ac34b65831d83bcca3dedb5f153"],["/tags/ics/index.html","fc435722fcc6b5c76c23b311c3fd4c73"],["/tags/index.html","661a4f43bd3958c2d51426f887bd3e26"],["/tags/java/index.html","b06ffd2a95a7aaad837dabb2bd42ba22"],["/tags/matplotlib/index.html","db7eba46ddb6f43d7ffa07e25d5bcb5f"],["/tags/python/index.html","2bdac7839d6490e004925401edc520ec"],["/tags/一生一芯/index.html","0011af3e4eb846b639434f1dd130cd96"],["/tags/体系结构/index.html","0d425a7312ec298c9b4acd65a40396b2"],["/tags/技术/index.html","ef7d6e6c8d8006aa78831a6cd0852a82"],["/tags/教程/index.html","21c32069e33f59230b6391aeffb70218"],["/tags/旋转小风车/index.html","7ddde27769af5f68ace79c5fe2290feb"],["/tags/时间复杂度/index.html","40d99df9543f0260ea3c62206e2e7e84"],["/tags/深度学习/index.html","0dfe31dabb5394eac8f96b28a708b71e"],["/tags/算法/index.html","4c28cae359dea44bcfdcfda03b49642b"],["/tags/编码/index.html","9d0cbde74eb51526489b5fbe27ceda91"],["/tags/虚拟机/index.html","a7cae7f346f6c077ccfea0d086795e20"],["/tags/计算机系统基础/index.html","a7fdeb9f7c3b36c0810f39b00f23a204"],["/tags/评论/index.html","9b9432d49cc99f47e549e665c19cda36"],["/tags/问题解决实录/index.html","80f19583495307968d402aab46e3b055"],["/tags/音乐播放器/index.html","80da1152ec479bca20ffd1cab2382865"],["/talk/index.html","59de64cc8051457c7b7e3d9bc1ca3aa3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
