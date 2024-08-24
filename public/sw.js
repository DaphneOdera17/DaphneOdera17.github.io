/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","abc4e8e0a2f69f0e3da09cbe110bbff4"],["/about/index.html","98587d16637cb05233d0598fc193ece8"],["/archives/2024/02/index.html","691355a0d8902c6dae6e9de5e336f30e"],["/archives/2024/03/index.html","c15bd6ea091484d78739e6a11e7608c7"],["/archives/2024/04/index.html","4a41edc50fae837d5277678478c80709"],["/archives/2024/05/index.html","a7cb8cd65fa25b4452cb3e1cee753385"],["/archives/2024/06/index.html","f16a03bba913b006f22314a5cd401f02"],["/archives/2024/07/index.html","21f6c0cda7a05c242b65f8f30aeb0d05"],["/archives/2024/08/index.html","37fb810b38d79a67560331afab1b255d"],["/archives/2024/index.html","296f5675858d5bbaab3d9b19e21c4cb6"],["/archives/2024/page/2/index.html","63c057b04e6cffe9ab4daf0bf2c1fa4f"],["/archives/2024/page/3/index.html","88ae4390be4257b44999e23f5bcb5584"],["/archives/index.html","b7140444a6d8e278bd955fa629ddce10"],["/archives/page/2/index.html","4adce138686ea6b432deb152fd1679d1"],["/archives/page/3/index.html","8e675cb1766cb0208a7e71d203404621"],["/artitalk/index.html","579d9df779fab46c751e921d48791d4d"],["/books/index.html","512718466dcb6ae277dd3e3c64b2a5ad"],["/categories/CSAPP/index.html","d5cd08d5e5a39ca6d7f45d9c3b8ace7c"],["/categories/Docker/index.html","0a785f38659f48229ecb99eb6844db2d"],["/categories/Linux/index.html","ee95ef03c656a9b079f2def168c836eb"],["/categories/NJU-PA/index.html","ba86bc6cfc79376b7555aa04324729dd"],["/categories/OpenCV/index.html","2c1ee5a38819338c8004fbbd9a95e53f"],["/categories/VsCode/index.html","a32ce16343780eda90e1c1db91b842cd"],["/categories/cs61B/index.html","3377b136c7b3f2fccf6084131bcb3b62"],["/categories/cs61C/index.html","3191c5e48cb9edc01c381d547c018ea0"],["/categories/hexo魔改系列/index.html","85f11515772a113d1a3ad72e053d0066"],["/categories/index.html","c9f6456d78ff38c97cb2bd4f99581a54"],["/categories/一生一芯/index.html","dfccb86a97eeee8c4fdd42f5a93549ab"],["/categories/技术/index.html","978dfa2228e56e4bb87c4c4c7361ed88"],["/categories/深度学习/index.html","c4756748aae4fc97509a65d5a24c6acc"],["/categories/科普/index.html","3a16372a974f44aa0d36f6ed6c2e6a27"],["/categories/算法/index.html","40d2bca0579156467a66025d62217df1"],["/categories/虚拟机/index.html","d5195ffe327546391800831493d31ac8"],["/categories/问题解决实录/index.html","5ca99373c56be56b78118cd92e52f8a5"],["/css/background.css","a642f783acf2890bf902cd90c262b9bb"],["/css/bbtalk.css","327aa6913af737d545826341284699ef"],["/css/color.css","3baec6076afa4c7cce680b539b1bb8a2"],["/css/cursor.css","324c54c8d7f8d5550ce1ed6001d9db5d"],["/css/font.css","de5a00686f804563480e2f94a55b945d"],["/css/icon.css","a7a4185061448e3c62bac3a6126811c1"],["/css/image.css","aafe6e0ce2ef6ccb9c7c1a7de474541a"],["/css/index.css","fcaf9acdf082e00a2a95ca6630a5df62"],["/css/modify.css","606567c410f645cb5cb42c971e215d64"],["/css/nav.css","0230701a709c337f327d47f28efa5443"],["/css/own.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/size.css","d896988187dc4be5ee7810d9aa4fb416"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","b842634187218df513f138941c9d7db9"],["/fonts/noto.ttf","c9a2f5760368b6d6a969adf2557143b7"],["/gallery/index.html","b73c8be3a5443ce02756c137d320242c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","add602bf3490ec7a735e1c7582b662d5"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/nyancat.gif","9d07a1dba684c1c56b54e15793d8f498"],["/img/wechat.png","f4badf6716dc1d0499e9343f0cab316c"],["/index.html","7924ef034fb95d38a005afe78fb7d98b"],["/js/bbtalk.js","4124c77c2fff77b3c1b6d1a4e5c8d505"],["/js/cursor.js","4d59c1cc67d7a3d5be97eba2a2a5ba9e"],["/js/githubcalendar.js","ebb18b313c62ac561ed6be5ac8a7edce"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/modify.js","bd415ea84b32bdf5b6b458415481be79"],["/js/sakura.js","66157c0791f07a00ecf06a15aa5ac4c9"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","0552e6b4f3016fa91940ad53c81e5f68"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","a5f77c6c3e4dbb66a8234840f57cfc25"],["/page/2/index.html","354406e62edfe43e6de8ed21cda03d19"],["/page/3/index.html","285d4f5e9a6b0a4f099f25de57e19bb3"],["/post/184dbe6a.html","e77f04ce2073a2753a22492f89019072"],["/post/22c14ef5.html","41653fcd41b8adf1ac556d7d93336162"],["/post/250d0309.html","46158740c96e6ee106959be4f9a80822"],["/post/25ac8aec.html","466740c259d79e2b26f640939c5ce270"],["/post/2b409a66.html","570a7a4e495f4c8080ebc59c5bd99cf1"],["/post/3296e98d.html","5ba0e5a8354ddd8e0b1d92729252c254"],["/post/3345e4e9.html","c81b61dfd903770c293a0f2010d522a1"],["/post/4560477.html","a100890b2641f5f1c5a0e18c98b155e1"],["/post/52abba7a.html","e003b9a20632e4ffd3259c1816441321"],["/post/55c67e63.html","3965745c7a57f69fcd55b94ce6f3ed5f"],["/post/5c534197.html","7691ffcdaeb7e73716006d6204babe19"],["/post/5dd3bd60.html","ac3476e4cb5084c0089d52475c4327e6"],["/post/60917e5c.html","1f93581d908c56e22263e56e3ecd4140"],["/post/639f0c9.html","06d1efb4569c8e51c31d9c7b172d0856"],["/post/6c4989a3.html","6fe281eefc63cba8a26966a4e207db78"],["/post/77c5c179.html","057d71fcb703c76c81f98243bde79a8e"],["/post/790c8b8.html","7818d29c199f35663407db8d473c07c8"],["/post/7c1f4ae8.html","05b853a1ab69da00c7feed8790d62775"],["/post/aa87ba6f.html","308bc03ef620f6f2e932cbf75d962567"],["/post/b187a7e.html","86b0c5e7f9a53e0dae6cdd870737cd66"],["/post/b513977d.html","e57f2ca28209ea51538da458c9a17343"],["/post/b5141e1c.html","d37c1dc61a9c077606b285a65871c206"],["/post/b8742b63.html","026885bb554b02f9078fa01c43aec597"],["/post/bca5db56.html","ce4b78580913b7963db61f4f02c7e70b"],["/post/c0d75012.html","c97e58415f71df08ab842d67911c71b4"],["/post/c214a7eb.html","60d44124e1206a9802a55ac265a4f2a3"],["/post/c390144.html","b9fa6f6d760f7f904194608fff1ccc74"],["/post/c689e876.html","aeda6810fa1c2e9e5090c8606b5fcc3d"],["/post/cba2ebc0.html","e133325387f932d9afb0ec23d5e31327"],["/post/cccf2fd9.html","f8937119244d24026e76c32741ce4770"],["/post/cec4690b.html","6b8bd527f2fc46f67000abf5ec6c883f"],["/post/e03cfb73.html","25494d4acc49d43dcc7b7f67999fe4ce"],["/post/e4aae5e6.html","58a823cdce305ef71818aebac3216b0e"],["/post/e5161b52.html","ea7c8cf662f19270ef822c64dc5a1d6f"],["/post/e8b77b1.html","fb809c88e5787c342e31b339159b0609"],["/post/f1db88d.html","56ed788968fe26a48bfc08a295a2bd76"],["/post/f4ee2029.html","14be6a499f9c63d3d8a30d6cb3cffeb4"],["/post/f6ba7c15.html","2c62f9ab86b374f672b8391f712eab8b"],["/post/f849bb21.html","006e40f65a44a03581ea9c3e07e08a8e"],["/post/ff8ad698.html","31bd42e79c8c06fa559abfbdab3d8989"],["/sakura.js","7b6fb201a7522a07474f0ad830fc6c3e"],["/sw-register.js","c21dfad34e16021b7682c8be24ec9957"],["/tags/2048/index.html","63073e1d85091699e9451ea98601f09b"],["/tags/Anaconda/index.html","b8001a5d60d4148b2772095e0a555db9"],["/tags/C/index.html","c39ad66adde85f3c97554421d4641b7b"],["/tags/CSAPP/index.html","7d3e647799ceb2a6bb8f5ae048b0a88f"],["/tags/Debian/index.html","a735f81257ef08a69a14a174c764523e"],["/tags/Deep-Learning/index.html","a5767dedeec6b35027ebf3675317fd59"],["/tags/Docker/index.html","269fe28fcd75c85d83c80fd904c7e10f"],["/tags/EECS-498-007-598-005/index.html","74da54240aac8d748b8f47b62114e8eb"],["/tags/Github/index.html","d8794cd93dc92dac36fb4f2f00e99b0e"],["/tags/Linux/index.html","acafaa01be6166d59cf161d310007424"],["/tags/Logo/index.html","e5427c6f7b7d54f2e9707e3430bf3d9e"],["/tags/NJU-PA/index.html","1b3be8236b9fab1d6e49a95d728af130"],["/tags/OpenCV/index.html","04d88d633850eacc38a14b34b883a0d6"],["/tags/SSH/index.html","490cfcf6f9d7c83b7084b1e08f8b0fdf"],["/tags/Ubuntu/index.html","a4af3312ca1acc535813e5e2c9a51656"],["/tags/VMware/index.html","65c22f4ae893d85ba9468778cc719be1"],["/tags/Valine/index.html","6162f81941e432da4102ccb9b7735ccb"],["/tags/Vscode/index.html","2f3ab7fc8c24cee36f3ec07c3c70ba28"],["/tags/aplayer/index.html","6fede44f82cf691fc9c73afd422ba453"],["/tags/base64/index.html","65901010fd098ffe4a70db23253c3e53"],["/tags/butterfly/index.html","61ccca9be1c6a17a7c9777e16cd70cc4"],["/tags/cs61B/index.html","23cc98681273f1ee5ba7dea21963a6ae"],["/tags/cs61C/index.html","679650eb38524af664949b3d39f33db0"],["/tags/hexo/index.html","fc8893595bff9a42e135d24371627ded"],["/tags/ics/index.html","207ffea46c130842c50e18f1f7186ca8"],["/tags/index.html","a6553b6835ff59398fd7d7098430e0ee"],["/tags/java/index.html","f61dbbb32a54146e554038b03704f370"],["/tags/matplotlib/index.html","da9d2b69e86d4c2116bd872e8d703681"],["/tags/python/index.html","cf17deae6598027589066e544f714349"],["/tags/一生一芯/index.html","bf27cb81380d9dd8172a6643269274af"],["/tags/体系结构/index.html","fe0790ed6d60be77b3bbd5e95bfee42d"],["/tags/技术/index.html","c92e66580946dac51f18e2f380ea0930"],["/tags/教程/index.html","361515e74fd3f683bb48d5f3976a81be"],["/tags/旋转小风车/index.html","2fecee615bb641e4ab6c557a474c33ec"],["/tags/时间复杂度/index.html","2d4a2daa8b2f6a55d9d3699e4ea413b1"],["/tags/深度学习/index.html","8f5762e4e754925b6bc1cacd32f997aa"],["/tags/算法/index.html","81b773ebe446e99708ffcdb845fd1dbb"],["/tags/编码/index.html","a0ebb512ed83110dfbfed5305712c7b0"],["/tags/虚拟机/index.html","35495fa6224d4bcd2c6362c8875b96f1"],["/tags/计算机系统基础/index.html","a45f4b8d436be9cd5c5add5983118271"],["/tags/评论/index.html","b354eff5712f161e2c5683e283957910"],["/tags/问题解决实录/index.html","e1f1670f24086a7e357806b8e9e4b6a4"],["/tags/音乐播放器/index.html","557141b341d8e834190f87824fc2027a"],["/tags/鼠标指针/index.html","bd11d61236eda3a7356c507955a4a4d3"],["/talk/index.html","0596750ca5e4235df767f2297d3c964d"]];
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
