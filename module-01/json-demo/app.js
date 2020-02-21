window.onload = () => {
  displayDataFromJSON("./bikes.json");
};
var list;

document.getElementById("dropdown").addEventListener("change", () => {
  var index = document.getElementById("dropdown").selectedIndex;
  displayResult(index);
});

async function displayDataFromJSON(url) {
  const data = await fetch(url);
  const formatedData = await data.json();
  list = formatedData.stationBeanList;
  var select = "";

  list.forEach(ele => {
    select += "<option>" + ele.stationName + "</option>";
  });
  document.getElementById("dropdown").innerHTML = select;
  displayResult(0);
}

function displayResult(index) {
  const id = list[index].id;
  var str = "";
    str += "<li> id : " + id + "</li>";
    str += "<li> status : " + list[index].statusValue + "</li>";
    str += "<li> longitude : " + list[index].longitude + "</li>";
    str += "<li> latitude : " + list[index].latitude + "</li>";
  document.getElementById("details").innerHTML = str;
}
