---
title: Latest Posts

sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 50
    pagination: true

feed:
    description: Meaty Blog
    limit: 10
    title: Meaty Blog

pagination: true
---
