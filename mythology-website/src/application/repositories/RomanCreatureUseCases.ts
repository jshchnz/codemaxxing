/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: RomanCreature
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for RomanCreature.
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

import { IRomanCreatureRepository } from './IRomanCreatureRepository';
import { IRomanCreature, RomanCreatureModel } from '../../domain/models/RomanCreatureModel';

/**
 * Enterprise DTO for creating a RomanCreature.
 */
export interface CreateRomanCreatureDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create RomanCreature
 * Encapsulates the business logic required to instantiate and persist a RomanCreature.
 */
export class CreateRomanCreatureUseCase {
    private repository: IRomanCreatureRepository;

    constructor(repository: IRomanCreatureRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateRomanCreatureDTO): Promise<IRomanCreature> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new RomanCreatureModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All RomanCreatures
 */
export class GetAllRomanCreatureUseCase {
    private repository: IRomanCreatureRepository;

    constructor(repository: IRomanCreatureRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IRomanCreature[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get RomanCreature By Id
 */
export class GetRomanCreatureByIdUseCase {
    private repository: IRomanCreatureRepository;

    constructor(repository: IRomanCreatureRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IRomanCreature | null> {
        return await this.repository.findById(id);
    }
}
