import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { fetchCourseGradeDistribution } from '../../../utilities/courseDetailActions/fetchCourseGradeDistribution';

export const PieCharts = (props) => {
    const [courseData, setCourseData] = useState({});

    const [grades, setGrades] = useState([]);

    // Similar to componentDidMount
    useEffect(()=>{
        // invoke api to fetch grade details.
        fetchCourseGradeDistribution(props.course, successHandler)
    }, [])

    const successHandler = (res) =>{
        res.json().then(result => {
            setGrades(result)
        })
    }

    useEffect(()=>{
        if(grades.length > 0){
            setCourseData(generateData(grades));
        }
    },[grades])

    const generateData = (result) =>{
        let nameList = [];
        let legendData = [];
        // inital state in which the selected entity will be highlighted
        let seriesData = [];

        for (let entity in result[0]['data']){
            if(entity.length < 3 && entity.length > 0){
                nameList.push(entity);
                legendData.push(entity);
                seriesData.push({
                    name: entity,
                    value: result[0]['data'][entity]
                });
            }
        }
        return {
            legendData: legendData,
            seriesData: seriesData,
            // selected: selected
        }
    }

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

    return(
        <ReactEcharts
            option={{
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'horizontal',
                    left: 10,
                    top: 10,
                    data: courseData.legendData,
                    // selected: courseData.selected
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
                        data: courseData.seriesData,
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