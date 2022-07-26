import avater from "../../images/avatar.jpg";
import styles from "./AddPostForm.module.css";

const AddPostForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.addPostForm}>
      <figure>
        <img src={avater} alt="your profile" />
      </figure>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="มึงกำลังคิดอะไรอยู่..." />
      </form>
    </section>
  );
};

export default AddPostForm;
