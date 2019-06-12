const users = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/posts";

run(function*() {
  var one = yield 1;
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three);
});

function run(generator) {
  var gen = generator();
  function iterate(iteration) {
    console.log(iteration);
    if (!iteration.done) {
      iterate(gen.next());
      return iteration.value;
    }
  }
  return iterate(gen.next());
}
