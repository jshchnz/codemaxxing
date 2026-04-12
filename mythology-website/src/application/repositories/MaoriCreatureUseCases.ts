/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: MaoriCreature
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for MaoriCreature.
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

import { IMaoriCreatureRepository } from './IMaoriCreatureRepository';
import { IMaoriCreature, MaoriCreatureModel } from '../../domain/models/MaoriCreatureModel';

/**
 * Enterprise DTO for creating a MaoriCreature.
 */
export interface CreateMaoriCreatureDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create MaoriCreature
 * Encapsulates the business logic required to instantiate and persist a MaoriCreature.
 */
export class CreateMaoriCreatureUseCase {
    private repository: IMaoriCreatureRepository;

    constructor(repository: IMaoriCreatureRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateMaoriCreatureDTO): Promise<IMaoriCreature> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new MaoriCreatureModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All MaoriCreatures
 */
export class GetAllMaoriCreatureUseCase {
    private repository: IMaoriCreatureRepository;

    constructor(repository: IMaoriCreatureRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IMaoriCreature[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get MaoriCreature By Id
 */
export class GetMaoriCreatureByIdUseCase {
    private repository: IMaoriCreatureRepository;

    constructor(repository: IMaoriCreatureRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IMaoriCreature | null> {
        return await this.repository.findById(id);
    }
}
