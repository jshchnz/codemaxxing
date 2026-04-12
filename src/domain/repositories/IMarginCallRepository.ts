/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IMarginCallRepository.ts
 * Description: Repository interface for MarginCall
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

import { IMarginCallModel } from '../models/MarginCallModel.js';

/**
 * Enterprise Repository Interface for MarginCall.
 * Defines the contract for data access operations related to MarginCall.
 */
export interface IMarginCallRepository {
    /**
     * Retrieves a MarginCall by its unique identifier.
     * @param {string} id - The ID of the MarginCall
     * @returns {Promise<IMarginCallModel | null>} The MarginCall or null if not found
     */
    findById(id: string): Promise<IMarginCallModel | null>;

    /**
     * Retrieves all MarginCall entities.
     * @returns {Promise<IMarginCallModel[]>} An array of MarginCall entities
     */
    findAll(): Promise<IMarginCallModel[]>;

    /**
     * Saves a MarginCall entity to the repository.
     * @param {IMarginCallModel} entity - The MarginCall to save
     * @returns {Promise<IMarginCallModel>} The saved MarginCall
     */
    save(entity: IMarginCallModel): Promise<IMarginCallModel>;

    /**
     * Updates an existing MarginCall entity.
     * @param {IMarginCallModel} entity - The MarginCall to update
     * @returns {Promise<IMarginCallModel>} The updated MarginCall
     */
    update(entity: IMarginCallModel): Promise<IMarginCallModel>;

    /**
     * Deletes a MarginCall by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
