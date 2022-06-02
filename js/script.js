// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: May 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-04-JS/sw.js", {
    scope: "/ICS2O-Unit-6-04-JS/",
  });
}

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search);

  // input
  const radius = params.get("r");
  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const dimensions = "<ul>\n<li>Radius = " + radius + "</li>\n</ul>";
  // output
  document.getElementById("dimensions").innerHTML = dimensions;
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³";
};
