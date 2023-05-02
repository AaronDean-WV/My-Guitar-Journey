import { useEffect, useState } from "react";
import { getAllLessons } from "../ApiManager";

export const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    getAllLessons().then((lessonsArray) => {
      setLessons(lessonsArray);
    });
  }, []);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <article className="lesson"> <bold><h1>Lessons</h1></bold>
      {lessons.map((lesson) => {
        return (
          <section
            className="lesson"
            key={`lesson--${lesson.id}`}
            onClick={() => handleLessonClick(lesson)}
          >
            <div className="lesson--name"><button>{lesson?.name}</button></div>
            {selectedLesson?.id === lesson.id && (
              <div className="lesson--info">
                {lesson?.info}
                {lesson?.link}
              </div>
            )}
          </section>
        );
      })}
    </article>
  );
};

