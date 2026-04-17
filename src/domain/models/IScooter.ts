/**
 * Represents the fundamental domain entity of a Scooter within the Corporate Fleet Management System.
 * This interface encapsulates all the essential properties that define a scooter's state and identity
 * in the context of our enterprise architecture.
 *
 * @interface IScooter
 */
export interface IScooter {
    /**
     * The unique, immutable identifier for the scooter instance.
     * This ID is used consistently across all layers of the application to reference this specific vehicle.
     *
     * @type {string}
     * @memberof IScooter
     */
    id: string;

    /**
     * The manufacturer's serial number or hardware identification string.
     * Essential for tracking the physical asset and cross-referencing with external hardware systems.
     *
     * @type {string}
     * @memberof IScooter
     */
    hardwareSerialNumber: string;

    /**
     * The current battery level of the scooter, represented as a percentage from 0.0 to 100.0.
     * Critical for determining if the scooter is eligible for rental or requires immediate maintenance.
     *
     * @type {number}
     * @memberof IScooter
     */
    batteryLevelPercentage: number;

    /**
     * The current geographical latitude of the scooter, typically provided by the onboard GPS module.
     * Used in conjunction with longitude to pinpoint the exact location of the asset in the real world.
     *
     * @type {number}
     * @memberof IScooter
     */
    currentLatitude: number;

    /**
     * The current geographical longitude of the scooter, typically provided by the onboard GPS module.
     * Used in conjunction with latitude to pinpoint the exact location of the asset in the real world.
     *
     * @type {number}
     * @memberof IScooter
     */
    currentLongitude: number;

    /**
     * Indicates the operational status of the scooter.
     * True means the scooter is actively being used or is ready for use; false indicates it is out of service.
     *
     * @type {boolean}
     * @memberof IScooter
     */
    isOperational: boolean;

    /**
     * A flag determining whether the scooter is currently rented out by an active user.
     * This state must be synchronized meticulously to prevent double-booking anomalies.
     *
     * @type {boolean}
     * @memberof IScooter
     */
    isCurrentlyRented: boolean;

    /**
     * The total accumulated distance this scooter has traveled since its initial deployment.
     * Calculated in kilometers (km) and utilized heavily for scheduling predictive maintenance.
     *
     * @type {number}
     * @memberof IScooter
     */
    totalDistanceTraveledKilometers: number;
}
