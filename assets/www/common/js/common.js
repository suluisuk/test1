// 폰갭이 로드 되기를 기다린다
document.addEventListener("deviceready", init, false);
//balckberry 는 PhoneGap.available 로 사용가능할 때 까지 체크

//폰갭이 백그라운드 진입할때 발생하는 이벤트
document.addEventListener("pause", onPause, false);

function onPause(){
	//폰갭이 백그라운드 진입할때 실행
}

//폰갭이 백그라운드에서 돌아올때 발생하는 이벤트
document.addEventListener("resume", onResume, false);

function onResume(){
	//폰갭이 백그라운드에서 올아올때 실행
}

//폰갭이 온라인 연결된 상태일때
document.addEventListener("online", onOnline, false);

function onOnline(){
	//폰갭이 온라인 연결된 상태일때 실행
}

//폰갭이  인터넷이 연결되지 않은 상태일때
document.addEventListener("offline", onOffline, false);

function onOffline(){
	//폰갭이  인터넷이 연결되지 않은 상태일때 실행
}

// 네트워트 연결 체크
function checkConnection(){
	var networkState = navigator.network.connection.type;
	
	var states = {};
	states[Connection.UNKNOW] = '모르는 연결';
	states[Connection.ETHERNET] = 'ETHERNET 연결';
	states[Connection.WIFI] = 'WIFI 연결';
	states[Connection.CELL_2G] = 'CELL 2G 연결';
	states[Connection.CELL_3G] = 'CELL 3G 연결';
	states[Connection.CELL_4G] = 'CELL 4G 연결';
	states[Connection.NONE] = '연결된 네트워크 없음';
	
	alert('연결타입:' + states[networkState]);
}

// 디바이스 정보 반환
function getDeviceInfo(){
	alert('디바이스 타입:' + device.platform);
	//Android
	return device.platform;
}