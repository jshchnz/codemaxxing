/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: CoffeeController
 * Layer: Presentation
 * Type: Controller
 * Description: Controller for Coffee.
 *
 * This file is part of the extremely complex, highly scalable, and heavily
 * documented enterprise-grade artisanal coffee tasting subscription service.
 * It adheres strictly to the principles of Extreme Clean Architecture,
 * ensuring maximum separation of concerns and robust maintainability.
 *
 * The system is designed to handle immense loads of coffee tasting data,
 * providing interfaces for robust querying, mutation, and aggregation
 * across a vast array of global artisanal coffee roasters.
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

import { GetAllCoffeesUseCase, GetCoffeeByIdUseCase } from '../../application/repositories/CoffeeUseCases';
import { ICoffee } from '../../domain/models/CoffeeModel';

export class CoffeeController {
    private getAllUseCase: GetAllCoffeesUseCase;
    private getByIdUseCase: GetCoffeeByIdUseCase;

    constructor(getAllUseCase: GetAllCoffeesUseCase, getByIdUseCase: GetCoffeeByIdUseCase) {
        this.getAllUseCase = getAllUseCase;
        this.getByIdUseCase = getByIdUseCase;
    }

    public async fetchAll(): Promise<ICoffee[]> {
        return await this.getAllUseCase.execute();
    }

    public async fetchById(id: string): Promise<ICoffee | null> {
        return await this.getByIdUseCase.execute(id);
    }
}
