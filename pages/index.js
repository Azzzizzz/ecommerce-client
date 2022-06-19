import { gql, useQuery } from "@apollo/client";
import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "../components/Card";

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
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "hsla(16,0%,100%,1)",
    // backgroundImage:
    //   "radial-gradient(at 40% 20%, hsla(23,0%,100%,1) 0px, transparent 50%),\nradial-gradient(at 80% 0%, hsla(186,40%,71%,1) 0px, transparent 50%),\nradial-gradient(at 0% 50%, hsla(355,46%,88%,1) 0px, transparent 50%),\nradial-gradient(at 80% 50%, hsla(337,56%,84%,1) 0px, transparent 50%),\nradial-gradient(at 0% 100%, hsla(0,0%,88%,1) 0px, transparent 50%),\nradial-gradient(at 80% 100%, hsla(240,44%,85%,1) 0px, transparent 50%),\nradial-gradient(at 0% 0%, hsla(343,34%,85%,1) 0px, transparent 50%)",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "center",
    padding: "20px 0px",
  },
}));

const Home = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const classes = useStyles();

  if (loading) <h1>loading..</h1>;
  if (error) console.log(error, "something went wrong");
  if (data) console.log(data?.products?.data);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          {data?.products?.data?.map(({ id, attributes }) => (
            <Card
              key={id}
              name={attributes.name}
              description={attributes.description}
              price={attributes?.price}
              image={attributes?.images?.data?.[0]?.attributes?.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
