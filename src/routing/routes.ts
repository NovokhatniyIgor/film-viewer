import { HomePage, ActorDetails, MovieDetails } from 'src/modules';
import * as React from "react";

interface IRoute {
	id: string;
	path: string;
	exact: boolean;
	Component: React.FC<any>;
}

const routes: IRoute[] = [
	{
		id: "1960ee84-d870-4996-85e9-3b8253e05081",
		path: "/",
		exact: true,
		Component: HomePage,
	},
	{
		id: "618c8d38-8e80-407b-8bb0-5f0b2ce6684e",
		path: "/movie/:id",
		exact: true,
		Component: MovieDetails,
	},
	{
		id: "1543dc49-e583-4db5-9585-57dfa45763ed",
		path: "/actor/:id",
		exact: true,
		Component: ActorDetails,
	}
];

export { routes };