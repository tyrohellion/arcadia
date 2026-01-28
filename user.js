/** CUSTOM CSS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);

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

/** USE NATIVE KDE PLASMA FILE PICKER ON LINUX INSTEAD OF GTK WHILE XDG DESKTOP PORTAL KDE PACKAGE IS INSTALLED ***/
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);