import {GENRES_TYPES} from "services/genres";

export function getGenres(genreIds) {
	let genresStr = '';
	genreIds.map((item) => {
		genresStr = genresStr + GENRES_TYPES[item] + ', ';
	});
	return genresStr.substring(0, genresStr.length - 2);
}

export function prettifyDate(release_date) {
	if(!release_date) {
		return 'No data';
	}
	return `(${release_date.split('-')[0]})`;
}