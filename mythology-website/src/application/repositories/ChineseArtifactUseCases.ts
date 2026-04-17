/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: ChineseArtifact
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for ChineseArtifact.
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

import { IChineseArtifactRepository } from './IChineseArtifactRepository';
import { IChineseArtifact, ChineseArtifactModel } from '../../domain/models/ChineseArtifactModel';

/**
 * Enterprise DTO for creating a ChineseArtifact.
 */
export interface CreateChineseArtifactDTO {
    name: string;
    description: string;
    aliases?: string[];
}

/**
 * Enterprise Use Case: Create ChineseArtifact
 * Encapsulates the business logic required to instantiate and persist a ChineseArtifact.
 */
export class CreateChineseArtifactUseCase {
    private repository: IChineseArtifactRepository;

    constructor(repository: IChineseArtifactRepository) {
        this.repository = repository;
    }

    /**
     * Executes the use case.
     * @param dto The data transfer object
     * @returns The created entity
     */
    public async execute(dto: CreateChineseArtifactDTO): Promise<IChineseArtifact> {
        const id = "ENT-" + Math.random().toString(36).substring(2, 15);
        const newEntity = new ChineseArtifactModel(id, dto.name, dto.description, dto.aliases || []);
        return await this.repository.save(newEntity);
    }
}

/**
 * Enterprise Use Case: Get All ChineseArtifacts
 */
export class GetAllChineseArtifactUseCase {
    private repository: IChineseArtifactRepository;

    constructor(repository: IChineseArtifactRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<IChineseArtifact[]> {
        return await this.repository.findAll();
    }
}

/**
 * Enterprise Use Case: Get ChineseArtifact By Id
 */
export class GetChineseArtifactByIdUseCase {
    private repository: IChineseArtifactRepository;

    constructor(repository: IChineseArtifactRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<IChineseArtifact | null> {
        return await this.repository.findById(id);
    }
}
