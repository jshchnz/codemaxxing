/**
 * @file Artisandomain_repositories.ts
 * @description Enterprise-grade implementation for Artisan in the domain/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IArtisan } from '../models/Artisan';

/**
 * Repository interface for Artisan.
 * Follows the Repository pattern to abstract data access.
 */
export interface IArtisanRepository {
    findById(id: string): Promise<IArtisan | null>;
    findAll(): Promise<IArtisan[]>;
    save(entity: IArtisan): Promise<void>;
    delete(id: string): Promise<void>;
    findByEthicalCriteria(criteria: any): Promise<IArtisan[]>;
    countSustainableItems(): Promise<number>;
}