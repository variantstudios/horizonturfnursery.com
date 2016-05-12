---
layout: page
title: Sod Types
subtitle: Subtitle goes here.
permalink: /sod-types/
header-image-path: "/assets/images/sub-page-headers/Designs_By_Sundown_View.jpg"
---

<div class="sod-types">
  {% for item in site.sodtypes %}
    <h4>{{ item.title }}</h4>
    <h6>{{ item.subtitle }}</h6>
    {{ item.content }}
    
    {{ item.sod-stats.label }}
    {{ item.sod-stats.value }}

  {% endfor %}
</div>