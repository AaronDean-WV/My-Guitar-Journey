import { useEffect, useState } from "react";
import { getChord } from "../ApiManager";
import "./RandomChord.css"
export const RandomChord = () => {
  const [chord, setChord] = useState(null);

  useEffect(() => {
    getChord().then(chordsArray => {
      const randomIndex = Math.floor(Math.random() * chordsArray.length);
      setChord(chordsArray[randomIndex]);
    });
  }, []);

  return (
    <article className="chord">
      
      {chord && (
        <section className="chord" key={`chord--${chord.id}`}>
          <div className="chord--image">
            <img src={chord.img} alt={chord.name} className="image-container"  />
          </div>
        </section>
      )}
    </article>
  );
};