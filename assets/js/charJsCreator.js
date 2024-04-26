const createSuperHeroChart = (superHero) => {
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2",
        title: {
            text: `Estadísticas de poder ${superHero.name}`,
        },
        data: [
            {
            type: "pie",
            showInLegend: true,
            toolTipContent: "{indexLabel}: {y}/100",
            yValueFormatString: "#",
            legendText: "{indexLabel}",
            dataPoints: [
                { y: superHero.powerstats.intelligence, indexLabel: 'Inteligencia' },
                { y: superHero.powerstats.strength, indexLabel: 'Fuerza' },
                { y: superHero.powerstats.speed, indexLabel: 'Velocidad' },
                { y: superHero.powerstats.durability, indexLabel: 'Durabilidad' },
                { y: superHero.powerstats.power, indexLabel: 'Poder' },
                { y: superHero.powerstats.combat, indexLabel: 'Combate' },
            ] ,
        },
    ],
});

    chart.render();
}
