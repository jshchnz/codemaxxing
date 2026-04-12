/**
 * Defines a generalized contract for establishing, utilizing, and terminating connections to the primary data store.
 * This abstracts away specific ORM or database driver logic from the repositories.
 *
 * @interface IDatabaseConnection
 */
export interface IDatabaseConnection {
    /**
     * Initializes the connection pool or network socket to the configured underlying database system.
     * Must be called during application bootstrap before any repository operations occur.
     *
     * @returns {Promise<void>} A promise that resolves when the connection is established and verified.
     * @memberof IDatabaseConnection
     */
    initializeConnection(): Promise<void>;

    /**
     * Executes a raw parameterized query directly against the data store.
     * Should only be used for complex aggregations or migrations that bypass standard ORM workflows.
     *
     * @param {string} queryString - The raw SQL or query language string to execute.
     * @param {any[]} parameters - An array of sanitized parameters to inject into the query to prevent injection attacks.
     * @returns {Promise<any>} A promise resolving to the raw result set returned by the database driver.
     * @memberof IDatabaseConnection
     */
    executeParameterizedQuery(queryString: string, parameters: any[]): Promise<any>;

    /**
     * Gracefully terminates all active connections in the pool and shuts down network sockets.
     * Essential for clean application teardown and preventing zombie processes.
     *
     * @returns {Promise<void>} A promise that resolves when all connections have been cleanly severed.
     * @memberof IDatabaseConnection
     */
    terminateConnectionGracefully(): Promise<void>;
}
