import type { IRentRequestDTO } from '../models/IRentRequestDTO.js';
import type { IReturnResponseDTO } from '../models/IReturnResponseDTO.js';

/**
 * Encapsulates the application logic required to process a user's request to rent a scooter.
 * This use case orchestrates domain validation, repository updates, and external service calls.
 *
 * @interface IRentScooterUseCase
 */
export interface IRentScooterUseCase {
    /**
     * Executes the complex business logic to securely and accurately assign a scooter to a user for a ride.
     * This method must ensure the scooter is available, the user is authorized, and state changes are persisted atomically.
     *
     * @param {IRentRequestDTO} requestPayload - The Data Transfer Object containing all necessary parameters to initiate a rental.
     * @returns {Promise<IReturnResponseDTO>} A promise resolving to a detailed response summarizing the successful initiation of the rental, or throwing a domain-specific error.
     * @memberof IRentScooterUseCase
     */
    execute(requestPayload: IRentRequestDTO): Promise<IReturnResponseDTO>;
}
