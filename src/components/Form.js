import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    Author: "",
    bookName: "",
    numberOfPages: "",
    isFinished: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    return setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setIsClicked(false);

    props.setStoreBooks((prev) => {
      return [...prev, formData];
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Author</label>
      <input
        type="text"
        name="Author"
        value={formData.Author}
        onChange={handleChange}
      ></input>
      {/*  */}
      <label>Book name</label>
      <input
        type="text"
        name="bookName"
        value={formData.bookName}
        onChange={handleChange}
      ></input>
      {/*  */}

      <label>Number of pages</label>
      <input
        type="number"
        name="numberOfPages"
        value={formData.numberOfPages}
        onChange={handleChange}
      ></input>
      {/*  */}
      <label>Have you finished the book?</label>
      <input
        type="checkbox"
        name="isFinished"
        value={formData.isFinished}
        onChange={handleChange}
      ></input>
      <button>Submit</button>
      {/*  */}
    </form>
  );
}
