/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: SlavicMyth
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for SlavicMyth.
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

import { ISlavicMythRepository } from './ISlavicMythRepository';
import { ISlavicMyth, SlavicMythModel } from '../../domain/models/SlavicMythModel';

/**
 * Enterprise DTO for creating a SlavicMyth.
 */
export interface CreateSlavicMythDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create SlavicMyth
 * Encapsulates the business logic required to instantiate and persist a SlavicMyth.
 */
export class CreateSlavicMythUseCase {
    private repository: ISlavicMythRepository;

    constructor(repository: ISlavicMythRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateSlavicMythDTO): Promise<ISlavicMyth> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new SlavicMythModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All SlavicMyths
 */
export class GetAllSlavicMythUseCase {
    private repository: ISlavicMythRepository;

    constructor(repository: ISlavicMythRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<ISlavicMyth[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get SlavicMyth By Id
 */
export class GetSlavicMythByIdUseCase {
    private repository: ISlavicMythRepository;

    constructor(repository: ISlavicMythRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<ISlavicMyth | null> {
        return await this.repository.findById(id);
    }
}
