/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: YorubaArtifact
 * Layer: Presentation
 * Type: Controller
 * Description: Presentation Controller for YorubaArtifact.
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

import { CreateYorubaArtifactUseCase, GetAllYorubaArtifactUseCase, GetYorubaArtifactByIdUseCase } from '../../application/repositories/YorubaArtifactUseCases';
import { CreateYorubaArtifactDTO } from '../../application/repositories/YorubaArtifactUseCases';

/**
 * Enterprise Controller for handling YorubaArtifact HTTP requests.
 * Acts as the primary ingress point for the Presentation Layer.
 */
export class YorubaArtifactController {
    private createUseCase: CreateYorubaArtifactUseCase;
    private getAllUseCase: GetAllYorubaArtifactUseCase;
    private getByIdUseCase: GetYorubaArtifactByIdUseCase;

    constructor(
        createUseCase: CreateYorubaArtifactUseCase,
        getAllUseCase: GetAllYorubaArtifactUseCase,
        getByIdUseCase: GetYorubaArtifactByIdUseCase
    ) {
        this.createUseCase = createUseCase;
        this.getAllUseCase = getAllUseCase;
        this.getByIdUseCase = getByIdUseCase;
    }

    /**
     * Handles HTTP POST requests to create a new YorubaArtifact.
     */
    public async handleCreate(requestBody: any): Promise<any> {
        try {
            // Extremely rigorous enterprise validation (mocked)
            if (!requestBody.name) throw new Error("Validation Failed: Name is required");

            const dto: CreateYorubaArtifactDTO = {
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
     * Handles HTTP GET requests to fetch all YorubaArtifact entities.
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
     * Handles HTTP GET requests to fetch a specific YorubaArtifact by ID.
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
