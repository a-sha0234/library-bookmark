import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import plus from "../images/plus.png";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);

  const [storeBooks, setStoreBooks] = useState([]);

  let key = 0;

  function handleClick() {
    // track if clicked
    setIsClicked((prev) => {
      return !prev;
    });
  }

  const style = {};

  return (
    <div>
      <section className="addBooks">
        <button onClick={handleClick} className="addBooks__button">
          Add book
        </button>
      </section>
      <section>
        {isClicked && (
          <Form setIsClicked={setIsClicked} setStoreBooks={setStoreBooks} />
        )}
      </section>

      {storeBooks.map((book) => {
        book.key = key;
        key++;
        return (
          <Card
            book={book}
            storeBooks={storeBooks}
            setStoreBooks={setStoreBooks}
          />
        );
      })}
    </div>
  );
}
