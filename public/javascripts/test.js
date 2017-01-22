var radarOptions = {
      scaleLineColor : "#999",
      scaleFontFamily : "'Arial'",
      scaleFontSize : 12,
      scaleFontStyle : "normal",
      scaleFontColor : "#666",
      scaleShowLabelBackdrop : true,
      scaleBackdropColor : "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY : 2,
      scaleBackdropPaddingX : 2,
      angleShowLineOut : true,
      angleLineColor : "rgba(0,0,0,0.3)",
      angleLineWidth : 1,
      pointLabelFontFamily : "'Arial'",
      pointLabelFontStyle : "normal",
      pointLabelFontSize : 12,
      pointLabelFontColor : "green",
      pointDot : true,
      pointDotRadius : 3,
      pointDotStrokeWidth : 1,
      datasetStroke : true,
      datasetStrokeWidth : 1,
      datasetFill : true,
      animation : true,
      animationSteps : 60,
      animationEasing : "easeOutQuart",
      onAnimationComplete : null
  }

  var radarData = {
      labels : ["Openess", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
      datasets : [
          {
              fillColor : "rgba(220,220,220,0.5)",
              strokeColor : "rgba(220,220,220,1)",
              data : [65,59,90,81,56]
          },
          {
              fillColor : "rgba(151,187,205,0.5)",
              strokeColor : "rgba(151,187,205,1)",
              data : [28,48,40,19,96]
          }
      ]
  }

  var ctx = document.getElementById("radarChart").getContext("2d");
  var myChart = new Chart(ctx).Radar(radarData, radarOptions);
