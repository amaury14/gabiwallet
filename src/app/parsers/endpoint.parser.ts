export class EndpointParser {
    public static parse<T>(url: string, config: T): string {
        const [base, endpoint] = url.split('|');

        const baseUrl = base
            .split('.')
            .reduce((prev, curr) => (prev ? prev[curr] : null), config);

        return `${baseUrl}${endpoint}`;
    }
}