import type { IReturnResponseDTO } from '../models/IReturnResponseDTO.js';

/**
 * Encapsulates the application logic required to process a user's request to conclude a scooter rental.
 * This use case handles the finalization of the ride record, state updates to the scooter, and triggering any post-ride analytics.
 *
 * @interface IReturnScooterUseCase
 */
export interface IReturnScooterUseCase {
    /**
     * Executes the business logic to securely finalize an active scooter rental session.
     * This method must calculate the final distance, update the scooter's location and availability status, and persist the completed ride.
     *
     * @param {string} rideId - The unique identifier of the active ride session that the user wishes to terminate.
     * @param {number} finalLatitude - The geographic latitude coordinate recorded at the exact moment of return.
     * @param {number} finalLongitude - The geographic longitude coordinate recorded at the exact moment of return.
     * @returns {Promise<IReturnResponseDTO>} A promise resolving to a detailed summary of the finalized rental.
     * @memberof IReturnScooterUseCase
     */
    execute(rideId: string, finalLatitude: number, finalLongitude: number): Promise<IReturnResponseDTO>;
}
