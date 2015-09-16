var args = arguments[0] || {};

Alloy.Globals.OverLayContainerWidth = Ti.UI.FILL;
Alloy.Globals.OverLayContainerHeight = Titanium.Platform.displayCaps.platformHeight - 160;

$.OverLayContainerContentHolder.add(args.View);
$.OverLayContainerHeaderTitle.text = args.Title || "No Title";
$.OverLayContainerHeader.backgroundColor = args.HeaderColor || "#a060a2";
$.OverLayContainerHeaderTitle.color = args.HeaderTextColor || "white";
$.OverLayContainerHeaderCloseBtn.color = args.HeaderTextColor || "white";

$.OverLayContainerHeaderCloseBtn.addEventListener("click", function() {
	$.OverLayWindow.close();
});
