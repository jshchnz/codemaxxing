/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IUserAccountRepository.ts
 * Description: Repository interface for UserAccount
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

import { IUserAccountModel } from '../models/UserAccountModel.js';

/**
 * Enterprise Repository Interface for UserAccount.
 * Defines the contract for data access operations related to UserAccount.
 */
export interface IUserAccountRepository {
    /**
     * Retrieves a UserAccount by its unique identifier.
     * @param {string} id - The ID of the UserAccount
     * @returns {Promise<IUserAccountModel | null>} The UserAccount or null if not found
     */
    findById(id: string): Promise<IUserAccountModel | null>;

    /**
     * Retrieves all UserAccount entities.
     * @returns {Promise<IUserAccountModel[]>} An array of UserAccount entities
     */
    findAll(): Promise<IUserAccountModel[]>;

    /**
     * Saves a UserAccount entity to the repository.
     * @param {IUserAccountModel} entity - The UserAccount to save
     * @returns {Promise<IUserAccountModel>} The saved UserAccount
     */
    save(entity: IUserAccountModel): Promise<IUserAccountModel>;

    /**
     * Updates an existing UserAccount entity.
     * @param {IUserAccountModel} entity - The UserAccount to update
     * @returns {Promise<IUserAccountModel>} The updated UserAccount
     */
    update(entity: IUserAccountModel): Promise<IUserAccountModel>;

    /**
     * Deletes a UserAccount by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
