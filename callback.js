const data = [
  { name: "Joshua Fernandes", degree: "MCA" },
  { name: "Jack Sparrow", degree: "Pirate" }
];

function getData() {
  setTimeout(() => {
    var info = "";
    data.forEach(datum => {
      info = info + `<li>Name: ${datum.name} | ${datum.degree}`;
    });

    document.body.innerHTML = info;
  }, 1000);
}

function createData(_data, callBack) {
  setTimeout(() => {
    data.push(_data);
    callBack();
  }, 2000);
}
createData({ name: "Jonathan Jacobo", degree: "Data Scientist" }, getData);
