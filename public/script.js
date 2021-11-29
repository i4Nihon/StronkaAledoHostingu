
function stoper(znacznik) {
    if (znacznik==1) {
      start = new Date();
    }
    if (znacznik==0 && start>0) {
      stop = new Date();
      sekundy = Math.abs(stop-start)/1000;
      start=0;
      // alert(sekundy);
      document.f1.czas.value=sekundy;
      document.f1.submit();
    }
  }