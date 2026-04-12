/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IWalletRepository.ts
 * Description: Repository interface for Wallet
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

import { IWalletModel } from '../models/WalletModel.js';

/**
 * Enterprise Repository Interface for Wallet.
 * Defines the contract for data access operations related to Wallet.
 */
export interface IWalletRepository {
    /**
     * Retrieves a Wallet by its unique identifier.
     * @param {string} id - The ID of the Wallet
     * @returns {Promise<IWalletModel | null>} The Wallet or null if not found
     */
    findById(id: string): Promise<IWalletModel | null>;

    /**
     * Retrieves all Wallet entities.
     * @returns {Promise<IWalletModel[]>} An array of Wallet entities
     */
    findAll(): Promise<IWalletModel[]>;

    /**
     * Saves a Wallet entity to the repository.
     * @param {IWalletModel} entity - The Wallet to save
     * @returns {Promise<IWalletModel>} The saved Wallet
     */
    save(entity: IWalletModel): Promise<IWalletModel>;

    /**
     * Updates an existing Wallet entity.
     * @param {IWalletModel} entity - The Wallet to update
     * @returns {Promise<IWalletModel>} The updated Wallet
     */
    update(entity: IWalletModel): Promise<IWalletModel>;

    /**
     * Deletes a Wallet by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
