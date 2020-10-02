import {IActorInformation, IMovie} from "../../types";
import {RouteComponentProps} from "react-router";

export interface IActorListOfMovies {
	movies?: IMovie[];
}

export interface IActorDetailsRender {
	actorDetails?: IActorInformation;
}

type TParams = { id?: string };
export interface IActorDetails extends RouteComponentProps<TParams> {}

