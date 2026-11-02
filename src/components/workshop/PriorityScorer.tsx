import { useId, useState, type FormEvent } from "react";
import { exampleTasks, rankTasks, taskScore, type ScoredTask } from "@/data/claudeWorkshop";

const criteria = [
  { key: "career", label: "Career" },
  { key: "joy", label: "Joy" },
  { key: "urgency", label: "Urgency" },
] as const;

/** Illustrative Career + Joy + Urgency ranking. State lives in memory only. */
const PriorityScorer = () => {
  const [tasks, setTasks] = useState<ScoredTask[]>(exampleTasks);
  const [draft, setDraft] = useState("");
  const [nextId, setNextId] = useState(1);
  const inputId = useId();

  const setScore = (id: string, key: (typeof criteria)[number]["key"], value: number) =>
    setTasks((all) => all.map((t) => (t.id === id ? { ...t, [key]: value } : t)));

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setTasks((all) => [...all, { id: `new-${nextId}`, title, career: 3, joy: 3, urgency: 3 }]);
    setNextId((n) => n + 1);
    setDraft("");
  };

  return (
    <div className="scorer">
      <ol className="scorer__list" aria-label="Tasks ranked by total score">
        {rankTasks(tasks).map((task, index) => (
          <li key={task.id} className="scorer__task">
            <div className="scorer__head">
              <span className="scorer__rank" aria-hidden="true">{index + 1}</span>
              <h4 className="scorer__title">{task.title}</h4>
              <span className="scorer__total">
                {taskScore(task)}<span className="scorer__of">/15</span>
              </span>
              <button
                type="button"
                className="scorer__remove"
                onClick={() => setTasks((all) => all.filter((t) => t.id !== task.id))}
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Remove “{task.title}”</span>
              </button>
            </div>
            <div className="scorer__sliders">
              {criteria.map((c) => (
                <label key={c.key} className="scorer__slider">
                  <span>{c.label} <strong>{task[c.key]}</strong></span>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    step={1}
                    value={task[c.key]}
                    aria-label={`${c.label} for ${task.title}`}
                    onChange={(e) => setScore(task.id, c.key, Number(e.target.value))}
                  />
                </label>
              ))}
            </div>
          </li>
        ))}
      </ol>
      {tasks.length === 0 && <p className="muted">No tasks yet. Add one below.</p>}
      <form className="scorer__add" onSubmit={addTask}>
        <label htmlFor={inputId} className="sr-only">New task</label>
        <input
          id={inputId}
          value={draft}
          maxLength={120}
          placeholder="Add one of your own tasks"
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="submit" className="btn btn--small">Add task</button>
        <button type="button" className="link-button" onClick={() => setTasks(exampleTasks)}>Reset examples</button>
      </form>
    </div>
  );
};

export default PriorityScorer;
