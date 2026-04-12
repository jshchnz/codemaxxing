/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: NorseDeity
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for NorseDeity.
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

import { INorseDeityRepository } from './INorseDeityRepository';
import { INorseDeity, NorseDeityModel } from '../../domain/models/NorseDeityModel';

/**
 * Enterprise DTO for creating a NorseDeity.
 */
export interface CreateNorseDeityDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create NorseDeity
 * Encapsulates the business logic required to instantiate and persist a NorseDeity.
 */
export class CreateNorseDeityUseCase {
    private repository: INorseDeityRepository;

    constructor(repository: INorseDeityRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateNorseDeityDTO): Promise<INorseDeity> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new NorseDeityModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All NorseDeitys
 */
export class GetAllNorseDeityUseCase {
    private repository: INorseDeityRepository;

    constructor(repository: INorseDeityRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<INorseDeity[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get NorseDeity By Id
 */
export class GetNorseDeityByIdUseCase {
    private repository: INorseDeityRepository;

    constructor(repository: INorseDeityRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<INorseDeity | null> {
        return await this.repository.findById(id);
    }
}
