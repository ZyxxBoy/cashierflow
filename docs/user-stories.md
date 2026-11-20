# User Stories and Acceptance Criteria

## 1. Document Information

| Attribute | Description |
|---|---|
| Project | CashierFlow |
| Document Version | 1.0 |
| Product Version | 1.0.0 MVP |
| Author | ZyxxBoy |
| Status | Initial Baseline |

## 2. User Story Format

As a [user role],
I want to [perform an action],
So that [business benefit].

Acceptance criteria follow the Given-When-Then format.

## 3. User Story Backlog

| ID | Role | User Story | Priority |
|---|---|---|---|
| US-001 | User | Log in securely to access the application | Must |
| US-002 | User | Log out to end the current session | Must |
| US-003 | Owner | View business performance | Must |
| US-004 | Admin | Create and manage products | Must |
| US-005 | Admin | Manage product categories | Must |
| US-006 | Admin | Manage product units | Must |
| US-007 | Admin | Manage suppliers | Must |
| US-008 | Admin | Manage customer information | Should |
| US-009 | Admin | Record incoming stock | Must |
| US-010 | Admin | Record outgoing stock | Must |
| US-011 | Admin | Correct physical stock discrepancies | Must |
| US-012 | Admin | Review inventory movement history | Must |
| US-013 | Cashier | Search or scan products | Must |
| US-014 | Cashier | Manage a shopping cart | Must |
| US-015 | Cashier | Apply transaction discounts | Should |
| US-016 | Cashier | Complete cash checkout | Must |
| US-017 | Cashier | Generate transaction receipts | Must |
| US-018 | Cashier | View personal transaction history | Must |
| US-019 | Owner | Review all sales transactions | Must |
| US-020 | Owner | View estimated gross profit reports | Must |
| US-021 | Admin | View inventory reports | Must |
| US-022 | Owner | Export permitted reports | Should |
| US-023 | Owner | Manage application users | Must |
| US-024 | Owner | Assign user roles | Must |
| US-025 | Owner | Review activity logs | Should |
| US-026 | Owner | Configure store information | Should |
| US-027 | Developer | Execute automated CI checks | Must |
| US-028 | Developer | Deploy the application safely | Must |

## 4. Authentication

### US-001: Secure Login

As a registered user,
I want to log in securely,
So that I can access authorized application features.

Related requirements: FR-AUTH-001 to FR-AUTH-007.

### Acceptance Criteria

#### Scenario: Successful Login

    Given an active user account exists
    And the user provides valid credentials
    When the user submits the login form
    Then the system creates an authenticated session
    And redirects the user to an authorized page

#### Scenario: Invalid Credentials

    Given a user provides an incorrect password
    When the user submits the login form
    Then authentication is rejected
    And no authenticated session is created
    And a generic authentication error is displayed

#### Scenario: Inactive Account

    Given an inactive user account exists
    When the user submits valid credentials
    Then authentication is rejected

#### Scenario: Unauthorized Access

    Given a Cashier is authenticated
    When the Cashier requests the user administration module
    Then access is denied by the server
    And no restricted information is returned

### US-002: Logout

    Given a user has an authenticated session
    When the user logs out
    Then the current session is ended
    And protected pages require authentication again

## 5. Dashboard

### US-003: Business Dashboard

As an Owner,
I want to view sales and inventory summaries,
So that I can monitor business performance.

### Acceptance Criteria

    Given completed transactions exist
    When the Owner opens the dashboard
    Then the system displays sales totals
    And displays transaction counts
    And displays estimated gross profit

    Given no transactions exist in the selected period
    When the Owner opens the dashboard
    Then zero-value metrics are displayed
    And the page does not return an application error

    Given an Admin accesses the dashboard
    Then gross profit and confidential costs are not returned

## 6. Master Data

### US-004: Product Management

As an Admin,
I want to create and update product information,
So that products can be sold accurately.

Related requirements: FR-PRD-001 to FR-PRD-014.

#### Scenario: Create Product

    Given an authorized Admin is authenticated
    And a valid category and unit exist
    When the Admin submits valid product information
    Then the product is successfully created
    And the initial stock is zero

#### Scenario: Duplicate SKU

    Given a product with SKU PRD-001 exists
    When another product uses the same normalized SKU
    Then product creation is rejected

#### Scenario: Invalid Selling Price

    Given an Admin submits a selling price of zero
    When the product form is submitted
    Then validation fails
    And no product is created

#### Scenario: Deactivate Product

    Given a product has existing transaction records
    When the Admin deactivates the product
    Then the product is excluded from new sales
    And historical transactions remain accessible

### US-005 and US-006: Categories and Units

    Given an authorized Admin is authenticated
    When valid category or unit data is submitted
    Then the record is created

    Given a category or unit is referenced by products
    When permanent deletion is requested
    Then deletion is rejected
    And deactivation is available where appropriate

### US-007: Supplier Management

    Given an authorized Admin is authenticated
    When valid supplier information is submitted
    Then the supplier is available for inventory operations

### US-008: Customer Management

    Given customer management is implemented
    When an authorized user creates a valid customer
    Then the customer may be associated with a transaction

    Given a walk-in customer has no registered record
    When checkout is submitted
    Then customer registration is not required

## 7. Inventory Management

### US-009: Stock In

As an Admin,
I want to record incoming products,
So that current inventory reflects received goods.

#### Scenario: Successful Stock In

    Given a product has 20 units in stock
    When an Admin records 10 additional units
    And provides a valid movement reason
    Then the product stock becomes 30
    And a STOCK_IN movement is created
    And the responsible user is recorded

#### Scenario: Invalid Incoming Quantity

    Given a product has 20 units in stock
    When an Admin submits a negative incoming quantity
    Then the operation is rejected
    And the stock remains 20

### US-010: Stock Out

    Given a product has 20 units in stock
    When an Admin records an outgoing quantity of 5
    And provides a valid reason
    Then the product stock becomes 15
    And a STOCK_OUT movement is created

    Given a product has 5 units in stock
    When an Admin attempts to remove 10 units
    Then the operation is rejected
    And the stock remains 5

### US-011: Stock Adjustment

    Given the recorded stock is 20 units
    And the actual physical stock is 18 units
    When an Admin submits an adjustment with a reason
    Then the recorded stock becomes 18
    And an ADJUSTMENT movement of -2 is created

### US-012: Stock Movement History

    Given inventory movements exist
    When an Admin opens the movement history
    Then movement types, quantities, dates, and users are displayed

    Given a recorded stock movement exists
    When a user attempts to modify its historical quantity
    Then the operation is rejected

## 8. Point of Sale

### US-013: Product Search

As a Cashier,
I want to find products quickly,
So that I can reduce transaction processing time.

    Given an active product exists
    When its name, SKU, or barcode is entered
    Then the matching product is displayed

    Given an inactive product exists
    When its barcode is entered
    Then it is not offered for sale

### US-014: Shopping Cart

    Given an active product costs IDR 15,000
    When the Cashier adds two units to the cart
    Then the displayed line total is IDR 30,000

    Given the cart contains two units of a product
    When the same product is added again
    Then the quantity becomes three

    Given the last product is removed
    Then the cart becomes empty
    And checkout is unavailable

### US-015: Transaction Discount

    Given discounts are enabled
    And the transaction subtotal is IDR 50,000
    When a discount of IDR 5,000 is applied
    Then the final total is IDR 45,000

    Given the transaction subtotal is IDR 50,000
    When a discount of IDR 60,000 is submitted
    Then the server rejects the discount

## 9. Checkout

### US-016: Cash Payment and Checkout

As a Cashier,
I want to complete a customer purchase,
So that the sale and inventory changes are recorded accurately.

Related requirements: FR-POS-009 to FR-POS-020.

#### Scenario: Successful Checkout

    Given a product costs IDR 15,000
    And the product purchase cost is IDR 10,000
    And the available stock is 20 units
    When the Cashier purchases 3 units
    And submits cash received of IDR 50,000
    Then the transaction total is IDR 45,000
    And the change is IDR 5,000
    And the remaining stock is 17 units
    And one completed transaction is created
    And transaction item records are created
    And stock movements are created
    And a unique invoice number is assigned

#### Scenario: Insufficient Stock

    Given the available stock is 2 units
    When the Cashier purchases 3 units
    Then checkout is rejected
    And the remaining stock is 2 units
    And no completed transaction is created

#### Scenario: Insufficient Payment

    Given the payable total is IDR 45,000
    When the Cashier submits IDR 30,000
    Then checkout is rejected
    And no inventory is deducted

#### Scenario: Price Changed During Checkout

    Given the cart displays a price of IDR 15,000
    And the current database price is IDR 17,000
    When checkout is submitted
    Then the system rejects the outdated price
    And requests confirmation of the updated price
    And no transaction is created

#### Scenario: Duplicate Checkout

    Given a checkout request has already succeeded
    When the same user retries the same idempotency key
    And submits an identical normalized payload
    Then the original transaction is returned
    And no additional inventory is deducted

#### Scenario: Idempotency Conflict

    Given a successful checkout key already exists
    When the same key is submitted with different quantities
    Then the request is rejected as a conflict
    And the original transaction remains unchanged

#### Scenario: Concurrent Checkout

    Given a product has one unit available
    When two Cashiers purchase the last unit concurrently
    Then exactly one checkout succeeds
    And only one successful sale is recorded
    And the final stock is zero

#### Scenario: Database Failure

    Given a checkout database transaction has started
    When an error occurs while creating its stock movement
    Then all checkout database changes are rolled back
    And no partial transaction remains

#### Scenario: Client-Side Price Manipulation

    Given a product costs IDR 15,000 in the database
    When a user submits a manipulated total of IDR 1
    Then the manipulated amount is not accepted
    And the server uses authoritative pricing rules

## 10. Transaction History and Receipts

### US-017: Transaction Receipt

    Given a checkout succeeds
    When the Cashier opens its receipt
    Then the receipt displays the invoice number
    And transaction date
    And purchased items
    And quantities and selling prices
    And total, cash received, and change

    Given a product price changes after the sale
    When the original receipt is displayed again
    Then the original selling price is preserved

### US-018: Personal Transaction History

    Given a Cashier is authenticated
    When the Cashier opens transaction history
    Then only transactions created by that Cashier are displayed

    Given another Cashier owns a transaction
    When the current Cashier requests it by identifier
    Then access is denied

### US-019: All Transactions

    Given an authorized Owner or Admin is authenticated
    When transaction history is opened
    Then all permitted sales records are displayed
    And the records can be filtered by date

    Given a transaction is completed
    When modification or deletion is requested
    Then the operation is rejected

## 11. Reports

### US-020: Gross Profit Report

    Given completed net sales equal IDR 45,000
    And historical product costs equal IDR 32,000
    When the Owner opens the gross profit report
    Then estimated gross profit equals IDR 13,000

    Given the current product purchase cost changes
    When the original sales period is viewed again
    Then historical gross profit remains unchanged

### US-021: Inventory Report

    Given valid products and inventory records exist
    When an Admin opens the stock report
    Then current inventory quantities are displayed

### US-022: Export Reports

    Given report export is implemented
    And an authorized user selects a valid date range
    When the user exports the report
    Then an Excel file containing permitted data is generated

    Given the requesting user is an Admin
    Then restricted gross profit information is excluded

## 12. User Administration

### US-023 and US-024: Users and Roles

    Given an Owner is authenticated
    When valid user information and a predefined role are submitted
    Then a user account is created
    And the password is stored securely

    Given an active Cashier is deactivated
    When that Cashier requests a protected operation
    Then the system rejects access

    Given only one active Owner remains
    When deactivation or role demotion is requested
    Then the operation is rejected

### US-025: Activity Logs

    Given general activity logging is implemented
    When an important user administration action occurs
    Then an activity record is created
    And an authorized Owner can review it

### US-026: Store Configuration

    Given store configuration is implemented
    When an Owner updates valid store information
    Then subsequent applicable receipt and display information
    uses the updated configuration

## 13. DevOps

### US-027: Continuous Integration

As a Developer,
I want automated quality checks,
So that code defects are discovered before release.

    Given a pull request is submitted
    When GitHub Actions executes the CI workflow
    Then dependencies are installed
    And lint checks execute
    And TypeScript checks execute
    And automated tests execute
    And the application build is verified

    Given a required CI check fails
    Then the change must not be released to production

### US-028: Continuous Deployment

    Given a feature branch is pushed
    When Vercel processes the branch
    Then a preview deployment is available

    Given required release checks have passed
    And the release is merged into main
    When the production deployment runs
    Then the application is built and deployed
    And the deployed application can be smoke-tested

## 14. Definition of Ready

A user story is ready for development when:

- Its business purpose is understood.
- Acceptance criteria are defined.
- Required permissions are identified.
- Dependencies are understood.
- Relevant business rules are available.
- The implementation scope is sufficiently clear.

## 15. Definition of Done

A user story is complete when:

- Acceptance criteria are satisfied.
- Relevant business rules are implemented.
- Required authorization checks exist.
- Inputs are validated on the server.
- Relevant automated tests pass.
- Lint and type checks pass.
- No secrets are committed.
- Documentation is updated where necessary.
- The code is committed using a meaningful Git message.
- The pull request passes required CI checks.
- The feature is reviewed in the preview environment.

## 16. Related Documents

- [Functional Requirements](functional-requirements.md)
- [Business Rules](business-rules.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [MVP Scope](mvp-scope.md)
