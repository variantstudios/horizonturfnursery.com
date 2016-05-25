---
layout: page
title: Sod Types
description: ""
subtitle: Subtitle goes here.
permalink: /sod-types/
header-image-path: "/assets/images/sub-page-headers/Designs_By_Sundown_View.jpg"
---

<div class="sod-types">
  {% for item in site.sodtypes | sort: 'item.weight' | reverse %}
  	<!-- Editor Link -->
    <div class="edit-link">
      <a href="cloudcannon:collections/{{ item.relative_path }}">
        <img src="/assets/images/icons/settings.svg" />
        <span>Edit</span>
      </a>
    </div>
    <h4>{{ item.title }}</h4>
    <h6>{{ item.subtitle }}</h6>
    {{ item.content }}
    
    {{ item.sod-stats.label }}
    {{ item.sod-stats.value }}

  {% endfor %}
</div>