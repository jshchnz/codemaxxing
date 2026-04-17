/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ITradingStrategyRepository.ts
 * Description: Repository interface for TradingStrategy
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

import { ITradingStrategyModel } from '../models/TradingStrategyModel.js';

/**
 * Enterprise Repository Interface for TradingStrategy.
 * Defines the contract for data access operations related to TradingStrategy.
 */
export interface ITradingStrategyRepository {
    /**
     * Retrieves a TradingStrategy by its unique identifier.
     * @param {string} id - The ID of the TradingStrategy
     * @returns {Promise<ITradingStrategyModel | null>} The TradingStrategy or null if not found
     */
    findById(id: string): Promise<ITradingStrategyModel | null>;

    /**
     * Retrieves all TradingStrategy entities.
     * @returns {Promise<ITradingStrategyModel[]>} An array of TradingStrategy entities
     */
    findAll(): Promise<ITradingStrategyModel[]>;

    /**
     * Saves a TradingStrategy entity to the repository.
     * @param {ITradingStrategyModel} entity - The TradingStrategy to save
     * @returns {Promise<ITradingStrategyModel>} The saved TradingStrategy
     */
    save(entity: ITradingStrategyModel): Promise<ITradingStrategyModel>;

    /**
     * Updates an existing TradingStrategy entity.
     * @param {ITradingStrategyModel} entity - The TradingStrategy to update
     * @returns {Promise<ITradingStrategyModel>} The updated TradingStrategy
     */
    update(entity: ITradingStrategyModel): Promise<ITradingStrategyModel>;

    /**
     * Deletes a TradingStrategy by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
