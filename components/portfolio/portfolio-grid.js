import PortfolioItem from "./portfolio-item";

import classes from "./portfolio-grid.module.css";

const PortfolioGrid = (props) => {
  const { items } = props;

  return (
    <ul className={classes.item_grid}>
      {items.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default PortfolioGrid;
