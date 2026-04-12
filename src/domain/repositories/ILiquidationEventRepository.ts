/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ILiquidationEventRepository.ts
 * Description: Repository interface for LiquidationEvent
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

import { ILiquidationEventModel } from '../models/LiquidationEventModel.js';

/**
 * Enterprise Repository Interface for LiquidationEvent.
 * Defines the contract for data access operations related to LiquidationEvent.
 */
export interface ILiquidationEventRepository {
    /**
     * Retrieves a LiquidationEvent by its unique identifier.
     * @param {string} id - The ID of the LiquidationEvent
     * @returns {Promise<ILiquidationEventModel | null>} The LiquidationEvent or null if not found
     */
    findById(id: string): Promise<ILiquidationEventModel | null>;

    /**
     * Retrieves all LiquidationEvent entities.
     * @returns {Promise<ILiquidationEventModel[]>} An array of LiquidationEvent entities
     */
    findAll(): Promise<ILiquidationEventModel[]>;

    /**
     * Saves a LiquidationEvent entity to the repository.
     * @param {ILiquidationEventModel} entity - The LiquidationEvent to save
     * @returns {Promise<ILiquidationEventModel>} The saved LiquidationEvent
     */
    save(entity: ILiquidationEventModel): Promise<ILiquidationEventModel>;

    /**
     * Updates an existing LiquidationEvent entity.
     * @param {ILiquidationEventModel} entity - The LiquidationEvent to update
     * @returns {Promise<ILiquidationEventModel>} The updated LiquidationEvent
     */
    update(entity: ILiquidationEventModel): Promise<ILiquidationEventModel>;

    /**
     * Deletes a LiquidationEvent by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
