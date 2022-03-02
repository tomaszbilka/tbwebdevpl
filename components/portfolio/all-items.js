import classes from "./all-items.module.css";
import PortfolioGrid from "./portfolio-grid";

const AllItems = (props) => {
  return (
    <section className={classes.items}>
      <h1>My work</h1>
      <PortfolioGrid items={props.portfolioItems} />
    </section>
  );
};

export default AllItems;
