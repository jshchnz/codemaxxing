/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: Index
 * Layer: Presentation
 * Type: Entry
 * Description: Application Entry Point.
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

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './presentation/components/App';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Enterprise initialization failure: Root container not found.');
}
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
