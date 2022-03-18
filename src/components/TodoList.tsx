import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
} from "@chakra-ui/react";
import CompleteList from "./CompleteList";
import PendingList from "./PendingList";
import RemovedList from "./RemovedList";

const TodoList = () => {
	return (
		<Accordion mt="0" defaultIndex={[0]} allowToggle>
			<AccordionItem>
				<AccordionButton>Pending</AccordionButton>
				<AccordionPanel pl="0" pr="0">
					<PendingList />
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem defaultChecked>
				<AccordionButton>Completed</AccordionButton>
				<AccordionPanel pl="0" pr="0">
					<CompleteList />
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem defaultChecked>
				<AccordionButton>Removed</AccordionButton>
				<AccordionPanel pl="0" pr="0">
					<RemovedList />
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default TodoList;
