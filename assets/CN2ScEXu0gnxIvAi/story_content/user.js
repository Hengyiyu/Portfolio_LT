function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67FuLvSYeD9":
        Script1();
        break;
      case "5zWXPRIbxME":
        Script2();
        break;
      case "5gRnO7VadbV":
        Script3();
        break;
      case "60ZrKOyGoGh":
        Script4();
        break;
      case "66YP2kBmGIX":
        Script5();
        break;
      case "6rj8hO7atGM":
        Script6();
        break;
      case "6DVRV2QkKh7":
        Script7();
        break;
      case "6Lzhc1zYffo":
        Script8();
        break;
  }
}

function Script1()
{
  function loadScript(src, async = true, defer = true) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
 
function loadStylesheet(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}
 
async function insertDependencies() {
  try {
    await loadScript('https://unpkg.com/intro.js@7.0.1/intro.js');
    await loadStylesheet('https://unpkg.com/intro.js@7.0.1/introjs.css');
    await loadScript('https://cdn.jsdelivr.net/gh/nrzmalik/IntroTourByNrz/nrzIntroTourMutilLang.js');
  } catch (error) {
    console.error('Failed to insert dependencies:', error);
  }
}
 
insertDependencies();
}

function Script2()
{
  let theObject = document.querySelectorAll("[data-acc-text='python']")

gsap.to(theObject, {ease: "bounce.out", duration: 3, rotation: 360})
}

function Script3()
{
  var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .4

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
}
}

function Script4()
{
  let theObject = document.querySelectorAll("[data-acc-text='python']")

gsap.to(theObject, {ease: "bounce.out", duration: 3, rotation: 360})
}

function Script5()
{
  let theObject = document.querySelectorAll("[data-acc-text='python']")

gsap.to(theObject, {ease: "bounce.out", duration: 3, rotation: 360})
}

function Script6()
{
  var player=GetPlayer();
var Temp_Sum=player.GetVar("Temp_Sum");
var Temp_Sum=Temp_Sum.toFixed(6);
var txtValue=Temp_Sum.toString();
player.SetVar("txtValue", txtValue);
}

function Script7()
{
  var player = GetPlayer();
var text = player.GetVar("copyInput");
copyFunction (text);

function copyFunction(tt) {
  
  const copyText = tt;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
}

function Script8()
{
  window.print();
}

