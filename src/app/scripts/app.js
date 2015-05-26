'use strict';

var $ = $ || {};
var Backbone = Backbone || {};

var App = {
  sampleMindMapData: 
    '<map version="0.9.0">' +
    '<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->' +
    '<node CREATED="3" ID="1" MODIFIED="2" TEXT="new-map">' +
    '<node CREATED="1406119930596" ID="ID_1238146207" MODIFIED="1406119935806" POSITION="right" TEXT="this is A"/>' +
    '<node CREATED="1406119936230" ID="ID_1428113166" MODIFIED="1406119938198" POSITION="right" TEXT="this is B">' +
    '<node CREATED="1430704849639" ID="ID_538482742" MODIFIED="1430704856572" TEXT="Sub-Sub-1"/>' +
    '<node CREATED="1430704857050" ID="ID_1332492316" MODIFIED="1430704860753" TEXT="Sub-Sub-2"/>' +
    '<node CREATED="1430704862253" ID="ID_1284852397" MODIFIED="1430704867375" TEXT="Hello, World?"/>' +
    '</node>' +
    '<node CREATED="1406119939270" ID="ID_442146008" MODIFIED="1406119942491" POSITION="right" TEXT="&#xc774;&#xac83;&#xc740; C"/>' +
    '</node>' +
    '</map>', 
  sampleMindMapJson: 
    '{ "text": "new-map",' +
      '"childNodes":' +
        '[ { "text": "this is A" },' +
          '{ "text": "this is B",' +
            '"childNodes":' +
              '[ { "text": "Sub-Sub-1" },' +
                '{ "text": "Sub-Sub-2" },' +
                '{ "text": "Hello, World?" }' +
              ']' +
          '},' +
          '{ "text": "this is C" }' +
        ']' +
    '}',

  start: function() {
    console.log('app.start()');
    this.router = new this.Router();
    Backbone.history.start();
    window.location.href = '#mindmap/freemind-test.mm';
  }
};

$(function() { 
  console.log('ready!');
  App.start(); 
});

