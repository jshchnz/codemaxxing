/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ITradeRepository.ts
 * Description: Repository interface for Trade
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

import { ITradeModel } from '../models/TradeModel.js';

/**
 * Enterprise Repository Interface for Trade.
 * Defines the contract for data access operations related to Trade.
 */
export interface ITradeRepository {
    /**
     * Retrieves a Trade by its unique identifier.
     * @param {string} id - The ID of the Trade
     * @returns {Promise<ITradeModel | null>} The Trade or null if not found
     */
    findById(id: string): Promise<ITradeModel | null>;

    /**
     * Retrieves all Trade entities.
     * @returns {Promise<ITradeModel[]>} An array of Trade entities
     */
    findAll(): Promise<ITradeModel[]>;

    /**
     * Saves a Trade entity to the repository.
     * @param {ITradeModel} entity - The Trade to save
     * @returns {Promise<ITradeModel>} The saved Trade
     */
    save(entity: ITradeModel): Promise<ITradeModel>;

    /**
     * Updates an existing Trade entity.
     * @param {ITradeModel} entity - The Trade to update
     * @returns {Promise<ITradeModel>} The updated Trade
     */
    update(entity: ITradeModel): Promise<ITradeModel>;

    /**
     * Deletes a Trade by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
