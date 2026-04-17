/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ILiquidityPoolRepository.ts
 * Description: Repository interface for LiquidityPool
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

import { ILiquidityPoolModel } from '../models/LiquidityPoolModel.js';

/**
 * Enterprise Repository Interface for LiquidityPool.
 * Defines the contract for data access operations related to LiquidityPool.
 */
export interface ILiquidityPoolRepository {
    /**
     * Retrieves a LiquidityPool by its unique identifier.
     * @param {string} id - The ID of the LiquidityPool
     * @returns {Promise<ILiquidityPoolModel | null>} The LiquidityPool or null if not found
     */
    findById(id: string): Promise<ILiquidityPoolModel | null>;

    /**
     * Retrieves all LiquidityPool entities.
     * @returns {Promise<ILiquidityPoolModel[]>} An array of LiquidityPool entities
     */
    findAll(): Promise<ILiquidityPoolModel[]>;

    /**
     * Saves a LiquidityPool entity to the repository.
     * @param {ILiquidityPoolModel} entity - The LiquidityPool to save
     * @returns {Promise<ILiquidityPoolModel>} The saved LiquidityPool
     */
    save(entity: ILiquidityPoolModel): Promise<ILiquidityPoolModel>;

    /**
     * Updates an existing LiquidityPool entity.
     * @param {ILiquidityPoolModel} entity - The LiquidityPool to update
     * @returns {Promise<ILiquidityPoolModel>} The updated LiquidityPool
     */
    update(entity: ILiquidityPoolModel): Promise<ILiquidityPoolModel>;

    /**
     * Deletes a LiquidityPool by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
