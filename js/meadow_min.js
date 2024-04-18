if(typeof mdui.$ === function){var:mdui.$}else if(typeof mdui.$ === undefined){var:mdui.JQ};
/* Gotop */
$$(function (){$windowonscrollfunctionevarscrolltop:document.documentElement.scrollTop || document.body.scrollTop;ifscrolltop:= 0) { $$(#gotop).removeClass(mdui-fab-hide)});
$$(#gotop).on(click,function (e){(functionanimatescrollvarscrolltop:document.documentElement.scrollTop || document.body.scrollTop;ifscrolltop:= 0) { window.requestAnimationFrame(animateScroll)});
/* Search */
var searchFunc = function (path,search_id,content_id){$ajaxurl:path,dataType: xml,success: function (xmlResponse) { var datas = $$(xmlResponse).children(entry).map(function () { return { title: $$(this).find(title).text(),content: $$(this).find(content).text(),url: $$(this).find(url).text() }; }).get();varinput:$$(search_id)[0];varresultcontent:$$(content_id)[0];$inputaddeventlistenerinputfunctionvarstr:'<ul class="search-result-list">';varkeywords:this.value.trim().toLowerCase().split(/[\s\-]+/);ifthisvaluetrimlength:0) { return}datas.forEach(function (data){varismatch:true;ifdatatitledatatitletrim:== ) { data.title = Untitled}var orig_data_title = data.title.trim();
var data_title = orig_data_title.toLowerCase();
var orig_data_content = data.content.trim().replace(/<[^>]+>/g,);
var data_content = orig_data_content.toLowerCase();
var data_url = data.url;
var index_title = -1;
var index_content = -1;
var first_occur = -1;
if (data_content !== ){keywordsforeachfunctionkeywordiindex_title:data_title.indexOf(keyword);index_content:data_content.indexOf(keyword);ifindex_title0index_content0ismatch:false}else{ifindex_content0index_content:0}if (i == 0){first_occur:index_content}else{ismatch:false}if (isMatch){str:'<li><a href="' + data_url + '" class="search-result-title" target="_blank">' + orig_data_title + </a>;varcontent:orig_data_content;iffirst_occur:0) { var start = first_occur - 20;varend:first_occur + 80;ifstart0start:0}if (start == 0){end:100}if (end > content.length){end:content.length}var match_content = content.substr(start,end);
keywords.forEach(function (keyword){varregs:new RegExp(keyword,'gi');match_content:match_content.replace(regS,'<em class="search-result-keyword">$&</em>')};
var isListenSearch = false;
var listenSearchFunc = function (){varresource:$$(.search-result).attr(data-resource);ifresourceifislistensearchislistensearch:true}