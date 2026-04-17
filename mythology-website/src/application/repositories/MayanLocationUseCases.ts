/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: MayanLocation
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for MayanLocation.
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

import { IMayanLocationRepository } from './IMayanLocationRepository';
import { IMayanLocation, MayanLocationModel } from '../../domain/models/MayanLocationModel';

/**
 * Enterprise DTO for creating a MayanLocation.
 */
export interface CreateMayanLocationDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create MayanLocation
 * Encapsulates the business logic required to instantiate and persist a MayanLocation.
 */
export class CreateMayanLocationUseCase {
    private repository: IMayanLocationRepository;

    constructor(repository: IMayanLocationRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateMayanLocationDTO): Promise<IMayanLocation> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new MayanLocationModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All MayanLocations
 */
export class GetAllMayanLocationUseCase {
    private repository: IMayanLocationRepository;

    constructor(repository: IMayanLocationRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IMayanLocation[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get MayanLocation By Id
 */
export class GetMayanLocationByIdUseCase {
    private repository: IMayanLocationRepository;

    constructor(repository: IMayanLocationRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IMayanLocation | null> {
        return await this.repository.findById(id);
    }
}
