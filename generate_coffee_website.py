import os
import shutil
import random
import datetime

OUTPUT_DIR = "coffee-website"

def get_verbose_jsdoc(name, description, layer, file_type):
    return f"""/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: {name}
 * Layer: {layer}
 * Type: {file_type}
 * Description: {description}
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
"""

def generate_package_json():
    return """{
  "name": "coffee-website",
  "version": "1.0.0",
  "description": "Enterprise Artisanal Coffee Tasting Subscription Platform",
  "main": "src/index.tsx",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
"""

def generate_tsconfig_json():
    return """{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
"""

def generate_index_html():
    return """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Enterprise Artisanal Coffee</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f1ea;
            color: #3e2723;
        }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
"""

def generate_domain_model():
    content = get_verbose_jsdoc("CoffeeModel", "Domain Model representing an artisanal coffee.", "Domain", "Model")
    content += """
export interface ICoffeeMetadata {
    sku: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ICoffeeRating {
    userId: string;
    score: number;
    comment: string;
}

export interface ICoffee {
    id: string;
    name: string;
    origin: string;
    roastLevel: string;
    flavorProfile: string[];
    processingMethod: string;
    description: string;
    altitude: number;
    price: number;
    stock: number;
    ratings: ICoffeeRating[];
    metadata: ICoffeeMetadata;
}

export class CoffeeModel implements ICoffee {
    public id: string;
    public name: string;
    public origin: string;
    public roastLevel: string;
    public flavorProfile: string[];
    public processingMethod: string;
    public description: string;
    public altitude: number;
    public price: number;
    public stock: number;
    public ratings: ICoffeeRating[];
    public metadata: ICoffeeMetadata;

    constructor(
        id: string, name: string, origin: string, roastLevel: string, flavorProfile: string[],
        processingMethod: string, description: string, altitude: number, price: number, stock: number,
        ratings: ICoffeeRating[], metadata: ICoffeeMetadata
    ) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.roastLevel = roastLevel;
        this.flavorProfile = flavorProfile;
        this.processingMethod = processingMethod;
        this.description = description;
        this.altitude = altitude;
        this.price = price;
        this.stock = stock;
        this.ratings = ratings;
        this.metadata = metadata;
        this.validateInitialState();
    }

    private validateInitialState(): void {
        if (!this.id) throw new Error("Enterprise invariant violation: ID cannot be null.");
        if (this.price < 0) throw new Error("Enterprise invariant violation: Price cannot be negative.");
    }
}
"""
    return content

def generate_repository_interface():
    content = get_verbose_jsdoc("ICoffeeRepository", "Repository Interface for Coffee.", "Application", "Repository Interface")
    content += """
import { ICoffee } from '../../domain/models/CoffeeModel';

export interface ICoffeeRepository {
    findById(id: string): Promise<ICoffee | null>;
    findAll(): Promise<ICoffee[]>;
    findByOrigin(origin: string): Promise<ICoffee[]>;
}
"""
    return content

def generate_use_cases():
    content = get_verbose_jsdoc("CoffeeUseCases", "Use Cases for Coffee.", "Application", "Use Case")
    content += """
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
"""
    return content

def generate_coffee_data():
    content = get_verbose_jsdoc("CoffeeData", "Massive Dataset of Artisanal Coffees.", "Infrastructure", "Data")
    content += "import { ICoffee } from '../../domain/models/CoffeeModel';\n\n"
    content += "export const MOCK_COFFEE_DATA: ICoffee[] = [\n"

    origins = ["Ethiopia", "Colombia", "Brazil", "Costa Rica", "Guatemala", "Kenya", "Yemen", "Panama", "Rwanda", "Burundi"]
    roasts = ["Light", "Medium-Light", "Medium", "Medium-Dark", "Dark"]
    flavors = ["Fruity", "Floral", "Citrus", "Chocolate", "Nutty", "Caramel", "Spicy", "Earthy", "Berry", "Winey"]
    processes = ["Washed", "Natural", "Honey", "Anaerobic", "Wet-Hulled"]

    for i in range(1, 4001): # 4000 items, ~22 lines each = ~88,000 lines
        origin = random.choice(origins)
        roast = random.choice(roasts)
        process = random.choice(processes)
        flavor_profile = random.sample(flavors, k=3)
        flavor_str = ", ".join([f'"{f}"' for f in flavor_profile])

        content += f"""    {{
        id: "COF-{i:05d}",
        name: "Artisanal Selection {i}",
        origin: "{origin}",
        roastLevel: "{roast}",
        flavorProfile: [{flavor_str}],
        processingMethod: "{process}",
        description: "A meticulously crafted {roast.lower()} roast from {origin}, featuring a distinct {process.lower()} processing method. Exhibits profound notes of {flavor_profile[0].lower()} and {flavor_profile[1].lower()}.",
        altitude: {random.randint(1000, 2500)},
        price: {round(random.uniform(15.0, 50.0), 2)},
        stock: {random.randint(0, 500)},
        ratings: [
            {{ userId: "USR-{random.randint(100,999)}", score: {random.randint(3,5)}, comment: "Excellent choice for morning brew." }},
            {{ userId: "USR-{random.randint(100,999)}", score: {random.randint(1,5)}, comment: "Interesting flavor profile." }}
        ],
        metadata: {{
            sku: "SKU-COF-{i:05d}",
            isActive: true,
            createdAt: "{datetime.datetime.utcnow().isoformat()}Z",
            updatedAt: "{datetime.datetime.utcnow().isoformat()}Z"
        }}
    }},
"""
    content += "];\n"
    return content

def generate_repository_impl():
    content = get_verbose_jsdoc("CoffeeRepositoryImpl", "Repository Implementation for Coffee.", "Infrastructure", "Repository")
    content += """
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
"""
    return content

def generate_controller():
    content = get_verbose_jsdoc("CoffeeController", "Controller for Coffee.", "Presentation", "Controller")
    content += """
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
"""
    return content

def generate_react_components():
    content = get_verbose_jsdoc("App", "Main App Component.", "Presentation", "Component")
    content += """
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
"""
    return content

def generate_index_tsx():
    content = get_verbose_jsdoc("Index", "Application Entry Point.", "Presentation", "Entry")
    content += """
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
"""
    return content

def write_file_safe(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)

def main():
    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)

    os.makedirs(OUTPUT_DIR)

    print("Generating enterprise coffee website project...")

    write_file_safe(os.path.join(OUTPUT_DIR, "package.json"), generate_package_json())
    write_file_safe(os.path.join(OUTPUT_DIR, "tsconfig.json"), generate_tsconfig_json())
    write_file_safe(os.path.join(OUTPUT_DIR, "public", "index.html"), generate_index_html())

    write_file_safe(os.path.join(OUTPUT_DIR, "src", "domain", "models", "CoffeeModel.ts"), generate_domain_model())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "application", "repositories", "ICoffeeRepository.ts"), generate_repository_interface())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "application", "repositories", "CoffeeUseCases.ts"), generate_use_cases())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "infrastructure", "data", "CoffeeData.ts"), generate_coffee_data())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "infrastructure", "repositories", "CoffeeRepositoryImpl.ts"), generate_repository_impl())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "presentation", "controllers", "CoffeeController.ts"), generate_controller())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "presentation", "components", "App.tsx"), generate_react_components())
    write_file_safe(os.path.join(OUTPUT_DIR, "src", "index.tsx"), generate_index_tsx())

    print("Generation complete!")

if __name__ == "__main__":
    main()
