// import gremlin from "gremlin";
// const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
// const Graph = gremlin.structure.Graph;

// dc = new DriverRemoteConnection(
//   "wss://http://semantica.globo.com/G1/gremlin",
//   {}
// );

// const graph = new Graph();
// const g = graph.traversal().withRemote(dc);

// g.V()
//   .limit(1)
//   .count()
//   .next()
//   .then((data) => {
//     console.log(data);
//     dc.close();
//   })
//   .catch((error) => {
//     console.log("ERROR", error);
//     dc.close();
//   });
