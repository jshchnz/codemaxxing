/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: CelticHero
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for CelticHero.
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

import { ICelticHeroRepository } from './ICelticHeroRepository';
import { ICelticHero, CelticHeroModel } from '../../domain/models/CelticHeroModel';

/**
 * Enterprise DTO for creating a CelticHero.
 */
export interface CreateCelticHeroDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create CelticHero
 * Encapsulates the business logic required to instantiate and persist a CelticHero.
 */
export class CreateCelticHeroUseCase {
    private repository: ICelticHeroRepository;

    constructor(repository: ICelticHeroRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateCelticHeroDTO): Promise<ICelticHero> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new CelticHeroModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All CelticHeros
 */
export class GetAllCelticHeroUseCase {
    private repository: ICelticHeroRepository;

    constructor(repository: ICelticHeroRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<ICelticHero[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get CelticHero By Id
 */
export class GetCelticHeroByIdUseCase {
    private repository: ICelticHeroRepository;

    constructor(repository: ICelticHeroRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<ICelticHero | null> {
        return await this.repository.findById(id);
    }
}
