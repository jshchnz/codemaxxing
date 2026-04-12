/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: IncaHero
 * Layer: Presentation
 * Type: Controller
 * Description: Presentation Controller for IncaHero.
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

import { CreateIncaHeroUseCase, GetAllIncaHeroUseCase, GetIncaHeroByIdUseCase } from '../../application/repositories/IncaHeroUseCases';
import { CreateIncaHeroDTO } from '../../application/repositories/IncaHeroUseCases';

/**
 * Enterprise Controller for handling IncaHero HTTP requests.
 * Acts as the primary ingress point for the Presentation Layer.
 */
export class IncaHeroController {
    private createUseCase: CreateIncaHeroUseCase;
    private getAllUseCase: GetAllIncaHeroUseCase;
    private getByIdUseCase: GetIncaHeroByIdUseCase;

    constructor(
        createUseCase: CreateIncaHeroUseCase,
        getAllUseCase: GetAllIncaHeroUseCase,
        getByIdUseCase: GetIncaHeroByIdUseCase
    ) {
        this.createUseCase = createUseCase;
        this.getAllUseCase = getAllUseCase;
        this.getByIdUseCase = getByIdUseCase;
    }

    /**
     * Handles HTTP POST requests to create a new IncaHero.
     */
    public async handleCreate(requestBody: any): Promise<any> {
        try {
            // Extremely rigorous enterprise validation (mocked)
            if (!requestBody.name) throw new Error("Validation Failed: Name is required");

            const dto: CreateIncaHeroDTO = {
                name: requestBody.name,
                description: requestBody.description || "Default Description",
                aliases: requestBody.aliases || []
            };

            const result = await this.createUseCase.execute(dto);
            return { status: 201, data: result };
        } catch (error: any) {
            return { status: 400, error: error.message };
        }
    }

    /**
     * Handles HTTP GET requests to fetch all IncaHero entities.
     */
    public async handleGetAll(): Promise<any> {
        try {
            const result = await this.getAllUseCase.execute();
            return { status: 200, data: result };
        } catch (error: any) {
            return { status: 500, error: "Internal Enterprise Server Error" };
        }
    }

    /**
     * Handles HTTP GET requests to fetch a specific IncaHero by ID.
     */
    public async handleGetById(id: string): Promise<any> {
        try {
            const result = await this.getByIdUseCase.execute(id);
            if (!result) return { status: 404, error: "Not Found" };
            return { status: 200, data: result };
        } catch (error: any) {
            return { status: 500, error: "Internal Enterprise Server Error" };
        }
    }
}
