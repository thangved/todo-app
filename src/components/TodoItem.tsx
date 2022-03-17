import { CheckIcon, DeleteIcon, RepeatIcon } from "@chakra-ui/icons";
import { Button, Flex, ScaleFade, Text, Tooltip } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Todo } from "../providers/TodoProvider";
import TJob from "../types/TJob";

type todoItemProps = {
	job: TJob;
};

const TodoItem: React.FC<todoItemProps> = ({ job }) => {
	const { removeJob, completeJob, undoJob } = useContext(Todo);

	const [isOpen, setIsOpen] = useState<boolean>(true);

	const handler = (cb: () => void) => {
		setIsOpen(false);
		setTimeout(cb, 200);
	};

	return (
		<ScaleFade
			in={isOpen}
			style={{
				width: "100%",
			}}
		>
			<Flex p="2" bg="gray.100" borderRadius="10px" alignItems="center">
				<Text flex="1" pl="4">
					{job.name}
				</Text>
				{(job.completed || job.removed) && (
					<Tooltip label="Undo">
						<Button
							color="gray"
							onClick={() => handler(() => undoJob(job.id))}
						>
							<RepeatIcon />
						</Button>
					</Tooltip>
				)}
				{!job.completed && !job.removed && (
					<Tooltip label="Complete">
						<Button
							color="green.400"
							onClick={() => handler(() => completeJob(job.id))}
						>
							<CheckIcon />
						</Button>
					</Tooltip>
				)}
				<Tooltip label={job.removed ? "Delete" : "Remove"}>
					<Button
						ml="2"
						color="red.400"
						onClick={() => handler(() => removeJob(job.id))}
					>
						<DeleteIcon />
					</Button>
				</Tooltip>
			</Flex>
		</ScaleFade>
	);
};

export default TodoItem;
