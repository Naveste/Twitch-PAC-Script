function FindProxyForURL(url, host) {
    const proxyURLs = ["*amazon-adsystem*", "*media-amazon*", "*amazonaws*", "*imrworldwide*", "*cloudfront*", "*scorecardresearch*", "*ext-twitch.tv", "*ttvnw*"];

    for (const element of proxyURLs) {
        if (shExpMatch(host, element)) {
            return "PROXY IP:PORT";
        }
    }
    return "DIRECT";
}