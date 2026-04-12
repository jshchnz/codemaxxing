/**
 * @file Shipmentdomain_repositories.ts
 * @description Enterprise-grade implementation for Shipment in the domain/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IShipment } from '../models/Shipment';

/**
 * Repository interface for Shipment.
 * Follows the Repository pattern to abstract data access.
 */
export interface IShipmentRepository {
    findById(id: string): Promise<IShipment | null>;
    findAll(): Promise<IShipment[]>;
    save(entity: IShipment): Promise<void>;
    delete(id: string): Promise<void>;
    findByEthicalCriteria(criteria: any): Promise<IShipment[]>;
    countSustainableItems(): Promise<number>;
}