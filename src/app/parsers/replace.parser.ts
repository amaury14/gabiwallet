import { GenericObject } from '../models';

export class ReplaceParser {
    /**
     * Replaces text in a string, using a regular expression or search string
     *
     * @param source Initial string to replace
     * @param searchValue Text or regular expression to search for
     * @param replaceValue String containing the text that will replace the searchValue
     */
    static replace(source: string, searchValue: string | RegExp, replaceValue: string): string {
        return source.replace(searchValue, replaceValue);
    }

    /**
     * Replace the specified keys of an object using provided transform functions
     *
     * @param source Generic object with some keys
     * @param searchDictionary Dictionary with the keys that need to be replaced
     * and function that will be used to transform that value
     */
    static replaceInObject<T>(source: GenericObject | T, searchDictionary: GenericObject): T {
        const keys = Object.keys(searchDictionary);
        keys.forEach(key => {
            if (searchDictionary.hasOwnProperty(key) && !!source[key]) {
                source[key] = searchDictionary[key](source[key]);
            }
        });
        return source as T;
    }
}