<template>

    <input type="hidden" v-model="sellerId" @keyup.enter="confirm()">
    <div id="app" style="width: 100%; height: 500px;">
        <canvas id="planet-chart" ></canvas>
    </div>
</template>

<script>
    import {getCurrentInstance} from '@vue/runtime-core'
    import Chart from 'chart.js'
    import planetChartData from '../chart-data.js'
    import axios from 'axios';

    export default {
        data() {
            return {
                flag : '',
                sellerId: '',
                planetChartData : planetChartData,
                search: '',
                count: 1,
                rank: 0,
                list: [],
                recv: [],
                $socket: '',
                code: 0,
                msg : '',
                chart : {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [
                            {
                                label: '일자별 대여 수량',
                                data: [],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                
                                
                                ],
                                borderWidth: 2,
                                fill: false
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    padding: 25
                                }
                            }]
                        }
                    },
                }
            }
        },
        methods: {
            join(){
                this.$socket.emit('chart',{
                data : {
                    code: 4,
                    sellerId : this.sellerId
                }
            });
            },
            async getMember(){
                const url = 'REST/api/member/memberGet';
                const header = {
                    "Content-Type": "application/json",
                    "token" : sessionStorage.getItem("TOKEN")
                };
                const response = await axios.get(url, {headers : header});
                
                if(response.data.result == 1){
                    this.sellerId = response.data.member.id;
                }
                this.join();
            },
            confirm() {
                this.$socket.emit('chart', {
                    data: {
                        code : 3,
                        sellerId : this.sellerId,
                        regdate: new Date().toLocaleDateString().replace(/\./g,""),
                        count : this.count
                    }
                });
            },
            addData(chart, label, data){
                // 라벨을 넣습니다.
                this.chart.data.labels.push(label);

                let array = new Array();
                chart.data.datasets[0].data.forEach((datas) => {
                    array.push(datas); // => [1, 2]
                });

                // 받아 온 데이터를 배열에 넣는다.
                array.push(data); // => [1, 2, data]
                this.chart.data.datasets[0].data = array;

                // 차트 갱신
                this.chart.update();

                
            },
            createChart(charId,chartData){
                const ctx = document.getElementById(charId);
                this.chart = new Chart(ctx, {
                    type : chartData.type,
                    data : chartData.data,
                    options : chartData.options
                });
            },
        },
        async created() {
            this.getMember();
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
            

        },
        mounted() {
            this.$socket.on('Searchsubscribe', (recv) => {
                    console.log("알이씨브이",recv);
                    if(recv[0].flag === 2){
                        console.log("차트결과",recv);
                        this.list = recv;
                        this.chart.data.labels = [];
                        this.chart.data.datasets[0].data = [];
                        for(let i = 0; i < this.list.length; i++) {
                            this.addData(this.chart, recv[i].regdate, recv[i].count)
                        }
                    }
                    
                
            });
            this.createChart('planet-chart',this.chart);
        }
    }
</script>

<style scoped>

</style>