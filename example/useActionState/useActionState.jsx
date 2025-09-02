import { useActionState, useState } from "react";
import { addToCart } from "./action.jsx";

function AddToCartForm({ ItemId, itemTitle }) {
  const [formState, formAction] = useActionStae(addToCart, {});
  return (
    <form action={formAction}>
      <h2> {itemTitle} </h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart </button>
      {formState?.success && <div className="toast"></div>}
      {formState?.success === false && (
        <div className="error"> Failed to Add To Cart{formState.message} </div>
      )}
    </form>
  );
}

export default function App() {
  return (
    <>
      <AddToCartForm
        itemID="1"
        itemTitle="JavaScript: The Definitive Guide"
      ></AddToCartForm>
      <AddToCartForm
        itemID="2"
        itemTitle="JavaScript: The Good Parts"
      ></AddToCartForm>
    </>
  );
}
