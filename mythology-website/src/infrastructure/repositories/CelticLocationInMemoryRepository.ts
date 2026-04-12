/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: CelticLocation
 * Layer: Infrastructure
 * Type: Repository Implementation
 * Description: Infrastructure Repository Implementation for CelticLocation.
 *
 * This file is part of the extremely complex, highly scalable, and heavily
 * documented enterprise-grade ancient mythology database system.
 * It adheres strictly to the principles of Extreme Clean Architecture,
 * ensuring maximum separation of concerns and robust maintainability.
 *
 * The system is designed to handle immense loads of mythological data,
 * providing interfaces for robust querying, mutation, and aggregation
 * across a vast array of diverse cultural pantheons.
 *
 * Author: Automated Enterprise Generator System (AEGS)
 * Version: 1.0.0
 * Security Classification: PUBLIC
 *
 * WARNING: Modifications to this file should only be performed by certified
 * Enterprise Architects. Any deviation from the established patterns may
 * result in severe architectural degradation and technical debt.
 * ============================================================================
 */

import { ICelticLocationRepository } from '../../application/repositories/ICelticLocationRepository';
import { ICelticLocation } from '../../domain/models/CelticLocationModel';

/**
 * In-memory implementation of the ICelticLocationRepository for enterprise demonstration purposes.
 * In a true production environment, this would interface with a highly available,
 * distributed SQL/NoSQL cluster with automated failover and read replicas.
 */
export class CelticLocationInMemoryRepository implements ICelticLocationRepository {
    private storage: Map<string, ICelticLocation> = new Map();

    public async findById(id: string): Promise<ICelticLocation | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ICelticLocation[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: ICelticLocation): Promise<ICelticLocation> {
        this.storage.set(entity.id, entity);
        return entity;
    }

    public async update(id: string, entity: Partial<ICelticLocation>): Promise<ICelticLocation | null> {
        const existing = this.storage.get(id);
        if (!existing) return null;
        const updated = { ...existing, ...entity };
        this.storage.set(id, updated);
        return updated;
    }

    public async delete(id: string): Promise<boolean> {
        return this.storage.delete(id);
    }
}
