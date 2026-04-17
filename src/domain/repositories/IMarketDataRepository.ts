/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IMarketDataRepository.ts
 * Description: Repository interface for MarketData
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

import { IMarketDataModel } from '../models/MarketDataModel.js';

/**
 * Enterprise Repository Interface for MarketData.
 * Defines the contract for data access operations related to MarketData.
 */
export interface IMarketDataRepository {
    /**
     * Retrieves a MarketData by its unique identifier.
     * @param {string} id - The ID of the MarketData
     * @returns {Promise<IMarketDataModel | null>} The MarketData or null if not found
     */
    findById(id: string): Promise<IMarketDataModel | null>;

    /**
     * Retrieves all MarketData entities.
     * @returns {Promise<IMarketDataModel[]>} An array of MarketData entities
     */
    findAll(): Promise<IMarketDataModel[]>;

    /**
     * Saves a MarketData entity to the repository.
     * @param {IMarketDataModel} entity - The MarketData to save
     * @returns {Promise<IMarketDataModel>} The saved MarketData
     */
    save(entity: IMarketDataModel): Promise<IMarketDataModel>;

    /**
     * Updates an existing MarketData entity.
     * @param {IMarketDataModel} entity - The MarketData to update
     * @returns {Promise<IMarketDataModel>} The updated MarketData
     */
    update(entity: IMarketDataModel): Promise<IMarketDataModel>;

    /**
     * Deletes a MarketData by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
