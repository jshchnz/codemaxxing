/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: NorseCreature
 * Layer: Application
 * Type: Repository Interface
 * Description: Repository Interface for NorseCreature.
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

import { INorseCreature, NorseCreatureModel } from '../../domain/models/NorseCreatureModel';

/**
 * Enterprise Repository Interface for NorseCreature.
 * Defines standard CRUD operations and complex querying capabilities.
 */
export interface INorseCreatureRepository {
    /**
     * Retrieves a single NorseCreature by its unique identifier.
     * @param id The unique identifier
     * @returns A Promise resolving to the model or null if not found
     */
    findById(id: string): Promise<INorseCreature | null>;

    /**
     * Retrieves all NorseCreature entities in the system.
     * WARNING: Use with caution in high-volume enterprise environments.
     * @returns A Promise resolving to an array of models
     */
    findAll(): Promise<INorseCreature[]>;

    /**
     * Persists a new NorseCreature to the underlying infrastructure layer.
     * @param entity The entity to save
     * @returns A Promise resolving to the saved model
     */
    save(entity: INorseCreature): Promise<INorseCreature>;

    /**
     * Updates an existing NorseCreature in the system.
     * @param id The identifier
     * @param entity The updated entity data
     * @returns A Promise resolving to the updated model
     */
    update(id: string, entity: Partial<INorseCreature>): Promise<INorseCreature | null>;

    /**
     * Deletes a NorseCreature from the system.
     * @param id The identifier
     * @returns A Promise resolving to a boolean indicating success
     */
    delete(id: string): Promise<boolean>;
}
