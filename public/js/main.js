const selectCity = document.getElementById("ville");
const AgeMin = document.getElementById("AgeMin");
const AgeMax = document.getElementById("AgeMax");

let city = "";
let min = 0;
let max = 0;

const filterButton = document.querySelector("#filterButton");
const ResetButton = document.querySelector("#ResetButton");
document.addEventListener("DOMContentLoaded", function() {
    pieChartData('/api/Habitant/',"")
    AgeMin.value = 0
    AgeMax.value = 0
})



filterButton.addEventListener("click",()=>{
    city = selectCity.value;
    min = AgeMin.value;
    max = AgeMax.value;
    if(city === "none" && (min != 0 && max != 0))
    {
        let name = ` de ${min} ans à ${max} ans`;
        let url = `/api/Habitant/Age/${min}&${max}`;
        pieChartData(url,name);
    }
    else if(city !== "none" && (min != 0 && max != 0))
    {
        let name = ` de ${min} ans à ${max} ans dans la ville de ${city}`;
        let url = `/api/Habitant/AgeAndCity/${min}&${max}&${city}`;
        pieChartData(url,name);
    }
    else if(city !== "none" && (min == 0 && max == 0))
    {
        let name = ` dans la ville de ${city}`;
        let url = `/api/Habitant/${city}`;
        pieChartData(url,name);
    }
    
})

ResetButton.addEventListener("click",()=>{
    pieChartData('/api/Habitant/',"");
})


const pieChartData = async (url,name)=>{
    let AllMale = 0;
    let AllFemale = 0;
    let FemalePourcent = 0;
    let MalePourcent = 0;
    let Total = 0;

    await $.ajax({
        url:url,
        type:'GET',
        datatype:'json',
        success:(response)=>{
            $.each(response, (index, element)=> {
                if(element.sexe === "Homme"){
                    AllMale = element.nombre;
                }else if(element.sexe === "Femme"){
                    AllFemale = element.nombre;
                }
            })
        },
        error:(err)=>{
            console.log(err);
        }
    })

    Highcharts.chart('pieChart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Population par sexe du Congo'+name
        },
        tooltip: {
            valueSuffix: ' personnes'
        },
        subtitle: {
            text:
            'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Nombre',
                colorByPoint: true,
                data: [
                    {
                        name: 'Homme',
                        y: AllMale
                    },
                    {
                        name: 'Femme',
                        y: AllFemale
                    },
                ]
            }
        ]
    });

    Highcharts.chart('donut', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Population par sexe du Congo'+name,
            align: 'center',
            verticalAlign: 'middle',
            y: 60,
            style: {
                fontSize: '1.1em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: ' personnes'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'pourcentage',
            innerSize: '50%',
            data: [
                ['Homme', ((AllMale/(AllFemale+AllMale)))/100],
                ['Femme', ((AllFemale/(AllFemale+AllMale)))/100]
            ]
        }]
    });

    
}