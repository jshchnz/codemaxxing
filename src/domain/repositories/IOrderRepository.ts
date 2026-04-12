/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: IOrderRepository.ts
 * Description: Repository interface for Order
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

import { IOrderModel } from '../models/OrderModel.js';

/**
 * Enterprise Repository Interface for Order.
 * Defines the contract for data access operations related to Order.
 */
export interface IOrderRepository {
    /**
     * Retrieves a Order by its unique identifier.
     * @param {string} id - The ID of the Order
     * @returns {Promise<IOrderModel | null>} The Order or null if not found
     */
    findById(id: string): Promise<IOrderModel | null>;

    /**
     * Retrieves all Order entities.
     * @returns {Promise<IOrderModel[]>} An array of Order entities
     */
    findAll(): Promise<IOrderModel[]>;

    /**
     * Saves a Order entity to the repository.
     * @param {IOrderModel} entity - The Order to save
     * @returns {Promise<IOrderModel>} The saved Order
     */
    save(entity: IOrderModel): Promise<IOrderModel>;

    /**
     * Updates an existing Order entity.
     * @param {IOrderModel} entity - The Order to update
     * @returns {Promise<IOrderModel>} The updated Order
     */
    update(entity: IOrderModel): Promise<IOrderModel>;

    /**
     * Deletes a Order by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
