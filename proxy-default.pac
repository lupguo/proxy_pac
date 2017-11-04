var proxyIp     = "127.0.0.1";
var proxyPort   = 1443;

//proxy domain list
var proxyList = [
    "google",
    "gstatic",
    "zh.wikipedia.org",
    "youtube.com",
    "facebook",
    "xhamster",
    "ahcdn.com",
    "ytimg.com",
    "supervisord.org",
    "vagrantup.com",
    "gearbest.com",
    "laravelcollective.com",
    "icloud.com"
];

/**
 * check host whether go from a proxy
 *
 * @param host
 * @returns {boolean}
 */
function needProxy(host) {
    for(i = 0; i < proxyDomainRegexList.length; i++) {
        if ( host.indexOf(proxyDomainRegexList[i]) !== -1 )
            return true;
    }
    return false;
}

function FindProxyForURL(url, host) {

    //基于shExpMatch函数
    for(i=0; i<proxyList.length; i++){
        //if( shExpMatch(host, proxyList[i]) ){
        if( host.indexOf(proxyList[i]) !== -1 ){
            return "SOCKS5 " + proxyIp + ":"+ proxyPort;
        }
    }

    //其他情况不走代理
    return "DIRECT";
}
