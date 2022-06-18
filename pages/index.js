import { gql, useQuery } from "@apollo/client";
import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

const useStyles = makeStyles((theme) => ({
  heading1: {
    color: "red",
  },
}));

const Home = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const classes = useStyles();

  if (loading) <h1>loading..</h1>;
  if (error) console.log(error, "something went wrong");
  if (data) console.log(data);

  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <h1 className={classes.heading1}>Hello World</h1>
    </div>
  );
};
export default Home;

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
