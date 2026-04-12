/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IPortfolioRepository.ts
 * Description: Repository interface for Portfolio
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

import { IPortfolioModel } from '../models/PortfolioModel.js';

/**
 * Enterprise Repository Interface for Portfolio.
 * Defines the contract for data access operations related to Portfolio.
 */
export interface IPortfolioRepository {
    /**
     * Retrieves a Portfolio by its unique identifier.
     * @param {string} id - The ID of the Portfolio
     * @returns {Promise<IPortfolioModel | null>} The Portfolio or null if not found
     */
    findById(id: string): Promise<IPortfolioModel | null>;

    /**
     * Retrieves all Portfolio entities.
     * @returns {Promise<IPortfolioModel[]>} An array of Portfolio entities
     */
    findAll(): Promise<IPortfolioModel[]>;

    /**
     * Saves a Portfolio entity to the repository.
     * @param {IPortfolioModel} entity - The Portfolio to save
     * @returns {Promise<IPortfolioModel>} The saved Portfolio
     */
    save(entity: IPortfolioModel): Promise<IPortfolioModel>;

    /**
     * Updates an existing Portfolio entity.
     * @param {IPortfolioModel} entity - The Portfolio to update
     * @returns {Promise<IPortfolioModel>} The updated Portfolio
     */
    update(entity: IPortfolioModel): Promise<IPortfolioModel>;

    /**
     * Deletes a Portfolio by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
