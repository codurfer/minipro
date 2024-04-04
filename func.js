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
  setTimeout('info7()', 6800);
  setTimeout('info8()', 7300);
  setTimeout('info9()', 8700);
  setTimeout('stopInfo()', 9800);
});

closeBtn.addEventListener('click', (e) => {
  checkAlert();
});

function stopInfo() {
  state.textContent = '설명 끗';
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
  setTimeout("document.querySelector('.info4').style.width = '85%'", 1100);
  setTimeout(
    "document.querySelector('.info4').innerHTML = '갑자기 듀공이 왜 나왔는지 궁금하시죠? 제가 물을 정말 좋아해요. 그래서 바다와 계곡에서 노는 모습이 마치 물 만난 듀공의 모습이랄까~?'",
    1100
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
    "document.querySelector('.info5').innerHTML = '그 정도로 물에서 할 수 있는 활동을 많이 좋아합니다. 그러다보니 수영 4가지 영법은 기본적으로 할 수 있습니다. 그리고 물과 관련된 가장 큰 관심사는 어드밴스드 오픈워터 자격입니다.'",
    1000
  );
}

function info6() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info6');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info6').style.width = '85%'", 1000);
  setTimeout(
    "document.querySelector('.info6').innerHTML = '오픈워터 자격은 2박 3일 또는 3박 4일 일정으로 진행이 됩니다. 운전 연수처럼 오픈워터 교육 비용이 있습니다. 거기에 저는 해외여행을 좋아하고 세부에서 교육 받고 싶었습니다. 근데 생각보다 비용적인 측면을 생각하지 않을 수 없었습니다. (생각 외로 많이 비싸요!)'",
    1000
  );
}

function info7() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info7');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info7').style.width = '85%'", 1000);
  setTimeout(
    "document.querySelector('.info7').innerHTML = '해외에서 교육 받는 것을 포기하고 빠르면 올해, 늦으면 내년에 국내 오픈워터 교육 받아보려고 계획 중에 있습니다. '",
    1000
  );
}

function info8() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info8');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info8').style.width = '85%'", 1000);
  setTimeout(
    `document.querySelector('.info8').innerHTML = '<img src="https://github.com/codurfer/minipro/blob/main/du0.png?raw=true" />'`,
    1000
  );
}

function info9() {
  const creMs = document.createElement('div');
  creMs.classList.add('btnbot');
  creMs.classList.add('info9');
  creMs.textContent = '...';
  content.appendChild(creMs);
  setTimeout("document.querySelector('.info9').style.width = '5%'", 1000);
  setTimeout("document.querySelector('.info9').innerHTML = '끗'", 1000);
}
