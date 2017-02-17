var result = new Array();
var resultLi = new Array();
var resultLiId = new Array();
var player1 = new Array();
var player2 = new Array();
var player3 = new Array();
var player4 = new Array();
var playouttemp1 = new Array();
var playouttemp2 = new Array();
var playouttemp3 = new Array();
var playouttemp4 = new Array();
var playout1 = new Array();
var playout2 = new Array();
var playout3 = new Array();
var playout4 = new Array();
var playoutlensarr1 = new Array();
var playoutlensarr2 = new Array();
var playoutlensarr3 = new Array();
var playoutlensarr4 = new Array();
/*初始化牌面*/
function chushihua() {
	document.getElementById("player1UL").innerHTML = "";
	document.getElementById("player2UL").innerHTML = "";
	document.getElementById("player3UL").innerHTML = "";
	document.getElementById("player4UL").innerHTML = "";
	document.getElementById("playerOut1UL").innerHTML = "";
	document.getElementById("playerOut2UL").innerHTML = "";
	document.getElementById("playerOut3UL").innerHTML = "";
	document.getElementById("playerOut4UL").innerHTML = "";
	playout1.splice(0, playout1.length);
	playout2.splice(0, playout2.length);
	playout3.splice(0, playout3.length);
	playout4.splice(0, playout4.length);
	result.splice(0, result.length);
	resultLi.splice(0, resultLi.length);
	resultLiId.splice(0, resultLiId.length);
	var chushipaiUL = document.getElementById("chushipaiUL");
	for (var i = 0; i < 52; i++) {
		var equal = 0;
		var li = document.createElement("li");
		result[i] = parseInt(Math.random() * 100) % 52 + 1;
		for (var j = 0; j < i; j++) {
			if (result[i] == result[j]) {
				i--;
				equal = 1;
				break;
			}
		}
		if (equal == 0) {
			li.style.background = "url(img/fm.png)";
			li.style.backgroundRepeat = "no-repeat";
			li.style.backgroundSize = "100% 100%";
			li.style.zIndex = "100";
			li.id = "chushipaiid" + i;
			chushipaiUL.appendChild(li);
			resultLi.push(li);
			resultLiId.push(li.id);
		}
	}
	//				alert(result);
	//				alert(resultLi);
	//				alert(resultLiId);
}
/*玩家手上的牌进行排序*/
function paixu(arr, lens) {
	for (var i = 0; i < lens - 1; i++) {
		for (var j = i + 1; j < lens; j++) {
			if (arr[i] > arr[j]) {
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}
/*显示玩家一手上的牌*/
function showplayer1(arr, lens) {
	paixu(arr, lens);
	document.getElementById("player1UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		li.style.zIndex = "100";
		li.onclick = function() {
			if (this.style.zIndex == 100) {
				this.style.zIndex = "1";
				this.style.marginTop = "0px";
			} else {
				this.style.zIndex = "100";
				this.style.marginTop = "30px";
			}
		}
		document.getElementById("player1UL").appendChild(li);
	}
}
/*显示玩家三手上的牌*/
function showplayer3(arr, lens) {
	paixu(arr, lens);
	document.getElementById("player3UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		li.style.zIndex = "100";
		li.onclick = function() {
			if (this.style.zIndex == 100) {
				this.style.zIndex = "1";
				this.style.marginTop = "0px";
			} else {
				this.style.zIndex = "100";
				this.style.marginTop = "30px";
			}
		}
		document.getElementById("player3UL").appendChild(li);
	}
}
/*显示玩家二手上的牌*/
function showplayer2(arr, lens) {
	paixu(arr, lens);
	document.getElementById("player2UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		li.style.zIndex = "100";
		li.onclick = function() {
			if (this.style.zIndex == 100) {
				this.style.zIndex = "1";
				this.style.marginLeft = "45px";
			} else {
				this.style.zIndex = "100";
				this.style.marginLeft = "15px";
			}
		}
		document.getElementById("player2UL").appendChild(li);
	}
}
/*显示玩家四手上的牌*/
function showplayer4(arr, lens) {
	paixu(arr, lens);
	document.getElementById("player4UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		li.style.zIndex = "100";
		li.onclick = function() {
			if (this.style.zIndex == 100) {
				this.style.zIndex = "1";
				this.style.marginLeft = "45px";
			} else {
				this.style.zIndex = "100";
				this.style.marginLeft = "15px";
			}
		}
		document.getElementById("player4UL").appendChild(li);
	}
}
//			function delay(){
//				var i = 0;
//				if(i<1){
//					i++;
//				}else{
//					i--;
//				}
//			}

/*扑克牌飞出效果*/
function feipai(k) {
	switch (k % 4) {
		case 0:
			player1[parseInt(k / 4)] = result[k];
			$("#" + resultLiId[k]).css({
				"transform": "rotate(0deg)"
			});
			$("#" + resultLiId[k]).animate({
				"margin-left": (30 * parseInt(k / 4) - 180) + "px",
				"margin-top": "245px"
			}, 500);
			break;
		case 1:
			player2[parseInt(k / 4)] = result[k];
			$("#" + resultLiId[k]).css({
				"transform": "rotate(-90deg)"
			});
			$("#" + resultLiId[k]).animate({
				"margin-top": (180 - 30 * parseInt(k / 4)) + "px",
				"margin-left": "305px"
			}, 500);
			break;
		case 2:
			player3[parseInt(k / 4)] = result[k];
			$("#" + resultLiId[k]).css({
				"transform": "rotate(0deg)"
			});
			$("#" + resultLiId[k]).animate({
				"margin-left": (180 - 30 * parseInt(k / 4)) + "px",
				"margin-top": "-245px"
			}, 500);
			break;
		case 3:
			player4[parseInt(k / 4)] = result[k];
			$("#" + resultLiId[k]).css({
				"transform": "rotate(90deg)"
			});
			$("#" + resultLiId[k]).animate({
				"margin-top": (30 * parseInt(k / 4) - 180) + "px",
				"margin-left": "-305px"
			}, 500);
			break;
	}
}
/*发牌*/
function fapai() {
	for (var k = 0; k < 52; k++) {
		setTimeout("feipai(" + k + ")", 500);
		//		switch (k % 4) {
		//			case 0:
		//				{
		//					player1[parseInt(k / 4)] = result[k];
		//					//								alert(1);
		//					setTimeout("feipai(" + k + ")", 500);
		//					//								alert(2);
		//					//resultLi[k].style.transform = "rotate(0deg)";
		//					//								$("#" + resultLiId[k]).css({
		//					//									"transform": "rotate(0deg)"
		//					//								});
		//					//alert(1);
		//					//alert(player1);
		//					//								$("#" + resultLiId[k]).animate({
		//					//									"margin-left": (30 * parseInt(k / 4) - 180) + "px",
		//					//									"margin-top": "245px"
		//					//								}, 500);
		//					break;
		//				}
		//			case 1:
		//				{
		//					player2[parseInt(k / 4)] = result[k];
		//					setTimeout("feipai(" + k + ")", 500);
		//					//resultLi[k].style.transform = "rotate(-90deg)";
		//					//								$("#" + resultLiId[k]).css({
		//					//									"transform": "rotate(-90deg)"
		//					//								});
		//					//								$("#" + resultLiId[k]).animate({
		//					//									"margin-top": (180 - 30 * parseInt(k / 4)) + "px",
		//					//									"margin-left": "305px"
		//					//								}, 500);
		//					break;
		//				}
		//			case 2:
		//				{
		//					player3[parseInt(k / 4)] = result[k];
		//					setTimeout("feipai(" + k + ")", 500);
		//					//resultLi[k].style.transform = "rotate(0deg)";
		//					//								$("#" + resultLiId[k]).css({
		//					//									"transform": "rotate(0deg)"
		//					//								});
		//					//								$("#" + resultLiId[k]).animate({
		//					//									"margin-left": (180 - 30 * parseInt(k / 4)) + "px",
		//					//									"margin-top": "-245px"
		//					//								}, 500);
		//					break;
		//				}
		//			default:
		//				{
		//					player4[parseInt(k / 4)] = result[k];
		//					setTimeout("feipai(" + k + ")", 500);
		//					//								resultLi[k].style.transform = "rotate(90deg)";
		//					//								$("#" + resultLiId[k]).css({
		//					//									"transform": "rotate(90deg)"
		//					//								});
		//					//								$("#" + resultLiId[k]).animate({
		//					//									"margin-top": (30 * parseInt(k / 4) - 180) + "px",
		//					//									"margin-left": "-305px"
		//					//								}, 500);
		//					break;
		//				}
		//		}
	}
}

/*亮牌*/
function liangpai() {
	document.getElementById("chushipaiUL").innerHTML = "";
	showplayer1(player1, player1.length);
	showplayer3(player3, player3.length);
	showplayer2(player2, player2.length);
	showplayer4(player4, player4.length);
}

/*删除子元素*/
function removeElement(_element) {
	var _parentElement = _element.parentNode;
	if (_parentElement) {
		_parentElement.removeChild(_element);
	}
}

/*判断是否继续游戏*/
function ifwin() {
	if (player1.length == 0) {
		benjujifen();
		var ifjixu = confirm("该局player1赢了，得分如下：\rplayer1:" + fenshu[0] + ";\rplayer2:" + fenshu[1] + ";\rplayer3:" + fenshu[2] + ";\rplayer4:" + fenshu[3] + "\r点击“确定”统计总分。。。");
		fenshutongji();
	} else if (player2.length == 0) {
		benjujifen();
		var ifjixu = confirm("该局player2赢了，得分如下：\rplayer1:" + fenshu[0] + ";\rplayer2:" + fenshu[1] + ";\rplayer3:" + fenshu[2] + ";\rplayer4:" + fenshu[3] + "\r点击“确定”统计总分。。。");
		fenshutongji();
	} else if (player3.length == 0) {
		benjujifen();
		var ifjixu = confirm("该局player3赢了，得分如下：\rplayer1:" + fenshu[0] + ";\rplayer2:" + fenshu[1] + ";\rplayer3:" + fenshu[2] + ";\rplayer4:" + fenshu[3] + "\r点击“确定”统计总分。。。");
		fenshutongji();
	} else if (player4.length == 0) {
		benjujifen();
		var ifjixu = confirm("该局player4赢了，得分如下：\rplayer1:" + fenshu[0] + ";\rplayer2:" + fenshu[1] + ";\rplayer3:" + fenshu[2] + ";\rplayer4:" + fenshu[3] + "\r点击“确定”统计总分。。。");
		fenshutongji();
	}
	if (ifjixu == true) {
		var chongxinfapai = confirm("点击“确定”初始化牌面，继续游戏。。。\r点击“取消”退出游戏。");
	} else if (ifjixu == false) {
		var chongxinfapai = confirm("点击“确定”初始化牌面，继续游戏。。。\r点击“取消”退出游戏。");
	}
	if (chongxinfapai == true) {
		chushihua();
	} else if (chongxinfapai == false) {
		window.close();
	}
}
/*显示玩家一打出的牌*/
function showplayout1(arr, lens) {
	document.getElementById("playerOut1UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		document.getElementById("playerOut1UL").appendChild(li);
	}
}

function chupai1() {
	playouttemp1.splice(0, playouttemp1.length); //每次出牌playouttemp1先清空
	var l = document.getElementById("player1UL").childNodes.length;
	var j = 0;
	for (var i = 0; i < l; i++) {
		var z = document.getElementById("player1UL").childNodes[i];
		if (z.style.zIndex == 1) {
			playouttemp1[j++] = player1[i];
			for (var k = i; k < l - 1; k++) {
				player1[k] = player1[k + 1];
			}
			removeElement(z);
			l--;
			i--;
		}
	}
	player1.splice(l, player1.length); //清除player1尾部多余元素
	playout1 = playout1.concat(playouttemp1); //把要出的牌增加到playout1数组尾部
	playoutlensarr1.push(j); //把该次出牌的数量push到playoutlensarr数组里面
	showplayout1(playout1, playout1.length); //出完牌把playout1显示更新
	/*showplayer1(player1,l);*/ //出完牌把player1显示更新
	ifwin();
}

function houtui1() {
	if (playoutlensarr1 == "") {
		alert("不能再退牌！");
	} else {
		/*两个关键参数：playoutlens、playouttemp1*/
		var playoutlens = playoutlensarr1.pop();
		playouttemp1 = playout1.slice(playout1.length - playoutlens, playout1.length);
		/*1、删除playout1最后进去的一组牌*/
		playout1.splice(playout1.length - playoutlens, playout1.length);
		showplayout1(playout1, playout1.length);
		/*2、该牌重新赋值给player1*/
		player1 = player1.concat(playouttemp1);
		showplayer1(player1, player1.length);
	}
}
/*显示玩家二打出的牌*/
function showplayout2(arr, lens) {
	document.getElementById("playerOut2UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		document.getElementById("playerOut2UL").appendChild(li);
	}
}

function chupai2() {
	playouttemp2.splice(0, playouttemp2.length);
	var l = document.getElementById("player2UL").childNodes.length;
	var j = 0;
	for (var i = 0; i < l; i++) {
		var z = document.getElementById("player2UL").childNodes[i];
		if (z.style.zIndex == 1) {
			playouttemp2[j++] = player2[i];
			for (var k = i; k < l - 1; k++) {
				player2[k] = player2[k + 1];
			}
			removeElement(z);
			l--;
			i--;
		}
	}
	player2.splice(l, player2.length); //清除player2尾部多余元素
	playout2 = playout2.concat(playouttemp2); //把要出的牌增加到playout2数组尾部
	playoutlensarr2.push(j); //把该次出牌的数量push到playoutlensarr2数组里面
	showplayout2(playout2, playout2.length); //出完牌把playout2显示更新
	/*showplayer2(player2,l);*/ //出完牌把player2显示更新
	ifwin();
}

function houtui2() {
	if (playoutlensarr2 == "") {
		alert("不能再退牌！");
	} else {
		var playoutlens = playoutlensarr2.pop();
		playouttemp2 = playout2.slice(playout2.length - playoutlens, playout2.length);
		playout2.splice(playout2.length - playoutlens, playout2.length);
		showplayout2(playout2, playout2.length);
		player2 = player2.concat(playouttemp2);
		showplayer2(player2, player2.length);
	}
}
/*显示玩家三打出的牌*/
function showplayout3(arr, lens) {
	document.getElementById("playerOut3UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		document.getElementById("playerOut3UL").appendChild(li);
	}
}

function chupai3() {
	playouttemp3.splice(0, playouttemp3.length);
	var l = document.getElementById("player3UL").childNodes.length;
	var j = 0;
	for (var i = 0; i < l; i++) {
		var z = document.getElementById("player3UL").childNodes[i];
		if (z.style.zIndex == 1) {
			playouttemp3[j++] = player3[i];
			for (var k = i; k < l - 1; k++) {
				player3[k] = player3[k + 1];
			}
			removeElement(z);
			l--;
			i--;
		}
	}
	player3.splice(l, player3.length); //清除player3尾部多余元素
	playout3 = playout3.concat(playouttemp3); //把要出的牌增加到playout3数组尾部
	playoutlensarr3.push(j); //把该次出牌的数量push到playoutlensarr3数组里面
	showplayout3(playout3, playout3.length); //出完牌把playout3显示更新
	/*showplayer3(player3,l);*/ //出完牌把player3显示更新
	ifwin();
}

function houtui3() {
	if (playoutlensarr3 == "") {
		alert("不能再退牌！");
	} else {
		var playoutlens = playoutlensarr3.pop();
		playouttemp3 = playout3.slice(playout3.length - playoutlens, playout3.length);
		playout3.splice(playout3.length - playoutlens, playout3.length);
		showplayout3(playout3, playout3.length);
		player3 = player3.concat(playouttemp3);
		showplayer3(player3, player3.length);
	}
}
/*显示玩家四打出的牌*/
function showplayout4(arr, lens) {
	document.getElementById("playerOut4UL").innerHTML = "";
	for (var i = 0; i < lens; i++) {
		var resultImg = 'img/p' + arr[i] + '.png';
		var li = document.createElement("li");
		li.style.background = "url(" + resultImg + ")";
		li.style.backgroundRepeat = "no-repeat";
		li.style.backgroundSize = "100% 100%";
		document.getElementById("playerOut4UL").appendChild(li);
	}
}

function chupai4() {
	playouttemp4.splice(0, playouttemp4.length);
	var l = document.getElementById("player4UL").childNodes.length;
	var j = 0;
	for (var i = 0; i < l; i++) {
		var z = document.getElementById("player4UL").childNodes[i];
		if (z.style.zIndex == 1) {
			playouttemp4[j++] = player4[i];
			for (var k = i; k < l - 1; k++) {
				player4[k] = player4[k + 1];
			}
			removeElement(z);
			l--;
			i--;
		}
	}
	player4.splice(l, player4.length); //清除player4尾部多余元素
	playout4 = playout4.concat(playouttemp4); //把要出的牌增加到playout4数组尾部
	playoutlensarr4.push(j); //把该次出牌的数量push到playoutlensarr4数组里面
	showplayout4(playout4, playout4.length); //出完牌把playout4显示更新
	/*showplayer4(player4,l);*/ //出完牌把player4显示更新
	ifwin();
}

function houtui4() {
	if (playoutlensarr4 == "") {
		alert("不能再退牌！");
	} else {
		var playoutlens = playoutlensarr4.pop();
		playouttemp4 = playout4.slice(playout4.length - playoutlens, playout4.length);
		playout4.splice(playout4.length - playoutlens, playout4.length);
		showplayout4(playout4, playout4.length);
		player4 = player4.concat(playouttemp4);
		showplayer4(player4, player4.length);
	}
}
var zongfen = new Array(0, 0, 0, 0);
var fenshu = new Array(0, 0, 0, 0);
var panju = 1;

function jifen(paishu) {
	if (paishu > 0 && paishu < 8) {
		return paishu;
	} else if (paishu >= 8 && paishu < 10) {
		return paishu * 2;
	} else if (paishu >= 10 && paishu < 13) {
		return paishu * 3;
	} else if (paishu == 13) {
		return 42;
	} else {
		return 0;
	}
}

function benjujifen() {
	fenshu[0] = jifen(player1.length);
	fenshu[1] = jifen(player2.length);
	fenshu[2] = jifen(player3.length);
	fenshu[3] = jifen(player4.length);
}

function fenshutongji() {
	for (var i = 0; i < 4; i++) {
		zongfen[i] += fenshu[i];
	}
	var fenshutongjitable = document.getElementById("fenshutongjitable");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.innerHTML = panju++;
	tr.appendChild(td);
	for (var i = 0; i < 4; i++) {
		var td = document.createElement("td");
		td.innerHTML = zongfen[i];
		tr.appendChild(td);
	}
	fenshutongjitable.appendChild(tr);
}