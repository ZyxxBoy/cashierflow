# Functional Requirements Specification (FRS)

## 1. Document Information

| Attribute | Description |
|---|---|
| Project | CashierFlow |
| Document Version | 1.0 |
| Product Version | 1.0.0 MVP |
| Author | ZyxxBoy |
| Status | Initial Baseline |

## 2. Priority Definitions

| Priority | Description |
|---|---|
| Must | Mandatory for MVP release |
| Should | Important but can be deferred |
| Could | Optional enhancement |
| Won't | Excluded from the current release |

## 3. Authentication Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-AUTH-001 | The system shall allow users to log in using email and password | Must |
| FR-AUTH-002 | The system shall allow authenticated users to log out | Must |
| FR-AUTH-003 | The system shall validate user credentials | Must |
| FR-AUTH-004 | The system shall maintain secure authentication sessions | Must |
| FR-AUTH-005 | The system shall validate user roles and permissions | Must |
| FR-AUTH-006 | The system shall allow users to change their passwords | Should |
| FR-AUTH-007 | The system shall reject inactive user accounts | Must |

## 4. Dashboard Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-DSH-001 | Display total net sales for the selected period | Must |
| FR-DSH-002 | Display total completed transactions | Must |
| FR-DSH-003 | Display the total number of active products | Must |
| FR-DSH-004 | Display low-stock product summary | Should |
| FR-DSH-005 | Display gross profit to authorized Owners | Must |
| FR-DSH-006 | Display sales trend charts | Should |
| FR-DSH-007 | Display recent transactions | Should |
| FR-DSH-008 | Display best-selling products | Should |
| FR-DSH-009 | Filter dashboard data by date range | Must |

## 5. Product Management Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-PRD-001 | Create new products | Must |
| FR-PRD-002 | Display product records | Must |
| FR-PRD-003 | Update product information | Must |
| FR-PRD-004 | Deactivate existing products | Must |
| FR-PRD-005 | Search products by name, SKU, or barcode | Must |
| FR-PRD-006 | Filter products by category and status | Should |
| FR-PRD-007 | Paginate product records | Must |
| FR-PRD-008 | Validate unique product SKUs | Must |
| FR-PRD-009 | Validate non-empty barcode uniqueness | Must |
| FR-PRD-010 | Validate selling price and purchase cost | Must |
| FR-PRD-011 | Assign a category and unit to products | Must |
| FR-PRD-012 | Configure minimum stock thresholds | Must |
| FR-PRD-013 | Upload product images | Could |
| FR-PRD-014 | Display current product stock | Must |

## 6. Category Management Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-CAT-001 | Create product categories | Must |
| FR-CAT-002 | Display category records | Must |
| FR-CAT-003 | Update category information | Must |
| FR-CAT-004 | Delete unused categories or deactivate referenced categories | Must |
| FR-CAT-005 | Validate unique category names | Must |
| FR-CAT-006 | Search and paginate categories | Should |

## 7. Unit Management Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-UNT-001 | Create product units | Must |
| FR-UNT-002 | Display available units | Must |
| FR-UNT-003 | Update unit information | Must |
| FR-UNT-004 | Delete unused units or deactivate referenced units | Must |
| FR-UNT-005 | Validate unique unit names or codes | Must |

## 8. Supplier Management Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-SUP-001 | Create supplier records | Must |
| FR-SUP-002 | Display supplier records | Must |
| FR-SUP-003 | Update supplier information | Must |
| FR-SUP-004 | Delete unused suppliers or deactivate referenced suppliers | Must |
| FR-SUP-005 | Store supplier contact information | Must |
| FR-SUP-006 | Associate suppliers with incoming stock records | Must |
| FR-SUP-007 | Search and paginate suppliers | Should |

## 9. Customer Management Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-CUS-001 | Create customer records | Should |
| FR-CUS-002 | Display customer records | Should |
| FR-CUS-003 | Update customer information | Should |
| FR-CUS-004 | Deactivate customer records | Should |
| FR-CUS-005 | Associate customers with transactions when provided | Should |
| FR-CUS-006 | Support anonymous retail transactions | Must |

## 10. Inventory Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-INV-001 | Display current product stock quantities | Must |
| FR-INV-002 | Record incoming stock | Must |
| FR-INV-003 | Record outgoing stock | Must |
| FR-INV-004 | Perform physical stock adjustments | Must |
| FR-INV-005 | Record stock movement history | Must |
| FR-INV-006 | Record stock quantities before and after each movement | Must |
| FR-INV-007 | Prevent stock quantities from becoming negative | Must |
| FR-INV-008 | Automatically deduct stock after successful checkout | Must |
| FR-INV-009 | Record descriptions or reasons for manual movements | Must |
| FR-INV-010 | Record the user responsible for each movement | Must |
| FR-INV-011 | Display low-stock indicators | Should |
| FR-INV-012 | Filter stock movements by product, type, and date | Should |
| FR-INV-013 | Preserve stock history for inactive products | Must |

## 11. Point of Sale Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-POS-001 | Display active, sellable products | Must |
| FR-POS-002 | Search products by name or SKU | Must |
| FR-POS-003 | Search products using barcode input | Must |
| FR-POS-004 | Add products to the shopping cart | Must |
| FR-POS-005 | Update product quantities in the cart | Must |
| FR-POS-006 | Remove products from the cart | Must |
| FR-POS-007 | Calculate line totals and subtotal | Must |
| FR-POS-008 | Apply an optional fixed transaction discount | Should |
| FR-POS-009 | Calculate the final transaction total | Must |
| FR-POS-010 | Accept cash payment | Must |
| FR-POS-011 | Calculate payment change | Must |
| FR-POS-012 | Validate product availability during checkout | Must |
| FR-POS-013 | Generate a unique invoice number | Must |
| FR-POS-014 | Record transaction and transaction items | Must |
| FR-POS-015 | Update inventory atomically during checkout | Must |
| FR-POS-016 | Prevent duplicate checkout transactions | Must |
| FR-POS-017 | Roll back failed checkout operations | Must |
| FR-POS-018 | Generate a transaction receipt | Must |
| FR-POS-019 | Reset the cart after successful checkout | Must |
| FR-POS-020 | Preserve the cart when checkout requires correction | Must |

## 12. Transaction Management Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-TRX-001 | Display transaction history | Must |
| FR-TRX-002 | Display transaction details | Must |
| FR-TRX-003 | Filter transactions by date range | Must |
| FR-TRX-004 | Filter transactions by cashier | Should |
| FR-TRX-005 | Search transactions by invoice number | Must |
| FR-TRX-006 | View and reprint transaction receipts | Should |
| FR-TRX-007 | Store historical product names and prices | Must |
| FR-TRX-008 | Store historical product purchase costs | Must |
| FR-TRX-009 | Restrict Cashiers to their own transactions | Must |
| FR-TRX-010 | Prevent modification of completed transactions | Must |

## 13. Reporting Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-RPT-001 | Generate sales reports | Must |
| FR-RPT-002 | Generate estimated gross profit reports | Must |
| FR-RPT-003 | Generate current stock reports | Must |
| FR-RPT-004 | Display daily transaction summaries | Must |
| FR-RPT-005 | Display monthly transaction summaries | Must |
| FR-RPT-006 | Filter reports by date range where applicable | Must |
| FR-RPT-007 | Export permitted reports to Excel | Should |
| FR-RPT-008 | Display best-selling products | Should |
| FR-RPT-009 | Restrict financial reports according to permissions | Must |

## 14. User Administration Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-USR-001 | Allow Owners to create user accounts | Must |
| FR-USR-002 | Display user records | Must |
| FR-USR-003 | Update user information | Must |
| FR-USR-004 | Activate or deactivate user accounts | Must |
| FR-USR-005 | Assign predefined user roles | Must |
| FR-USR-006 | Validate unique email addresses | Must |
| FR-USR-007 | Prevent removal of the last active Owner | Must |
| FR-USR-008 | Display predefined role permissions | Should |

## 15. Activity Log Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-LOG-001 | Record important authentication events | Should |
| FR-LOG-002 | Record master data changes | Should |
| FR-LOG-003 | Record user administration activities | Should |
| FR-LOG-004 | Record transaction-related activities | Should |
| FR-LOG-005 | Display activity logs to Owners | Should |
| FR-LOG-006 | Filter logs by user, action, and date | Could |

Inventory movement and transaction history remain mandatory
even if the general Activity Log module is deferred.

## 16. Settings Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-SET-001 | Configure store information | Should |
| FR-SET-002 | Configure receipt header and footer | Should |
| FR-SET-003 | Configure the store timezone | Should |
| FR-SET-004 | Support default store configuration | Must |
| FR-SET-005 | Restrict settings changes to Owners | Must |

## 17. Error Handling Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-ERR-001 | Display clear validation messages | Must |
| FR-ERR-002 | Display authentication failure messages | Must |
| FR-ERR-003 | Reject unauthorized operations | Must |
| FR-ERR-004 | Handle unavailable database connections safely | Must |
| FR-ERR-005 | Handle checkout conflicts safely | Must |
| FR-ERR-006 | Prevent exposure of internal error details | Must |
| FR-ERR-007 | Provide loading and empty states | Must |

## 18. HTTP Error Conventions

For REST-style Route Handlers:

| HTTP Status | Usage |
|---|---|
| 200 | Successful read or update |
| 201 | Successful resource creation |
| 400 | Malformed or invalid request |
| 401 | Authentication required |
| 403 | Insufficient permission |
| 404 | Resource not found |
| 409 | Duplicate data or business state conflict |
| 422 | Semantically invalid business input |
| 429 | Request rate limit exceeded |
| 500 | Unexpected internal error |
| 503 | Temporary service unavailability |

Server Actions may use structured success or error results
rather than direct HTTP status responses.

## 19. Requirements Traceability

| Business Objective | Related Modules |
|---|---|
| BO-001 | POS, Transactions |
| BO-002 | Inventory, POS |
| BO-003 | Master Data |
| BO-004 | Reporting |
| BO-005 | POS, Business Rules |
| BO-006 | Authentication, User Administration |
| BO-007 | Inventory Movements, Transactions |
| BO-008 | Dashboard, Reporting |
| BO-009 | All Modules |

## 20. Related Documents

- [Business Requirements](BRD.md)
- [Product Requirements](PRD.md)
- [Business Rules](business-rules.md)
- [User Stories](user-stories.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [MVP Scope](mvp-scope.md)
