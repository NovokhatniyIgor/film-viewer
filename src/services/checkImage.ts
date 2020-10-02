export function checkImage(w: number, h: number, src?: string) {
	if(src) {
		return `https://image.tmdb.org/t/p/w${w}${src}`
	}
	return `http://placehold.jp/eeeeee/cccccc/${w}x${h}.png?text=No%20Image`
};