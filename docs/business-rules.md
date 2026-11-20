# Business Rules Specification

## 1. Document Information

| Attribute | Description |
|---|---|
| Project | CashierFlow |
| Document Version | 1.0 |
| Product Version | 1.0.0 MVP |
| Author | ZyxxBoy |
| Status | Initial Baseline |

## 2. Purpose

Business rules define the conditions, restrictions, calculations,
and policies that govern CashierFlow operations.

All critical business rules must be enforced on the server.
Client-side validation is intended to improve user experience,
not replace server-side validation.

## 3. Authentication and Authorization Rules

| ID | Rule |
|---|---|
| BR-AUTH-001 | Every user must have a unique email address |
| BR-AUTH-002 | Passwords must never be stored as plaintext |
| BR-AUTH-003 | Only active users can access authenticated features |
| BR-AUTH-004 | Every user must have one predefined role |
| BR-AUTH-005 | Only authorized Owners can manage application users |
| BR-AUTH-006 | Cashiers cannot access product purchase costs or gross profit |
| BR-AUTH-007 | Permission checks must be performed on the server |
| BR-AUTH-008 | The last active Owner cannot be deactivated or demoted |
| BR-AUTH-009 | User status and effective permissions must be revalidated for protected operations |

### Supported Roles

- OWNER
- ADMIN
- CASHIER

## 4. Product Rules

| ID | Rule |
|---|---|
| BR-PRD-001 | Each product must have a unique SKU |
| BR-PRD-002 | A barcode must be unique when provided |
| BR-PRD-003 | Product names must not be empty |
| BR-PRD-004 | Selling prices must be greater than zero |
| BR-PRD-005 | Purchase costs must not be negative |
| BR-PRD-006 | Every product must have a valid category and unit |
| BR-PRD-007 | Inactive products cannot be sold |
| BR-PRD-008 | Inventory quantities must be whole numbers |
| BR-PRD-009 | Initial product stock must default to zero |
| BR-PRD-010 | Product stock cannot be changed directly through product editing |
| BR-PRD-011 | Products referenced by transactions or stock movements must not be permanently deleted |
| BR-PRD-012 | Minimum stock thresholds must not be negative |

Empty optional barcodes must be normalized to NULL.

Selling below purchase cost is permitted because promotions
or clearance sales may result in negative gross profit.

## 5. Master Data Rules

| ID | Rule |
|---|---|
| BR-MD-001 | Category names must be unique |
| BR-MD-002 | Unit identifiers must be unique |
| BR-MD-003 | Referenced master data must not be permanently deleted |
| BR-MD-004 | Inactive categories and units cannot be assigned to new products |
| BR-MD-005 | Inactive suppliers cannot be assigned to new incoming stock records |
| BR-MD-006 | A customer is optional for retail transactions |
| BR-MD-007 | Historical references must remain available after deactivation |

Unused master data may be deleted when it has no dependent
records and the requesting user is authorized.

## 6. Inventory Rules

| ID | Rule |
|---|---|
| BR-INV-001 | Product stock must never be negative |
| BR-INV-002 | Incoming stock quantities must be positive integers |
| BR-INV-003 | Outgoing stock quantities must be positive integers |
| BR-INV-004 | Outgoing quantities must not exceed available stock |
| BR-INV-005 | Every inventory change must create a stock movement record |
| BR-INV-006 | Stock movements must record the previous and new stock |
| BR-INV-007 | Manual stock movements must include a reason |
| BR-INV-008 | Every stock movement must identify its responsible user |
| BR-INV-009 | Stock updates and movement records must be committed atomically |
| BR-INV-010 | Inventory history must not be modified or deleted through the application |
| BR-INV-011 | Physical adjustment targets must be non-negative integers |
| BR-INV-012 | A zero-change adjustment must not create a stock movement |
| BR-INV-013 | Concurrent stock operations must preserve data consistency |

### Stock Movement Types

| Type | Description |
|---|---|
| STOCK_IN | Incoming inventory |
| STOCK_OUT | Manual outgoing inventory |
| ADJUSTMENT | Physical inventory correction |
| SALE | Inventory deduction from a completed sale |

### Stock In Formula

    new_stock = current_stock + quantity

Example:

    Current stock = 20
    Incoming quantity = 10
    New stock = 30

### Stock Out Formula

    new_stock = current_stock - quantity

Example:

    Current stock = 20
    Outgoing quantity = 5
    New stock = 15

### Stock Adjustment Formula

    adjustment = physical_stock - current_stock
    new_stock = physical_stock

Example:

    System stock = 20
    Physical stock = 18
    Adjustment = -2
    New stock = 18

## 7. Shopping Cart Rules

| ID | Rule |
|---|---|
| BR-CART-001 | Only active products can be added to the cart |
| BR-CART-002 | Product quantities must be positive integers |
| BR-CART-003 | Repeated selection of the same product increases its quantity |
| BR-CART-004 | Products can be removed before checkout |
| BR-CART-005 | Empty shopping carts cannot be checked out |
| BR-CART-006 | Client-side prices are estimates until validated by the server |
| BR-CART-007 | Duplicate product entries must be consolidated before validation |

Adding a product to the cart does not reserve its inventory.

Actual stock availability is validated during checkout.

## 8. Transaction Calculation Rules

| ID | Rule |
|---|---|
| BR-CAL-001 | Monetary amounts must use integer IDR values |
| BR-CAL-002 | Line total equals unit price multiplied by quantity |
| BR-CAL-003 | Subtotal equals the sum of all transaction line totals |
| BR-CAL-004 | Transaction discounts must not be negative |
| BR-CAL-005 | Discounts must not exceed the subtotal |
| BR-CAL-006 | Final payable total must be greater than zero |
| BR-CAL-007 | Cash received must not be less than the payable total |
| BR-CAL-008 | Change equals cash received minus the payable total |
| BR-CAL-009 | The server must recalculate all transaction values |
| BR-CAL-010 | Amounts and calculations must remain within safe numeric bounds |

### Calculation Formulas

    line_total = selling_price * quantity

    subtotal = sum(line_total)

    total = subtotal - discount

    change = cash_received - total

    cost_of_goods = sum(unit_cost_snapshot * quantity)

    gross_profit = total - cost_of_goods

### Example Transaction

| Product | Quantity | Unit Price | Unit Cost | Line Total |
|---|---|---|---|---|
| Product A | 2 | 15000 | 10000 | 30000 |
| Product B | 1 | 20000 | 12000 | 20000 |

    Subtotal       = IDR 50,000
    Discount       = IDR  5,000
    Total          = IDR 45,000
    Cash received  = IDR 50,000
    Change         = IDR  5,000
    Product cost   = IDR 32,000
    Gross profit   = IDR 13,000

Gross profit is calculated using the purchase cost stored
when each sale is completed.

FIFO, weighted-average inventory valuation, taxes, and
formal accounting reports are outside the MVP scope.

## 9. Checkout Rules

| ID | Rule |
|---|---|
| BR-CHK-001 | Only Owners and Cashiers can create sales |
| BR-CHK-002 | Checkout must contain at least one product |
| BR-CHK-003 | Every product must be active and available |
| BR-CHK-004 | Checkout quantities must not exceed current stock |
| BR-CHK-005 | Every transaction must have a unique invoice number |
| BR-CHK-006 | Every checkout attempt must include an idempotency key |
| BR-CHK-007 | Transaction records, items, payment data, and stock movements must be atomic |
| BR-CHK-008 | Failed checkout must not leave partial database changes |
| BR-CHK-009 | Concurrent checkout must not cause overselling |
| BR-CHK-010 | Successful checkout must preserve historical product prices and costs |
| BR-CHK-011 | Cash is the only supported payment method in the MVP |
| BR-CHK-012 | Changed selling prices must be confirmed by the Cashier before completing checkout |
| BR-CHK-013 | Completed transactions must remain immutable |
| BR-CHK-014 | Client-supplied totals must never be trusted as authoritative |

### Invoice Format

    CF-YYYYMMDD-<unique-suffix>

Example:

    CF-20261120-8F42A1

The date uses the configured store timezone.

The final implementation must enforce invoice uniqueness at
the database level and handle identifier collisions safely.
The suffix format may be refined during database design.

### Checkout Processing

1. Authenticate the requesting user.
2. Verify checkout permission.
3. Validate and normalize the request payload.
4. Check the idempotency key.
5. Start the database transaction.
6. Read and validate current product information.
7. Recalculate transaction amounts.
8. Validate cash payment.
9. Create transaction and transaction item records.
10. Update each product using a conditional stock deduction.
11. Record the corresponding stock movements.
12. Commit the database transaction.
13. Return the completed transaction.
14. Clear the client shopping cart.

On failure, the transaction is rolled back.

## 10. Idempotency Rules

| ID | Rule |
|---|---|
| BR-IDP-001 | Generate a unique key for each intended checkout |
| BR-IDP-002 | Scope idempotency keys to the requesting user |
| BR-IDP-003 | Enforce key uniqueness using a database constraint |
| BR-IDP-004 | Reusing a key with the same payload returns the original successful result |
| BR-IDP-005 | Reusing a key with a different payload must be rejected |
| BR-IDP-006 | Concurrent requests using the same key must not create multiple transactions |
| BR-IDP-007 | A corrected checkout request must use a new key |

The system should store a normalized request fingerprint
alongside the idempotency key.

If the network connection fails after a successful checkout,
the client must retry with the same key to discover the
original transaction result.

## 11. Transaction History Rules

| ID | Rule |
|---|---|
| BR-TRX-001 | Completed transactions cannot be edited or deleted |
| BR-TRX-002 | Transaction items must preserve historical product names |
| BR-TRX-003 | Transaction items must preserve historical SKUs |
| BR-TRX-004 | Transaction items must preserve historical unit prices |
| BR-TRX-005 | Transaction items must preserve historical purchase costs |
| BR-TRX-006 | Changes to product data cannot alter historical transaction amounts |
| BR-TRX-007 | Cashiers may only access their own transactions |
| BR-TRX-008 | Receipt generation must use stored transaction data |

## 12. Reporting Rules

| ID | Rule |
|---|---|
| BR-RPT-001 | Sales reports must use completed transactions |
| BR-RPT-002 | Gross profit must use historical purchase cost snapshots |
| BR-RPT-003 | Net sales equal sales subtotal minus discounts |
| BR-RPT-004 | Cash received must not be counted as sales revenue |
| BR-RPT-005 | Change given to customers must not be counted as an expense |
| BR-RPT-006 | Report date boundaries must use the configured store timezone |
| BR-RPT-007 | Gross profit reports are restricted to Owners |
| BR-RPT-008 | Stock reports must reflect current inventory |
| BR-RPT-009 | Product sales rankings use completed transaction item quantities |

## 13. Audit Rules

| ID | Rule |
|---|---|
| BR-AUD-001 | Important records must identify the responsible user where applicable |
| BR-AUD-002 | Records must contain creation timestamps |
| BR-AUD-003 | Mutable records must contain update timestamps |
| BR-AUD-004 | Transactions and stock movements must remain traceable |
| BR-AUD-005 | Audit logs must not expose credentials or secrets |

General activity logging is a secondary MVP priority.
Transaction and inventory traceability are mandatory.

## 14. Data Validation Rules

| Field | Validation |
|---|---|
| Email | Valid email format and unique normalized value |
| Password | At least 8 characters; secure password handling |
| Product Name | Required, maximum 150 characters |
| SKU | Required, maximum 50 characters, unique |
| Barcode | Optional, maximum 64 characters, unique when present |
| Selling Price | Positive integer IDR |
| Purchase Cost | Non-negative integer IDR |
| Quantity | Positive integer, bounded by stock and configured limits |
| Stock | Non-negative integer |
| Minimum Stock | Non-negative integer |
| Discount | Non-negative integer, subject to payable total |
| Cash Received | Integer, greater than or equal to total |

Exact database sizes and numeric limits will be finalized
during the Day 02 physical database design.

## 15. Error Conditions

| Error Code | Description |
|---|---|
| INVALID_CREDENTIALS | Authentication failed |
| INACTIVE_USER | User account is inactive |
| FORBIDDEN | User has insufficient permission |
| INVALID_INPUT | Request validation failed |
| PRODUCT_NOT_FOUND | Product does not exist |
| PRODUCT_INACTIVE | Product is not available for sale |
| PRICE_CHANGED | Current selling price requires confirmation |
| INSUFFICIENT_STOCK | Requested quantity exceeds stock |
| INVALID_DISCOUNT | Discount does not satisfy business rules |
| INSUFFICIENT_PAYMENT | Cash received is insufficient |
| DUPLICATE_SKU | SKU is already registered |
| DUPLICATE_BARCODE | Barcode is already registered |
| IDEMPOTENCY_CONFLICT | Checkout key is reused with different data |
| TRANSACTION_CONFLICT | Concurrent operation requires retry |
| INTERNAL_ERROR | Unexpected application failure |

## 16. Related Documents

- [Functional Requirements](functional-requirements.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [User Stories](user-stories.md)
- [System Architecture](architecture.md)
