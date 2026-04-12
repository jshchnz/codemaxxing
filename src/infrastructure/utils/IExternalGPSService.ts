/**
 * Defines a contract for communicating with third-party geolocation or satellite positioning APIs.
 * This service is utilized to verify scooter locations independently of the scooter's internal hardware.
 *
 * @interface IExternalGPSService
 */
export interface IExternalGPSService {
    /**
     * Polls the external satellite or cellular triangulation network to determine the exact coordinates of a specific hardware module.
     *
     * @param {string} hardwareSerialNumber - The manufacturer's serial number of the module to track.
     * @returns {Promise<{ latitude: number; longitude: number; accuracyMeters: number }>} A promise resolving to an object containing the coordinates and the estimated margin of error.
     * @memberof IExternalGPSService
     */
    pingDeviceLocation(hardwareSerialNumber: string): Promise<{ latitude: number; longitude: number; accuracyMeters: number }>;

    /**
     * Calculates the estimated physical distance between two distinct geographic coordinates over the surface of the earth.
     * Typically utilizes the Haversine formula or a more complex routing API.
     *
     * @param {number} startLat - The starting latitude.
     * @param {number} startLon - The starting longitude.
     * @param {number} endLat - The destination latitude.
     * @param {number} endLon - The destination longitude.
     * @returns {Promise<number>} A promise resolving to the calculated distance in kilometers.
     * @memberof IExternalGPSService
     */
    calculateDistanceBetweenPoints(startLat: number, startLon: number, endLat: number, endLon: number): Promise<number>;
}
