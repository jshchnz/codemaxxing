/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: NorseMyth
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for NorseMyth.
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

import { INorseMythRepository } from './INorseMythRepository';
import { INorseMyth, NorseMythModel } from '../../domain/models/NorseMythModel';

/**
 * Enterprise DTO for creating a NorseMyth.
 */
export interface CreateNorseMythDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create NorseMyth
 * Encapsulates the business logic required to instantiate and persist a NorseMyth.
 */
export class CreateNorseMythUseCase {
    private repository: INorseMythRepository;

    constructor(repository: INorseMythRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateNorseMythDTO): Promise<INorseMyth> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new NorseMythModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All NorseMyths
 */
export class GetAllNorseMythUseCase {
    private repository: INorseMythRepository;

    constructor(repository: INorseMythRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<INorseMyth[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get NorseMyth By Id
 */
export class GetNorseMythByIdUseCase {
    private repository: INorseMythRepository;

    constructor(repository: INorseMythRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<INorseMyth | null> {
        return await this.repository.findById(id);
    }
}
