import type { IScooter } from '../../domain/models/IScooter.js';

/**
 * Defines the contract for data persistence mechanisms relating specifically to Scooter domain entities.
 * Implementations of this interface in the infrastructure layer handle the actual database interactions.
 *
 * @interface IScooterRepository
 */
export interface IScooterRepository {
    /**
     * Retrieves a single scooter entity from the persistence layer using its unique identifier.
     *
     * @param {string} scooterId - The exact, immutable UUID of the desired scooter.
     * @returns {Promise<IScooter | null>} A promise that resolves to the scooter domain object if found, or null if no such record exists.
     * @memberof IScooterRepository
     */
    findScooterById(scooterId: string): Promise<IScooter | null>;

    /**
     * Persists a newly created or recently modified scooter entity into the underlying data store.
     * Must handle both insert operations for new entities and update operations for existing ones.
     *
     * @param {IScooter} scooterData - The comprehensive domain entity containing the scooter's current state.
     * @returns {Promise<void>} A promise that resolves upon successful transaction commit.
     * @memberof IScooterRepository
     */
    saveOrUpdateScooter(scooterData: IScooter): Promise<void>;

    /**
     * Retrieves an array of all scooters that are currently flagged as non-operational or require maintenance.
     * Highly utilized by the Fleet Management administrative dashboard.
     *
     * @returns {Promise<IScooter[]>} A promise resolving to a collection of scooters needing attention.
     * @memberof IScooterRepository
     */
    findAllScootersRequiringMaintenance(): Promise<IScooter[]>;
}
