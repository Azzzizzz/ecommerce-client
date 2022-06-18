import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query {
    products {
      data {
        id
        attributes {
          name
          description
          price
          category {
            data {
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) <h1>loading..</h1>;
  if (error) console.log(error, "somthing went wrong");
  if (data) console.log(data);

  return <div>E-Commerce</div>;
};
export default Home;

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
