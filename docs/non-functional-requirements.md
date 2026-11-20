# Non-Functional Requirements Specification

## 1. Document Information

| Attribute | Description |
|---|---|
| Project | CashierFlow |
| Document Version | 1.0 |
| Product Version | 1.0.0 MVP |
| Author | ZyxxBoy |
| Status | Initial Baseline |

## 2. Purpose

This document defines the quality attributes, technical
constraints, security requirements, performance targets,
and operational standards of CashierFlow.

## 3. Performance

| ID | Requirement | Priority |
|---|---|---|
| NFR-PERF-001 | Target p95 response time below 500 ms for standard read requests under warm conditions | Should |
| NFR-PERF-002 | Target checkout response time below 2 seconds under normal warm conditions | Should |
| NFR-PERF-003 | Use server-side pagination for large data tables | Must |
| NFR-PERF-004 | Apply database indexes to frequently queried fields | Must |
| NFR-PERF-005 | Avoid unnecessary database queries and N+1 query patterns | Must |
| NFR-PERF-006 | Use bounded database connection pooling | Must |
| NFR-PERF-007 | Limit maximum pagination and checkout payload sizes | Must |

### Performance Test Baseline

Initial test conditions:

- 1,000 product records.
- 5,000 synthetic completed transactions.
- 10 concurrent active users.
- Warm application and database connections.
- Representative deployment or local test environment.

These numbers define initial engineering targets, not
guaranteed hosting capacity or measured performance.

Cold starts and network latency must be reported separately.

## 4. Security

| ID | Requirement | Priority |
|---|---|---|
| NFR-SEC-001 | Store passwords using a suitable password hashing algorithm | Must |
| NFR-SEC-002 | Validate all untrusted input on the server | Must |
| NFR-SEC-003 | Require authentication for private operations | Must |
| NFR-SEC-004 | Enforce role-based authorization on the server | Must |
| NFR-SEC-005 | Store credentials and secrets in environment variables | Must |
| NFR-SEC-006 | Use HTTPS in deployed environments | Must |
| NFR-SEC-007 | Use parameterized database queries | Must |
| NFR-SEC-008 | Protect session cookies with appropriate security attributes | Must |
| NFR-SEC-009 | Implement rate limiting for authentication and sensitive operations | Must |
| NFR-SEC-010 | Protect state-changing operations against CSRF | Must |
| NFR-SEC-011 | Prevent unauthorized access to another user's transactions | Must |
| NFR-SEC-012 | Never expose password hashes or secret values to clients | Must |
| NFR-SEC-013 | Avoid logging passwords, tokens, and sensitive information | Must |
| NFR-SEC-014 | Review dependency security vulnerabilities | Must |
| NFR-SEC-015 | Use fictional data in the public portfolio environment | Must |
| NFR-SEC-016 | Invalidate or reject sessions belonging to inactive users | Must |

## 5. Reliability and Data Integrity

| ID | Requirement | Priority |
|---|---|---|
| NFR-REL-001 | Execute checkout as an atomic database transaction | Must |
| NFR-REL-002 | Prevent negative inventory quantities | Must |
| NFR-REL-003 | Support checkout idempotency | Must |
| NFR-REL-004 | Preserve historical transaction data | Must |
| NFR-REL-005 | Roll back incomplete checkout operations | Must |
| NFR-REL-006 | Enforce primary key, foreign key, and uniqueness constraints | Must |
| NFR-REL-007 | Handle concurrent inventory updates safely | Must |
| NFR-REL-008 | Use database migrations for schema changes | Must |
| NFR-REL-009 | Document database recovery procedures and limitations | Must |
| NFR-REL-010 | Handle transient database failures without creating duplicate transactions | Must |

## 6. Availability

| ID | Requirement | Priority |
|---|---|---|
| NFR-AVL-001 | Provide an accessible deployed demonstration | Must |
| NFR-AVL-002 | Provide a lightweight application health endpoint | Must |
| NFR-AVL-003 | Display understandable service failure messages | Must |
| NFR-AVL-004 | Document infrastructure limitations | Must |

The MVP uses free-tier infrastructure where appropriate.

A guaranteed uptime SLA, high-availability cluster, and
disaster recovery infrastructure are outside the MVP scope.

## 7. Usability and Accessibility

| ID | Requirement | Priority |
|---|---|---|
| NFR-USA-001 | Support desktop and tablet layouts | Must |
| NFR-USA-002 | Provide consistent navigation and controls | Must |
| NFR-USA-003 | Display validation errors near relevant inputs | Must |
| NFR-USA-004 | Provide clear loading and empty states | Must |
| NFR-USA-005 | Provide destructive action confirmations | Must |
| NFR-USA-006 | Support keyboard navigation for primary workflows | Must |
| NFR-USA-007 | Use accessible labels and visible focus indicators | Must |
| NFR-USA-008 | Use sufficient text and control color contrast | Must |
| NFR-USA-009 | Support mobile layouts for non-POS pages | Should |

The POS page is primarily optimized for desktop and tablet.

## 8. Maintainability

| ID | Requirement | Priority |
|---|---|---|
| NFR-MNT-001 | Use TypeScript strict mode | Must |
| NFR-MNT-002 | Use a modular folder structure | Must |
| NFR-MNT-003 | Separate UI, business logic, and database access | Must |
| NFR-MNT-004 | Use shared validation schemas | Must |
| NFR-MNT-005 | Use ESLint for static code analysis | Must |
| NFR-MNT-006 | Use consistent formatting with Prettier | Must |
| NFR-MNT-007 | Maintain meaningful Git commit messages | Must |
| NFR-MNT-008 | Document important architectural decisions | Must |
| NFR-MNT-009 | Maintain environment variable examples without secrets | Must |
| NFR-MNT-010 | Avoid unnecessary architectural complexity | Must |

## 9. Scalability

| ID | Requirement | Priority |
|---|---|---|
| NFR-SCL-001 | Use paginated database queries | Must |
| NFR-SCL-002 | Keep server-side business logic stateless where practical | Must |
| NFR-SCL-003 | Support increased product and transaction records through proper indexing | Must |
| NFR-SCL-004 | Keep modules sufficiently isolated for future extensions | Should |

Microservices, distributed caching, and Kubernetes are not
required for the initial application.

## 10. Testability

| ID | Requirement | Priority |
|---|---|---|
| NFR-TST-001 | Use Vitest for unit testing | Must |
| NFR-TST-002 | Test transaction total calculations | Must |
| NFR-TST-003 | Test input and business rule validation | Must |
| NFR-TST-004 | Test checkout database operations | Must |
| NFR-TST-005 | Test concurrent checkout behavior | Must |
| NFR-TST-006 | Test duplicate checkout requests | Must |
| NFR-TST-007 | Use Playwright for critical E2E workflows | Must |
| NFR-TST-008 | Test unauthorized access and role restrictions | Must |
| NFR-TST-009 | Run required automated checks in GitHub Actions | Must |
| NFR-TST-010 | Target at least 80% line coverage for core business services | Should |

Critical business rules must have explicit test cases
regardless of the aggregate coverage percentage.

## 11. Deployment and CI/CD

| ID | Requirement | Priority |
|---|---|---|
| NFR-DEP-001 | Use GitHub for version control | Must |
| NFR-DEP-002 | Use GitHub Actions for Continuous Integration | Must |
| NFR-DEP-003 | Execute lint, type-check, test, and build checks | Must |
| NFR-DEP-004 | Support Vercel Preview deployments | Must |
| NFR-DEP-005 | Support Vercel Production deployment | Must |
| NFR-DEP-006 | Separate preview and production database credentials | Must |
| NFR-DEP-007 | Gate production releases on successful required checks | Must |
| NFR-DEP-008 | Document application rollback procedures | Must |
| NFR-DEP-009 | Manage database migrations as controlled release operations | Must |
| NFR-DEP-010 | Provide Docker-based local development support | Should |

## 12. Observability

| ID | Requirement | Priority |
|---|---|---|
| NFR-OBS-001 | Record unexpected application errors | Must |
| NFR-OBS-002 | Provide meaningful server-side error messages | Must |
| NFR-OBS-003 | Avoid sensitive data in logs | Must |
| NFR-OBS-004 | Include request identifiers in important error logs | Should |
| NFR-OBS-005 | Use available Vercel deployment and runtime logs | Must |

## 13. Browser Compatibility

| Browser | Support Target |
|---|---|
| Google Chrome | Current stable version |
| Microsoft Edge | Current stable version |
| Mozilla Firefox | Current stable version |
| Safari | Current stable version, best effort |
| Internet Explorer | Not supported |

## 14. Data and Localization

| ID | Requirement | Priority |
|---|---|---|
| NFR-DAT-001 | Store monetary amounts in integer IDR values | Must |
| NFR-DAT-002 | Store timestamps using timezone-aware database types | Must |
| NFR-DAT-003 | Normalize stored timestamps to UTC | Must |
| NFR-DAT-004 | Display dates using the configured store timezone | Must |
| NFR-DAT-005 | Format money using Indonesian Rupiah conventions | Must |
| NFR-DAT-006 | Minimize collection of customer personal information | Must |
| NFR-DAT-007 | Use isolated or controlled public demo accounts | Must |

## 15. Verification Methods

| Requirement Category | Verification Method |
|---|---|
| Performance | Response time and load testing |
| Security | Authorization and security test cases |
| Reliability | Integration and concurrency testing |
| Usability | Manual review and E2E testing |
| Maintainability | Code review and static analysis |
| Testability | Automated test reports |
| Deployment | CI/CD execution and deployment verification |
| Compatibility | Browser testing |
| Data Integrity | Database constraint and transaction testing |

## 16. Related Documents

- [Product Requirements](PRD.md)
- [Functional Requirements](functional-requirements.md)
- [Business Rules](business-rules.md)
- [System Architecture](architecture.md)
