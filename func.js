const startBtn = document.querySelector('.start');
const closeBtn = document.querySelector('.close');
const content = document.querySelector('.content');
const showup = document.querySelector('.mainBox');
const fir = document.querySelector('.fir');
const state = document.querySelector('.state');

startBtn.addEventListener('click', (e) => {
  startBtn.classList.toggle('off');
  fir.classList.toggle('hide');
  showup.classList.add('active');
  info1();
  setTimeout('info2()', 1300);
  setTimeout('info3()', 2700);
  setTimeout('info4()', 3300);
  setTimeout('info5()', 4700);
  setTimeout('info6()', 5300);
  setTimeout('stopInfo()', 5400);
});

closeBtn.addEventListener('click', (e) => {
  checkAlert();
});

function stopInfo() {
  state.textContent = '끗';
  state.style.color = 'red';
}

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
  setTimeout("document.querySelector('.info1').style.width = '85%'", 1000);
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
  setTimeout("document.querySelector('.info2').style.width = '85%'", 1000);
  setTimeout(
    "document.querySelector('.info2').textContent = '설명봇이 한 가지를 주제에 대해서 설명할 거에요!'",
    1000
  );
}

function info3() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info3');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info3').style.width = '68%'", 1000);
  setTimeout(
    "document.querySelector('.info3').textContent = '주제는 #듀공을 아세요? 입니다.'",
    1000
  );
}

function info4() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info4');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info4').style.width = '85%'", 1000);
  setTimeout(
    "document.querySelector('.info4').innerHTML = '갑자기 듀공이 왜 나왔는지 궁금하시죠? 제가 물을 정말 좋아해요. 그래서 바다와 계곡에서 노는 모습이 마치 물 만난 듀공의 모습이라~'",
    1000
  );
}

function info5() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info5');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info5').style.width = '85%'", 1000);
  setTimeout(
    `document.querySelector('.info5').innerHTML = '<img src="https://github.com/codurfer/minipro/blob/main/du0.png?raw=true" />'`,
    1000
  );
}

function info6() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info6');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info6').style.width = '5%'", 1000);
  setTimeout("document.querySelector('.info6').innerHTML = '끗'", 1000);
}

