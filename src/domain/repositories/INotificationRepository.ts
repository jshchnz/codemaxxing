/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: INotificationRepository.ts
 * Description: Repository interface for Notification
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

import { INotificationModel } from '../models/NotificationModel.js';

/**
 * Enterprise Repository Interface for Notification.
 * Defines the contract for data access operations related to Notification.
 */
export interface INotificationRepository {
    /**
     * Retrieves a Notification by its unique identifier.
     * @param {string} id - The ID of the Notification
     * @returns {Promise<INotificationModel | null>} The Notification or null if not found
     */
    findById(id: string): Promise<INotificationModel | null>;

    /**
     * Retrieves all Notification entities.
     * @returns {Promise<INotificationModel[]>} An array of Notification entities
     */
    findAll(): Promise<INotificationModel[]>;

    /**
     * Saves a Notification entity to the repository.
     * @param {INotificationModel} entity - The Notification to save
     * @returns {Promise<INotificationModel>} The saved Notification
     */
    save(entity: INotificationModel): Promise<INotificationModel>;

    /**
     * Updates an existing Notification entity.
     * @param {INotificationModel} entity - The Notification to update
     * @returns {Promise<INotificationModel>} The updated Notification
     */
    update(entity: INotificationModel): Promise<INotificationModel>;

    /**
     * Deletes a Notification by its ID.
     * @param {string} id - The ID to delete
     * @returns {Promise<boolean>} True if deleted, false otherwise
     */
    delete(id: string): Promise<boolean>;
}
