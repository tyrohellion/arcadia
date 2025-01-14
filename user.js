/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", true);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** YOUTUBE (better VP9 performance for my system) ***/
user_pref("media.wmf.dxva.d3d11.enabled", false);

/** CUSTOM CSS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);

/** DISABLE SMOOTH SCROLLING (personal preference) ***/
user_pref("general.smoothScroll", false);

/** REMOVE FIREFOX VIEW ***/
user_pref("browser.tabs.firefox-view", false);

/** REMOVE ALT KEY MENU ***/
user_pref("ui.key.menuAccessKeyFocuses", false);

/** REMOVE FULLSCREEN FADE IN AND OUT ***/
user_pref("full-screen-api.transition-duration.enter", 0);
user_pref("full-screen-api.transition-duration.leave", 0);

/** REMOVE FULLSCREEN POPUP ***/
user_pref("full-screen-api.warning.timeout", 0);

/** ENABLE HOVER CARDS ***/
user_pref("browser.tabs.hoverPreview.enabled", true);
user_pref("browser.tabs.cardPreview.showThumbnails", true);
