import { MouseEvent, useState } from "react";

export default function Selection() {
  const [buttonSize, setButtonSize] = useState(5);
  const [showButton, setShowButton] = useState(true);
  const [selection, setSelection] = useState("");

  function handleNo(e: MouseEvent<HTMLButtonElement>) {
    setButtonSize(buttonSize + 5);
    if (buttonSize >= 30) {
      setShowButton(false);
      setSelection("No");
    }
  }
  function handleYes(e: MouseEvent<HTMLButtonElement>) {
    setSelection("Yes");
    setShowButton(false);
  }

  return (
    <div>
      <button
        onClick={handleYes}
        style={{
          margin: `${buttonSize}px`,
          fontSize: `${buttonSize / 5}em`,
          display: showButton ? "" : "none",
        }}
        className="bg-green-700 active:bg-green-900 p-2 rounded-lg"
      >
        Yes :D
      </button>
      <button
        onClick={handleNo}
        style={{
          display: showButton ? "" : "none",
        }}
        className="bg-red-700 active:bg-red-900 p-2 rounded-lg"

      >
        No :C
      </button>
      {(selection == "No" && <p>Owwie :cc that okai i undertand</p>) ||
        (selection == "Yes" && (
          <p>Yay! I'm glad you said yes! :D. See u on 14th of february</p>
        ))}
    </div>
  );
}
