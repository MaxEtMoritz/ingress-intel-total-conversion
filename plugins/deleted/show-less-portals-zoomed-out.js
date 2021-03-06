// @author         jonatkins
// @name           Show less portals when zoomed out
// @category       Tweaks
// @version        0.3.0
// @description    Vastly reduce the detail level when zoomed out to level 11 or less (L4+ portals), to significantly reduce data usage when viewing large areas.


// use own namespace for plugin
window.plugin.showLessPortalsZoomedOut = function() {};

window.plugin.showLessPortalsZoomedOut.setup  = function() {

// NOTE: the logic required is closely tied to the IITC+stock map detail level code - so the logic is moved there now
// and just enabled by this flag
  window.CONFIG_ZOOM_SHOW_LESS_PORTALS_ZOOMED_OUT=true;

};

var setup =  window.plugin.showLessPortalsZoomedOut.setup;
