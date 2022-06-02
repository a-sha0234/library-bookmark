import { useState } from "react";

export default function Card(props) {
  const [isBookFinished, setIsBookFinished] = useState(false);

  function isFinished() {
    setIsBookFinished((prev) => {
      return !prev;
    });
  }

  console.log(props);

  function deleteBook(e) {
    const deleteButton = e.target.name;
    let filteredArr = props.storeBooks.filter(
      (item) => item.key != deleteButton
    );
    props.setStoreBooks(filteredArr);
  }

  return (
    <div>
      <section>
        <p>{props.book.bookName}</p>
        <p>{props.book.Author}</p>
        <p>{props.book.numberOfPages}</p>
      </section>

      <section>
        <button onClick={deleteBook} name={props.book.key}>
          delete
        </button>
        <button onClick={isFinished}>
          {isBookFinished === false ? "Not finished" : "Finished"}
        </button>
      </section>
    </div>
  );
}
