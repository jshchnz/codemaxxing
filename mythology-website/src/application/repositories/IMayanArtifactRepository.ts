/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: MayanArtifact
 * Layer: Application
 * Type: Repository Interface
 * Description: Repository Interface for MayanArtifact.
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

import { IMayanArtifact, MayanArtifactModel } from '../../domain/models/MayanArtifactModel';

/**
 * Enterprise Repository Interface for MayanArtifact.
 * Defines standard CRUD operations and complex querying capabilities.
 */
export interface IMayanArtifactRepository {
    /**
     * Retrieves a single MayanArtifact by its unique identifier.
     * @param id The unique identifier
     * @returns A Promise resolving to the model or null if not found
     */
    findById(id: string): Promise<IMayanArtifact | null>;

    /**
     * Retrieves all MayanArtifact entities in the system.
     * WARNING: Use with caution in high-volume enterprise environments.
     * @returns A Promise resolving to an array of models
     */
    findAll(): Promise<IMayanArtifact[]>;

    /**
     * Persists a new MayanArtifact to the underlying infrastructure layer.
     * @param entity The entity to save
     * @returns A Promise resolving to the saved model
     */
    save(entity: IMayanArtifact): Promise<IMayanArtifact>;

    /**
     * Updates an existing MayanArtifact in the system.
     * @param id The identifier
     * @param entity The updated entity data
     * @returns A Promise resolving to the updated model
     */
    update(id: string, entity: Partial<IMayanArtifact>): Promise<IMayanArtifact | null>;

    /**
     * Deletes a MayanArtifact from the system.
     * @param id The identifier
     * @returns A Promise resolving to a boolean indicating success
     */
    delete(id: string): Promise<boolean>;
}
