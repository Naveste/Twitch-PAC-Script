function FindProxyForURL(url, host) {
    const proxyURLs = ["*ttvnw*", "*edge.ads.twitch.tv*"];
    const proxyIP = "PROXY";
    const proxyPort = "IP";

    for (const element of proxyURLs) {
        if (shExpMatch(host, element)) {
            return `PROXY ${proxyIP}:${proxyPort}`;
        }
    }
    return "DIRECT";
}
