# Minimum Viable Product (MVP) Scope

## 1. Document Information

| Attribute | Description |
|---|---|
| Project | CashierFlow |
| Document Version | 1.0 |
| Target Release | v1.0.0 |
| Author | ZyxxBoy |
| Start Date | November 20, 2026 |
| Target Release Date | December 3, 2026 |
| Development Duration | 14 Days |
| Status | Initial Baseline |

## 2. MVP Objective

The objective of the CashierFlow MVP is to deliver a functional
single-store Point of Sale and Inventory Management System
that supports essential retail business operations.

The MVP prioritizes transaction correctness, inventory
consistency, security, maintainability, automated testing,
and successful cloud deployment.

## 3. MVP Technology Stack

| Category | Technology |
|---|---|
| Full-stack Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Library | shadcn/ui |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | Auth.js |
| Validation | Zod |
| Forms | React Hook Form |
| Client State | Zustand |
| Visualization | Recharts |
| Unit Testing | Vitest |
| E2E Testing | Playwright |
| CI | GitHub Actions |
| CD | Vercel |
| Database Hosting | Neon |
| Containerization | Docker |

Recharts and Docker development configuration are secondary
priorities if core MVP work requires additional time.

## 4. Prioritization Method

The project uses the MoSCoW prioritization method:

- Must Have: Mandatory release functionality.
- Should Have: Important but not release-blocking.
- Could Have: Optional improvements.
- Won't Have: Excluded from the current release.

## 5. Must Have Features

| ID | Feature | Acceptance Summary |
|---|---|---|
| MVP-001 | Authentication | Users can securely log in and log out |
| MVP-002 | RBAC | Server enforces predefined roles |
| MVP-003 | User Administration | Owners manage accounts and roles |
| MVP-004 | Product Management | Products can be created, updated, and deactivated |
| MVP-005 | Category Management | Product categories are manageable |
| MVP-006 | Unit Management | Product units are manageable |
| MVP-007 | Supplier Management | Suppliers can be maintained |
| MVP-008 | Stock In | Incoming inventory is recorded |
| MVP-009 | Stock Out | Outgoing inventory is recorded |
| MVP-010 | Stock Adjustment | Physical stock can be corrected |
| MVP-011 | Stock Movement History | All stock changes are traceable |
| MVP-012 | POS Product Search | Products can be found by name, SKU, and barcode |
| MVP-013 | Shopping Cart | Products and quantities can be managed |
| MVP-014 | Cash Payment | Valid cash checkout is supported |
| MVP-015 | Atomic Checkout | Transactions and stock changes are consistent |
| MVP-016 | Idempotency | Duplicate checkout is prevented |
| MVP-017 | Transaction History | Completed sales remain accessible |
| MVP-018 | Receipt Generation | A printable receipt is available |
| MVP-019 | Basic Dashboard | Essential business metrics are displayed |
| MVP-020 | Sales Report | Sales can be reviewed by period |
| MVP-021 | Gross Profit Report | Historical product margins are displayed |
| MVP-022 | Stock Report | Current inventory is displayed |
| MVP-023 | Automated Testing | Critical business operations are tested |
| MVP-024 | CI/CD | Automated checks and deployment are configured |
| MVP-025 | Documentation | Required project documentation is available |

## 6. Should Have Features

| ID | Feature |
|---|---|
| SH-001 | Customer management |
| SH-002 | Fixed transaction discounts |
| SH-003 | Low-stock indicators |
| SH-004 | Sales charts |
| SH-005 | Best-selling product analytics |
| SH-006 | Excel report exports |
| SH-007 | General activity logs |
| SH-008 | Store configuration UI |
| SH-009 | Receipt configuration UI |
| SH-010 | Password change functionality |
| SH-011 | Advanced table filtering |
| SH-012 | Docker-based local development setup |

## 7. Could Have Features

| ID | Feature |
|---|---|
| CH-001 | Product image upload |
| CH-002 | Dark mode |
| CH-003 | Advanced keyboard shortcuts |
| CH-004 | Custom receipt templates |
| CH-005 | Advanced product analytics |
| CH-006 | Additional dashboard visualization |

## 8. Won't Have Features

The following features are excluded from v1.0.0:

- Multi-store management.
- Multi-tenant architecture.
- Online payment gateways.
- QRIS payment processing.
- Credit sales and accounts receivable.
- Refund and return management.
- Cashier shift management.
- Customer loyalty programs.
- Offline POS and synchronization.
- Accounting integration.
- FIFO and weighted-average inventory valuation.
- Tax calculation engine.
- Automated purchase orders.
- Native mobile applications.
- Microservices.
- Redis caching.
- Kubernetes.

## 9. MVP Development Roadmap

| Day | Date | Focus | Deliverable |
|---|---|---|---|
| 01 | Nov 20 | Project Requirements | BRD, PRD, requirements, architecture |
| 02 | Nov 21 | Database Design | ERD, data dictionary, CRUD and RBAC matrices |
| 03 | Nov 22 | Project Initialization | Next.js, TypeScript, UI foundation |
| 04 | Nov 23 | Infrastructure and CI/CD | Prisma, Neon, GitHub Actions, Vercel |
| 05 | Nov 24 | Authentication | Login, sessions, RBAC |
| 06 | Nov 25 | Application Layout | Sidebar, navbar, shared components |
| 07 | Nov 26 | Product Master Data | Products, categories, units |
| 08 | Nov 27 | Business Master Data | Suppliers and optional customers |
| 09 | Nov 28 | Inventory | Stock operations and movement history |
| 10 | Nov 29 | POS Interface | Product search and cart |
| 11 | Nov 30 | Checkout Engine | Payment, atomic stock updates, idempotency |
| 12 | Dec 01 | Transaction Module | History, detail, receipts |
| 13 | Dec 02 | Reporting | Dashboard, reports, optional Excel export |
| 14 | Dec 03 | Release Preparation | Regression testing, fixes, deployment |

Testing and documentation should be performed throughout
development, not only on the final day.

## 10. Daily Development Workflow

1. Review relevant requirements.
2. Define the implementation task.
3. Create a feature branch.
4. Implement the feature.
5. Write or update relevant tests.
6. Run local quality checks.
7. Commit and push changes.
8. Create a pull request.
9. Review CI results.
10. Validate the preview deployment.
11. Merge approved changes.

## 11. Release Milestones

| Milestone | Target Day | Deliverable |
|---|---|---|
| M1 | Day 02 | Requirements and database design |
| M2 | Day 04 | Application foundation and deployment |
| M3 | Day 06 | Authentication and application layout |
| M4 | Day 09 | Master data and inventory |
| M5 | Day 12 | Functional POS and transaction module |
| M6 | Day 14 | Tested MVP release |

## 12. MVP Exit Criteria

### Functional Readiness

- [ ] Authentication works.
- [ ] RBAC is enforced.
- [ ] Master data modules are operational.
- [ ] Inventory operations preserve data consistency.
- [ ] POS supports valid cash transactions.
- [ ] Duplicate checkout is prevented.
- [ ] Transactions cannot create negative stock.
- [ ] Transaction receipts are available.
- [ ] Required reports are available.

### Quality Readiness

- [ ] ESLint checks pass.
- [ ] TypeScript checks pass.
- [ ] Required unit tests pass.
- [ ] Required integration tests pass.
- [ ] Critical E2E tests pass.
- [ ] Concurrent checkout tests pass.
- [ ] No known critical security defects remain.

### Deployment Readiness

- [ ] GitHub Actions is configured.
- [ ] Preview environment is available.
- [ ] Production database is configured.
- [ ] Database migrations are verified.
- [ ] Production configuration contains no exposed secrets.
- [ ] Vercel production deployment succeeds.
- [ ] Application smoke tests pass.
- [ ] Release documentation is available.

## 13. Required Deliverables

| Deliverable | Format |
|---|---|
| Source Code | GitHub Repository |
| Business Requirements | Markdown |
| Product Requirements | Markdown |
| Functional Requirements | Markdown |
| Non-Functional Requirements | Markdown |
| Business Rules | Markdown |
| User Stories | Markdown |
| Architecture | Markdown and Mermaid |
| ERD | Mermaid or equivalent |
| Data Dictionary | Markdown |
| CRUD Matrix | Markdown |
| RBAC Matrix | Markdown |
| Database Schema | Prisma |
| Database Migrations | SQL |
| CI Workflow | YAML |
| Automated Tests | TypeScript |
| Deployment Guide | Markdown |
| Live Demo | Vercel URL |

## 14. Public Demonstration Rules

- Use fictional store, product, and transaction data.
- Do not expose real customer information.
- Do not publish production database credentials.
- Do not provide unrestricted public Owner access to a
  persistent shared database.
- Use controlled demo accounts or an isolated demo environment.
- Document known free-tier infrastructure limitations.

## 15. Scope Change Policy

New feature requests must be evaluated against:

- Business value.
- Implementation complexity.
- Security implications.
- Testing requirements.
- Remaining development time.
- Impact on mandatory features.

When development falls behind schedule, optional features
must be deferred before mandatory security, correctness,
or testing requirements are reduced.

The release date is a planning target. An incomplete or unsafe
application must not be labeled as a finished MVP.

## 16. Versioning Strategy

| Version | Purpose |
|---|---|
| v0.1.0 | Initial foundation |
| v0.2.0 | Authentication and master data |
| v0.3.0 | Inventory management |
| v0.4.0 | Point of Sale and checkout |
| v1.0.0 | Completed MVP release |
| v1.x.x | Improvements and bug fixes |
| v2.0.0 | Major future enhancements |

## 17. Future Roadmap

### Phase 2

- QRIS and payment gateway integration.
- Refund and return management.
- Cashier shift management.
- Advanced analytics.
- Improved inventory valuation.
- Docker-based deployment.

### Phase 3

- Multi-branch management.
- Multi-tenant architecture.
- Offline functionality.
- Redis caching where justified.
- Accounting integration.
- Advanced monitoring.

## 18. Related Documents

- [Business Requirements](BRD.md)
- [Product Requirements](PRD.md)
- [Functional Requirements](functional-requirements.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [System Architecture](architecture.md)
