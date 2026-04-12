/**
 * Data Transfer Object utilized at the application layer to encapsulate the results of a scooter rental or return operation.
 * Formatted specifically for consumption by presentation controllers without exposing internal domain logic.
 *
 * @interface IReturnResponseDTO
 */
export interface IReturnResponseDTO {
    /**
     * A boolean flag indicating whether the rental or return operation was processed successfully without errors.
     *
     * @type {boolean}
     * @memberof IReturnResponseDTO
     */
    isOperationSuccessful: boolean;

    /**
     * The unique identifier of the ride session that was either initiated or terminated.
     * Essential for the client to track the session state.
     *
     * @type {string}
     * @memberof IReturnResponseDTO
     */
    activeRideId: string;

    /**
     * A human-readable message summarizing the outcome of the operation.
     * Examples: "Scooter successfully unlocked", "Ride terminated, total distance: 2.4km".
     *
     * @type {string}
     * @memberof IReturnResponseDTO
     */
    statusMessage: string;

    /**
     * If the operation was a return, this holds the final calculated distance of the ride in kilometers.
     * If the operation was a rental initiation, this will be undefined or null.
     *
     * @type {number | undefined}
     * @memberof IReturnResponseDTO
     */
    totalDistanceTraveledKilometers?: number;

    /**
     * A timestamp representing the exact moment the server completed processing the request.
     * Useful for client-side synchronization and latency tracking.
     *
     * @type {Date}
     * @memberof IReturnResponseDTO
     */
    serverProcessingTimestamp: Date;
}
