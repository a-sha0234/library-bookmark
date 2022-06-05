import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    Author: "",
    bookName: "",
    numberOfPages: "",
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
    <form onSubmit={handleSubmit} className="bookForm">
      <div className="bookForm__inputs">
        <label>Author</label>
        <input
          type="text"
          name="Author"
          value={formData.Author}
          onChange={handleChange}
          required
        ></input>
      </div>
      {/*  */}
      <div className="bookForm__inputs">
        <label>Book name</label>
        <input
          type="text"
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          required
        ></input>
      </div>
      {/*  */}
      <div className="bookForm__inputs">
        <label>Total pages</label>
        <input
          type="number"
          name="numberOfPages"
          value={formData.numberOfPages}
          onChange={handleChange}
          required
        ></input>
      </div>
      {/*  */}

      <button name="submit" className="bookForm__submit">
        Submit
      </button>

      {/*  */}
    </form>
  );
}
