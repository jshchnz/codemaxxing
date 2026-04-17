/**
 * Defines a logically grouped collection of scooters managed as a single organizational unit.
 * Fleets can represent scooters stationed at a particular corporate campus or assigned to a specific tier.
 *
 * @interface IFleet
 */
export interface IFleet {
    /**
     * The unique, authoritative identifier for this specific fleet aggregate.
     * Crucial for associating multiple scooters under one operational umbrella.
     *
     * @type {string}
     * @memberof IFleet
     */
    fleetId: string;

    /**
     * A human-readable, descriptive name assigned to the fleet for administrative ease.
     * Examples: "Headquarters Alpha Fleet", "Warehouse Logistics Fleet".
     *
     * @type {string}
     * @memberof IFleet
     */
    fleetDesignationName: string;

    /**
     * The geographic region or campus identifier where this fleet is officially stationed.
     * Used to restrict scooter usage or optimize maintenance dispatching.
     *
     * @type {string}
     * @memberof IFleet
     */
    assignedOperatingRegion: string;

    /**
     * The maximum number of scooters that are authorized to be part of this specific fleet at any given time.
     * Enforced to maintain balanced distribution across corporate resources.
     *
     * @type {number}
     * @memberof IFleet
     */
    maximumAuthorizedCapacity: number;

    /**
     * The array of unique scooter identifiers currently assigned to and operating under this fleet.
     * Provides immediate reference to the assets comprising the fleet.
     *
     * @type {string[]}
     * @memberof IFleet
     */
    associatedScooterIds: string[];
}
