import type { IRentRequestDTO } from '../../application/models/IRentRequestDTO.js';
import type { IApiResponse } from '../models/IApiResponse.js';

/**
 * Defines the presentation contract for handling incoming HTTP requests related to scooter rental operations.
 * Controllers in this layer map external network protocols (REST/GraphQL) to internal application use cases.
 *
 * @interface IRentController
 */
export interface IRentController {
    /**
     * Handles an incoming request from a client attempting to initiate a new scooter rental.
     * The controller must parse the incoming network request, map it to the DTO, and invoke the appropriate use case.
     *
     * @param {IRentRequestDTO} incomingRequestPayload - The parsed and lightly validated JSON body from the client.
     * @returns {Promise<IApiResponse>} A standardized HTTP response structure containing the outcome of the rental attempt.
     * @memberof IRentController
     */
    handleInitiateRentalRequest(incomingRequestPayload: IRentRequestDTO): Promise<IApiResponse>;

    /**
     * Handles an incoming request from a client attempting to finalize and conclude an active scooter rental.
     *
     * @param {string} targetRideId - The unique identifier of the ride extracted from the URL path or query parameters.
     * @param {number} reportedLatitude - The latitude coordinate reported by the client device at termination.
     * @param {number} reportedLongitude - The longitude coordinate reported by the client device at termination.
     * @returns {Promise<IApiResponse>} A standardized HTTP response structure detailing the finalized ride metrics.
     * @memberof IRentController
     */
    handleTerminateRentalRequest(targetRideId: string, reportedLatitude: number, reportedLongitude: number): Promise<IApiResponse>;
}
