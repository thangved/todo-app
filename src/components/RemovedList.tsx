import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Todo } from "../providers/TodoProvider";
import TodoItem from "./TodoItem";

const RemovedList = () => {
	const { jobs } = useContext(Todo);
	return (
		<VStack w="100%" spacing="1">
			{jobs
				.filter((job) => job.removed)
				.map((job) => (
					<TodoItem key={job.id} job={job} />
				))}
		</VStack>
	);
};

export default RemovedList;
