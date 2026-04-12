/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ITransactionRepository.ts
 * Description: Repository interface for Transaction
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

import { ITransactionModel } from '../models/TransactionModel.js';

/**
 * Enterprise Repository Interface for Transaction.
 * Defines the contract for data access operations related to Transaction.
 */
export interface ITransactionRepository {
    /**
     * Retrieves a Transaction by its unique identifier.
     * @param {string} id - The ID of the Transaction
     * @returns {Promise<ITransactionModel | null>} The Transaction or null if not found
     */
    findById(id: string): Promise<ITransactionModel | null>;

    /**
     * Retrieves all Transaction entities.
     * @returns {Promise<ITransactionModel[]>} An array of Transaction entities
     */
    findAll(): Promise<ITransactionModel[]>;

    /**
     * Saves a Transaction entity to the repository.
     * @param {ITransactionModel} entity - The Transaction to save
     * @returns {Promise<ITransactionModel>} The saved Transaction
     */
    save(entity: ITransactionModel): Promise<ITransactionModel>;

    /**
     * Updates an existing Transaction entity.
     * @param {ITransactionModel} entity - The Transaction to update
     * @returns {Promise<ITransactionModel>} The updated Transaction
     */
    update(entity: ITransactionModel): Promise<ITransactionModel>;

    /**
     * Deletes a Transaction by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
