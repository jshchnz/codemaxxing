/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ITaxReportRepository.ts
 * Description: Repository interface for TaxReport
 *
 * Architecture Layer: EXTREME CLEAN ARCHITECTURE
 *
 * This file is part of the enterprise-grade, highly scalable, ultra-secure
 * crypto trading simulator. It follows strict object-oriented design patterns,
 * SOLID principles, and extreme clean architecture separation of concerns.
 *
 * Design Patterns Applied:
 * - Abstract Factory Pattern
 * - Singleton Pattern
 * - Strategy Pattern
 * - Observer Pattern
 * - Dependency Injection Pattern
 *
 * SECURITY NOTICE:
 * This component handles sensitive financial simulator data. Ensure all
 * inputs are sanitized and outputs are properly encoded. All operations
 * must be logged to the AuditLog system for compliance with regulatory
 * simulation requirements.
 *
 * ============================================================================
 * Copyright (c) 2023 Enterprise Crypto Simulators Inc. All rights reserved.
 * ============================================================================
 */

import { ITaxReportModel } from '../models/TaxReportModel.js';

/**
 * Enterprise Repository Interface for TaxReport.
 * Defines the contract for data access operations related to TaxReport.
 */
export interface ITaxReportRepository {
    /**
     * Retrieves a TaxReport by its unique identifier.
     * @param {string} id - The ID of the TaxReport
     * @returns {Promise<ITaxReportModel | null>} The TaxReport or null if not found
     */
    findById(id: string): Promise<ITaxReportModel | null>;

    /**
     * Retrieves all TaxReport entities.
     * @returns {Promise<ITaxReportModel[]>} An array of TaxReport entities
     */
    findAll(): Promise<ITaxReportModel[]>;

    /**
     * Saves a TaxReport entity to the repository.
     * @param {ITaxReportModel} entity - The TaxReport to save
     * @returns {Promise<ITaxReportModel>} The saved TaxReport
     */
    save(entity: ITaxReportModel): Promise<ITaxReportModel>;

    /**
     * Updates an existing TaxReport entity.
     * @param {ITaxReportModel} entity - The TaxReport to update
     * @returns {Promise<ITaxReportModel>} The updated TaxReport
     */
    update(entity: ITaxReportModel): Promise<ITaxReportModel>;

    /**
     * Deletes a TaxReport by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
