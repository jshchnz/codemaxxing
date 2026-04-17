/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: ICoffeeRepository
 * Layer: Application
 * Type: Repository Interface
 * Description: Repository Interface for Coffee.
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

import { ICoffee } from '../../domain/models/CoffeeModel';

export interface ICoffeeRepository {
    findById(id: string): Promise<ICoffee | null>;
    findAll(): Promise<ICoffee[]>;
    findByOrigin(origin: string): Promise<ICoffee[]>;
}
