/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9784c53773c0e7cac2791f1a4e07d87d"],["/about/index.html","3f3382e760232cd3656bcde0b145339b"],["/archives/2024/02/index.html","a672594ac0be2c1d23c429103577d264"],["/archives/2024/03/index.html","d5f4fb8c5543f46b281cb4a8018bd288"],["/archives/2024/04/index.html","5127e14a4a743aced69b18ce5610909c"],["/archives/2024/05/index.html","0fd9b8fd80a514269f8f68eb1f11ddb1"],["/archives/2024/06/index.html","adafc5244ffd6e7237f3c42c57016c5b"],["/archives/2024/07/index.html","ae0c9fbb3c37221479b19fa99ce59378"],["/archives/2024/08/index.html","62219b8c86fbb12477864277918e5604"],["/archives/2024/index.html","77a9e5c4e51ab378d20260b9481ef593"],["/archives/2024/page/2/index.html","033426acee0a0a09d520650e0e9c0d99"],["/archives/2024/page/3/index.html","877316cde27c28bc18afa5a9aff384f5"],["/archives/index.html","2ac3a63e45f3025bbce90085ad7c7532"],["/archives/page/2/index.html","eeff0ad930068f3e5f222dd416c32c83"],["/archives/page/3/index.html","4325d61446205f6835de1a2edddab1d9"],["/artitalk/index.html","3e966c03b6e6aa8d80eb9ed45f392d6b"],["/books/index.html","26de240289092028430f8e0cc834e7b5"],["/categories/CSAPP/index.html","6ce0777a2352abbe9643911db6112e95"],["/categories/Docker/index.html","1a410201ec410076c443e70e70625ab3"],["/categories/Linux/index.html","94ecdcda66a8116bf4cd8b3eb1bb7ff7"],["/categories/NJU-PA/index.html","9ed7357e988386a2ae04688334370df7"],["/categories/OpenCV/index.html","740ee2cb45931107b7a8754316252202"],["/categories/VsCode/index.html","8717b2c9cd876e1f7e1bafe89497ba8f"],["/categories/cs61B/index.html","90753d3c12a5df176370c9d48c25d2c8"],["/categories/cs61C/index.html","63bbe950fabcec71c1bdfdbc3fa7840d"],["/categories/hexo魔改系列/index.html","9512e4f459b9f85a1e648c9895131927"],["/categories/index.html","5d2bcb519e4bfd77ec5e302656c5bc18"],["/categories/一生一芯/index.html","5377663ea178487d8285d09b819d65c2"],["/categories/技术/index.html","ac44ce37faabbccdb5092844db2d313a"],["/categories/深度学习/index.html","cda36c19a766428616557095ea62bb17"],["/categories/科普/index.html","c5505924cf306f999aaf173c2b745082"],["/categories/算法/index.html","4733113244b1fb83aa1974a95fa3cf4b"],["/categories/虚拟机/index.html","efd888d683f3cd95e47d447152484c54"],["/categories/问题解决实录/index.html","e3b80dd9e3ca5c2492678e6d185f1a0d"],["/css/background.css","a642f783acf2890bf902cd90c262b9bb"],["/css/bbtalk.css","327aa6913af737d545826341284699ef"],["/css/color.css","3baec6076afa4c7cce680b539b1bb8a2"],["/css/cursor.css","324c54c8d7f8d5550ce1ed6001d9db5d"],["/css/font.css","bc8780f7ae40be7a71ac46efa4640815"],["/css/icon.css","a7a4185061448e3c62bac3a6126811c1"],["/css/image.css","aafe6e0ce2ef6ccb9c7c1a7de474541a"],["/css/index.css","88c494be3c52b1fdd5e6473be676cfdd"],["/css/modify.css","606567c410f645cb5cb42c971e215d64"],["/css/nav.css","0230701a709c337f327d47f28efa5443"],["/css/own.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/size.css","d896988187dc4be5ee7810d9aa4fb416"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","5a2e0cd2be9ff63288430b115773a6c5"],["/gallery/index.html","1ff8986430ac902350610e990f46424b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","add602bf3490ec7a735e1c7582b662d5"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/nyancat.gif","9d07a1dba684c1c56b54e15793d8f498"],["/img/wechat.png","f4badf6716dc1d0499e9343f0cab316c"],["/index.html","eb6ae6dc015570bfe56d4d38ef9abccc"],["/js/bbtalk.js","4124c77c2fff77b3c1b6d1a4e5c8d505"],["/js/cursor.js","4d59c1cc67d7a3d5be97eba2a2a5ba9e"],["/js/githubcalendar.js","ebb18b313c62ac561ed6be5ac8a7edce"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/modify.js","bd415ea84b32bdf5b6b458415481be79"],["/js/sakura.js","66157c0791f07a00ecf06a15aa5ac4c9"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","6a205fb5b19a67113af25828c30ebc4e"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","b16748e36b2b9d193e61c90185ad71c1"],["/page/2/index.html","d3435b6d8e340c76c905a36411e426de"],["/page/3/index.html","4789eaf9b1a2d4e2424ffca7940caa98"],["/post/184dbe6a.html","79e3f892bd13109ae60345176ba9d587"],["/post/22c14ef5.html","d18c30a4ace229b32e661462d76a3c76"],["/post/25ac8aec.html","73fbe6b4abfeafeed8b24afe428927e6"],["/post/2b409a66.html","03752d378aab629338edead06279bf60"],["/post/3296e98d.html","3abb1b1c643237cd2a1e3dd8ed5b78d1"],["/post/3345e4e9.html","d75230ef066e22f2cce5b3a0cac02cef"],["/post/4560477.html","9a5d5266577f21d8cdaa4934ac38aef8"],["/post/52abba7a.html","b020d650087fafb8a6a89fdd3db81ba0"],["/post/55c67e63.html","9a484854952d9cbfa2016736e1d3d144"],["/post/5dd3bd60.html","6142264f76c77db8a85280246b1b947e"],["/post/60917e5c.html","cc799740ddff14a33d4c2d69792af6f7"],["/post/639f0c9.html","1d66e9a126319455fb9726fa55d4fa5a"],["/post/6c4989a3.html","2a9c69bf3e5edfb172705fbc2de30e53"],["/post/790c8b8.html","47340670132e2abe1743c08798e08ac0"],["/post/7c1f4ae8.html","66c092fa7e526ea211142ce19646209d"],["/post/9a8bfad7.html","7d21f668b871afb15b57f8f3081abd5b"],["/post/aa87ba6f.html","c2e269b3c5e83d5abf6307b797992a24"],["/post/b187a7e.html","a9906edc7a8d731b4d0b9375d55e0413"],["/post/b513977d.html","b87cb6d2d4115a2f121d8a1cfff57bea"],["/post/b5141e1c.html","cc599c01dc3c5e439201d8760320294e"],["/post/b8742b63.html","1efc4c6620be0a5b1cde907cbdf205fe"],["/post/bca5db56.html","cf36025c99e164f71b9e49d9759bbdd3"],["/post/c0d75012.html","32038e72c634823748c9fef684c54812"],["/post/c214a7eb.html","840568a9ec52f176bfb129cc676a81a6"],["/post/c390144.html","d62b0eef4dac9f7abb97436223120c8f"],["/post/c689e876.html","2febf5e665cf577044ca4593eb436fef"],["/post/cba2ebc0.html","f075f5f0ee4ca958f5b20d280615bedf"],["/post/cccf2fd9.html","99ba532885a275a1af95ff2f36747dcc"],["/post/cec4690b.html","adb786b54a942deee171bba8e883f690"],["/post/e03cfb73.html","9501583c96c5639b40db414e66276780"],["/post/e4aae5e6.html","b607232e1e75bcc262e7dea4a608632b"],["/post/e5161b52.html","bdb9732694479e6e3b993911ed96cd88"],["/post/e8b77b1.html","39e13feeb6ce8550dbab24982e01c16a"],["/post/f1db88d.html","543201aece93cfc893430cabad92354b"],["/post/f4ee2029.html","7db43ad5623ef4bfeff089d9fccb32bc"],["/post/f6ba7c15.html","897a86c16cdb5de714c41e22d3e6a43e"],["/post/f849bb21.html","eb8dbbe1078c4bc1d2b14a1add7c4f3c"],["/post/ff8ad698.html","32e7dfe1212669d9c9779db3c705706e"],["/sakura.js","7b6fb201a7522a07474f0ad830fc6c3e"],["/sw-register.js","92b07c1030bf02c8269cc6c6ef40848d"],["/tags/2048/index.html","a0678314ac0e61b75f0065e610b4c690"],["/tags/Anaconda/index.html","7d4d4796ccb98ccb1838c3ed99c2206d"],["/tags/CSAPP/index.html","7a28172777b04390e74956033b25b295"],["/tags/Deep-Learning/index.html","ed19710518177fc85cc7ab4bf3f08dfc"],["/tags/Docker/index.html","63497ded0a591417281c2bd50fe21085"],["/tags/EECS-498-007-598-005/index.html","7eee728517295a1dd3b0ef1ff39b83b3"],["/tags/Github/index.html","d85aa543929081c9b0c14a793b2ae451"],["/tags/Linux/index.html","2447dee0f598e8f6637f90303b9435ef"],["/tags/Logo/index.html","f25b506379d87cf8cb6fa477885a417f"],["/tags/NJU-PA/index.html","e1db4445f9f45aed1df020781a144551"],["/tags/OpenCV/index.html","912ea9bbccb15bd0e2ccce2a42aa34a6"],["/tags/SSH/index.html","7c7524409f13e8ad19ffbd917830ce73"],["/tags/Ubuntu/index.html","bb04456932575b984e04248b43f92787"],["/tags/VMware/index.html","0f0dafaeac2319efdbe32becfc301021"],["/tags/Valine/index.html","ff72b5d632fffc82b614f40bf683b041"],["/tags/VsCode/index.html","43c52eb0aaf398d51256e80e007d8b91"],["/tags/aplayer/index.html","cf1104360cf6c36a3ae5c856af1e61fc"],["/tags/base64/index.html","6cc4a89942427829d4ed19774adb622e"],["/tags/butterfly/index.html","b659ceae507b53300d844e6b8fd16a8b"],["/tags/c/index.html","a32466e00301f59dbd867862197fbec6"],["/tags/cs61B/index.html","b3c41c620e1ed400ed512743fb0d8b73"],["/tags/cs61C/index.html","b159703313851a170a4fa45b419c6fd0"],["/tags/hexo/index.html","10ad1cceba23afac3f87b6c500731e3d"],["/tags/ics/index.html","2dd491cd10fdb827430f32e91dd841c1"],["/tags/index.html","9bddd0a4105a4ba771058b56194a9aaf"],["/tags/java/index.html","1c44a5a305e53b97cc79fe58de40057b"],["/tags/matplotlib/index.html","cce9a7950383da44d7012b46dc115bbe"],["/tags/python/index.html","21a64d45eae05e0a91642d3f73b2950f"],["/tags/一生一芯/index.html","a9fabb0132461a8fe70d210b3ffaa839"],["/tags/体系结构/index.html","211af44545b35344d09a25e62d205c0d"],["/tags/动态规划/index.html","588c6a7105ba063545c2965dc910fece"],["/tags/技术/index.html","f1f8a1b582ed97bee92b9ac670ad628e"],["/tags/教程/index.html","850488dcd1805f7ae1a44ca2aec6c4b1"],["/tags/旋转小风车/index.html","c36254e27950a32735972e5a59e09608"],["/tags/时间复杂度/index.html","fd7140581254c06a65507a52c6e7ccca"],["/tags/深度学习/index.html","c15136566e1455b7f4ef5fcee3cac168"],["/tags/算法/index.html","62220c7385a022a45d76fc38a718532d"],["/tags/编码/index.html","9809c4e9f8de9a577e6110b74e038f03"],["/tags/虚拟机/index.html","e2e5c9a104cd9d721f4aa2594a95c933"],["/tags/计算机系统基础/index.html","fdd2b3dcd0ee93a2ad026d9c06b1bbb5"],["/tags/评论/index.html","6b8e866964333b353bdc92891d585c47"],["/tags/问题解决实录/index.html","80d5f71dbaf4bc400f59369114a87c0d"],["/tags/音乐播放器/index.html","92027878f439af0eedd6769dc2503dae"],["/talk/index.html","bb06574c81ecbf23b999e08fac00139c"]];
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
