sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.chart.controller.S0", {
		onInit: function () {
			this.oChartModel = new JSONModel({
				title: {
					text: 'Vendas por ano',
					style: {
						color: 'orange'
					}
				},
				legendGroup: {
					layout: {
						position: "bottom",
						alignment: "center"
					}
				}
			});
			
			this.getView().setModel(this.oChartModel, "chart");

		}
	});
});
