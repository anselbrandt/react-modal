import React, { useState, useRef } from "react";
import styles from "./App.module.css";
import useOnClickOutside from "./useOnClickOutside";

function App() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  const handeSetModalOpen = () => setModalOpen(true);

  return (
    <div className={styles.app}>
      {isModalOpen ? (
        <div ref={ref} className={styles.modal}>
          Click anywhere outside to close.
        </div>
      ) : (
        <button onClick={() => handeSetModalOpen()}>Open Modal</button>
      )}
    </div>
  );
}

export default App;
