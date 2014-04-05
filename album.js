function makeList(){
	for(var i = 1; i <= 639; i++){
		var divTag = document.createElement("div");
		divTag.id = i;
		divTag.className = "divContainer";
		document.body.appendChild(divTag);
		var pTg = document.createElement("p");
		pTg.setAttribute("align", "center");
		pTg.className = "text";
		pTg.innerHTML = (i);
		document.getElementById(i).appendChild(pTg);
	}
}

function bindClickEvents(){
	$('.divContainer').click(function(){
		$(this).toggleClass('selected');
	});
	$('#button').click(function(){
		if(confirm("Press enter to delete")){
			$('.selected').remove();
		}
	});
}