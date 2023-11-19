import styles from "../styles/CommentContainer.module.css";
import Comments from "./Comments";

const CommentContainer = ({ randomReviews }) => {
  return (
    <div className="global__container">
      <div className={styles.comments}>
        <div className={styles.comments__top}>
          <h3 className={styles.comments__text}>Why</h3>
          <div className={styles.comments__logo}>
            <h3 className={styles.comments__text}>RS3ORE</h3>
            <span>❔</span>
          </div>
        </div>

        <h3 className={styles.comments__middle}>
          Here are some of our esteemed customers reviews.
        </h3>

        <div className={styles.comments__wrapper}>
          <Comments randomReviews={randomReviews} />
        </div>
      </div>
    </div>
  );
};

export default CommentContainer;
