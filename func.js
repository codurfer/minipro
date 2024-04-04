const startBtn = document.querySelector('.start');
const closeBtn = document.querySelector('.close');
const content = document.querySelector('.content');
const showup = document.querySelector('.mainBox');

startBtn.addEventListener('click', (e) => {
  startBtn.classList.toggle('off');
  showup.classList.add('active');
  info1();
  setTimeout('info2()', 1300);
  setTimeout('info3()', 2700);
  setTimeout('info4()', 3300);
  setTimeout('info5()', 4700);
});

closeBtn.addEventListener('click', (e) => {
  checkAlert();
});

function checkAlert() {
  if (confirm('설명봇을 종료하시겠어요?') === true) {
    location.reload();
  } else {
    return false;
  }
}

function info1() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info1');
  creMs.innerHTML = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info1').style.width = '55%'", 1000);
  setTimeout(
    "document.querySelector('.info1').innerHTML = '안녕하세요? 이건 저를 소개하는 설명봇입니다.'",
    1000
  );
}

function info2() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info2');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info2').style.width = '60%'", 1000);
  setTimeout(
    "document.querySelector('.info2').textContent = '설명봇이 한 가지를 설명할 거에요!'",
    1000
  );
}

function info3() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info3');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info3').style.width = '62%'", 1000);
  setTimeout(
    "document.querySelector('.info3').textContent = '그것은 #듀공을 아세요? 입니다.'",
    1000
  );
}

function info4() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info4');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info4').style.width = '62%'", 1000);
  setTimeout(
    "document.querySelector('.info4').innerHTML = '듀공을 모르신다면.. 한번 검색을 해보세요.갑자기 듀공이 왜 나왔는지 궁금하시죠? 제가 물을 정말 좋아합니다. 그래서 바다와 계곡에서 물 만난 듀공이라고 불렸죠.<br>P.S 물속에서 수영하는 제 모습은 듀공을 빼닮았답니다! '",
    1000
  );
}

function info5() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info5');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info5').style.width = '90%'", 1000);
  setTimeout(
    `document.querySelector('.info5').innerHTML = '<img src="https://github.com/codurfer/minipro/blob/main/du0.png?raw=true" />'`,
    1000
  );
}
