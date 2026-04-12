/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: ChineseCreature
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for ChineseCreature.
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

import { IChineseCreatureRepository } from './IChineseCreatureRepository';
import { IChineseCreature, ChineseCreatureModel } from '../../domain/models/ChineseCreatureModel';

/**
 * Enterprise DTO for creating a ChineseCreature.
 */
export interface CreateChineseCreatureDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create ChineseCreature
 * Encapsulates the business logic required to instantiate and persist a ChineseCreature.
 */
export class CreateChineseCreatureUseCase {
    private repository: IChineseCreatureRepository;

    constructor(repository: IChineseCreatureRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateChineseCreatureDTO): Promise<IChineseCreature> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new ChineseCreatureModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All ChineseCreatures
 */
export class GetAllChineseCreatureUseCase {
    private repository: IChineseCreatureRepository;

    constructor(repository: IChineseCreatureRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IChineseCreature[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get ChineseCreature By Id
 */
export class GetChineseCreatureByIdUseCase {
    private repository: IChineseCreatureRepository;

    constructor(repository: IChineseCreatureRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IChineseCreature | null> {
        return await this.repository.findById(id);
    }
}
