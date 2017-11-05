var proxyIp = "127.0.0.1";
var aliProxyPort = 1442; // used for bad hosts proxy
var hkProxyPort  = 1443; // used for block hosts proxy

//bad hosts from your network
var badHostsList = [
    "vagrantup.com",
    "gearbest.com",
    "laravelcollective.com",
    "icloud.com",
    "supervisord.org"
];

//block hosts by great-wall
var blockHostsList = [
    "google",
    "gstatic",
    "zh.wikipedia.org",
    "youtube.com",
    "facebook",
    "xhamster",
    "ahcdn.com",
    "ytimg.com",
    "rawgit"
];

/**
 * get a appropriate proxy
 *
 * @param url request url
 * @param host request host
 * @returns {*}
 * @constructor
 */
function FindProxyForURL(url, host) {

    // 是否是由于自身网络问题（比如网通的访问不了一些站点，但电信是OK的情况）
    for(i = 0; i < badHostsList.length; i++ ) {
        if( host.indexOf(badHostsList[i]) !== -1 ){
            return "SOCKS5 " + proxyIp + ":"+ aliProxyPort;
        }
    }

    // 针对被墙网址，走hk代理
    for(i = 0; i < blockHostsList.length; i++){
        if( host.indexOf(blockHostsList[i]) !== -1 ){
            return "SOCKS5 " + proxyIp + ":"+ hkProxyPort;
        }
    }

    //其他情况不走代理
    return "DIRECT";
}
