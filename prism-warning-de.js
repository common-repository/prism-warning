//
// Script anlässlich der #Prism Veröffentlichungen
//
// Autor: Horst Klier
// Übersetzung ins Englische: Lukas Fülling
//
// Kopieren und ändern ausdrücklich erlaubt. Bei sinnvollen Ergänzungen bitte auch Hinweis an mich (horst@klier.net).
// Send translations to (https://github.com/k3ll4gr0up).
//
// Danke an Edward Snowden
//

function checkBrowser(name){
   var agent = navigator.userAgent.toLowerCase();
   if (agent.indexOf(name.toLowerCase())>-1) {
     return true;
   }
   return false;
}

function isIE(){
  return checkBrowser('msie');
}
function isSafari(){
  // Achtung: Chrome und Android haben auch Kennung Safari
  if(checkBrowser('chrome'))return false;
  if(checkBrowser('android'))return false;
  return checkBrowser('safari');
}
function isChrome(){
  return checkBrowser('chrome');
}
function isFirefox(){
  return checkBrowser('firefox');
}
function isAndroid(){
  if(checkBrowser('opera'))return false;
  if(checkBrowser('firefox'))return false;
  return checkBrowser('android');
}
function isOpera(){
  return checkBrowser('opera');
}


function PrismWarning(){
  var c='';
  if(isFirefox()==false&&isOpera()==false){
    if(isIE()||isChrome()||isAndroid()||isSafari()){
      c='<div id = "scoped-content">'
      c+='<style scoped>'
      c+=' #prismgotyou{border: 1px solid #aa0000;border-radius:10px;padding:20px;background-color:#fff4f4;color:#000000;}'
      c+='</style>'	
      c+='<div id="prismgotyou">Sie benutzen einen '
      if(isIE())c+='Internet Explorer';
      if(isChrome())c+='Chrome';
      if(isAndroid())c+='Android';
      if(isSafari())c+='Safari';
      c+=' Browser. Laut den Ver&ouml;ffentlichungen vom 6. Juni 2013 arbeitet der Hersteller '
      if(isIE())c+='Microsoft';
      if(isChrome())c+='Google';
      if(isAndroid())c+='Google';
      if(isSafari())c+='Apple';
      c+=' mit dem amerikanischen Geheimdienst NSA zusammen um diesem die totale und weltweite &Uuml;berwachung aller Internetnutzer zu erm&ouml;glichen.<br />'
      c+='Wir denken, das sollten Sie wissen.<br />'
			c+='<a style="margin-top:-14px;float:right;font-size:13px;color:#000066;" href="https://de.wikipedia.org/wiki/PRISM" target="_blank">&uuml;ber PRISM</a>'
      c+='</div>'
      document.writeln(c);
    }
  }
}

PrismWarning();

