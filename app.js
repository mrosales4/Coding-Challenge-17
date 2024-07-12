// U22978120

import React, { useState } from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import tasks from './tasks'; // Import tasks data
import './style.css'; // Import stylesheet (optional)

const App = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskCompletion = (taskId) => {
    setCompletedTasks((prevTasks) =>
      prevTasks.includes(taskId)
        ? prevTasks.filter((id) => id !== taskId) // Unmark completed
        : [...prevTasks, taskId] // Mark completed
    );
  };
