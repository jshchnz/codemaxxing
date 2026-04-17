/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: YorubaCreature
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for YorubaCreature.
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

import { IYorubaCreatureRepository } from './IYorubaCreatureRepository';
import { IYorubaCreature, YorubaCreatureModel } from '../../domain/models/YorubaCreatureModel';

/**
 * Enterprise DTO for creating a YorubaCreature.
 */
export interface CreateYorubaCreatureDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create YorubaCreature
 * Encapsulates the business logic required to instantiate and persist a YorubaCreature.
 */
export class CreateYorubaCreatureUseCase {
    private repository: IYorubaCreatureRepository;

    constructor(repository: IYorubaCreatureRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateYorubaCreatureDTO): Promise<IYorubaCreature> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new YorubaCreatureModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All YorubaCreatures
 */
export class GetAllYorubaCreatureUseCase {
    private repository: IYorubaCreatureRepository;

    constructor(repository: IYorubaCreatureRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IYorubaCreature[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get YorubaCreature By Id
 */
export class GetYorubaCreatureByIdUseCase {
    private repository: IYorubaCreatureRepository;

    constructor(repository: IYorubaCreatureRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IYorubaCreature | null> {
        return await this.repository.findById(id);
    }
}
