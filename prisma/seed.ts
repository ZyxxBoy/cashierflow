import "dotenv/config";

import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not configured in .env");
}

const adapter = new PrismaNeon({
    connectionString,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Starting CashierFlow database seed...");

    // 1. Categories
    const food = await prisma.category.upsert({
        where: { name: "Food" },
        update: {},
        create: {
            name: "Food",
            description: "Food products",
        },
    });

    const beverages = await prisma.category.upsert({
        where: { name: "Beverages" },
        update: {},
        create: {
            name: "Beverages",
            description: "Drinks and beverages",
        },
    });

    // 2. Units
    const piece = await prisma.unit.upsert({
        where: { code: "PCS" },
        update: {},
        create: {
            name: "Piece",
            code: "PCS",
        },
    });

    const bottle = await prisma.unit.upsert({
        where: { code: "BTL" },
        update: {},
        create: {
            name: "Bottle",
            code: "BTL",
        },
    });

    // 3. Products
    await prisma.product.upsert({
        where: { sku: "CF-IND-001" },
        update: {
            name: "Indomie Goreng",
            purchaseCost: 2500,
            sellingPrice: 3500,
        },
        create: {
            name: "Indomie Goreng",
            sku: "CF-IND-001",
            categoryId: food.id,
            unitId: piece.id,
            purchaseCost: 2500,
            sellingPrice: 3500,
            stock: 0,
            minimumStock: 5,
        },
    });

    await prisma.product.upsert({
        where: { sku: "CF-AQUA-001" },
        update: {
            name: "Aqua 600ml",
            purchaseCost: 3000,
            sellingPrice: 4000,
        },
        create: {
            name: "Aqua 600ml",
            sku: "CF-AQUA-001",
            categoryId: beverages.id,
            unitId: bottle.id,
            purchaseCost: 3000,
            sellingPrice: 4000,
            stock: 0,
            minimumStock: 5,
        },
    });

    // 4. Store Settings
    await prisma.storeSetting.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            storeName: "CashierFlow Demo Store",
            timezone: "Asia/Jakarta",
            receiptFooter: "Thank you for shopping!",
        },
    });

    // 5. Verification
    const [categories, units, products] = await Promise.all([
        prisma.category.count(),
        prisma.unit.count(),
        prisma.product.count(),
    ]);

    console.log("Database seed completed successfully!");
    console.log(`Categories: ${categories}`);
    console.log(`Units: ${units}`);
    console.log(`Products: ${products}`);
}

main()
    .catch((error) => {
        console.error("Database seeding failed:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
