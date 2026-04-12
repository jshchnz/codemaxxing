/**
 * The universal, standardized wrapper for all HTTP responses emitted by the presentation layer.
 * Ensures that frontend clients can consistently parse payloads, handle errors, and read metadata.
 *
 * @interface IApiResponse
 */
export interface IApiResponse {
    /**
     * The standard HTTP status code corresponding to the outcome of the request (e.g., 200, 201, 400, 404, 500).
     *
     * @type {number}
     * @memberof IApiResponse
     */
    httpStatusCode: number;

    /**
     * A high-level string indicating overall success or failure ("success", "error", "fail").
     * Adheres to common JSON API specifications.
     *
     * @type {string}
     * @memberof IApiResponse
     */
    responseStatusTier: string;

    /**
     * The primary payload requested by the client.
     * Will be populated on success and typically null or undefined on failure.
     *
     * @type {any}
     * @memberof IApiResponse
     */
    responseDataPayload?: any;

    /**
     * An array of detailed error messages or validation failures.
     * Populated primarily when the responseStatusTier is "error" or "fail".
     *
     * @type {string[]}
     * @memberof IApiResponse
     */
    errorDetailsList?: string[];

    /**
     * Metadata related to pagination, caching, or tracing.
     * Injected by middleware just before the response is serialized.
     *
     * @type {Record<string, string | number>}
     * @memberof IApiResponse
     */
    responseMetadataAttributes?: Record<string, string | number>;
}
