<script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['SKILLS', 'WEB DEVELOPMENT SKILLS'],
          ['CSS',      5],
          ['HTML',     5],
          ['BOOTSTRAP', 5],
          ['PHP', 5],
          ['MYSQL',    5]
        ]);

        var options = {
          title: 'WEB DEVELOPMENT SKILLS',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
      </script>