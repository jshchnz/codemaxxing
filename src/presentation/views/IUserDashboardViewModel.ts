import type { IScooterViewModel } from './IScooterViewModel.js';

/**
 * A composite presentation model aggregating various data points required to render the primary user dashboard.
 * Designed to minimize the number of distinct API calls the client must make upon logging in.
 *
 * @interface IUserDashboardViewModel
 */
export interface IUserDashboardViewModel {
    /**
     * A personalized greeting string formulated based on the user's profile and the current time of day.
     * (e.g., "Good morning, Andrea!").
     *
     * @type {string}
     * @memberof IUserDashboardViewModel
     */
    personalizedWelcomeGreeting: string;

    /**
     * The total count of active, unreturned rides currently associated with this user.
     * Usually 0 or 1 under standard business rules.
     *
     * @type {number}
     * @memberof IUserDashboardViewModel
     */
    activeRideCount: number;

    /**
     * An array of view models representing scooters physically located near the user's reported coordinates.
     * Pre-formatted for immediate rendering on the frontend map component.
     *
     * @type {IScooterViewModel[]}
     * @memberof IUserDashboardViewModel
     */
    nearbyAvailableScootersList: IScooterViewModel[];

    /**
     * A boolean flag instructing the UI whether to display a prominent alert banner (e.g., for unpaid balances or account suspension).
     *
     * @type {boolean}
     * @memberof IUserDashboardViewModel
     */
    requiresImmediateUserAction: boolean;
}
