/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IOptionContractRepository.ts
 * Description: Repository interface for OptionContract
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

import { IOptionContractModel } from '../models/OptionContractModel.js';

/**
 * Enterprise Repository Interface for OptionContract.
 * Defines the contract for data access operations related to OptionContract.
 */
export interface IOptionContractRepository {
    /**
     * Retrieves a OptionContract by its unique identifier.
     * @param {string} id - The ID of the OptionContract
     * @returns {Promise<IOptionContractModel | null>} The OptionContract or null if not found
     */
    findById(id: string): Promise<IOptionContractModel | null>;

    /**
     * Retrieves all OptionContract entities.
     * @returns {Promise<IOptionContractModel[]>} An array of OptionContract entities
     */
    findAll(): Promise<IOptionContractModel[]>;

    /**
     * Saves a OptionContract entity to the repository.
     * @param {IOptionContractModel} entity - The OptionContract to save
     * @returns {Promise<IOptionContractModel>} The saved OptionContract
     */
    save(entity: IOptionContractModel): Promise<IOptionContractModel>;

    /**
     * Updates an existing OptionContract entity.
     * @param {IOptionContractModel} entity - The OptionContract to update
     * @returns {Promise<IOptionContractModel>} The updated OptionContract
     */
    update(entity: IOptionContractModel): Promise<IOptionContractModel>;

    /**
     * Deletes a OptionContract by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
