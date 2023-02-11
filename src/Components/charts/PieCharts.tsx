import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const data = {
  labels: ["Yellow", "Blue", "Red"],
  datasets: [
    {
      data: [100, 100, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }
  ]
};

function PieCharts() {  
    return (
      <div className="col-12 col-sm-6">
        <Card>
          <h5>Gráfico de Torta</h5>
          <Pie data={data} />
        </Card>
      </div>
    );
}

export default PieCharts;
