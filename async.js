const uri = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  var fData = await fetch(uri).then(res => res.json());
  console.log(fData);
}

getData();
