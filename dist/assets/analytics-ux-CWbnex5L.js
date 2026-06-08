const e=`---
title: "Most Dashboards Are Not Designed. They Are Accumulated."
date: "2024-07-10"
excerpt: "The typical analytics dashboard is a graveyard of stakeholder requests. Each chart made sense when someone asked for it. Together, they tell no story and support no decision."
slug: analytics-ux
topic: "Analytics UX"
---

The typical analytics dashboard is a graveyard of stakeholder requests. Each chart made sense when someone asked for it. Together, they tell no story and support no decision.

I have worked on analytics products for long enough to recognize this pattern from the first stakeholder meeting. Someone asks for a chart showing metric X. Someone else asks for metric Y broken down by region. A third person wants to compare this month to last month. None of these requests are wrong. All of them, combined without a unifying design intention, produce a page that is visually busy and cognitively useless.

## The Accumulation Problem

Dashboards accumulate because no one is responsible for what they are for. The data team is responsible for pulling the data. The engineering team is responsible for making the charts render. The product manager is responsible for incorporating feedback. No one is responsible for deciding what decision this dashboard exists to support.

When that question is absent, every stakeholder request is equally valid. The product becomes a democracy of requests rather than a tool for a purpose.

The result is a dashboard that functions as a status symbol rather than a decision instrument. It demonstrates that data exists and is being collected. It does not tell anyone what to do with it.

## What Design Actually Means Here

Good analytics UX starts with the decision, not the data. What is the user trying to decide when they open this dashboard? What information do they need to decide it? What does the wrong decision look like, and what data would have prevented it?

These questions are harder than picking chart types. They require the designer to understand the user's workflow, their mental model of the underlying system, and the organizational context in which decisions get made. That is expensive. Teams that skip it pay for it later with low adoption and repeated redesigns.

The second principle is hierarchy. Every dashboard has a primary question and secondary questions. The primary question should dominate the visual hierarchy. Secondary questions should be accessible but not competing for attention. Most dashboards invert this: everything competes equally, so nothing is easy to find.

## Progressive Disclosure in Analytics

Dense datasets require progressive disclosure. The overview should give the reader the most important fact — not ten equally weighted facts. Drill-downs let users pursue the detail they actually need rather than front-loading it.

This sounds simple. It is hard to execute because it requires ruthless editing. Every chart that gets removed will be objected to by the person who asked for it. The designer's job is to explain why the removal makes the product more useful, not less.

The alternative — adding every requested chart without removing anything — is always the path of least resistance and almost always the path to a product no one uses.

## The ROI of Dashboard Design

Teams that invest in analytics UX produce products that get used. Charts that map to real decisions in real workflows get opened every day. Charts that exist because someone once asked for them get ignored after the first week.

Usage is the test. Not feature completeness, not stakeholder satisfaction at launch. Whether the tool changes how people work is the only thing that matters.
`;export{e as default};
