import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);

  const [storeBooks, setStoreBooks] = useState([]);

  console.log(storeBooks);

  function handleClick() {
    // track if clicked
    setIsClicked((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <section>
        <button onClick={handleClick}>Add</button>
      </section>
      <section>
        {isClicked && (
          <Form setIsClicked={setIsClicked} setStoreBooks={setStoreBooks} />
        )}
      </section>

      {storeBooks &&
        storeBooks.map((book) => {
          return <Card book={book} />;
        })}
    </div>
  );
}
