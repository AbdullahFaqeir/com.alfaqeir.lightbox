# com.alfaqeir.lightbox
Lightbox alike widget for Titanium, Alloy


# How To Use

    //---Calls the overlay popup
    var View = Ti.UI.createView();

    var AlFaqeirWidget = Alloy.createWidget('com.alfaqeir.lightbox', null, {
        View : View, // ex: Ti.UI.View
        Title : "Login", // header title required 
        HeaderColor : "#008cd2", //optional
        HeaderTextColor : "#67686d" //optional
    }).getView();

    //Updated on 29-Oct
    Or you can instantiate the widget and then set the view using thins
    AlFaqeirWidget.setView(View)// ex: Ti.UI.View
    AlFaqeirWidget.setHeaderColor("white");
    AlFaqeirWidget.setHeaderTitle("Title Test")

    //---Calls the overlay popup
    
    
