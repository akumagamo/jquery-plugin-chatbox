# jQuery ChatBox plugin
## Versionnumber 0.1.0 (2016-01-09)
(***Documentation last update 2015-01-09 19:30***)  

Mini jQuery configurable ChatBox plugin, that inserted a chat window into a website.  

![Integrated ChatBox](https://raw.githubusercontent.com/akumagamo/jquery-plugin-chatbox/master/readme/chatbox-plugin-screenshot.png "Opend ChatBox Window")  

## Features
* adds ChatBox on website
* ChatBox can be minimized

## Roadmap / Future Features
* select different position for chat window
* add smiley support
    * add icon support
* close ChatBox = remoce ChatBox from Page

## Known Bugs
* none

## System Requirement & Prerequisites
jQuery Version 1.12.0

## Usage

### Setup
add script to webpage

```html
	<script type="text/javascript" src="js/jquery.chatbox.js"></script>
```
### SourceControl Link & Information
https://github.com/akumagamo/jquery-plugin-chatbox.git

### Base Code Example

```javascript
	$(".chat-box").chatBox(); // adds the chatbox into website (closed)

	// Tested on Win7 with Chrome 46+
```
See ```demo.html``` for an working example, here a link to a working Demo [jQuery chatBox plugin Demo](https://rawgit.com/akumagamo/jquery-plugin-chatbox/master/demo.html)

## Documentation

### File / Folder Structure
     +-+- jquery-plugin-chatbox
	   +-+- js
	   | +- jquery.chatbox.js
	   +-+- readme (media for this document)
	   | +- chatbox-plugin-screenshot.png
	   +- demo.html
     +- readme.md (this document)
	   +- LICENSE

### Options
* **opend** *(****default:*** *false)*
* **serverUrl** *(****default:*** */chatBox/)*
* **userName** *(****default:*** */chatBox/)*
