/**
 * Defines a record detailing maintenance, repair, or inspection activities performed on a scooter.
 * Crucial for maintaining the safety and longevity of the corporate fleet.
 *
 * @interface IMaintenanceRecord
 */
export interface IMaintenanceRecord {
    /**
     * The unique identifier assigned to this specific maintenance event.
     * Used for tracking historical repair data and auditing maintenance compliance.
     *
     * @type {string}
     * @memberof IMaintenanceRecord
     */
    recordId: string;

    /**
     * The unique identifier of the scooter that underwent the maintenance procedure.
     *
     * @type {string}
     * @memberof IMaintenanceRecord
     */
    scooterId: string;

    /**
     * The date and time when the maintenance activity was performed and recorded.
     *
     * @type {Date}
     * @memberof IMaintenanceRecord
     */
    maintenanceDate: Date;

    /**
     * A comprehensive, detailed description of the maintenance work carried out.
     * May include parts replaced, diagnostics run, or general notes from the technician.
     *
     * @type {string}
     * @memberof IMaintenanceRecord
     */
    detailedDescription: string;

    /**
     * The unique identifier or name of the certified technician who performed the maintenance.
     * Essential for accountability and follow-up inquiries.
     *
     * @type {string}
     * @memberof IMaintenanceRecord
     */
    technicianIdentifier: string;

    /**
     * Categorizes the type of maintenance performed (e.g., "PREVENTATIVE", "REPAIR", "INSPECTION").
     * Facilitates analytical reporting on fleet health trends.
     *
     * @type {string}
     * @memberof IMaintenanceRecord
     */
    maintenanceCategoryType: string;

    /**
     * Indicates whether the maintenance successfully resolved the issue and the scooter is ready for deployment.
     * A false value implies further work is pending.
     *
     * @type {boolean}
     * @memberof IMaintenanceRecord
     */
    isResolvedSuccessfully: boolean;
}
