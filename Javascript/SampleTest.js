var testName = "Test 1";
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

UIALogger.logStart( testName );
app.logElementTree();

//-- select the elements
UIALogger.logMessage( "Select the first tab" );
var tabBar = app.tabBar();
var selectedTabName = tabBar.selectedButton().name();
if (selectedTabName != "First") {
    tabBar.buttons()["First"].tap();
}

//-- tap on the text fiels
UIALogger.logMessage( "Tap on the text field now" );
var recipeName = "Unusually Long Name for a Recipe";
window.textFields()[0].setValue(recipeName);

target.delay( 2 );

//-- tap on the text fiels
UIALogger.logMessage( "Dismiss the keyboard" );
app.logElementTree();
app.keyboard().buttons()["Return"].tap();

var textValue = window.staticTexts()["RecipeName"].value();
if (textValue === recipeName){
    UIALogger.logPass( testName ); 
}
else{
    UIALogger.logFail( testName ); 
}