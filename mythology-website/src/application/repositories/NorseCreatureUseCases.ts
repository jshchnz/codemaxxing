/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: NorseCreature
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for NorseCreature.
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

import { INorseCreatureRepository } from './INorseCreatureRepository';
import { INorseCreature, NorseCreatureModel } from '../../domain/models/NorseCreatureModel';

/**
 * Enterprise DTO for creating a NorseCreature.
 */
export interface CreateNorseCreatureDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create NorseCreature
 * Encapsulates the business logic required to instantiate and persist a NorseCreature.
 */
export class CreateNorseCreatureUseCase {
    private repository: INorseCreatureRepository;

    constructor(repository: INorseCreatureRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateNorseCreatureDTO): Promise<INorseCreature> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new NorseCreatureModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All NorseCreatures
 */
export class GetAllNorseCreatureUseCase {
    private repository: INorseCreatureRepository;

    constructor(repository: INorseCreatureRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<INorseCreature[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get NorseCreature By Id
 */
export class GetNorseCreatureByIdUseCase {
    private repository: INorseCreatureRepository;

    constructor(repository: INorseCreatureRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<INorseCreature | null> {
        return await this.repository.findById(id);
    }
}
