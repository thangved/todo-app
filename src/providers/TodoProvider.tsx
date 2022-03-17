import React, { createContext, useEffect, useState } from "react";
import TJobs from "../types/TJobs";

type TTodoProvider = {
	jobs: TJobs;
	addJob: (name: string) => void;
	removeJob: (id: string) => void;
	completeJob: (id: string) => void;
	undoJob: (id: string) => void;
};
export const Todo = createContext<TTodoProvider>({
	jobs: [],
	addJob: (_name: string) => {},
	removeJob: (_id: string) => {},
	completeJob: (_id: string) => {},
	undoJob: (_id: string) => {},
});

const TodoProvider: React.FC = ({ children }) => {
	const [jobs, setJobs] = useState<TJobs>([]);

	const addJob = (name: string) => {
		if (!name.length) return;
		setJobs((prev: TJobs) => [
			{
				id: Math.random().toString(36).slice(4),
				name,
			},
			...prev,
		]);
	};

	const removeJob = (id: string) => {
		if (jobs.find((job) => job.removed && job.id === id))
			return setJobs((prev) => [...prev.filter((job) => job.id !== id)]);

		setJobs((prev: TJobs) => [
			...prev.map((job) => ({
				...job,
				removed: job.removed || (id === job.id && true),
			})),
		]);
	};

	const completeJob = (id: string) => {
		setJobs((prev: TJobs) => [
			...prev.map((job) => ({
				...job,
				completed: job.completed || (job.id === id && true),
			})),
		]);
	};

	const undoJob = (id: string) => {
		setJobs((prev) => [
			...prev.map((job) => ({
				...job,
				completed: id === job.id ? false : job.completed,
				removed: id === job.id ? false : job.removed,
			})),
		]);
	};

	useEffect(() => {
		setJobs(JSON.parse(localStorage.getItem("jobs") || "[]") as TJobs);
	}, []);

	useEffect(() => {
		localStorage.setItem("jobs", JSON.stringify(jobs));
	}, [jobs]);

	return (
		<Todo.Provider
			value={{ jobs, addJob, removeJob, completeJob, undoJob }}
		>
			{children}
		</Todo.Provider>
	);
};

export default TodoProvider;
