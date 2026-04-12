import type { IApiResponse } from '../models/IApiResponse.js';

/**
 * Defines the presentation contract for administrative HTTP endpoints dealing with fleet management.
 * Restricted to authorized personnel via middleware layers.
 *
 * @interface IFleetController
 */
export interface IFleetController {
    /**
     * Handles an incoming administrative request to provision a brand new logical fleet within the system.
     *
     * @param {string} proposedFleetName - The name requested for the new fleet.
     * @param {string} regionalZone - The geographic zone the fleet will operate within.
     * @returns {Promise<IApiResponse>} A standardized HTTP response confirming creation and containing the new fleet's data.
     * @memberof IFleetController
     */
    handleCreateFleetRequest(proposedFleetName: string, regionalZone: string): Promise<IApiResponse>;

    /**
     * Handles an incoming request to fetch the current operational status of all fleets globally or within a specific zone.
     *
     * @param {string} [optionalZoneFilter] - An optional query parameter to restrict the view to a specific region.
     * @returns {Promise<IApiResponse>} A standardized HTTP response containing aggregated fleet metrics.
     * @memberof IFleetController
     */
    handleGetFleetStatusOverview(optionalZoneFilter?: string): Promise<IApiResponse>;
}
