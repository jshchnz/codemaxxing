/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: JapaneseMyth
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for JapaneseMyth.
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

import { IJapaneseMythRepository } from './IJapaneseMythRepository';
import { IJapaneseMyth, JapaneseMythModel } from '../../domain/models/JapaneseMythModel';

/**
 * Enterprise DTO for creating a JapaneseMyth.
 */
export interface CreateJapaneseMythDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create JapaneseMyth
 * Encapsulates the business logic required to instantiate and persist a JapaneseMyth.
 */
export class CreateJapaneseMythUseCase {
    private repository: IJapaneseMythRepository;

    constructor(repository: IJapaneseMythRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateJapaneseMythDTO): Promise<IJapaneseMyth> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new JapaneseMythModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All JapaneseMyths
 */
export class GetAllJapaneseMythUseCase {
    private repository: IJapaneseMythRepository;

    constructor(repository: IJapaneseMythRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IJapaneseMyth[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get JapaneseMyth By Id
 */
export class GetJapaneseMythByIdUseCase {
    private repository: IJapaneseMythRepository;

    constructor(repository: IJapaneseMythRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IJapaneseMyth | null> {
        return await this.repository.findById(id);
    }
}
