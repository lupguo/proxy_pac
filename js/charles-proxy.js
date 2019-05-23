// charles proxy setting

var CharlesProxy = {
    Host : "10.33.1.154",
    S5Port : "8889",
}

function FindProxyForURL (url, host) {

    // only request for charles-proxy.pac file direct to network!
    if (host.indexOf('tkstorm.com') > 0 && url.indexOf("charles-proxy") > 0) {
        return "DIRECT"
    }

    // other goby socks5 ip:port
    return "SOCKS5 " + CharlesProxy.Host + ":" + CharlesProxy.S5Port
}
