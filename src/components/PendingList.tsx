import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Todo } from "../providers/TodoProvider";
import TodoItem from "./TodoItem";

const PendingList = () => {
	const { jobs } = useContext(Todo);
	return (
		<VStack w="100%" spacing="1">
			{jobs
				.filter((job) => !job.completed && !job.removed)
				.map((job) => (
					<TodoItem key={job.id} job={job} />
				))}
		</VStack>
	);
};

export default PendingList;
