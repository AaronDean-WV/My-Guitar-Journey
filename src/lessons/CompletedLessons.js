import { useEffect, useState } from "react";
import { getAllLessons, getCompletedLesson } from "../ApiManager";
import "./CompletedLessons.css"

export const CompletedLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const localUser = localStorage.getItem("activeUser");
  const userObject = JSON.parse(localUser);

  useEffect(() => {
    getAllLessons().then((lessonsArray) => {
      setLessons(lessonsArray);
    });
    getCompletedLesson().then((completedLessonsArray) => {
        const sortedCompletedLessons = completedLessonsArray.sort((a, b) => a.lessonId - b.lessonId);
        setCompletedLessons(sortedCompletedLessons);
      });
      
  }, []);

  const completedLessonNames = completedLessons
    .filter((completedLesson) => completedLesson.userId === userObject.id)
    .map((completedLesson) => {
      const lesson = lessons.find((lesson) => lesson.id === completedLesson.lessonId);
      console.log('completedLesson:', completedLesson);
      console.log('lesson:', lesson);
      return lesson?.name;
    });

  return (
    <div className="completed-lesson">
      <h1>Completed Lessons</h1>
      <ul>
        {completedLessonNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
