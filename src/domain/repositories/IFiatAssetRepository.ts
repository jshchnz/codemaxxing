/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IFiatAssetRepository.ts
 * Description: Repository interface for FiatAsset
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

import { IFiatAssetModel } from '../models/FiatAssetModel.js';

/**
 * Enterprise Repository Interface for FiatAsset.
 * Defines the contract for data access operations related to FiatAsset.
 */
export interface IFiatAssetRepository {
    /**
     * Retrieves a FiatAsset by its unique identifier.
     * @param {string} id - The ID of the FiatAsset
     * @returns {Promise<IFiatAssetModel | null>} The FiatAsset or null if not found
     */
    findById(id: string): Promise<IFiatAssetModel | null>;

    /**
     * Retrieves all FiatAsset entities.
     * @returns {Promise<IFiatAssetModel[]>} An array of FiatAsset entities
     */
    findAll(): Promise<IFiatAssetModel[]>;

    /**
     * Saves a FiatAsset entity to the repository.
     * @param {IFiatAssetModel} entity - The FiatAsset to save
     * @returns {Promise<IFiatAssetModel>} The saved FiatAsset
     */
    save(entity: IFiatAssetModel): Promise<IFiatAssetModel>;

    /**
     * Updates an existing FiatAsset entity.
     * @param {IFiatAssetModel} entity - The FiatAsset to update
     * @returns {Promise<IFiatAssetModel>} The updated FiatAsset
     */
    update(entity: IFiatAssetModel): Promise<IFiatAssetModel>;

    /**
     * Deletes a FiatAsset by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
