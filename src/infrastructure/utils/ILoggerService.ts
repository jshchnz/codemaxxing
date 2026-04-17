/**
 * Defines a standardized contract for recording system events, errors, and informational traces.
 * Implementations might write to local files, stdout, or push to an external log aggregation service (e.g., Datadog, ELK).
 *
 * @interface ILoggerService
 */
export interface ILoggerService {
    /**
     * Records an informational message indicating normal, expected system operation.
     * Useful for tracing request lifecycles.
     *
     * @param {string} messageContext - The primary human-readable message.
     * @param {Record<string, any>} [metadataPayload] - Optional JSON-serializable object containing contextual data (e.g., user IDs, request IDs).
     * @memberof ILoggerService
     */
    logInformation(messageContext: string, metadataPayload?: Record<string, any>): void;

    /**
     * Records a potentially harmful situation that does not strictly prevent the system from operating.
     * Indicates that something unexpected occurred and should be monitored.
     *
     * @param {string} warningMessage - The primary warning description.
     * @param {Record<string, any>} [metadataPayload] - Optional contextual data.
     * @memberof ILoggerService
     */
    logWarning(warningMessage: string, metadataPayload?: Record<string, any>): void;

    /**
     * Records a critical failure or unhandled exception that has disrupted standard application flow.
     * Usually triggers immediate alerts to the engineering or DevOps teams.
     *
     * @param {string} errorMessage - A concise description of the failure.
     * @param {Error} exceptionObject - The native JavaScript Error object containing the stack trace.
     * @param {Record<string, any>} [metadataPayload] - Optional contextual data.
     * @memberof ILoggerService
     */
    logErrorEvent(errorMessage: string, exceptionObject: Error, metadataPayload?: Record<string, any>): void;
}
