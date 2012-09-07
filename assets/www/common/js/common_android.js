// 안드로이드 이전 버튼 눌렀을때
document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(){
	//안드로이드 이전 버튼 눌렀을때 실행
	alert('뒤로가기 버튼 누름');
}

// 안드로이드 메뉴 버튼 눌렀을때
document.addEventListener("menubutton", onMenuKeyDown, false);

function onMenuKeyDown(){
	//안드로이드 메뉴 버튼 눌렀을때 실행
	alert('메뉴 버튼 누름');
}

// 안드로이드 검색 버튼 눌렀을때
document.addEventListener("searchbutton", onSearchkKeyDown, false);

function onSearchkKeyDown(){
	//안드로이드 검색 버튼 눌렀을때 실행
	alert('검색 버튼 누름');
}