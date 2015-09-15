# com.alfaqeir.lightbox
Lightbox alike widget for Titanium, Alloy


# How To Use

    //---Calls the overlay popup
    var View = Ti.UI.createView();

    var AlFaqeirWidget = Alloy.createWidget('com.alfaqeir.lightbox', null, {
        View : View, // Ti.UI.View
        Title : "Login", // header title required 
        HeaderColor : "#008cd2", //optional
        HeaderTextColor : "#67686d" //optional
    }).getView();
    AlFaqeirWidget();
    //---Calls the overlay popup
