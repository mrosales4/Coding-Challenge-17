//U22978120

import React, { useState } from 'react';
import FancyText from './FancyText';
import tasks from './tasks';

const TaskGenerator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const currentTask = tasks[currentIndex];

  const motivationalMessages = [
    "You've got this! One step at a time.",
    "Focus on the progress, not the perfection.",
    "Believe in yourself and your abilities.",
    // I could have added more motivational messages here
  ];

  const randomMotivation = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div>
      <FancyText title="Current Task">
        {currentTask.name} {currentTask.isCompleted ? '✔' : 'Pending'}
      </FancyText>
      <FancyText text={randomMotivation} />
      <button onClick={handleNextTask}>Next Task</button>
    </div>
  );
};

export default TaskGenerator;
