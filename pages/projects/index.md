---
layout: page
title: "Projects"
subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
permalink: /projects/
---

<div class="product-items">
  {% for project in site.projects %}
    <div class="product-item">
        <a href="{{ project.permalink }}">
          <div class="product-image">
            <img src="{{ project.images.first.image_path }}" alt="{{ project.title }}">
          </div>
          <h2 class="product-title">{{ project.title }}</h2>
          <h5 class="product-location">{{ project.location }}</h5>
        </a>
    </div>
  {% endfor %}
</div>