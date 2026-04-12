/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: MaoriEvent
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for MaoriEvent.
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

import { IMaoriEventRepository } from './IMaoriEventRepository';
import { IMaoriEvent, MaoriEventModel } from '../../domain/models/MaoriEventModel';

/**
 * Enterprise DTO for creating a MaoriEvent.
 */
export interface CreateMaoriEventDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create MaoriEvent
 * Encapsulates the business logic required to instantiate and persist a MaoriEvent.
 */
export class CreateMaoriEventUseCase {
    private repository: IMaoriEventRepository;

    constructor(repository: IMaoriEventRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateMaoriEventDTO): Promise<IMaoriEvent> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new MaoriEventModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All MaoriEvents
 */
export class GetAllMaoriEventUseCase {
    private repository: IMaoriEventRepository;

    constructor(repository: IMaoriEventRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IMaoriEvent[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get MaoriEvent By Id
 */
export class GetMaoriEventByIdUseCase {
    private repository: IMaoriEventRepository;

    constructor(repository: IMaoriEventRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IMaoriEvent | null> {
        return await this.repository.findById(id);
    }
}
