import { useEffect, useState } from "react";
import { getAllLessons, addCompletedLesson, getCompletedLesson } from "../ApiManager";
import { CommentBox } from "../comment/CommentBox";
import "./Lessons.css"

export const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState();
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    getAllLessons().then((lessonsArray) => {
      setLessons(lessonsArray);
    });
    getCompletedLesson().then((completedLessonsArray) => {
      setCompletedLessons(completedLessonsArray);
    });
  }, []);

  const handleLessonClick = (lessonId) => {
    setSelectedLesson(lessons.find((lesson) => lesson.id === lessonId));
  };

  const handleOffClick = () => {
    setSelectedLesson();
  };

  const handleCompleteClick = () => {
    // Check if the lesson has already been marked as complete
    if (completedLessons.some((completedLesson) => completedLesson.lessonId === selectedLesson.id)) {
      window.alert("This lesson has already been marked as complete!");
    } else {
      addCompletedLesson(selectedLesson.id)
        .then(() => {
          // Reload lessons list after completing lesson
          getAllLessons().then((lessonsArray) => {
            setLessons(lessonsArray);
          });
          // Update the completed lessons state variable
          getCompletedLesson().then((completedLessonsArray) => {
            setCompletedLessons(completedLessonsArray);
          });
        });
    }
  };
  
  return (
    <article className="lesson">
      <h1>Lessons</h1>
      {selectedLesson && (
        <section className="lesson--selected">
          <div className="lesson--info">
            <div>
              {selectedLesson.info}
              <div className="lesson--link">
                <a href={selectedLesson.link}>Watch on Youtube</a>
            <div className="lesson--buttons">
              <button className="completeButton" onClick={handleCompleteClick} title="Mark Lesson as Completed">
                
              </button>
              <button className="closeButton" onClick={handleOffClick}title="Close Lesson">
              </button>
            </div>
              </div>
              <CommentBox lessonId={selectedLesson.id} />
            </div>
          </div>
        </section>
      )}
      {lessons.map((lesson) => {
        return (
          <section
            className="lesson"
            key={`lesson--${lesson.id}`}
            onClick={(event) => {
              event.stopPropagation();
              handleLessonClick(lesson.id);
            }}
          >
            <div className="lesson--name">
              <li>
                <button>{lesson?.name}</button>
              </li>
            </div>
          </section>
        );
      })}
    </article>
  );
};
