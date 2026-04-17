/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IYieldFarmingPositionRepository.ts
 * Description: Repository interface for YieldFarmingPosition
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

import { IYieldFarmingPositionModel } from '../models/YieldFarmingPositionModel.js';

/**
 * Enterprise Repository Interface for YieldFarmingPosition.
 * Defines the contract for data access operations related to YieldFarmingPosition.
 */
export interface IYieldFarmingPositionRepository {
    /**
     * Retrieves a YieldFarmingPosition by its unique identifier.
     * @param {string} id - The ID of the YieldFarmingPosition
     * @returns {Promise<IYieldFarmingPositionModel | null>} The YieldFarmingPosition or null if not found
     */
    findById(id: string): Promise<IYieldFarmingPositionModel | null>;

    /**
     * Retrieves all YieldFarmingPosition entities.
     * @returns {Promise<IYieldFarmingPositionModel[]>} An array of YieldFarmingPosition entities
     */
    findAll(): Promise<IYieldFarmingPositionModel[]>;

    /**
     * Saves a YieldFarmingPosition entity to the repository.
     * @param {IYieldFarmingPositionModel} entity - The YieldFarmingPosition to save
     * @returns {Promise<IYieldFarmingPositionModel>} The saved YieldFarmingPosition
     */
    save(entity: IYieldFarmingPositionModel): Promise<IYieldFarmingPositionModel>;

    /**
     * Updates an existing YieldFarmingPosition entity.
     * @param {IYieldFarmingPositionModel} entity - The YieldFarmingPosition to update
     * @returns {Promise<IYieldFarmingPositionModel>} The updated YieldFarmingPosition
     */
    update(entity: IYieldFarmingPositionModel): Promise<IYieldFarmingPositionModel>;

    /**
     * Deletes a YieldFarmingPosition by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
