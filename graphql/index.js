let { graphql, buildSchema } = require("graphql");

let schema = buildSchema(`
type Query {
    hello: String
}
`);

//resolver
let rootValue = { hello: () => "Hello World!" };

let source = "{hello}";

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});
