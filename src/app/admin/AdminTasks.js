"use client";
import { useState, useEffect } from "react";

export default function AdminTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "", required: true });

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  const addTask = async () => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    setNewTask({ name: "", description: "", required: true });
    fetch("/api/tasks").then(res => res.json()).then(setTasks);
  };

  const removeTask = async (id) => {
    await fetch(`/api/tasks?id=${id}`, { method: "DELETE" });
    fetch("/api/tasks").then(res => res.json()).then(setTasks);
  };

  const toggleRequired = async (id, required) => {
    await fetch(`/api/tasks`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, required }),
    });
    fetch("/api/tasks").then(res => res.json()).then(setTasks);
  };

  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 16 }}>Whitelist Tasks</h3>
      <ul style={{ marginBottom: 16 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <span style={{ fontWeight: 600 }}>{task.name}</span> - {task.description || "No description"}
            <span style={{ marginLeft: 12, color: task.required ? "#2ec4b6" : "#aaa" }}>
              {task.required ? "Required" : "Optional"}
            </span>
            <button onClick={() => toggleRequired(task.id, !task.required)} style={{ marginLeft: 8 }}>Toggle</button>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: 8, color: "#ff595e" }}>Remove</button>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Task name"
          value={newTask.name}
          onChange={e => setNewTask({ ...newTask, name: e.target.value })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={e => setNewTask({ ...newTask, description: e.target.value })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <select
          value={newTask.required ? "true" : "false"}
          onChange={e => setNewTask({ ...newTask, required: e.target.value === "true" })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        >
          <option value="true">Required</option>
          <option value="false">Optional</option>
        </select>
        <button onClick={addTask} style={{ padding: 8, borderRadius: 6, background: "#2ec4b6", color: "#fff", fontWeight: 700, border: "none" }}>Add Task</button>
      </div>
    </div>
  );
}
