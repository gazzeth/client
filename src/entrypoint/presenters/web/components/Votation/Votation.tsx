import React from "react";
import Vote from "@domain/models/Vote/Vote";
import useStyles from "./styles";
import Container from "../Container/Container";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts'

type Props = {
    votes: Vote[]
}

export default function Votation({ votes }: Props) {

    const classes = useStyles();
    const { t } = useTranslation();

    const getState = (v: Vote) => {
        if (v.penalized) {
            return t('penalized')
        }
        return t("vote-value-" + v.value)
    }

    const series: { name: string, data: number[] }[] = [];
    votes.forEach(v => {
        let isFound = false;
        for (let i = 0; i < series.length; i++) {
            const serie = series[i];
            if (serie.name === getState(v)) {
                serie.data[0] = serie.data[0] + 1;
                isFound = true
                break;
            }
        }
        if (!isFound) {
            series.push({ name: getState(v), data: [1] })
        }
    })

    const seriesSorted = series.sort((n1, n2) => n1.data[0] - n2.data[0])

    const getColor = (n: { name: string, data: number[] }) => { //TODO
        switch (n.name) {
            case t('penalized'):    return "#000000";
            case t("vote-value-0"): return "#808080";
            case t("vote-value-1"): return "#008000";
            case t("vote-value-2"): return "#FF0000";
            case t("vote-value-3"): return "#FFFF00";
        }
    }

    const state: any = {
        series: seriesSorted,
        options: {
            colors: seriesSorted.map((n) => getColor(n)),
            chart: {
                type: "bar",
                stacked: true,
                stackType: '100%'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                floating: true,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
            },
            yaxis: {
                floating: true,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
            },
            tooltip: {
                enabled: false,
                y: {
                    show: false
                },
                x: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40,
                onItemClick: {
                    toggleDataSeries: false
                }
            }
        },
    };

    return (
        <>
            <div className={classes.root} >
                <Container title={t("votation")} titleVariant={"h2"}>
                    <Chart options={state.options} series={state.series} type="bar" height={170} width={700} />
                </Container>
            </div>
            <div className={classes.root} >
                <Container title={t("votes")} titleVariant={"h2"}>
                    {
                        votes.map(v => {
                            return (
                                <div className={classes.rowContainer}>
                                    <div className={classes.leftContainer}>
                                        <Typography>{v.address}</Typography>
                                        {v.justification !== "" && <Typography>{v.justification}</Typography>}
                                    </div>
                                    <div className={classes.rightContainer}>
                                        <Typography>{getState(v)}</Typography>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Container>
            </div >
        </>
    )
}
