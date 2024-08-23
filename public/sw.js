/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f6b29cd213eef89b62dc4f59fba7412c"],["/about/index.html","f41815df9cd95383c3128f0ea70c12ea"],["/archives/2024/02/index.html","5c4868a891a8c6da431f9a61089d4a01"],["/archives/2024/03/index.html","f7f0e82510a290416c7b6c6b22a2a71f"],["/archives/2024/04/index.html","79a7c8480c456745cdc7dade44831f93"],["/archives/2024/05/index.html","858233d34b68d8bd8a1506ef08ac6057"],["/archives/2024/06/index.html","fd0f1dd37b9938a232d3df80a8121dd7"],["/archives/2024/07/index.html","250e49b1c44532961515e3b918c04675"],["/archives/2024/08/index.html","21420248ea1dcf45e67105ecd8c78af6"],["/archives/2024/index.html","10e7c5924976661771b0976c6f28c898"],["/archives/2024/page/2/index.html","beb94c5eb6555b54beb8e63722150c06"],["/archives/2024/page/3/index.html","d5aeac505113ac1fae7f5bab781f8d27"],["/archives/index.html","4f65c3d0fcbcfa96a7c3a24820398f7e"],["/archives/page/2/index.html","74f19259d5b5d030a87383dde14e34e5"],["/archives/page/3/index.html","fb142fa3c939cbbc9707a86048d1b900"],["/artitalk/index.html","54e2243519f854466e4ebc0e803bdd8d"],["/books/index.html","873277bd05e636f42ce0bb8612dfdbe7"],["/categories/CSAPP/index.html","daa93ef3d33299748144f44a1784428f"],["/categories/Docker/index.html","00b57333e0f30b6671fccf1bec1d82fe"],["/categories/Linux/index.html","e81a8a91ecf9f5f3b45c188c1eb5d4a0"],["/categories/NJU-PA/index.html","6428c1f25e41367a2afed6af677b23ec"],["/categories/OpenCV/index.html","c2a070f083c8d241596d2fe7a2d77aff"],["/categories/VsCode/index.html","c76c126e960b1881b3d2d8a1f168e35d"],["/categories/cs61B/index.html","273d4dc73367e50f96e37f17a049072b"],["/categories/cs61C/index.html","d7d68545a13ea3c9479a8e569d3d7c07"],["/categories/hexo魔改系列/index.html","d9f6e827741947b1245c2f28368f407a"],["/categories/index.html","9877acd52ef382e3425be1aa3f9c1ad8"],["/categories/一生一芯/index.html","e84a3b8cfc3a9d38d999937e8e912bed"],["/categories/技术/index.html","31350b196554f519b6824d15c5458781"],["/categories/深度学习/index.html","81f2afc612f4a1728949b2e829ae1c76"],["/categories/科普/index.html","d9c721decc49f67e9d6437104a901c4d"],["/categories/算法/index.html","ad08bfe0735339e623948d2ed8730f1c"],["/categories/虚拟机/index.html","b6ef1e171f22c08f88c5aa4d74e7a841"],["/categories/问题解决实录/index.html","93cad8197b7d77e1c783fc461ab51b10"],["/css/background.css","a642f783acf2890bf902cd90c262b9bb"],["/css/bbtalk.css","327aa6913af737d545826341284699ef"],["/css/color.css","3baec6076afa4c7cce680b539b1bb8a2"],["/css/cursor.css","324c54c8d7f8d5550ce1ed6001d9db5d"],["/css/font.css","28ca234ea4b791cc2b5f36c9157390c2"],["/css/icon.css","a7a4185061448e3c62bac3a6126811c1"],["/css/image.css","aafe6e0ce2ef6ccb9c7c1a7de474541a"],["/css/index.css","fcaf9acdf082e00a2a95ca6630a5df62"],["/css/modify.css","606567c410f645cb5cb42c971e215d64"],["/css/nav.css","0230701a709c337f327d47f28efa5443"],["/css/own.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/size.css","d896988187dc4be5ee7810d9aa4fb416"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","a7341918b4071b9d6d9b597f1702966d"],["/fonts/noto.ttf","c9a2f5760368b6d6a969adf2557143b7"],["/gallery/index.html","ddaada2a43cc9d2f943ecfe205b65482"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","add602bf3490ec7a735e1c7582b662d5"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/nyancat.gif","9d07a1dba684c1c56b54e15793d8f498"],["/img/wechat.png","f4badf6716dc1d0499e9343f0cab316c"],["/index.html","b773b0a55725d5454737989a78888653"],["/js/bbtalk.js","4124c77c2fff77b3c1b6d1a4e5c8d505"],["/js/cursor.js","4d59c1cc67d7a3d5be97eba2a2a5ba9e"],["/js/githubcalendar.js","ebb18b313c62ac561ed6be5ac8a7edce"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/modify.js","bd415ea84b32bdf5b6b458415481be79"],["/js/sakura.js","66157c0791f07a00ecf06a15aa5ac4c9"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","88430a37b9b121f60110148cc59aac1a"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","3123843f12ec0e584247d0ee08d6446d"],["/page/2/index.html","f59c4783eaace954c99cecf54cd0b8da"],["/page/3/index.html","287accb8c8eb466f888f2299a37f6bca"],["/post/184dbe6a.html","834caef902bfc0a15ed1456799642fda"],["/post/22c14ef5.html","267918a8edab612bf0cb0d2e47d4af43"],["/post/250d0309.html","a35de6342f86280d0913cd06282a4eb9"],["/post/25ac8aec.html","764ca07cd20df38d3c7054c7d57fd48a"],["/post/2b409a66.html","2799b5d98e91ebb8c2dd16c3953f1306"],["/post/3296e98d.html","098014b2215360eeecf2bea06e67d71a"],["/post/3345e4e9.html","82cce71bb436301aff928a36df48bb4d"],["/post/4560477.html","f306e067bac6429bc143dde39ab5b234"],["/post/52abba7a.html","b276885324d09a780f6b452c7dd5b9e0"],["/post/55c67e63.html","b7760533527b2141b2a07978e78d5aae"],["/post/5c534197.html","e5501d67eeaa00ea34e80a8dee40687d"],["/post/5dd3bd60.html","6e4577656a6c59d471b33d423d883af8"],["/post/60917e5c.html","8d97e9976ebbfa48515717d2988d3d61"],["/post/639f0c9.html","cdfa9d52aff283de1e165e83e4308a10"],["/post/6c4989a3.html","5e1f6b7413b566d1b6766478722b569c"],["/post/77c5c179.html","81b83dfbbdbdefd9c242d9954ebcb1a4"],["/post/790c8b8.html","2028710600edd40a0720453325b5931c"],["/post/7c1f4ae8.html","a5ea38944693a1267810f3202275b4c0"],["/post/aa87ba6f.html","50ce3fda0dc02dce912d72b1e093bbe9"],["/post/b187a7e.html","b755ea10fb891ae893c4a8be55a6577a"],["/post/b513977d.html","f0190a7e61f3818cb519585f8cc77cdf"],["/post/b5141e1c.html","f3279067d53cb0e4c5cb4de55d542875"],["/post/b8742b63.html","d964114f80fdbf00ab809afa8c413de1"],["/post/bca5db56.html","2014fb034d852d781cd074fe18536dd6"],["/post/c0d75012.html","4ba3ed0c26e0c5aa7a0687251107b663"],["/post/c214a7eb.html","cbd38c7192e03715b7571ce5461b91fb"],["/post/c390144.html","18c8f8df9cb52cb89b5d6f4cec26c976"],["/post/c689e876.html","c18c6a4018a407a0219bc6eaea774208"],["/post/cba2ebc0.html","6bebd2e1c34fd2ffc8de857704a121ac"],["/post/cccf2fd9.html","a16e49735cec7cf7ecd9777459d4c64f"],["/post/cec4690b.html","37f0c145c9ad9ac56cbe3997ebc284ff"],["/post/e03cfb73.html","58ff72577744209ec38b511249e6e146"],["/post/e4aae5e6.html","62016682f312b5d292872c0c08803229"],["/post/e5161b52.html","06316e32353243134f0b42cb602991cb"],["/post/e8b77b1.html","66a12d1b49b9c6fa330023eba0ff4f93"],["/post/f1db88d.html","0f2a8e2c805f65ecd81f218961dddd3a"],["/post/f4ee2029.html","291bc9969ee8a0274449969629c26986"],["/post/f6ba7c15.html","22a6166c26ab13ab5c6b4dc776fb4ce3"],["/post/f849bb21.html","a744c467934542f4eab0f7805119c737"],["/post/ff8ad698.html","50462240039eabd435abf4b9ef7bf7e0"],["/sakura.js","7b6fb201a7522a07474f0ad830fc6c3e"],["/sw-register.js","82590bbef626c174a7c225d75b4a47a4"],["/tags/2048/index.html","411d68930f455674242fa6f02a70a96c"],["/tags/Anaconda/index.html","a876da502cd5df4da0dd8574c039181f"],["/tags/C/index.html","1f6163fefa6cb1b5d59bc78878a62579"],["/tags/CSAPP/index.html","df63dba0b4d85948bb24e48db1c26601"],["/tags/Debian/index.html","7ed717d345dd1476a60bbd5f8b8d9916"],["/tags/Deep-Learning/index.html","d092d487f897942b088c95b1410723eb"],["/tags/Docker/index.html","e43aee8edd095d434528858d5e0b9957"],["/tags/EECS-498-007-598-005/index.html","53d49e8fb9a5e5b3f2a859041807614a"],["/tags/Github/index.html","5f5050332721e5fb5912e275eca302a9"],["/tags/Linux/index.html","23b7e9761f382b79356add744d0aaadf"],["/tags/Logo/index.html","2b5596cc3cc3b051072798e4eb82f009"],["/tags/NJU-PA/index.html","1f85cc63d4130b8db273e4a873c26381"],["/tags/OpenCV/index.html","5ceb81c43514b22209e9d120c77f2b74"],["/tags/SSH/index.html","989df9f5a1861d1bf31ba900a174a42a"],["/tags/Ubuntu/index.html","3b70ee69bd1aa6fc18dfb2679567554c"],["/tags/VMware/index.html","801273e4f0f37cf9ef7112b4b2117fb2"],["/tags/Valine/index.html","7e408c8571e84d273b303bcef3ba6d66"],["/tags/Vscode/index.html","26ebdc01eaadb124c5a6ffa8bc8f70e5"],["/tags/aplayer/index.html","598a63ee98e9f58b6fe0defa57f0ffa9"],["/tags/base64/index.html","4a6cdc42da1e3bba67293ff612f3b8e8"],["/tags/butterfly/index.html","d1b63afebfd7faad88a2464d0753f2c4"],["/tags/cs61B/index.html","c4f53a407353449dfe93bb34d4dd1b5e"],["/tags/cs61C/index.html","30a5f7069414cfc90b4547bbd49061c3"],["/tags/hexo/index.html","24ad4bce7444bd7a6fc391255dff8e77"],["/tags/ics/index.html","ba77b2cab81a8346d03ed7faf524dedc"],["/tags/index.html","c184e9fec4b191d564d0f02f0f317576"],["/tags/java/index.html","59558f5e9e9f916ada9da472c2219b0d"],["/tags/matplotlib/index.html","c7774d33a636297a7c707036c4e90d81"],["/tags/python/index.html","1f3a1ef5fdf1e06616b1b12ac7224b94"],["/tags/一生一芯/index.html","33a97c730b2f4e8875338bffee2c50fd"],["/tags/体系结构/index.html","0464229b4e89d8b04e3e21c5ebdb49b6"],["/tags/技术/index.html","6280e618386194f36de21b37ae64e79a"],["/tags/教程/index.html","408e44602fbdd1812e183279da3cba83"],["/tags/旋转小风车/index.html","ab68ff9f429e220d366b8677be0ad664"],["/tags/时间复杂度/index.html","96b71a78e01f7dc16dbcda2a6443508d"],["/tags/深度学习/index.html","09601c3d9610a4e211e8e127a1a3bf16"],["/tags/算法/index.html","391f674cbd365e77dcb01afd9c3762ac"],["/tags/编码/index.html","78230415a51f22b15c3ff3d5daae8ea9"],["/tags/虚拟机/index.html","a653d63ca5c25b2564fff8e767033c92"],["/tags/计算机系统基础/index.html","911680edc4805cc77e5a1579f94266fe"],["/tags/评论/index.html","9649dca65ffd81d9ace6029c610ee9e1"],["/tags/问题解决实录/index.html","214e00a9f2311b561c6c8478c0297a7f"],["/tags/音乐播放器/index.html","ba83ebaa9555c69079964af2686fa3ba"],["/tags/鼠标指针/index.html","0a9be2d1f8e26c74df48898e0ec8e954"],["/talk/index.html","53fa4d8a6d3ef688f821fc9cda99d3a6"]];
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
