/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: CoffeeUseCases
 * Layer: Application
 * Type: Use Case
 * Description: Use Cases for Coffee.
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

import { ICoffeeRepository } from './ICoffeeRepository';
import { ICoffee } from '../../domain/models/CoffeeModel';

export class GetAllCoffeesUseCase {
    private repository: ICoffeeRepository;

    constructor(repository: ICoffeeRepository) {
        this.repository = repository;
    }

    public async execute(): Promise<ICoffee[]> {
        return await this.repository.findAll();
    }
}

export class GetCoffeeByIdUseCase {
    private repository: ICoffeeRepository;

    constructor(repository: ICoffeeRepository) {
        this.repository = repository;
    }

    public async execute(id: string): Promise<ICoffee | null> {
        return await this.repository.findById(id);
    }
}
