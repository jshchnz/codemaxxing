/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IFuturesContractRepository.ts
 * Description: Repository interface for FuturesContract
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

import { IFuturesContractModel } from '../models/FuturesContractModel.js';

/**
 * Enterprise Repository Interface for FuturesContract.
 * Defines the contract for data access operations related to FuturesContract.
 */
export interface IFuturesContractRepository {
    /**
     * Retrieves a FuturesContract by its unique identifier.
     * @param {string} id - The ID of the FuturesContract
     * @returns {Promise<IFuturesContractModel | null>} The FuturesContract or null if not found
     */
    findById(id: string): Promise<IFuturesContractModel | null>;

    /**
     * Retrieves all FuturesContract entities.
     * @returns {Promise<IFuturesContractModel[]>} An array of FuturesContract entities
     */
    findAll(): Promise<IFuturesContractModel[]>;

    /**
     * Saves a FuturesContract entity to the repository.
     * @param {IFuturesContractModel} entity - The FuturesContract to save
     * @returns {Promise<IFuturesContractModel>} The saved FuturesContract
     */
    save(entity: IFuturesContractModel): Promise<IFuturesContractModel>;

    /**
     * Updates an existing FuturesContract entity.
     * @param {IFuturesContractModel} entity - The FuturesContract to update
     * @returns {Promise<IFuturesContractModel>} The updated FuturesContract
     */
    update(entity: IFuturesContractModel): Promise<IFuturesContractModel>;

    /**
     * Deletes a FuturesContract by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
