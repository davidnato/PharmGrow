import { BsFileBarGraph } from "react-icons/bs";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoPricetagSharp, IoBookmarks } from "react-icons/io5";

export const data = [

    { icon: <BsFileBarGraph/>, figure: '$1k', title: 'Total Sales', increase: '8' },
    { icon: <IoBookmarks />, figure: '300', title: 'Total Order', increase: '5' },
    { icon: <IoPricetagSharp />, figure: '5', title: 'Product Sold', increase: '1.2' },
    { icon: <MdOutlinePersonAddAlt1 />, figure: '8', title: 'New Customers', increase: '0.5' }

]

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },

        }
    },
    stroke: {
        curve: 'smooth'
    }
}

export const areaOption = {
    //     series: [
    //     {
    //       name: 'North',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 20
    //       })
    //     },
    //     {
    //       name: 'Central',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 15
    //       })
    //     }
    //   ],
    chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
            selection: function (chart, e) {
                console.log(new Date(e.xaxis.min))
            }
        },
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    // dataLabels: {
    //     enabled: false
    // },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
};