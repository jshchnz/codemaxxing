/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ILendingPositionRepository.ts
 * Description: Repository interface for LendingPosition
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

import { ILendingPositionModel } from '../models/LendingPositionModel.js';

/**
 * Enterprise Repository Interface for LendingPosition.
 * Defines the contract for data access operations related to LendingPosition.
 */
export interface ILendingPositionRepository {
    /**
     * Retrieves a LendingPosition by its unique identifier.
     * @param {string} id - The ID of the LendingPosition
     * @returns {Promise<ILendingPositionModel | null>} The LendingPosition or null if not found
     */
    findById(id: string): Promise<ILendingPositionModel | null>;

    /**
     * Retrieves all LendingPosition entities.
     * @returns {Promise<ILendingPositionModel[]>} An array of LendingPosition entities
     */
    findAll(): Promise<ILendingPositionModel[]>;

    /**
     * Saves a LendingPosition entity to the repository.
     * @param {ILendingPositionModel} entity - The LendingPosition to save
     * @returns {Promise<ILendingPositionModel>} The saved LendingPosition
     */
    save(entity: ILendingPositionModel): Promise<ILendingPositionModel>;

    /**
     * Updates an existing LendingPosition entity.
     * @param {ILendingPositionModel} entity - The LendingPosition to update
     * @returns {Promise<ILendingPositionModel>} The updated LendingPosition
     */
    update(entity: ILendingPositionModel): Promise<ILendingPositionModel>;

    /**
     * Deletes a LendingPosition by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
