/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IComplianceRecordRepository.ts
 * Description: Repository interface for ComplianceRecord
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

import { IComplianceRecordModel } from '../models/ComplianceRecordModel.js';

/**
 * Enterprise Repository Interface for ComplianceRecord.
 * Defines the contract for data access operations related to ComplianceRecord.
 */
export interface IComplianceRecordRepository {
    /**
     * Retrieves a ComplianceRecord by its unique identifier.
     * @param {string} id - The ID of the ComplianceRecord
     * @returns {Promise<IComplianceRecordModel | null>} The ComplianceRecord or null if not found
     */
    findById(id: string): Promise<IComplianceRecordModel | null>;

    /**
     * Retrieves all ComplianceRecord entities.
     * @returns {Promise<IComplianceRecordModel[]>} An array of ComplianceRecord entities
     */
    findAll(): Promise<IComplianceRecordModel[]>;

    /**
     * Saves a ComplianceRecord entity to the repository.
     * @param {IComplianceRecordModel} entity - The ComplianceRecord to save
     * @returns {Promise<IComplianceRecordModel>} The saved ComplianceRecord
     */
    save(entity: IComplianceRecordModel): Promise<IComplianceRecordModel>;

    /**
     * Updates an existing ComplianceRecord entity.
     * @param {IComplianceRecordModel} entity - The ComplianceRecord to update
     * @returns {Promise<IComplianceRecordModel>} The updated ComplianceRecord
     */
    update(entity: IComplianceRecordModel): Promise<IComplianceRecordModel>;

    /**
     * Deletes a ComplianceRecord by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
