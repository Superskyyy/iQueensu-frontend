import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

export const PieCharts = (props) => {
    
    // Way of theme registration
    var colorPalette = [
        '#e9e0d1',
        '#91a398',
        '#33605a',
        '#070001',
        '#68462b',
        '#58a79c',
        '#abd3ce',
        '#eef6f5'
    ];

    var theme = {
        color: colorPalette,

        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#e9e0d1'
            }
        },

        visualMap: {
            color: ['#e9e0d1', '#91a398']
        },

        toolbox: {
            color: ['#e9e0d1', '#e9e0d1', '#e9e0d1', '#e9e0d1']
        },

        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer: {
                // Axis indicator, coordinate trigger effective
                type: 'line', // The default is a straight line： 'line' | 'shadow'
                lineStyle: {
                    // Straight line indicator style settings
                    color: '#e9e0d1',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#e9e0d1'
                },
                shadowStyle: {
                    // Shadow indicator style settings
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        // Area scaling controller
        dataZoom: {
            dataBackgroundColor: '#eee', // Data background color
            fillerColor: 'rgba(200,200,200,0.2)', // Fill the color
            handleColor: '#e9e0d1' // Handle color
        },

        timeline: {
            lineStyle: {
                color: '#e9e0d1'
            },
            controlStyle: {
                color: '#e9e0d1',
                borderColor: '#e9e0d1'
            }
        },

        candlestick: {
            itemStyle: {
                color: '#91a398',
                color0: '#33605a'
            },
            lineStyle: {
                width: 1,
                color: '#68462b',
                color0: '#070001'
            },
            areaStyle: {
                color: '#91a398',
                color0: '#abd3ce'
            }
        },

        map: {
            itemStyle: {
                color: '#c12e34'
            },
            areaStyle: {
                color: '#ddd'
            },
            label: {
                color: '#c12e34'
            }
        },

        graph: {
            itemStyle: {
                color: '#33605a'
            },
            linkStyle: {
                color: '#e9e0d1'
            }
        },

        gauge: {
            axisLine: {
                lineStyle: {
                    color: [
                        [0.2, '#91a398'],
                        [0.8, '#e9e0d1'],
                        [1, '#68462b']
                    ],
                    width: 8
                }
            }
        }
    };

    echarts.registerTheme('jazz', theme);
    // till here, this is a whole example of how theme can be set: https://github.com/apache/incubator-echarts/blob/master/theme/jazz.js

    var data = genData(3);

    function genData(count) {
        var nameList = [
            'Failed', 'Lower than C-', 'Got A- and higher',
        ];
        var legendData = [];
        var seriesData = [];
        // inital state in which the selected entity will be highlighted
        var selected = {};
        for (var i = 0; i < count; i++) {
            legendData.push(nameList[i]);
            seriesData.push({
                name: nameList[i],
                value: Math.round(Math.random() * 100)
            });
            selected[nameList[i]] = i < 2;
        }
        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };
    }
    return(
        <ReactEcharts
            option={{
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    top: 10,
                    data: data.legendData,
                    selected: data.selected
                },
                series: [
                    {
                        name: 'grade distribution',
                        type: 'pie',
                        radius: '55%',
                        center: ['40%', '55%'],
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        data: data.seriesData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }}
            style={{height: '300px', width: '100%'}}
            notMerge={true}
            lazyUpdate={true}
            // here the registered theme can be used
            // theme={"jazz"}
            theme={"default"}
            onEvents={null}
            opts={{renderer: 'svg'}} />
    )
}