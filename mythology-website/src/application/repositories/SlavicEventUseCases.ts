/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: SlavicEvent
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for SlavicEvent.
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

import { ISlavicEventRepository } from './ISlavicEventRepository';
import { ISlavicEvent, SlavicEventModel } from '../../domain/models/SlavicEventModel';

/**
 * Enterprise DTO for creating a SlavicEvent.
 */
export interface CreateSlavicEventDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create SlavicEvent
 * Encapsulates the business logic required to instantiate and persist a SlavicEvent.
 */
export class CreateSlavicEventUseCase {
    private repository: ISlavicEventRepository;

    constructor(repository: ISlavicEventRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateSlavicEventDTO): Promise<ISlavicEvent> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new SlavicEventModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All SlavicEvents
 */
export class GetAllSlavicEventUseCase {
    private repository: ISlavicEventRepository;

    constructor(repository: ISlavicEventRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<ISlavicEvent[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get SlavicEvent By Id
 */
export class GetSlavicEventByIdUseCase {
    private repository: ISlavicEventRepository;

    constructor(repository: ISlavicEventRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<ISlavicEvent | null> {
        return await this.repository.findById(id);
    }
}
