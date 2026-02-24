
"use client";
import React, { useState, useEffect } from "react";

export default function AdminTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "", required: true, link: "" });
  const [editTask, setEditTask] = useState(null);

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
    setNewTask({ name: "", description: "", required: true, link: "" });
    fetch("/api/tasks").then(res => res.json()).then(setTasks);
  };

  const startEdit = (task) => setEditTask({ ...task });
  const cancelEdit = () => setEditTask(null);
  const saveEdit = async () => {
    await fetch(`/api/tasks`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editTask),
    });
    setEditTask(null);
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
    <div style={{ marginBottom: 32, width: '100%', minWidth: 0 }}>
      <h3 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 16 }}>Whitelist Tasks</h3>
      <ul style={{ marginBottom: 16, padding: 0, width: '100%' }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: 8, listStyle: 'none', width: '100%' }}>
            {editTask && editTask.id === task.id ? (
              <>
                <input
                  type="text"
                  value={editTask.name}
                  onChange={e => setEditTask({ ...editTask, name: e.target.value })}
                  style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc", marginRight: 4 }}
                />
                <input
                  type="text"
                  value={editTask.description}
                  onChange={e => setEditTask({ ...editTask, description: e.target.value })}
                  style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc", marginRight: 4 }}
                />
                <input
                  type="text"
                  value={editTask.link || ""}
                  onChange={e => setEditTask({ ...editTask, link: e.target.value })}
                  placeholder="Task link (optional)"
                  style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc", marginRight: 4 }}
                />
                <select
                  value={editTask.required ? "true" : "false"}
                  onChange={e => setEditTask({ ...editTask, required: e.target.value === "true" })}
                  style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc", marginRight: 4 }}
                >
                  <option value="true">Required</option>
                  <option value="false">Optional</option>
                </select>
                <button onClick={saveEdit} style={{ marginLeft: 4, color: "#2ec4b6" }}>Save</button>
                <button onClick={cancelEdit} style={{ marginLeft: 4, color: "#aaa" }}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ fontWeight: 600 }}>{task.name}</span> - {task.description || "No description"}
                {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: "#2ec4b6" }}>Task Link</a>}
                <span style={{ marginLeft: 12, color: task.required ? "#2ec4b6" : "#aaa" }}>
                  {task.required ? "Required" : "Optional"}
                </span>
                <button onClick={() => toggleRequired(task.id, !task.required)} style={{ marginLeft: 8 }}>Toggle</button>
                <button onClick={() => startEdit(task)} style={{ marginLeft: 8, color: "#007aff" }}>Edit</button>
                <button onClick={() => removeTask(task.id)} style={{ marginLeft: 8, color: "#ff595e" }}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 8, flexWrap: 'wrap', width: '100%' }}>
        <input
          type="text"
          placeholder="Task name"
          value={newTask.name}
          onChange={e => setNewTask({ ...newTask, name: e.target.value })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc", minWidth: 0, flex: 1 }}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={e => setNewTask({ ...newTask, description: e.target.value })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc", minWidth: 0, flex: 2 }}
        />
        <input
          type="text"
          placeholder="Task link (optional)"
          value={newTask.link}
          onChange={e => setNewTask({ ...newTask, link: e.target.value })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc", minWidth: 0, flex: 2 }}
        />
        <select
          value={newTask.required ? "true" : "false"}
          onChange={e => setNewTask({ ...newTask, required: e.target.value === "true" })}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc", minWidth: 0, flex: 1 }}
        >
          <option value="true">Required</option>
          <option value="false">Optional</option>
        </select>
        <button onClick={addTask} style={{ padding: 8, borderRadius: 6, background: "#2ec4b6", color: "#fff", fontWeight: 700, border: "none", minWidth: 0, flex: 1 }}>Add Task</button>
      </div>
    </div>
  );
}
