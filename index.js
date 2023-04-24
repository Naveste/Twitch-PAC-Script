function FindProxyForURL(url, host) {
    const proxyURLs = ["*amazon-adsystem*", "*media-amazon*", "*imrworldwide*", "*scorecardresearch*", "*ext-twitch.tv", "*ttvnw*"];

    for (const element of proxyURLs) {
        if (shExpMatch(host, element)) {
            return "PROXY IP:PORT";
        }
    }
    return "DIRECT";
}
