/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: ICryptoAssetRepository.ts
 * Description: Repository interface for CryptoAsset
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

import { ICryptoAssetModel } from '../models/CryptoAssetModel.js';

/**
 * Enterprise Repository Interface for CryptoAsset.
 * Defines the contract for data access operations related to CryptoAsset.
 */
export interface ICryptoAssetRepository {
    /**
     * Retrieves a CryptoAsset by its unique identifier.
     * @param {string} id - The ID of the CryptoAsset
     * @returns {Promise<ICryptoAssetModel | null>} The CryptoAsset or null if not found
     */
    findById(id: string): Promise<ICryptoAssetModel | null>;

    /**
     * Retrieves all CryptoAsset entities.
     * @returns {Promise<ICryptoAssetModel[]>} An array of CryptoAsset entities
     */
    findAll(): Promise<ICryptoAssetModel[]>;

    /**
     * Saves a CryptoAsset entity to the repository.
     * @param {ICryptoAssetModel} entity - The CryptoAsset to save
     * @returns {Promise<ICryptoAssetModel>} The saved CryptoAsset
     */
    save(entity: ICryptoAssetModel): Promise<ICryptoAssetModel>;

    /**
     * Updates an existing CryptoAsset entity.
     * @param {ICryptoAssetModel} entity - The CryptoAsset to update
     * @returns {Promise<ICryptoAssetModel>} The updated CryptoAsset
     */
    update(entity: ICryptoAssetModel): Promise<ICryptoAssetModel>;

    /**
     * Deletes a CryptoAsset by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
