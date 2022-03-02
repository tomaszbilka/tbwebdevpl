import Link from "next/link";
import Image from "next/image";

import classes from "./portfolio-item.module.css";

const PortfolioItem = (props) => {
  const { title, description, image, link } = props.item;

  return (
    <li className={classes.item}>
      <Link href={link}>
        <a target='_blank'>
          <div className={classes.image}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <hr className={classes.dots} />
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PortfolioItem;
