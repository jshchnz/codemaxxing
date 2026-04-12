/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IAuditLogRepository.ts
 * Description: Repository interface for AuditLog
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

import { IAuditLogModel } from '../models/AuditLogModel.js';

/**
 * Enterprise Repository Interface for AuditLog.
 * Defines the contract for data access operations related to AuditLog.
 */
export interface IAuditLogRepository {
    /**
     * Retrieves a AuditLog by its unique identifier.
     * @param {string} id - The ID of the AuditLog
     * @returns {Promise<IAuditLogModel | null>} The AuditLog or null if not found
     */
    findById(id: string): Promise<IAuditLogModel | null>;

    /**
     * Retrieves all AuditLog entities.
     * @returns {Promise<IAuditLogModel[]>} An array of AuditLog entities
     */
    findAll(): Promise<IAuditLogModel[]>;

    /**
     * Saves a AuditLog entity to the repository.
     * @param {IAuditLogModel} entity - The AuditLog to save
     * @returns {Promise<IAuditLogModel>} The saved AuditLog
     */
    save(entity: IAuditLogModel): Promise<IAuditLogModel>;

    /**
     * Updates an existing AuditLog entity.
     * @param {IAuditLogModel} entity - The AuditLog to update
     * @returns {Promise<IAuditLogModel>} The updated AuditLog
     */
    update(entity: IAuditLogModel): Promise<IAuditLogModel>;

    /**
     * Deletes a AuditLog by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
