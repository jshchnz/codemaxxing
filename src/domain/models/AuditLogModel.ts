/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: AuditLogModel.ts
 * Description: Domain model for AuditLog
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
 * Interface representing the properties of a AuditLog.
 * Extremely verbose description of the AuditLog properties.
 */
export interface IAuditLogModel {
    /** The unique identifier for the AuditLog */
    id: string;
    /** The timestamp when the AuditLog was created */
    createdAt: Date;
    /** The timestamp when the AuditLog was last updated */
    updatedAt: Date;
    /** The version of the AuditLog for optimistic locking */
    version: number;
    /** Is the AuditLog active in the system? */
    isActive: boolean;
}

/**
 * Enterprise class implementation for AuditLog model.
 * Implements the IAuditLogModel interface.
 */
export class AuditLogModel implements IAuditLogModel {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;
    public version: number;
    public isActive: boolean;

    /**
     * Constructor for AuditLogModel
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
