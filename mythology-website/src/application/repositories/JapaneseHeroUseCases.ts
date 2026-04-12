/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: JapaneseHero
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for JapaneseHero.
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

import { IJapaneseHeroRepository } from './IJapaneseHeroRepository';
import { IJapaneseHero, JapaneseHeroModel } from '../../domain/models/JapaneseHeroModel';

/**
 * Enterprise DTO for creating a JapaneseHero.
 */
export interface CreateJapaneseHeroDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create JapaneseHero
 * Encapsulates the business logic required to instantiate and persist a JapaneseHero.
 */
export class CreateJapaneseHeroUseCase {
    private repository: IJapaneseHeroRepository;

    constructor(repository: IJapaneseHeroRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateJapaneseHeroDTO): Promise<IJapaneseHero> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new JapaneseHeroModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All JapaneseHeros
 */
export class GetAllJapaneseHeroUseCase {
    private repository: IJapaneseHeroRepository;

    constructor(repository: IJapaneseHeroRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IJapaneseHero[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get JapaneseHero By Id
 */
export class GetJapaneseHeroByIdUseCase {
    private repository: IJapaneseHeroRepository;

    constructor(repository: IJapaneseHeroRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IJapaneseHero | null> {
        return await this.repository.findById(id);
    }
}
