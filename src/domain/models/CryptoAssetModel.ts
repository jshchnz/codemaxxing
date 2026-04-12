/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: CryptoAssetModel.ts
 * Description: Domain model for CryptoAsset
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

/**
 * Interface representing the properties of a CryptoAsset.
 * Extremely verbose description of the CryptoAsset properties.
 */
export interface ICryptoAssetModel {
    /** The unique identifier for the CryptoAsset */
    id: string;
    /** The timestamp when the CryptoAsset was created */
    createdAt: Date;
    /** The timestamp when the CryptoAsset was last updated */
    updatedAt: Date;
    /** The version of the CryptoAsset for optimistic locking */
    version: number;
    /** Is the CryptoAsset active in the system? */
    isActive: boolean;
}

/**
 * Enterprise class implementation for CryptoAsset model.
 * Implements the ICryptoAssetModel interface.
 */
export class CryptoAssetModel implements ICryptoAssetModel {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;
    public version: number;
    public isActive: boolean;

    /**
     * Constructor for CryptoAssetModel
     */
    constructor(id: string) {
        this.id = id;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.version = 1;
        this.isActive = true;
    }

    /**
     * Gets the unique identifier
     * @returns {string} The id
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Sets the unique identifier
     * @param {string} id - The new id
     */
    public setId(id: string): void {
        this.id = id;
    }
}
