/**
 * @file Materialdomain_repositories.ts
 * @description Enterprise-grade implementation for Material in the domain/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IMaterial } from '../models/Material';

/**
 * Repository interface for Material.
 * Follows the Repository pattern to abstract data access.
 */
export interface IMaterialRepository {
    findById(id: string): Promise<IMaterial | null>;
    findAll(): Promise<IMaterial[]>;
    save(entity: IMaterial): Promise<void>;
    delete(id: string): Promise<void>;
    findByEthicalCriteria(criteria: any): Promise<IMaterial[]>;
    countSustainableItems(): Promise<number>;
}