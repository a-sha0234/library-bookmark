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

  return (
    <div>
      <section>
        <button onClick={handleClick}>Add book</button>
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
