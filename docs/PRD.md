# Product Requirements Document (PRD)

## 1. Document Information

| Attribute | Description |
|---|---|
| Product Name | CashierFlow |
| Document Version | 1.0 |
| Product Version | 1.0.0 MVP |
| Author | ZyxxBoy |
| Created Date | November 20, 2026 |
| Status | Initial Baseline |

## 2. Product Overview

CashierFlow is a modern web-based Point of Sale and Inventory
Management System designed to simplify retail business operations.

The application integrates product management, stock control,
cash transactions, transaction history, and business reporting
within a unified platform.

## 3. Product Vision

To provide a reliable, secure, and user-friendly digital
retail management platform that enables small businesses
to manage sales and inventory efficiently.

## 4. Product Goals

- Simplify daily sales transactions.
- Maintain consistent inventory records.
- Provide centralized business data.
- Enable secure role-based access.
- Improve sales and gross profit visibility.
- Deliver a responsive and intuitive user experience.
- Demonstrate production-oriented software engineering practices.

## 5. Product Specification

| Attribute | Description |
|---|---|
| Application Type | Web Application |
| Architecture | Modular Monolith |
| Frontend | Next.js and React |
| Backend | Next.js Server Actions and Route Handlers |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | Auth.js |
| Deployment | Vercel |
| Database Hosting | Neon |
| Currency | Indonesian Rupiah (IDR) |
| Store Timezone | Configurable IANA timezone |
| Default Timezone | Asia/Jakarta |
| Supported Stores | Single store |
| Supported Devices | Desktop and tablet |
| Development Period | 14 days |

## 6. User Personas

### 6.1 Owner

Goals:

- Monitor overall business performance.
- Review sales and gross profit.
- Manage application users.
- Control access to business information.
- Monitor inventory conditions.

### 6.2 Administrator

Goals:

- Maintain accurate product information.
- Manage categories, units, and suppliers.
- Record inventory movements.
- Monitor stock availability.
- Review operational transactions.

### 6.3 Cashier

Goals:

- Find products quickly.
- Process customer purchases.
- Calculate payment and change accurately.
- Generate transaction receipts.
- Access personal transaction history.

## 7. Application Modules

| Module | Description | Priority |
|---|---|---|
| Authentication | Login, logout, session management | Must |
| Dashboard | Business and inventory summary | Must |
| Point of Sale | Product selection, cart, checkout | Must |
| Master Data | Products, categories, units, suppliers | Must |
| Customers | Customer records | Should |
| Inventory | Stock management and movements | Must |
| Transactions | Sales history and transaction details | Must |
| Reports | Sales, gross profit, and stock reports | Must |
| Administration | Users and predefined role assignment | Must |
| Activity Log | Important user activity records | Should |
| Settings | Store and receipt configuration | Should |

## 8. Navigation Structure

CashierFlow
- Dashboard
- Point of Sale
- Master Data
  - Products
  - Categories
  - Units
  - Suppliers
  - Customers
- Inventory
  - Stock Overview
  - Stock In
  - Stock Out
  - Stock Adjustment
  - Stock Movements
- Transactions
  - Sales History
  - Transaction Detail
- Reports
  - Sales Report
  - Gross Profit Report
  - Stock Report
- Administration
  - Users
  - Roles
  - Activity Log
- Settings
  - Store Profile
  - Receipt Settings

Optional pages may be omitted from the initial release if
their corresponding features are deferred.

## 9. Role-Based Access Control

The MVP supports three predefined application roles.

| Permission | Owner | Admin | Cashier |
|---|---|---|---|
| View Dashboard | Yes | Yes | No |
| View Gross Profit | Yes | No | No |
| Manage Products | Yes | Yes | No |
| Manage Categories | Yes | Yes | No |
| Manage Units | Yes | Yes | No |
| Manage Suppliers | Yes | Yes | No |
| Manage Customers | Yes | Yes | No |
| Manage Inventory | Yes | Yes | No |
| Access POS | Yes | No | Yes |
| Create Transaction | Yes | No | Yes |
| View All Transactions | Yes | Yes | No |
| View Own Transactions | Yes | Yes | Yes |
| View Sales Reports | Yes | Yes | No |
| View Stock Reports | Yes | Yes | No |
| Export Permitted Reports | Yes | Yes | No |
| Manage Users | Yes | No | No |
| Assign Predefined Roles | Yes | No | No |
| View Activity Logs | Yes | No | No |
| Manage Store Settings | Yes | No | No |

The Roles page displays predefined roles and their access
permissions. Custom role creation is not required in the MVP.

Product information exposed to Cashiers must exclude purchase
costs and confidential gross profit information.

## 10. Module Requirements

### 10.1 Authentication

- Login using email and password.
- Secure password hashing.
- Session management.
- Logout.
- Active and inactive account states.
- Server-side authorization.
- Protected application routes.

Public self-registration is not supported.

### 10.2 Dashboard

- Total sales.
- Total transactions.
- Total active products.
- Low-stock summary.
- Estimated gross profit for Owners only.
- Sales trend charts when time permits.
- Recent transactions.
- Date-based filtering.

### 10.3 Product Management

Required product information:

- Product name.
- Unique SKU.
- Optional unique barcode.
- Category.
- Unit.
- Purchase cost.
- Selling price.
- Current stock quantity.
- Minimum stock threshold.
- Active status.

Product stock is modified through inventory operations and
successful checkout, not through arbitrary product editing.

### 10.4 Inventory Management

- View available stock.
- Record incoming inventory.
- Record outgoing inventory.
- Adjust physical stock.
- Record adjustment reasons.
- Maintain stock movement history.
- Prevent negative inventory.
- Display low-stock indicators.

### 10.5 Point of Sale

The POS interface must support:

- Product search by name, SKU, or barcode.
- Barcode input from keyboard-compatible scanners.
- Product selection.
- Shopping cart management.
- Quantity adjustment.
- Real-time subtotal calculation.
- Optional transaction discounts.
- Cash payment input.
- Change calculation.
- Checkout confirmation.
- Receipt generation.

All final transaction values must be independently
validated and calculated by the server.

### 10.6 Transaction Management

- Display transaction history.
- Search transactions by invoice number.
- View transaction details.
- Filter transactions by date.
- Restrict access according to user roles.
- Preserve historical prices and purchase costs.
- Provide receipt viewing and printing.

Completed transactions cannot be edited or deleted through
the application.

### 10.7 Reporting

Sales Report:

- Total sales.
- Total transactions.
- Total discounts.
- Sales by selected period.

Gross Profit Report:

- Net sales.
- Historical product cost.
- Estimated gross profit.

Stock Report:

- Available stock.
- Low-stock products.
- Stock movement history.

Reports use completed transactions and the configured store
timezone. Excel export is a secondary priority.

### 10.8 User Administration

- Create user accounts.
- Update user information.
- Assign Owner, Admin, or Cashier roles.
- Activate or deactivate accounts.
- Protect the last active Owner account.

### 10.9 Settings

- Store name.
- Store address.
- Store phone number.
- Store timezone.
- Receipt header and footer.

Default configuration may be used if the Settings UI is deferred.

## 11. Primary User Flow

1. User logs into the application.
2. The system validates authentication and user status.
3. The system determines the user's role.
4. The user accesses authorized modules.
5. A Cashier or Owner opens the POS page.
6. Products are added to the shopping cart.
7. The user receives cash payment.
8. The user submits checkout.
9. The server validates the checkout request.
10. The database commits the transaction and stock updates.
11. The system displays a successful transaction receipt.

## 12. User Experience Requirements

- Consistent application navigation.
- Clear form validation messages.
- Responsive tables and layouts.
- Loading indicators for asynchronous operations.
- Empty states for unavailable records.
- Confirmation dialogs for destructive actions.
- Clear success and failure notifications.
- Keyboard-friendly POS operations.
- Accessible labels and visible focus indicators.

## 13. Product Success Metrics

| Metric | Target |
|---|---|
| Mandatory feature completion | 100% |
| Critical checkout test cases | All passing |
| Negative stock incidents in tests | Zero |
| Duplicate transaction incidents in tests | Zero |
| Unauthorized access test failures | Zero |
| Required CI checks | All passing |
| Deployment | Accessible demo URL |
| Documentation | Complete and maintained |

These are release targets and must be verified through testing.

## 14. Release Criteria

The MVP can be released when:

- All Must Have features are implemented.
- Authentication and authorization are functional.
- Inventory operations preserve data consistency.
- Valid checkout transactions succeed.
- Invalid checkout transactions are rejected safely.
- Required unit, integration, and E2E tests pass.
- CI/CD configuration is operational.
- Deployment documentation is available.
- No known critical security defects remain.

## 15. Future Enhancements

- Multi-store and multi-branch management.
- Multi-tenant architecture.
- QRIS and payment gateway integration.
- Refund and return management.
- Cashier shift management.
- Advanced inventory costing.
- Loyalty programs.
- Offline POS.
- Advanced analytics.
- Accounting integration.

## 16. Related Documents

- [Business Requirements](BRD.md)
- [Functional Requirements](functional-requirements.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [Business Rules](business-rules.md)
- [User Stories](user-stories.md)
- [MVP Scope](mvp-scope.md)
- [System Architecture](architecture.md)
