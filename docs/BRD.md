# Business Requirements Document (BRD)

## 1. Document Information

| Attribute | Description |
|---|---|
| Project Name | CashierFlow |
| Document Type | Business Requirements Document |
| Document Version | 1.0 |
| Product Version | 1.0.0 MVP |
| Author | ZyxxBoy |
| Created Date | November 20, 2026 |
| Status | Initial Baseline |

## 2. Executive Summary

CashierFlow is a web-based Point of Sale (POS) and Inventory
Management System designed for small and medium-sized businesses,
retail stores, and minimarkets.

The system aims to digitalize sales transactions, inventory
management, product administration, and business reporting
through a centralized and secure application.

CashierFlow will be developed as a full-stack software engineering
portfolio project, demonstrating practical business requirements
analysis, database design, application development, automated
testing, and Continuous Integration and Continuous Deployment
(CI/CD).

## 3. Business Background

Small retail businesses may rely on manual transaction records,
spreadsheets, or disconnected applications to manage daily
business operations.

These processes can introduce inaccurate inventory records,
transaction errors, limited visibility into sales performance,
and difficulties in preparing business reports.

CashierFlow provides an integrated solution that connects
sales transactions, inventory movements, product management,
and reporting within a single web application.

These business problems are assumed for the portfolio project
and have not been validated through field research.

## 4. Business Problems

| ID | Business Problem | Business Impact |
|---|---|---|
| BP-001 | Manual transaction recording | Increased risk of human error |
| BP-002 | Manual inventory updates | Inaccurate stock information |
| BP-003 | Disconnected business records | Inconsistent operational data |
| BP-004 | Manual sales reporting | Delayed business decisions |
| BP-005 | Limited access control | Unauthorized access risks |
| BP-006 | Missing transaction history | Difficult transaction auditing |
| BP-007 | Missing stock movement history | Difficulty tracking inventory changes |
| BP-008 | Limited profit visibility | Difficulty evaluating performance |

## 5. Business Objectives

| ID | Objective |
|---|---|
| BO-001 | Digitalize retail sales transactions |
| BO-002 | Automate inventory updates |
| BO-003 | Centralize product and business records |
| BO-004 | Provide accessible sales reports |
| BO-005 | Improve transaction accuracy |
| BO-006 | Implement role-based access control |
| BO-007 | Improve inventory traceability |
| BO-008 | Provide gross profit visibility |
| BO-009 | Establish a maintainable digital platform |

## 6. Stakeholders

| Stakeholder | Responsibility |
|---|---|
| Business Owner | Business monitoring, financial reports, user management |
| Administrator | Product, supplier, customer, and inventory management |
| Cashier | Sales transactions and receipt generation |
| Customer | Purchasing products and receiving receipts |
| Developer | System development, testing, and maintenance |
| System Administrator | Deployment and system configuration |

The System Administrator is a technical responsibility rather
than an additional application role in the MVP.

## 7. Target Users

### 7.1 Business Owner

Responsible for monitoring sales, estimated gross profit,
inventory performance, user access, and overall business
operations.

### 7.2 Administrator

Responsible for maintaining master data, managing inventory,
and monitoring operational transactions.

### 7.3 Cashier

Responsible for processing customer purchases, receiving cash
payments, and generating transaction receipts.

## 8. Current Business Process (AS-IS)

1. A customer selects products.
2. The cashier calculates product prices manually.
3. The customer completes payment.
4. The cashier records the transaction.
5. Inventory records are updated manually.
6. Sales reports are prepared separately.

### Current Process Limitations

- Duplicate data entry.
- Potential calculation errors.
- Delayed stock updates.
- Limited transaction traceability.
- Time-consuming reporting.

## 9. Proposed Business Process (TO-BE)

1. The cashier authenticates into CashierFlow.
2. The cashier searches for or scans a product.
3. Selected products are added to the shopping cart.
4. The system calculates the transaction total.
5. The cashier receives cash payment.
6. The system validates prices, stock, and payment.
7. The system records the transaction atomically.
8. Inventory quantities are updated automatically.
9. Stock movements are recorded.
10. A transaction receipt is generated.
11. Sales data becomes available in business reports.

## 10. Business Scope

### 10.1 In Scope

- Authentication and authorization.
- Product and category management.
- Unit and supplier management.
- Inventory management.
- Stock movement history.
- Point of Sale transactions.
- Cash payment processing.
- Transaction history.
- Basic receipt generation.
- Sales and gross profit reporting.
- User administration.
- Automated testing.
- CI/CD and cloud deployment.

Customer management, advanced reporting, and configurable
store settings are secondary MVP priorities.

### 10.2 Out of Scope

- Multi-store and multi-branch management.
- Multi-tenant architecture.
- Online payment gateway integration.
- QRIS payment processing.
- Customer loyalty programs.
- Refund and return management.
- Cashier shift management.
- Offline transaction synchronization.
- Accounting system integration.
- Employee payroll.
- E-commerce integration.

## 11. Expected Business Benefits

- Faster transaction processing.
- Improved inventory accuracy.
- Reduced manual calculations.
- Improved access to sales information.
- Better transaction traceability.
- Simplified inventory administration.
- Improved business data security.

These benefits are expected outcomes, not measured results.

## 12. Success Criteria

| ID | Success Criteria |
|---|---|
| SC-001 | Authorized users can securely access the application |
| SC-002 | Administrators can manage products and inventory |
| SC-003 | Cashiers can complete valid cash transactions |
| SC-004 | Successful transactions update stock automatically |
| SC-005 | Failed transactions do not modify inventory |
| SC-006 | Transactions cannot create negative stock |
| SC-007 | Owners can access sales and gross profit reports |
| SC-008 | Duplicate checkout requests do not create duplicate sales |
| SC-009 | Required automated tests pass |
| SC-010 | The MVP is accessible through a public demo URL |

## 13. Assumptions

- The system supports one retail store.
- Users have a stable internet connection.
- All monetary amounts use Indonesian Rupiah (IDR).
- Products are sold in whole-number quantities.
- Cash payments are sufficient for the MVP.
- The application is initially intended for non-commercial
  demonstration and portfolio purposes.
- All public demonstration data is fictional.

## 14. Constraints

- The MVP development period is limited to 14 days.
- The application is developed by a single developer.
- Initial deployment uses free-tier infrastructure where possible.
- The system must operate within hosting resource limitations.
- Advanced features will be deferred when necessary.
- Security and transaction consistency take priority over
  optional functionality.

## 15. Business Risks

| ID | Risk | Mitigation |
|---|---|---|
| R-001 | Development scope becomes too large | Prioritize mandatory MVP features |
| R-002 | Incorrect inventory calculations | Database transactions and constraints |
| R-003 | Duplicate transactions | Checkout idempotency |
| R-004 | Unauthorized access | Server-side RBAC |
| R-005 | Hosting limitations | Optimize queries and resource usage |
| R-006 | Database connection exhaustion | Connection pooling |
| R-007 | Accidental data exposure | Environment variables and access control |
| R-008 | Concurrent checkout conflicts | Conditional stock updates and atomic transactions |

## 16. Project Dependencies

- Next.js.
- TypeScript.
- PostgreSQL.
- Prisma ORM.
- Auth.js.
- GitHub.
- GitHub Actions.
- Vercel.
- Neon.

## 17. Project Acceptance

The CashierFlow MVP is considered ready for release when all
mandatory business requirements are implemented, critical
business rules are validated, required automated tests pass,
and the application is successfully deployed.

## 18. Related Documents

- [Product Requirements Document](PRD.md)
- [Functional Requirements](functional-requirements.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [Business Rules](business-rules.md)
- [User Stories](user-stories.md)
- [MVP Scope](mvp-scope.md)
- [System Architecture](architecture.md)
