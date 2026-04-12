/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: HinduLocation
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for HinduLocation.
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

import { IHinduLocationRepository } from './IHinduLocationRepository';
import { IHinduLocation, HinduLocationModel } from '../../domain/models/HinduLocationModel';

/**
 * Enterprise DTO for creating a HinduLocation.
 */
export interface CreateHinduLocationDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create HinduLocation
 * Encapsulates the business logic required to instantiate and persist a HinduLocation.
 */
export class CreateHinduLocationUseCase {
    private repository: IHinduLocationRepository;

    constructor(repository: IHinduLocationRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateHinduLocationDTO): Promise<IHinduLocation> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new HinduLocationModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All HinduLocations
 */
export class GetAllHinduLocationUseCase {
    private repository: IHinduLocationRepository;

    constructor(repository: IHinduLocationRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IHinduLocation[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get HinduLocation By Id
 */
export class GetHinduLocationByIdUseCase {
    private repository: IHinduLocationRepository;

    constructor(repository: IHinduLocationRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IHinduLocation | null> {
        return await this.repository.findById(id);
    }
}
