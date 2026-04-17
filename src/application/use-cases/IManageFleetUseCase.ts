import type { IFleet } from '../../domain/models/IFleet.js';

/**
 * Defines the application-level operations for administrative management of scooter fleets.
 * This use case handles higher-level orchestration such as rebalancing, auditing, and structural modifications to the fleet configuration.
 *
 * @interface IManageFleetUseCase
 */
export interface IManageFleetUseCase {
    /**
     * Executes logic to logically group a set of independent scooters into a designated fleet structure.
     * This may involve cross-referencing maximum capacity rules and regional assignment validations.
     *
     * @param {string} fleetName - The proposed designation name for the new fleet aggregate.
     * @param {string} regionalZone - The assigned geographic operating zone for the fleet.
     * @returns {Promise<IFleet>} A promise resolving to the newly constructed and persisted Fleet domain entity.
     * @memberof IManageFleetUseCase
     */
    createOperationalFleet(fleetName: string, regionalZone: string): Promise<IFleet>;

    /**
     * Reassigns an existing, operational scooter from one fleet to another, or from an unassigned pool into a specific fleet.
     * Must validate the target fleet's capacity and the scooter.js's current operational status before proceeding.
     *
     * @param {string} scooterId - The unique identifier of the scooter to be transferred.
     * @param {string} targetFleetId - The unique identifier of the fleet designated to receive the scooter.
     * @returns {Promise<void>} A promise that resolves when the reallocation transaction is complete.
     * @memberof IManageFleetUseCase
     */
    reallocateScooterToFleet(scooterId: string, targetFleetId: string): Promise<void>;
}
