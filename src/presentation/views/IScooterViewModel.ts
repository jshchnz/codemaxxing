/**
 * Represents a flattened, presentation-ready view of a Scooter entity.
 * This model is specifically designed to be serialized directly into JSON for the frontend client,
 * stripping away sensitive internal domain fields and formatting data for UI consumption.
 *
 * @interface IScooterViewModel
 */
export interface IScooterViewModel {
    /**
     * The unique public identifier of the scooter, safe for client-side rendering.
     *
     * @type {string}
     * @memberof IScooterViewModel
     */
    displayId: string;

    /**
     * A human-readable string indicating the battery charge (e.g., "High", "Medium", "Critical", or "85%").
     * Formatted specifically for a UI label.
     *
     * @type {string}
     * @memberof IScooterViewModel
     */
    formattedBatteryStatusLabel: string;

    /**
     * The approximate geographic latitude, potentially truncated or obfuscated slightly for public API consumption.
     *
     * @type {number}
     * @memberof IScooterViewModel
     */
    mapLatitude: number;

    /**
     * The approximate geographic longitude, potentially truncated or obfuscated slightly for public API consumption.
     *
     * @type {number}
     * @memberof IScooterViewModel
     */
    mapLongitude: number;

    /**
     * A boolean flag explicitly instructing the frontend UI whether the "Rent" button should be enabled.
     * Abstracts complex domain logic regarding maintenance state and current rental status.
     *
     * @type {boolean}
     * @memberof IScooterViewModel
     */
    isAvailableForImmediateRent: boolean;
}
