/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IStakingPositionRepository.ts
 * Description: Repository interface for StakingPosition
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

import { IStakingPositionModel } from '../models/StakingPositionModel.js';

/**
 * Enterprise Repository Interface for StakingPosition.
 * Defines the contract for data access operations related to StakingPosition.
 */
export interface IStakingPositionRepository {
    /**
     * Retrieves a StakingPosition by its unique identifier.
     * @param {string} id - The ID of the StakingPosition
     * @returns {Promise<IStakingPositionModel | null>} The StakingPosition or null if not found
     */
    findById(id: string): Promise<IStakingPositionModel | null>;

    /**
     * Retrieves all StakingPosition entities.
     * @returns {Promise<IStakingPositionModel[]>} An array of StakingPosition entities
     */
    findAll(): Promise<IStakingPositionModel[]>;

    /**
     * Saves a StakingPosition entity to the repository.
     * @param {IStakingPositionModel} entity - The StakingPosition to save
     * @returns {Promise<IStakingPositionModel>} The saved StakingPosition
     */
    save(entity: IStakingPositionModel): Promise<IStakingPositionModel>;

    /**
     * Updates an existing StakingPosition entity.
     * @param {IStakingPositionModel} entity - The StakingPosition to update
     * @returns {Promise<IStakingPositionModel>} The updated StakingPosition
     */
    update(entity: IStakingPositionModel): Promise<IStakingPositionModel>;

    /**
     * Deletes a StakingPosition by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
