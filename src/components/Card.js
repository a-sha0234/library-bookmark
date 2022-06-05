import { useState } from "react";

export default function Card(props) {
  const [isBookFinished, setIsBookFinished] = useState(false);

  function isFinished() {
    setIsBookFinished((prev) => {
      return !prev;
    });
  }

  console.log(props);

  const style = {
    backgroundColor: isBookFinished === false ? "red" : "green",
    color: "white",
  };

  function deleteBook(e) {
    const deleteButton = e.target.name;
    let filteredArr = props.storeBooks.filter(
      (item) => item.key != deleteButton
    );
    props.setStoreBooks(filteredArr);
  }

  return (
    <div className="bookCard">
      <div className="bookCard__container">
        <section className="bookCard__details">
          <p>{props.book.bookName}</p>
          <p>By: {props.book.Author}</p>
          <p> pages: {props.book.numberOfPages}</p>
        </section>

        <section className="bookCardButtons">
          <button
            onClick={deleteBook}
            name={props.book.key}
            className="bookCardButtons__delete"
          >
            delete
          </button>
          <button
            onClick={isFinished}
            style={style}
            className="bookCardButtons__isFinished"
          >
            {isBookFinished === false ? "Not finished" : "Finished"}
          </button>
        </section>
      </div>
    </div>
  );
}
