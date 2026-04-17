import sqlite3
import random
from faker import Faker
import os

def create_schema(cursor):
    tables = [
        """CREATE TABLE IF NOT EXISTS Countries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )""",
        """CREATE TABLE IF NOT EXISTS Regions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            country_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            FOREIGN KEY (country_id) REFERENCES Countries(id)
        )""",
        """CREATE TABLE IF NOT EXISTS Cities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            region_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            FOREIGN KEY (region_id) REFERENCES Regions(id)
        )""",
        """CREATE TABLE IF NOT EXISTS PostalCodes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code TEXT NOT NULL UNIQUE
        )""",
        """CREATE TABLE IF NOT EXISTS Streets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )""",
        """CREATE TABLE IF NOT EXISTS Addresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            city_id INTEGER NOT NULL,
            postal_code_id INTEGER NOT NULL,
            street_id INTEGER NOT NULL,
            house_number TEXT NOT NULL,
            FOREIGN KEY (city_id) REFERENCES Cities(id),
            FOREIGN KEY (postal_code_id) REFERENCES PostalCodes(id),
            FOREIGN KEY (street_id) REFERENCES Streets(id)
        )""",
        """CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            address_id INTEGER NOT NULL,
            birth_date DATE NOT NULL,
            FOREIGN KEY (address_id) REFERENCES Addresses(id)
        )""",
        """CREATE TABLE IF NOT EXISTS UserPhones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            phone_number TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Users(id)
        )""",
        """CREATE TABLE IF NOT EXISTS UserEmails (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            email TEXT NOT NULL UNIQUE,
            FOREIGN KEY (user_id) REFERENCES Users(id)
        )""",
        """CREATE TABLE IF NOT EXISTS Species (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )""",
        """CREATE TABLE IF NOT EXISTS Breeds (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            species_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            FOREIGN KEY (species_id) REFERENCES Species(id)
        )""",
        """CREATE TABLE IF NOT EXISTS Pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            breed_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            birth_date DATE,
            FOREIGN KEY (breed_id) REFERENCES Breeds(id)
        )""",
        """CREATE TABLE IF NOT EXISTS PetPrices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pet_id INTEGER NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            currency TEXT NOT NULL DEFAULT 'EUR',
            FOREIGN KEY (pet_id) REFERENCES Pets(id)
        )""",
        """CREATE TABLE IF NOT EXISTS FoodBrands (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )""",
        """CREATE TABLE IF NOT EXISTS FoodProducts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            brand_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            FOREIGN KEY (brand_id) REFERENCES FoodBrands(id)
        )""",
        """CREATE TABLE IF NOT EXISTS ToyMaterials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )""",
        """CREATE TABLE IF NOT EXISTS ToyProducts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            material_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            FOREIGN KEY (material_id) REFERENCES ToyMaterials(id)
        )""",
        """CREATE TABLE IF NOT EXISTS Purchases (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            purchase_date DATETIME NOT NULL,
            total_amount DECIMAL(10, 2) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Users(id)
        )""",
        """CREATE TABLE IF NOT EXISTS PurchaseItems (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            purchase_id INTEGER NOT NULL,
            item_type TEXT NOT NULL, -- 'pet', 'food', 'toy'
            item_id INTEGER NOT NULL,
            quantity INTEGER NOT NULL,
            price_at_purchase DECIMAL(10, 2) NOT NULL,
            FOREIGN KEY (purchase_id) REFERENCES Purchases(id)
        )"""
    ]
    for table_sql in tables:
        cursor.execute(table_sql)

def generate_data(cursor, num_records=5000):
    fake = Faker('it_IT')

    # 1. Countries
    # Faker doesn't have 5000 unique countries, so we generate them manually
    countries = [(f"{fake.country()} {i}",) for i in range(num_records)]
    cursor.executemany("INSERT INTO Countries (name) VALUES (?)", countries)

    # 2. Regions
    regions = [(random.randint(1, num_records), fake.administrative_unit()) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Regions (country_id, name) VALUES (?, ?)", regions)

    # 3. Cities
    cities = [(random.randint(1, num_records), fake.city()) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Cities (region_id, name) VALUES (?, ?)", cities)

    # 4. PostalCodes
    # Faker might not have 5000 unique postcodes without colliding quickly, append index
    postal_codes = [(f"{fake.postcode()}-{i}",) for i in range(num_records)]
    cursor.executemany("INSERT INTO PostalCodes (code) VALUES (?)", postal_codes)

    # 5. Streets
    streets = [(fake.street_name(),) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Streets (name) VALUES (?)", streets)

    # 6. Addresses
    addresses = [(
        random.randint(1, num_records),
        random.randint(1, num_records),
        random.randint(1, num_records),
        fake.building_number()
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Addresses (city_id, postal_code_id, street_id, house_number) VALUES (?, ?, ?, ?)", addresses)

    # 7. Users
    users = [(
        fake.first_name(),
        fake.last_name(),
        random.randint(1, num_records),
        fake.date_of_birth(minimum_age=18, maximum_age=90).strftime('%Y-%m-%d')
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Users (first_name, last_name, address_id, birth_date) VALUES (?, ?, ?, ?)", users)

    # 8. UserPhones
    user_phones = [(
        random.randint(1, num_records),
        fake.phone_number()
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO UserPhones (user_id, phone_number) VALUES (?, ?)", user_phones)

    # 9. UserEmails
    user_emails = [(
        random.randint(1, num_records),
        f"user{i}_{fake.email()}"
    ) for i in range(num_records)]
    cursor.executemany("INSERT INTO UserEmails (user_id, email) VALUES (?, ?)", user_emails)

    # 10. Species
    species = [(f"Specie {i}",) for i in range(1, num_records + 1)] # Fake unique species
    cursor.executemany("INSERT INTO Species (name) VALUES (?)", species)

    # 11. Breeds
    breeds = [(
        random.randint(1, num_records),
        fake.word().capitalize() + " Breed"
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Breeds (species_id, name) VALUES (?, ?)", breeds)

    # 12. Pets
    pets = [(
        random.randint(1, num_records),
        fake.first_name(),
        fake.date_between(start_date='-10y', end_date='today').strftime('%Y-%m-%d')
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Pets (breed_id, name, birth_date) VALUES (?, ?, ?)", pets)

    # 13. PetPrices
    pet_prices = [(
        random.randint(1, num_records),
        round(random.uniform(10.0, 5000.0), 2)
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO PetPrices (pet_id, price) VALUES (?, ?)", pet_prices)

    # 14. FoodBrands
    food_brands = [(f"{fake.company()} {i}",) for i in range(num_records)]
    cursor.executemany("INSERT INTO FoodBrands (name) VALUES (?)", food_brands)

    # 15. FoodProducts
    food_products = [(
        random.randint(1, num_records),
        fake.catch_phrase(),
        round(random.uniform(5.0, 100.0), 2)
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO FoodProducts (brand_id, name, price) VALUES (?, ?, ?)", food_products)

    # 16. ToyMaterials
    toy_materials = [(f"Material {i}",) for i in range(1, num_records + 1)]
    cursor.executemany("INSERT INTO ToyMaterials (name) VALUES (?)", toy_materials)

    # 17. ToyProducts
    toy_products = [(
        random.randint(1, num_records),
        fake.word().capitalize() + " Toy",
        round(random.uniform(2.0, 50.0), 2)
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO ToyProducts (material_id, name, price) VALUES (?, ?, ?)", toy_products)

    # 18. Purchases
    purchases = [(
        random.randint(1, num_records),
        fake.date_time_between(start_date='-5y', end_date='now').strftime('%Y-%m-%d %H:%M:%S'),
        round(random.uniform(10.0, 1000.0), 2)
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO Purchases (user_id, purchase_date, total_amount) VALUES (?, ?, ?)", purchases)

    # 19. PurchaseItems
    item_types = ['pet', 'food', 'toy']
    purchase_items = [(
        random.randint(1, num_records),
        random.choice(item_types),
        random.randint(1, num_records),
        random.randint(1, 5),
        round(random.uniform(2.0, 500.0), 2)
    ) for _ in range(num_records)]
    cursor.executemany("INSERT INTO PurchaseItems (purchase_id, item_type, item_id, quantity, price_at_purchase) VALUES (?, ?, ?, ?, ?)", purchase_items)


def main():
    db_name = "pet_shop.db"

    if os.path.exists(db_name):
        os.remove(db_name)

    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()

    print("Creating schema...")
    create_schema(cursor)

    print("Generating and inserting 5000 rows for each table...")
    generate_data(cursor, 5000)

    conn.commit()
    conn.close()
    print("Database generation complete!")

if __name__ == "__main__":
    main()
