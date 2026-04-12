/**
 * Represents a User within the Corporate Fleet Management System's domain layer.
 * A user is typically an employee authorized to interact with and rent scooters from the corporate fleet.
 *
 * @interface IUser
 */
export interface IUser {
    /**
     * The unique, persistent identifier associated with the user account.
     * This UUID ties the user to their rental history and permissions across the system.
     *
     * @type {string}
     * @memberof IUser
     */
    userId: string;

    /**
     * The corporate email address of the user, used for authentication and primary communication.
     * Must conform to the established corporate domain policy.
     *
     * @type {string}
     * @memberof IUser
     */
    corporateEmailAddress: string;

    /**
     * The full legal name of the employee as registered in the central Human Resources database.
     * Important for liability tracking and formal communications.
     *
     * @type {string}
     * @memberof IUser
     */
    fullName: string;

    /**
     * The specific department or division the user belongs to.
     * Useful for aggregating fleet usage statistics by internal corporate sectors.
     *
     * @type {string}
     * @memberof IUser
     */
    departmentName: string;

    /**
     * An enumeration or string identifying the user's role and authorization level regarding fleet access.
     * E.g., "STANDARD_USER", "FLEET_MANAGER", "SYSTEM_ADMIN".
     *
     * @type {string}
     * @memberof IUser
     */
    authorizationRole: string;

    /**
     * Indicates whether the user's account is currently active and permitted to rent scooters.
     * A suspended account (false) strictly prevents any new rental transactions.
     *
     * @type {boolean}
     * @memberof IUser
     */
    isActiveAccount: boolean;
}
