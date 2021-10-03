// ==UserScript==
// @name          YouTube Icon Changer
// @namespace     http://github.com
// @description	  Changes the new icons into the old ones
// @author        PIjus
// @homepage      https://github.com/Peeeaaayus/youtube-icon-changer
// @include       http://youtube.com/*
// @include       https://youtube.com/*
// @include       http://*.youtube.com/*
// @include       https://*.youtube.com/*
// @include       http://youtube.com/*
// @include       https://youtube.com/*
// @include       http://*.youtube.com/*
// @include       https://*.youtube.com/*
// @run-at        document-start
// @version       0.20201003
// ==/UserScript==
(function() {var css = "";
if (false || (document.domain == "youtube.com" || document.domain.substring(document.domain.indexOf(".youtube.com") + 1) == "youtube.com"))
	css += [
		"yt-icon.style-scope.ytd-toggle-button-renderer {",
		"    display: none;",
		"}",
		".style-scope.ytd-playlist-sidebar-primary-info-renderer #top-level-buttons ytd-toggle-button-renderer a #button yt-icon.style-scope.ytd-toggle-button-renderer {",
		"	display: block !important;   ",
		"}",
		".style-scope.ytd-playlist-sidebar-primary-info-renderer #top-level-buttons ytd-toggle-button-renderer.style-text[is-icon-button] {",
		"	background-image: none !important;",
		"}",
		"ytd-toggle-button-renderer.force-icon-button a.ytd-toggle-button-renderer, a.yt-simple-endpoint.ytd-toggle-button-renderer {",
		"    outline: none;",
		"}",
		"",
		"ytd-toggle-button-renderer.style-text[is-icon-button] {",
		" background-image: url(\"https://cdn.discordapp.com/attachments/894198606519738411/894200088946155530/like.PNG\") !important;",
		" background-size: 25px;",
		" background-repeat: no-repeat;",
		" background-position: 0px;",
		"}",
		"",
		"ytd-menu-renderer ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(1) {",
		" background-image: url(\"https://cdn.discordapp.com/attachments/894198606519738411/894207076530802709/like-clicked.png\") !important;",
		" background-size: 25px;",
		" background-repeat: no-repeat;",
		" background-position: 0px 18px !important;",
		" transform: translateY(-10px);",
		"    ",
		" transition: transform .5s, background-position .5s;",
		" transition-delay: 0s, .5s;",
		"} /* Liked button */",
		"ytd-menu-renderer ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(2) {",
		" background-image: url(\"https://cdn.discordapp.com/attachments/894198606519738411/894207076530802709/like-clicked.png\") !important;",
		" background-size: 25px;",
		" background-repeat: no-repeat;",
		" background-position: 0px;",
		" transform: rotateX(180deg);",
		"    ",
		" padding-top: 4px;",
		" transition: transform .5s, background-position .5s;",
		"} /* Disliked button */",
		"",
		"ytd-menu-renderer ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(1) >*{",
		"  transition: transform .5s, background-position .5s;",
		"  transform: translateY(10px);",
		"} /* Disliked button */",
		"ytd-menu-renderer ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(2) >*{",
		"  transition: transform .5s, background-position .5s;",
		"  transform: rotateX(-180deg);",
		"} /* Disliked button */"
	].join("\n");
if (false || (document.domain == "youtube.com" || document.domain.substring(document.domain.indexOf(".youtube.com") + 1) == "youtube.com"))
	css += [
		"#vote-count-left.ytd-comment-action-buttons-renderer[hidden] + #like-button.ytd-comment-action-buttons-renderer, #like-button.ytd-comment-action-buttons-renderer, #dislike-button.ytd-comment-action-buttons-renderer {",
		"    background-size: 20px;",
		"    background-position: 5px;",
		"}",
		"",
		"ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(1) {",
		" background-image: url(\"https://cdn.discordapp.com/attachments/894198606519738411/894200086580568086/dislike.PNG") !important;",
		" background-size: 25px;",
		" background-repeat: no-repeat;",
		" background-position: 5px 11px !important;",
		" transform: translateY(-5px);",
		"    ",
		" transition: transform .5s, background-position .5s;",
		" transition-delay: 0s, .5s;",
		"}",
		"    ",
		"ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(2) {",
		"    background-image: url(\"https://cdn.discordapp.com/attachments/894198606519738411/894207092032946237/dislike-clicked.png") !important;",
		"    background-size: 25px;",
		" 	background-repeat: no-repeat;",
		" 	transform: rotate(180deg);",
		"    ",
		" 	transition: transform .5s, background-position .5s;",
		"}",
		"",
		"ytd-toggle-button-renderer.style-default-active[is-icon-button]:nth-of-type(2) >*{",
		"  transform: rotate(-180deg);",
		"  transition: transform .5s, background-position .5s;",
		"}"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
