import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
	ChangeEventHandler,
	FormEventHandler,
	useContext,
	useState,
} from "react";
import { Todo } from "../providers/TodoProvider";

const AddTodo = () => {
	const { addJob } = useContext(Todo);
	const [content, setContent] = useState<string>("");
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		addJob(content);
		setContent("");
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setContent(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl>
				<FormLabel fontSize="sm">Add Jobs</FormLabel>
				<Input
					placeholder="Type Jobs Here..."
					value={content}
					onChange={handleChange}
				/>
			</FormControl>
		</form>
	);
};

export default AddTodo;
