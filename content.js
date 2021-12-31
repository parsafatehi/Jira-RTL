console.log('JIRA RTL');

function setDirAuto(element) {
  element.setAttribute("dir", "auto");
  // console.log('JIRA RTL: Set Attr');
}

function changeDir() {
  var timesRun = 0;
  var interval = setInterval(function() {
    timesRun += 1;

    var ele = document.querySelectorAll('input, textarea, a, p, h1, div');

    for (i = 0; i < ele.length; i++) {
      setDirAuto(ele[i]);
    }
    
    // console.log('JIRA RTL: Set Timeout');
    if(timesRun === 1){
      clearInterval(interval);
    }
  }, 1000);  
}

window.addEventListener("load", () => {
  changeDir();
});


var oldHref = document.location.href;

window.addEventListener("load", () => {
    var bodyList = document.querySelector("body")
    ,observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (oldHref != document.location.href) {
          oldHref = document.location.href;
          changeDir();
        }
      });
    });

    var config = {
      childList: true,
      subtree: true
    };

    observer.observe(bodyList, config);
});