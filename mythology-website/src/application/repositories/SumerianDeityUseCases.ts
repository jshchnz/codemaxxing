/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: SumerianDeity
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for SumerianDeity.
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

import { ISumerianDeityRepository } from './ISumerianDeityRepository';
import { ISumerianDeity, SumerianDeityModel } from '../../domain/models/SumerianDeityModel';

/**
 * Enterprise DTO for creating a SumerianDeity.
 */
export interface CreateSumerianDeityDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create SumerianDeity
 * Encapsulates the business logic required to instantiate and persist a SumerianDeity.
 */
export class CreateSumerianDeityUseCase {
    private repository: ISumerianDeityRepository;

    constructor(repository: ISumerianDeityRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateSumerianDeityDTO): Promise<ISumerianDeity> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new SumerianDeityModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All SumerianDeitys
 */
export class GetAllSumerianDeityUseCase {
    private repository: ISumerianDeityRepository;

    constructor(repository: ISumerianDeityRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<ISumerianDeity[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get SumerianDeity By Id
 */
export class GetSumerianDeityByIdUseCase {
    private repository: ISumerianDeityRepository;

    constructor(repository: ISumerianDeityRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<ISumerianDeity | null> {
        return await this.repository.findById(id);
    }
}
