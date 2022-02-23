const table = document.getElementsByClassName('table')[0];
const th = document.getElementsByTagName('thead')[0];
TABLE_DATA.forEach(o => {
  var row = table.insertRow();
  row.insertCell(0).innerText = o.id;
  row.insertCell(1).innerHTML = "<img src=" + o.thumbnailUrl + ">";
  row.insertCell(2).innerText = o.name;
  row.insertCell(3).innerText = o.price;
});

// (Start) button's function
const start = document.getElementById('start');
start.onclick = () => {
  startFunc = window.setInterval(function () {
    for (let i = th.children.length-1; i >= 0; i--) th.appendChild(th.children[Math.random() * i | 1]);
  }, 1000);
};

// (Stop) button's function
const stop = document.getElementById('stop');
stop.onclick = () => {
  clearInterval(startFunc);
};

// (Sort) button's function
const sort = document.getElementById('sort');
sort.onclick = () => {
  // Deleting all the HTML rows
  for (let i=0; i=th.children.length-1; i++) th.children[1].remove()

  // Sorting the DATA content then adding them again
  TABLE_DATA.sort(sorting);
  TABLE_DATA.forEach(o => {
  let row = table.insertRow();
    row.insertCell(0).innerText = o.id;
    row.insertCell(1).innerHTML = "<img src=" + o.thumbnailUrl + ">";
    row.insertCell(2).innerText = o.name;
    row.insertCell(3).innerText = o.price;
  });
};

// The sorting function
function sorting(f, s) {
  return (f.price < s.price) ? 1 : (f.price > s.price) ? -1 : (Number(f.id) > Number(s.id)) ? 1 : -1
}
