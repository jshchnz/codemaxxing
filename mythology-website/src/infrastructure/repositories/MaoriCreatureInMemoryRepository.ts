/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: MaoriCreature
 * Layer: Infrastructure
 * Type: Repository Implementation
 * Description: Infrastructure Repository Implementation for MaoriCreature.
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

import { IMaoriCreatureRepository } from '../../application/repositories/IMaoriCreatureRepository';
import { IMaoriCreature } from '../../domain/models/MaoriCreatureModel';

/**
 * In-memory implementation of the IMaoriCreatureRepository for enterprise demonstration purposes.
 * In a true production environment, this would interface with a highly available,
 * distributed SQL/NoSQL cluster with automated failover and read replicas.
 */
export class MaoriCreatureInMemoryRepository implements IMaoriCreatureRepository {
    private storage: Map<string, IMaoriCreature> = new Map();

    public async findById(id: string): Promise<IMaoriCreature | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IMaoriCreature[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: IMaoriCreature): Promise<IMaoriCreature> {
        this.storage.set(entity.id, entity);
        return entity;
    }

    public async update(id: string, entity: Partial<IMaoriCreature>): Promise<IMaoriCreature | null> {
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
