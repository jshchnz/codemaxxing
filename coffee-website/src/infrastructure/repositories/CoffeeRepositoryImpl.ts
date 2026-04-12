/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: CoffeeRepositoryImpl
 * Layer: Infrastructure
 * Type: Repository
 * Description: Repository Implementation for Coffee.
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

import { ICoffeeRepository } from '../../application/repositories/ICoffeeRepository';
import { ICoffee } from '../../domain/models/CoffeeModel';
import { MOCK_COFFEE_DATA } from '../data/CoffeeData';

export class CoffeeRepositoryImpl implements ICoffeeRepository {
    private data: ICoffee[] = MOCK_COFFEE_DATA;

    public async findById(id: string): Promise<ICoffee | null> {
        const coffee = this.data.find(c => c.id === id);
        return coffee || null;
    }

    public async findAll(): Promise<ICoffee[]> {
        return this.data;
    }

    public async findByOrigin(origin: string): Promise<ICoffee[]> {
        return this.data.filter(c => c.origin === origin);
    }
}
