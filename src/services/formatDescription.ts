export function formatDescription(stringToFormat: string) {
    const slicedString = stringToFormat.slice(0, 120);
    return stringToFormat.length > 100 ? slicedString + '...' : slicedString;
}
