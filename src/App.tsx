import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/TodoProvider";
import Logo from "./components/Logo";

export const App = () => (
	<ChakraProvider theme={theme}>
		<TodoProvider>
			<Container>
				<Logo />
				<AddTodo />
				<TodoList />
			</Container>
		</TodoProvider>
	</ChakraProvider>
);
