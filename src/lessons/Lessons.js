import { useEffect, useState } from "react";
import { getAllLessons } from "../ApiManager";

export const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState();

  useEffect(() => {
    getAllLessons().then((lessonsArray) => {
      setLessons(lessonsArray);
    });
  }, []);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleOffClick = () => {
    setSelectedLesson(null);
  };

  return (
    <article className="lesson" >
      <bold>
        <h1>Lessons</h1>
      </bold>
      <button className="closeButton" onClick={handleOffClick}>Close Lesson</button>
      {lessons.map((lesson) => {
        return (
            <section
            className="lesson"
            key={`lesson--${lesson.id}`}
            onClick={(event) => {
                event.stopPropagation();
                handleLessonClick(lesson);
            }}
            >
            <div className="lesson--name">
             <li> <button>{lesson?.name}</button> </li>
            </div>
            {selectedLesson?.id === lesson.id && (
                <div className="lesson--info">
                {lesson?.info}      
            <div className="lesson--link"> <a href={lesson?.link}>Watch on Youtube</a></div>
            </div>
            )}
          </section>
        );
    })}
    </article>
  );
};

