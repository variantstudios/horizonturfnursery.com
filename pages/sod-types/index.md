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
  <div class="sod-type-teaser">
    	<!-- Editor Link -->
      <div class="edit-link">
        <a href="cloudcannon:collections/{{ item.relative_path }}">
          <img src="/assets/images/icons/settings.svg" />
          <span>Edit</span>
        </a>
      </div>
      <h3>{{ item.title }}</h3>
      <h6>{{ item.subtitle }}</h6>
      {{ item.content }}
      
      <canvas id="myChart{{item.weight}}" width="400" height="230"></canvas>

  <script>
      var ctx = document.getElementById("myChart{{item.weight}}");
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [{% include sod-label.html %}],
            datasets: [{
              data: [{% include sod-values.html %}],
              label: 'Sod Stats',
              backgroundColor: 'rgba(197, 76, 74, 0.75)',
              borderColor: 'rgba(197, 76, 74, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        });
      </script>
  </div>
  {% endfor %}
</div>

