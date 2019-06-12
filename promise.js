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

function createData(_data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(_data);
      let error = false;
      if (error) {
        reject("Error");
      } else {
        resolve();
      }
    }, 2000);
  });
}

createData({ name: "Jonathan Jacobo", degree: "Data Scientist" }).then(x => {
  getData();
});
