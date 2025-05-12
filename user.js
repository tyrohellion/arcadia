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

/** YOUTUBE (this flag COULD give you better VP9 performance on SOME systems)
user_pref("media.wmf.dxva.d3d11.enabled", false);
***/

/** CUSTOM CSS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);

/** MAKE SURE DARK THEME IS SET TO ENSURE THEME WORKS ***/
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");

/** ALWAYS SHOW BOOKMARKS BAR BY DEFAULT ***/
user_pref("browser.toolbars.bookmarks.visibility", "always");

/** REMOVE ALT KEY MENU ***/
user_pref("ui.key.menuAccessKeyFocuses", false);

/** REMOVE SIDEBAR REVAMP ***/
user_pref("sidebar.revamp", false);

/** REMOVE FULLSCREEN FADE IN AND OUT ***/
user_pref("full-screen-api.transition-duration.enter", 0);
user_pref("full-screen-api.transition-duration.leave", 0);

/** REMOVE FULLSCREEN POPUP ***/
user_pref("full-screen-api.warning.timeout", 0);

/** ENABLE HOVER CARDS ***/
user_pref("browser.tabs.hoverPreview.enabled", true);
user_pref("browser.tabs.cardPreview.showThumbnails", true);

/** NATURAL SMOOTH SCROLLING V3 [MODIFIED] ***/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 265); // 250-400; adjust this number to your liking
