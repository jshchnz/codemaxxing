/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: EgyptianHero
 * Layer: Application
 * Type: Repository Interface
 * Description: Repository Interface for EgyptianHero.
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

import { IEgyptianHero, EgyptianHeroModel } from '../../domain/models/EgyptianHeroModel';

/**
 * Enterprise Repository Interface for EgyptianHero.
 * Defines standard CRUD operations and complex querying capabilities.
 */
export interface IEgyptianHeroRepository {
    /**
     * Retrieves a single EgyptianHero by its unique identifier.
     * @param id The unique identifier
     * @returns A Promise resolving to the model or null if not found
     */
    findById(id: string): Promise<IEgyptianHero | null>;

    /**
     * Retrieves all EgyptianHero entities in the system.
     * WARNING: Use with caution in high-volume enterprise environments.
     * @returns A Promise resolving to an array of models
     */
    findAll(): Promise<IEgyptianHero[]>;

    /**
     * Persists a new EgyptianHero to the underlying infrastructure layer.
     * @param entity The entity to save
     * @returns A Promise resolving to the saved model
     */
    save(entity: IEgyptianHero): Promise<IEgyptianHero>;

    /**
     * Updates an existing EgyptianHero in the system.
     * @param id The identifier
     * @param entity The updated entity data
     * @returns A Promise resolving to the updated model
     */
    update(id: string, entity: Partial<IEgyptianHero>): Promise<IEgyptianHero | null>;

    /**
     * Deletes a EgyptianHero from the system.
     * @param id The identifier
     * @returns A Promise resolving to a boolean indicating success
     */
    delete(id: string): Promise<boolean>;
}
