import { GreetProps } from "./greet.types";

const Greet = (props: GreetProps) => {
	return <div>hello {props.name ? props.name : "Hi there"}</div>;
};

export default Greet;
