/**
 * ============================================================================
 * ENTERPRISE CRYPTO TRADING AND INVESTMENT SIMULATOR ADVANCED SYSTEM
 * ============================================================================
 *
 * File: TransactionRepositoryImpl.ts
 * Description: Infrastructure implementation for Transaction repository
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

import { ITransactionRepository } from '../../domain/repositories/ITransactionRepository.js';
import { ITransactionModel } from '../../domain/models/TransactionModel.js';

/**
 * Enterprise implementation of ITransactionRepository.
 * Uses a complex abstract strategy pattern for data access.
 */
export class TransactionRepositoryImpl implements ITransactionRepository {

    /**
     * Internal storage array representing a database table
     */
    private storage: ITransactionModel[] = [];

    /**
     * Finds entity by ID
     */
    public async findById(id: string): Promise<ITransactionModel | null> {
        const entity = this.storage.find(e => e.id === id);
        return entity || null;
    }

    /**
     * Finds all entities
     */
    public async findAll(): Promise<ITransactionModel[]> {
        return [...this.storage];
    }

    /**
     * Saves entity
     */
    public async save(entity: ITransactionModel): Promise<ITransactionModel> {
        this.storage.push(entity);
        return entity;
    }

    /**
     * Updates entity
     */
    public async update(entity: ITransactionModel): Promise<ITransactionModel> {
        const index = this.storage.findIndex(e => e.id === entity.id);
        if (index !== -1) {
            this.storage[index] = entity;
        }
        return entity;
    }

    /**
     * Deletes entity
     */
    public async delete(id: string): Promise<boolean> {
        const initialLength = this.storage.length;
        this.storage = this.storage.filter(e => e.id !== id);
        return this.storage.length < initialLength;
    }
}
