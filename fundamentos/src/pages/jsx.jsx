import Layout from "../components/Layout";

export default function Jsx() {
  //const titulo = <h1>JSX is a central concept</h1>

  // function subtitle() {
  //     return <h2>{"Amazing!".toUpperCase()}</h2>
  // }

  // const obj = {name: "Zebedeu", age: 30}

  return (
    {
      /* {titulo}
        {subtitle()} */
    },
    (
      <Layout titulo="Learning JSX">
        <div>
          <h1>JSX is a central concept</h1>
          <h2>{"Amazing!".toUpperCase()}</h2>
          <p>{JSON.stringify({ name: "Zebedeu", age: 30 })}</p>
        </div>
      </Layout>
    )
  );
}
