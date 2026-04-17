/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: SlavicHero
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for SlavicHero.
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

import { ISlavicHeroRepository } from './ISlavicHeroRepository';
import { ISlavicHero, SlavicHeroModel } from '../../domain/models/SlavicHeroModel';

/**
 * Enterprise DTO for creating a SlavicHero.
 */
export interface CreateSlavicHeroDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create SlavicHero
 * Encapsulates the business logic required to instantiate and persist a SlavicHero.
 */
export class CreateSlavicHeroUseCase {
    private repository: ISlavicHeroRepository;

    constructor(repository: ISlavicHeroRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateSlavicHeroDTO): Promise<ISlavicHero> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new SlavicHeroModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All SlavicHeros
 */
export class GetAllSlavicHeroUseCase {
    private repository: ISlavicHeroRepository;

    constructor(repository: ISlavicHeroRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<ISlavicHero[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get SlavicHero By Id
 */
export class GetSlavicHeroByIdUseCase {
    private repository: ISlavicHeroRepository;

    constructor(repository: ISlavicHeroRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<ISlavicHero | null> {
        return await this.repository.findById(id);
    }
}
