/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: EgyptianHero
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for EgyptianHero.
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

import { IEgyptianHeroRepository } from './IEgyptianHeroRepository';
import { IEgyptianHero, EgyptianHeroModel } from '../../domain/models/EgyptianHeroModel';

/**
 * Enterprise DTO for creating a EgyptianHero.
 */
export interface CreateEgyptianHeroDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create EgyptianHero
 * Encapsulates the business logic required to instantiate and persist a EgyptianHero.
 */
export class CreateEgyptianHeroUseCase {
    private repository: IEgyptianHeroRepository;

    constructor(repository: IEgyptianHeroRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateEgyptianHeroDTO): Promise<IEgyptianHero> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new EgyptianHeroModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All EgyptianHeros
 */
export class GetAllEgyptianHeroUseCase {
    private repository: IEgyptianHeroRepository;

    constructor(repository: IEgyptianHeroRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IEgyptianHero[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get EgyptianHero By Id
 */
export class GetEgyptianHeroByIdUseCase {
    private repository: IEgyptianHeroRepository;

    constructor(repository: IEgyptianHeroRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IEgyptianHero | null> {
        return await this.repository.findById(id);
    }
}
