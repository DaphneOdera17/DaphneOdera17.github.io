/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7da69b005448ebf44ffac9b9c7aa6b42"],["/about/index.html","18dae4f3e55bc0724fe42641cd022485"],["/archives/2024/02/index.html","08e24cfd381c30af65d037487b2c8bb8"],["/archives/2024/03/index.html","f468ae6df8adb98b4508c60b5ce1777f"],["/archives/2024/04/index.html","ce327dc152e7305f4dfe1a04250c70fc"],["/archives/2024/05/index.html","3646f71ee5f26a585b5e9ff304e12df8"],["/archives/2024/06/index.html","15b01b88ad9bf814750a531e1be2915d"],["/archives/2024/07/index.html","d5f1c2e29fe8545b26ab753f8b974a79"],["/archives/2024/08/index.html","3f03a0a9390a2f7b03adf35fb285c8f1"],["/archives/2024/index.html","ccfe0e84ed5ad0d27c02c36f53f6fe70"],["/archives/2024/page/2/index.html","275e7f0395cfb8e6f200c6d899e01d74"],["/archives/2024/page/3/index.html","d8a2374126e7ad7d7c337d4eb54dc38b"],["/archives/index.html","c282676ab30a5e12210bd3550daed3ae"],["/archives/page/2/index.html","03e3ddb233cb539f3400f9c237066141"],["/archives/page/3/index.html","ebecacbf740648c471bf5a7ceabd3f2a"],["/artitalk/index.html","cd57b950bc6ff49faf7a7e385e8a14d5"],["/books/index.html","384e929df8e15cd0a5d95deada21bfbe"],["/categories/CSAPP/index.html","008742ad6bdb007dc5fb14917aaf9937"],["/categories/Docker/index.html","7065e44407a5cad7f0df2b1ddc80ea12"],["/categories/Linux/index.html","096e2260d4bf9e7a2218c1c4b6a0d068"],["/categories/NJU-PA/index.html","c884a45cab98d4d3464f7d67779ef2de"],["/categories/OpenCV/index.html","ce86aa5de421ec6a263863e96776cad8"],["/categories/VsCode/index.html","ef8aec159c8a2e51c2a316d99b77baaa"],["/categories/cs61B/index.html","e89a3d5e4b77c0e2227a4841dbfac51a"],["/categories/cs61C/index.html","79c84706bf3fb0933f931f65e8ba9fbb"],["/categories/hexo魔改系列/index.html","6115a451fb6ceaf728f90d0eed6a1ac7"],["/categories/index.html","ac523000cb31d39a4a576abfacded4c2"],["/categories/一生一芯/index.html","ccdb34bf763f78c59a368d1c6cd96f8d"],["/categories/技术/index.html","3b281f51739fcb5d9ce391b594bddf89"],["/categories/深度学习/index.html","c57d7154c9017722abae1a23a1705afa"],["/categories/科普/index.html","d18fe77638abbe0f7d342900f6097fad"],["/categories/算法/index.html","f2f16c1dbaf8cca0438b6317619803b5"],["/categories/虚拟机/index.html","757e1514966d940d074dfeb51ef87b86"],["/categories/问题解决实录/index.html","9ab541084af52ddccb3736cad8a5cc5b"],["/css/background.css","a642f783acf2890bf902cd90c262b9bb"],["/css/bbtalk.css","327aa6913af737d545826341284699ef"],["/css/color.css","3baec6076afa4c7cce680b539b1bb8a2"],["/css/cursor.css","324c54c8d7f8d5550ce1ed6001d9db5d"],["/css/font.css","c8c27ac9123e6b779d5acf06daf4db0f"],["/css/icon.css","a7a4185061448e3c62bac3a6126811c1"],["/css/image.css","aafe6e0ce2ef6ccb9c7c1a7de474541a"],["/css/index.css","39f0ebe7d6d9a5f7f6a1f4a91950a4dd"],["/css/modify.css","606567c410f645cb5cb42c971e215d64"],["/css/nav.css","0230701a709c337f327d47f28efa5443"],["/css/own.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/size.css","d896988187dc4be5ee7810d9aa4fb416"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","96e49e8b2ff6d323011b9db2aae85dda"],["/fonts/noto.ttf","c9a2f5760368b6d6a969adf2557143b7"],["/gallery/index.html","7373acfa56308d8754da87899b098e37"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","add602bf3490ec7a735e1c7582b662d5"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/nyancat.gif","9d07a1dba684c1c56b54e15793d8f498"],["/img/wechat.png","f4badf6716dc1d0499e9343f0cab316c"],["/index.html","eea42dd5c87f0eb4979176bf89cb8e50"],["/js/bbtalk.js","4124c77c2fff77b3c1b6d1a4e5c8d505"],["/js/cursor.js","4d59c1cc67d7a3d5be97eba2a2a5ba9e"],["/js/githubcalendar.js","ebb18b313c62ac561ed6be5ac8a7edce"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/modify.js","bd415ea84b32bdf5b6b458415481be79"],["/js/sakura.js","66157c0791f07a00ecf06a15aa5ac4c9"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1563f8aa865d873cc342eb83a5624a5e"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","40eca9f3ad5d9978ab8d88d0b752f501"],["/page/2/index.html","c3633cb1fa95cbc97d18765c0af245f4"],["/page/3/index.html","88be8b92897d5a05717e99b8edf7a7af"],["/post/184dbe6a.html","deca14beba3de9807cfb9cc855326b8c"],["/post/22c14ef5.html","90fd86d8e5bd946659561b06f8e52fc2"],["/post/25ac8aec.html","b47aebc0805869cf6c222dbd8d84e134"],["/post/2b409a66.html","524164210c77564ced418daaa60df8f0"],["/post/3296e98d.html","b990a9f743d44e492e8c0980f5a0593d"],["/post/3345e4e9.html","70545d1c674d8fc869de60e3f02b41ff"],["/post/4560477.html","e7aedccaf65d5a47633b6fa4e447f2d9"],["/post/52abba7a.html","26bcb27840b7b6e6f1f48244a2360639"],["/post/55c67e63.html","76a76493d4ca6b2254b6a2e5a71abc51"],["/post/5dd3bd60.html","f488e45b82e95914b03c20af8be72204"],["/post/60917e5c.html","8fe0a252f5cdfa524ee98b3531d42bc2"],["/post/639f0c9.html","c31c12f216b86f8018efaff791f8457f"],["/post/6c4989a3.html","8bed192476ed242eaaa841f2e97642bd"],["/post/790c8b8.html","24d4207de5e0bbf0f27dc5fd93303e0a"],["/post/7c1f4ae8.html","eb20737375210707639f1b7b3e87327b"],["/post/aa87ba6f.html","7ba6c938b635a57c42cd5defe9c6286c"],["/post/b187a7e.html","7a49a6885f50c9f486326df628102384"],["/post/b513977d.html","fcf55665d0f643b09553967b4d1bbbee"],["/post/b5141e1c.html","7aec9bd3877bb683e2590f506db59d37"],["/post/b8742b63.html","6f115d81827a893d31512b7245efeb7a"],["/post/bca5db56.html","003724f9095381d70ff06ae62c744470"],["/post/c0d75012.html","44a05d12a740510ba6a363cd1b28cda0"],["/post/c214a7eb.html","e525b4f5f9b7b4b2bcfa3905bbf19de8"],["/post/c390144.html","91ed26a1c936dfe76326dd73b3cb0e2c"],["/post/c689e876.html","2d9399db4409ba29d75c541e2d75f048"],["/post/cba2ebc0.html","79acf2340ede45915e25c544b4159eba"],["/post/cccf2fd9.html","a179980024d467bcba3368003ae7f9e0"],["/post/cec4690b.html","124a91def030da1be932fd3163d23351"],["/post/e03cfb73.html","befb2ae40bf795cfb2051c6f4edb0bb9"],["/post/e4aae5e6.html","e4e970dd032e520f98db49025f9634e8"],["/post/e5161b52.html","6b7bc911cbe3b1a7edc9b02349b9189f"],["/post/e8b77b1.html","ed0930e5de6c762c2891b9406e460c15"],["/post/f1db88d.html","4bcd12ba750f801c10ff7f6a094d9a9f"],["/post/f4ee2029.html","5583b2c6d13b86f3fd898780d1cc4fb1"],["/post/f6ba7c15.html","3ca061b9a30ab700a91883454ee16f53"],["/post/f849bb21.html","29c40473b3dc9939bd1f8a77b4d08192"],["/post/ff8ad698.html","40e3f9c2c0ed1d994ce2dcb3abb792c3"],["/sakura.js","7b6fb201a7522a07474f0ad830fc6c3e"],["/sw-register.js","b0998feb88b7902c62fe0ac0bc87ecd3"],["/tags/2048/index.html","afc6df9033ed8b1d9f8dbc261ed73349"],["/tags/Anaconda/index.html","02c053df5554c80cac57f24347bf235b"],["/tags/CSAPP/index.html","e3c2f2c6688585eb7b01c25571f0f1e8"],["/tags/Deep-Learning/index.html","42f5a2944d36144d43d366726c8f2726"],["/tags/Docker/index.html","6be0cbf26b835917653276f99ef11453"],["/tags/EECS-498-007-598-005/index.html","7752ad0b4e1cd520efb66c8dad5b585e"],["/tags/Github/index.html","50409e977cffd1c5dc9356bffa4b2149"],["/tags/Linux/index.html","c308a4809ef93d8cd49b6a6bfcefd8e1"],["/tags/Logo/index.html","ed181f161bb2e50efe7b9eaa6d0ea4ef"],["/tags/NJU-PA/index.html","1b411866c325842aff8afca2d0145668"],["/tags/OpenCV/index.html","416381e9566dba25072706cff20a5446"],["/tags/SSH/index.html","3b773ee41000ea3e994adce0f27caa16"],["/tags/Ubuntu/index.html","636b1d451d3c981b9d56ebb784070422"],["/tags/VMware/index.html","fec36706777c003d8f93732d00a24467"],["/tags/Valine/index.html","d60b28e4d4d316f8a8d4c99de5422aac"],["/tags/VsCode/index.html","287fb8efea43c17257696c4a72e6f3f1"],["/tags/aplayer/index.html","ef5d3c0ddea306d7e439bad7e205d3e7"],["/tags/base64/index.html","de802b0a22b6bf8e55eee85c63ced4e5"],["/tags/butterfly/index.html","3a32020ac9ac4abf3212aac33be8b69a"],["/tags/cs61B/index.html","2db92e0197c6481b7198a8e5e420ec3d"],["/tags/cs61C/index.html","41b8222c7abf65d4253635c7767b13f7"],["/tags/hexo/index.html","f0b8c4aa1f052321ceca904c19f15e9a"],["/tags/ics/index.html","91669c1eb7d6b856f40a391574076fa7"],["/tags/index.html","4a579d9af1d9ae2d4b6f653d57492740"],["/tags/java/index.html","6895b8b355326c92ff279984b295cbfa"],["/tags/matplotlib/index.html","d7d3c0afce0c4a8c66b545770410060e"],["/tags/python/index.html","9693b5a7b9ae2e04c2a7088681618710"],["/tags/一生一芯/index.html","2fcd9de4d7377f136aedd42081874a23"],["/tags/体系结构/index.html","a6b0013687403a1ba1fd2fc3c8edbc9e"],["/tags/技术/index.html","3ace383df9d16f59fe92a0c8b3e94d0a"],["/tags/教程/index.html","9de6a4e7f68db369a0d77b41f3e96633"],["/tags/旋转小风车/index.html","a7da01dd41e72c0e461dbab153d56819"],["/tags/时间复杂度/index.html","db22ff53709c885c793404bc16a3acdf"],["/tags/深度学习/index.html","68040a41a9ca6ef76a269c207d682fc5"],["/tags/算法/index.html","45baf05c7ed852d78468ae997d3301d5"],["/tags/编码/index.html","d1a1c63d6f72f9fe46de79bf3bad6ce8"],["/tags/虚拟机/index.html","ce12218478b9049c2c625f59c1fef53c"],["/tags/计算机系统基础/index.html","199b62bc48e53cdbd8bd367eea19e2e4"],["/tags/评论/index.html","b3d11c66fef57dac51cca43bed4dfec6"],["/tags/问题解决实录/index.html","17de46b7d24a2d56704415dfab9c7924"],["/tags/音乐播放器/index.html","e38c7ee05ae4017ee8932153507df092"],["/talk/index.html","ad2c091277ff3dfb2ebc9503ab48f847"]];
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
