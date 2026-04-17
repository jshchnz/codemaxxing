import type { IUser } from '../../domain/models/IUser.js';

/**
 * Defines the contract for data persistence mechanisms relating specifically to User domain entities.
 * Abstracts the complexity of querying the corporate Active Directory or relational user tables.
 *
 * @interface IUserRepository
 */
export interface IUserRepository {
    /**
     * Retrieves a single user entity from the persistence layer using their unique internal identifier.
     *
     * @param {string} userId - The exact, immutable UUID of the target user.
     * @returns {Promise<IUser | null>} A promise that resolves to the user domain object if found, or null if the user does not exist.
     * @memberof IUserRepository
     */
    findUserById(userId: string): Promise<IUser | null>;

    /**
     * Retrieves a single user entity by querying against their registered corporate email address.
     * Often used during the initial authentication or SSO login flow.
     *
     * @param {string} emailAddress - The full corporate email string to search for.
     * @returns {Promise<IUser | null>} A promise that resolves to the user domain object if a match is found, or null otherwise.
     * @memberof IUserRepository
     */
    findUserByCorporateEmail(emailAddress: string): Promise<IUser | null>;

    /**
     * Updates an existing user's record in the persistence layer.
     * Common updates include modifying authorization roles or suspending an active account.
     *
     * @param {IUser} userData - The comprehensive domain entity containing the user's updated state.
     * @returns {Promise<void>} A promise that resolves upon successful transaction commit.
     * @memberof IUserRepository
     */
    updateUserRecord(userData: IUser): Promise<void>;
}
