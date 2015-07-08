#!/bin/sh

Instruments -w ACCAA465-648F-429E-990F-5923D0CA8CB9 -t "/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.xrplugin/Contents/Resources/Automation.tracetemplate" /Users/jing/Documents/iOS-Automation/Sample/TestAutomation.app -D Traces/a.trace -e UIASCRIPT /Users/jing/Documents/iOS-Automation/Sample/Javascript/SampleTest.js -D Traces/ttttttt.trace

killall "iOS Simulator"
