/**
 * Represents a single instance of a scooter rental transaction from start to finish.
 * The Ride entity records the temporal and spatial data of the event.
 *
 * @interface IRide
 */
export interface IRide {
    /**
     * The unique, immutable identifier for this specific ride event.
     * Serves as the primary key for all ride-related queries and analytics.
     *
     * @type {string}
     * @memberof IRide
     */
    rideId: string;

    /**
     * The unique identifier of the user who initiated and holds responsibility for this ride.
     *
     * @type {string}
     * @memberof IRide
     */
    userId: string;

    /**
     * The unique identifier of the scooter utilized during this ride.
     *
     * @type {string}
     * @memberof IRide
     */
    scooterId: string;

    /**
     * The exact date and time when the ride was officially initiated by the user.
     * Captured in ISO 8601 format to ensure global timezone consistency.
     *
     * @type {Date}
     * @memberof IRide
     */
    startTimeStamp: Date;

    /**
     * The exact date and time when the ride was officially terminated by the user.
     * Will be null if the ride is currently in progress.
     *
     * @type {Date | null}
     * @memberof IRide
     */
    endTimeStamp: Date | null;

    /**
     * The geographic latitude coordinate recorded at the exact moment the ride commenced.
     *
     * @type {number}
     * @memberof IRide
     */
    startLatitude: number;

    /**
     * The geographic longitude coordinate recorded at the exact moment the ride commenced.
     *
     * @type {number}
     * @memberof IRide
     */
    startLongitude: number;

    /**
     * The total distance covered during this specific ride, measured in kilometers.
     * Updated continuously for active rides, finalized upon ride termination.
     *
     * @type {number}
     * @memberof IRide
     */
    distanceTraveledKilometers: number;
}
