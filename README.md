# CodeAudit One: Public evidence walkthrough

This repository contains a standalone static HTML/CSS/JavaScript demonstration only.
It is not the private CodeAudit proof engine, not a production SaaS, and not an
independent certification. It illustrates sanitized outcomes that were recorded
in an owner-controlled private synthetic GitHub pilot.

## Direct access
No login, payment method, tracking service, dynamic backend, or external API.
All interactive fixture selection takes place in the browser.

## Scope
- PR #7: qualifying change, App-owned protected check SUCCESS, GitHub CLEAN, not merged.
- PR #8: deliberately defective change, App-owned protected check FAILURE, GitHub BLOCKED, not merged.
- PR #3: earlier qualifying change, historically merged.
- Separate 9/9 local executable witness and bounded repair tests and 142/142 Node tests.

The site exposes neither the proprietary verifier nor customer source or credentials.
Deeper buyer-selected tests require separately arranged technical diligence.

## Cost
This is a zero-dependency static Pages repository with no paid APIs, backend,
database, Stripe integration or visitor-triggered metered computation.
GitHub Pages resource/abuse limits apply; this is not an account-wide
billing hard limit.
