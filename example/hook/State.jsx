import { useState } from "react";

function ImageGallery() {
  const [index, setIndex] = useState(0);
}

function MyComponent() {
  const [age, setAge] = useState(30);
  const [name, setName] = useState("Pracrobo");
  const [todos, setTodos] = useState(() => createTodo());
}
