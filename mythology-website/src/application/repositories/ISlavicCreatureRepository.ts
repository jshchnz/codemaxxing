/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: SlavicCreature
 * Layer: Application
 * Type: Repository Interface
 * Description: Repository Interface for SlavicCreature.
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

import { ISlavicCreature, SlavicCreatureModel } from '../../domain/models/SlavicCreatureModel';

/**
 * Enterprise Repository Interface for SlavicCreature.
 * Defines standard CRUD operations and complex querying capabilities.
 */
export interface ISlavicCreatureRepository {
    /**
     * Retrieves a single SlavicCreature by its unique identifier.
     * @param id The unique identifier
     * @returns A Promise resolving to the model or null if not found
     */
    findById(id: string): Promise<ISlavicCreature | null>;

    /**
     * Retrieves all SlavicCreature entities in the system.
     * WARNING: Use with caution in high-volume enterprise environments.
     * @returns A Promise resolving to an array of models
     */
    findAll(): Promise<ISlavicCreature[]>;

    /**
     * Persists a new SlavicCreature to the underlying infrastructure layer.
     * @param entity The entity to save
     * @returns A Promise resolving to the saved model
     */
    save(entity: ISlavicCreature): Promise<ISlavicCreature>;

    /**
     * Updates an existing SlavicCreature in the system.
     * @param id The identifier
     * @param entity The updated entity data
     * @returns A Promise resolving to the updated model
     */
    update(id: string, entity: Partial<ISlavicCreature>): Promise<ISlavicCreature | null>;

    /**
     * Deletes a SlavicCreature from the system.
     * @param id The identifier
     * @returns A Promise resolving to a boolean indicating success
     */
    delete(id: string): Promise<boolean>;
}
