import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const Logo = () => {
	const TEXTS = [" Todo", "'s Minh Thang", " Todo", "'s thangved"];

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Heading pt="5" pb="5">
			<Flex>
				App
				<TextTransition
					text={TEXTS[index % TEXTS.length]}
					springConfig={presets.slow}
				/>
			</Flex>
		</Heading>
	);
};

export default Logo;
