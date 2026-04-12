/**
 * Data Transfer Object utilized at the application layer to encapsulate the parameters required to initiate a scooter rental.
 * This structure explicitly decouples the input format from the internal domain models.
 *
 * @interface IRentRequestDTO
 */
export interface IRentRequestDTO {
    /**
     * The unique identifier of the user who is requesting to initiate the rental transaction.
     * Must be a valid, authenticated user ID recognized by the system.
     *
     * @type {string}
     * @memberof IRentRequestDTO
     */
    requestingUserId: string;

    /**
     * The unique identifier of the specific scooter the user wishes to rent.
     * The system must verify this scooter is currently unrented and operational.
     *
     * @type {string}
     * @memberof IRentRequestDTO
     */
    targetScooterId: string;

    /**
     * The current latitude coordinate of the user's mobile device at the time of the request.
     * Utilized optionally to verify physical proximity to the target scooter before unlocking.
     *
     * @type {number}
     * @memberof IRentRequestDTO
     */
    userCurrentLatitude: number;

    /**
     * The current longitude coordinate of the user's mobile device at the time of the request.
     * Utilized optionally to verify physical proximity to the target scooter before unlocking.
     *
     * @type {number}
     * @memberof IRentRequestDTO
     */
    userCurrentLongitude: number;
}
