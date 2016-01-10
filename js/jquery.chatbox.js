
(function($){
	$.fn.chatBox = function(options) {
	   var opts = $.extend({}, $.fn.chatBox.defaults, options);
     var chatBoxHtml = $(ChatBox.generateChatBoxHtml());
		 $(this).replaceWith(chatBoxHtml);

		chatBoxHtml.find("#currentUserHash").val(opts.userName);

     return chatBoxHtml;
  };

	$.fn.chatBox.defaults = {
		opend: false,
		serverUrl: "/chatBox/",
		userName: "guest"
	};

})(jQuery);


function ChatBox(){};

ChatBox.sendMessage = function(userhash, message){
	/*  send to server Code */
	console.info(userhash, message);
}

ChatBox.generateChatBoxHtml = function(){
  var chatBox = document.createElement("div");
	var chatBoxNavigationBar = document.createElement("div");
  var chatBoxMessages = document.createElement("textarea");
  var chatBoxInputTextbox = document.createElement("input");
	var chatBoxUserHashHiddenTextbox = document.createElement("input");

	chatBoxNavigationBar.appendChild(document.createTextNode("ChatBox"));
	chatBoxNavigationBar.addEventListener("click", function(){$(this).parent().toggleClass('close');});
	chatBoxNavigationBar.className = "title";

	chatBoxMessages.setAttribute("readonly","readonly");

	chatBoxInputTextbox.id = "newMessageInput";

	chatBoxUserHashHiddenTextbox.id = "currentUserHash";
	chatBoxUserHashHiddenTextbox.setAttribute("type","hidden");

	chatBoxInputTextbox.addEventListener("keypress", function(event){
		if (event.keyCode == 13){
			var messageText = $("#newMessageInput").val();
			var currentUserHash = $("#currentUserHash").val();
			ChatBox.sendMessage(currentUserHash, messageText);
		}
	});

	chatBox.className = "chat-box";
	chatBox.appendChild(chatBoxNavigationBar);
  chatBox.appendChild(chatBoxMessages);
  chatBox.appendChild(chatBoxInputTextbox);
	chatBox.appendChild(chatBoxUserHashHiddenTextbox);

  return chatBox;
};
