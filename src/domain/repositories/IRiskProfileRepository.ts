/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IRiskProfileRepository.ts
 * Description: Repository interface for RiskProfile
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

import { IRiskProfileModel } from '../models/RiskProfileModel.js';

/**
 * Enterprise Repository Interface for RiskProfile.
 * Defines the contract for data access operations related to RiskProfile.
 */
export interface IRiskProfileRepository {
    /**
     * Retrieves a RiskProfile by its unique identifier.
     * @param {string} id - The ID of the RiskProfile
     * @returns {Promise<IRiskProfileModel | null>} The RiskProfile or null if not found
     */
    findById(id: string): Promise<IRiskProfileModel | null>;

    /**
     * Retrieves all RiskProfile entities.
     * @returns {Promise<IRiskProfileModel[]>} An array of RiskProfile entities
     */
    findAll(): Promise<IRiskProfileModel[]>;

    /**
     * Saves a RiskProfile entity to the repository.
     * @param {IRiskProfileModel} entity - The RiskProfile to save
     * @returns {Promise<IRiskProfileModel>} The saved RiskProfile
     */
    save(entity: IRiskProfileModel): Promise<IRiskProfileModel>;

    /**
     * Updates an existing RiskProfile entity.
     * @param {IRiskProfileModel} entity - The RiskProfile to update
     * @returns {Promise<IRiskProfileModel>} The updated RiskProfile
     */
    update(entity: IRiskProfileModel): Promise<IRiskProfileModel>;

    /**
     * Deletes a RiskProfile by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
