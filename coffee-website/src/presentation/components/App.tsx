/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: App
 * Layer: Presentation
 * Type: Component
 * Description: Main App Component.
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

import React, { useEffect, useState } from 'react';
import { CoffeeController } from '../controllers/CoffeeController';
import { ICoffee } from '../../domain/models/CoffeeModel';
import { CoffeeRepositoryImpl } from '../../infrastructure/repositories/CoffeeRepositoryImpl';
import { GetAllCoffeesUseCase, GetCoffeeByIdUseCase } from '../../application/repositories/CoffeeUseCases';

const repo = new CoffeeRepositoryImpl();
const getAll = new GetAllCoffeesUseCase(repo);
const getById = new GetCoffeeByIdUseCase(repo);
const controller = new CoffeeController(getAll, getById);

export const App: React.FC = () => {
    const [coffees, setCoffees] = useState<ICoffee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const load = async () => {
            const data = await controller.fetchAll();
            // Only show first 50 to avoid crashing browser with 4000 items
            setCoffees(data.slice(0, 50));
            setLoading(false);
        };
        load();
    }, []);

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading Enterprise Coffee Database...</div>;

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <header style={{ borderBottom: '2px solid #8d6e63', marginBottom: '2rem', paddingBottom: '1rem' }}>
                <h1 style={{ margin: 0, color: '#3e2723' }}>Enterprise Artisanal Coffee Tasting Platform</h1>
                <p style={{ color: '#5d4037', fontStyle: 'italic' }}>Curated selections for the discerning connoisseur.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {coffees.map(coffee => (
                    <div key={coffee.id} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ margin: '0 0 0.5rem 0', color: '#4e342e', fontSize: '1.25rem' }}>{coffee.name}</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem', color: '#795548' }}>
                            <span><strong>Origin:</strong> {coffee.origin}</span>
                            <span><strong>Roast:</strong> {coffee.roastLevel}</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: '#424242' }}>{coffee.description}</p>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {coffee.flavorProfile.map(f => (
                                <span key={f} style={{ backgroundColor: '#efebe9', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#5d4037' }}>{f}</span>
                            ))}
                        </div>
                        <div style={{ marginTop: '1.5rem', borderTop: '1px solid #d7ccc8', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3e2723' }}>${coffee.price.toFixed(2)}</span>
                            <button style={{ backgroundColor: '#4e342e', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Subscribe</button>
                        </div>
                    </div>
                ))}
            </div>
            <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#8d6e63', fontSize: '0.875rem' }}>
                <p>Showing 50 of 4000+ available enterprise selections.</p>
                <p>&copy; 2024 Artisanal Enterprise Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};
