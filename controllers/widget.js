var args = arguments[0] || {};

Alloy.Globals.OverLayContainerWidth = Ti.UI.FILL;
Alloy.Globals.OverLayContainerHeight = Titanium.Platform.displayCaps.platformHeight - 160;

console.log("Alloy.Globals.OverLayContainerWidth = " + Alloy.Globals.OverLayContainerWidth);
console.log("Alloy.Globals.OverLayContainerHeight = " + Alloy.Globals.OverLayContainerHeight);

var View = args.View || false;
if (View) {
	$.OverLayContainerContentHolder.add(args.View);
}
$.OverLayContainerHeaderTitle.text = args.Title || "No Title";
$.OverLayContainerHeader.backgroundColor = args.HeaderColor || "#a060a2";
$.OverLayContainerHeaderTitle.color = args.HeaderTextColor || "white";
$.OverLayContainerHeaderCloseBtn.color = args.HeaderTextColor || "white";

$.OverLayWindow.backgroundImage = "/" + WPATH('OverLayBG.png');

$.OverLayContainerHeaderCloseBtn.addEventListener("click", function() {
	$.OverLayWindow.close();
});

exports.setView = function(VieW) {
	$.OverLayContainerContentHolder.add(VieW);
};

exports.setHeaderColor = function(HeaderColor) {
	$.OverLayContainerHeader.backgroundColor = HeaderColor;
};

exports.setHeaderTitle = function(HeaderTitle) {
	$.OverLayContainerHeaderTitle.text = HeaderTitle;
};
