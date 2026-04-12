/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IMarginAccountRepository.ts
 * Description: Repository interface for MarginAccount
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

import { IMarginAccountModel } from '../models/MarginAccountModel.js';

/**
 * Enterprise Repository Interface for MarginAccount.
 * Defines the contract for data access operations related to MarginAccount.
 */
export interface IMarginAccountRepository {
    /**
     * Retrieves a MarginAccount by its unique identifier.
     * @param {string} id - The ID of the MarginAccount
     * @returns {Promise<IMarginAccountModel | null>} The MarginAccount or null if not found
     */
    findById(id: string): Promise<IMarginAccountModel | null>;

    /**
     * Retrieves all MarginAccount entities.
     * @returns {Promise<IMarginAccountModel[]>} An array of MarginAccount entities
     */
    findAll(): Promise<IMarginAccountModel[]>;

    /**
     * Saves a MarginAccount entity to the repository.
     * @param {IMarginAccountModel} entity - The MarginAccount to save
     * @returns {Promise<IMarginAccountModel>} The saved MarginAccount
     */
    save(entity: IMarginAccountModel): Promise<IMarginAccountModel>;

    /**
     * Updates an existing MarginAccount entity.
     * @param {IMarginAccountModel} entity - The MarginAccount to update
     * @returns {Promise<IMarginAccountModel>} The updated MarginAccount
     */
    update(entity: IMarginAccountModel): Promise<IMarginAccountModel>;

    /**
     * Deletes a MarginAccount by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
