var TOTAL_STICKERS = 639;
var selectedIds = [];
var missingUserStickers = (function(){
	var arr = [];
	for(var i = 1; i <= TOTAL_STICKERS; i++){
		arr.push(i);
	}
	return arr;
})();

function makeList(){
	missingUserStickers.map(makeListItem);
}

function makeListItem (itemNumber){
	var divTag = document.createElement("div");
	divTag.id = itemNumber;
	divTag.className = "divContainer";
	document.body.appendChild(divTag);
	var pTg = document.createElement("p");
	pTg.setAttribute("align", "center");
	pTg.className = "text";
	pTg.innerHTML = (itemNumber);
	document.getElementById(itemNumber).appendChild(pTg);
}

function bindClickEvents(){
	$('.divContainer').click(function(){
		$(this).toggleClass('selected');
	});
	$('#button').click(function(){
		if(confirm("Press enter to delete")){
			deleteSelected();			
		}
	});
}

function deleteSelected(){
	var selected = $('.selected');
	for(var i = 0; i < selected.length; i++){
		var num = Number(selected[i].id)
		selectedIds.push(num);
	}
	selectedIds.map(removeFromMissingUserStickers);
	selected.remove();
	localStorage.setItem('missingUserStickers', JSON.stringify(missingUserStickers));
}

function removeFromMissingUserStickers (number){
	var toDelete = missingUserStickers.indexOf(number);
	console.log(toDelete);
	if (toDelete > -1){
		missingUserStickers.splice(toDelete, 1);
	}
}