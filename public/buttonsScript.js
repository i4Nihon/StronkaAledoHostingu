    document.getElementById("btn").onclick = () => {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.getElementById("btn").style.backgroundColor = color;
    };
    document.getElementById("btn2").onclick = () => {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.bgColor = color;
    };
  
    document.getElementById("rename").onclick = () => {
      document.getElementById("rename").innerHTML = "HOORAY you click me!";
    };
    document.getElementById("print").onclick = () => {
      document.getElementById("para").innerHTML =
        "YEAH WHITE CHOCOLATE IS VERY GOOD";
    };
  
  