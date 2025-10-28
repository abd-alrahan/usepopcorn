import Button from "../../../static components/Button";
import { useState } from "react";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="box">
      <Button onClick={handleIsOpen}>{isOpen ? "–" : "+"}</Button>
      {isOpen && children}
    </div>
  );
}
