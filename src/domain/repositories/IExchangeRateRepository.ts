/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IExchangeRateRepository.ts
 * Description: Repository interface for ExchangeRate
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

import { IExchangeRateModel } from '../models/ExchangeRateModel.js';

/**
 * Enterprise Repository Interface for ExchangeRate.
 * Defines the contract for data access operations related to ExchangeRate.
 */
export interface IExchangeRateRepository {
    /**
     * Retrieves a ExchangeRate by its unique identifier.
     * @param {string} id - The ID of the ExchangeRate
     * @returns {Promise<IExchangeRateModel | null>} The ExchangeRate or null if not found
     */
    findById(id: string): Promise<IExchangeRateModel | null>;

    /**
     * Retrieves all ExchangeRate entities.
     * @returns {Promise<IExchangeRateModel[]>} An array of ExchangeRate entities
     */
    findAll(): Promise<IExchangeRateModel[]>;

    /**
     * Saves a ExchangeRate entity to the repository.
     * @param {IExchangeRateModel} entity - The ExchangeRate to save
     * @returns {Promise<IExchangeRateModel>} The saved ExchangeRate
     */
    save(entity: IExchangeRateModel): Promise<IExchangeRateModel>;

    /**
     * Updates an existing ExchangeRate entity.
     * @param {IExchangeRateModel} entity - The ExchangeRate to update
     * @returns {Promise<IExchangeRateModel>} The updated ExchangeRate
     */
    update(entity: IExchangeRateModel): Promise<IExchangeRateModel>;

    /**
     * Deletes a ExchangeRate by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
