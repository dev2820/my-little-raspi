<template>
    <div class="common-clock">
        <img class="clock-face" src="@/assets/images/clock-face.png">
        <div class="clock">
            <div class="hr-container" id="hr">
                <div class="hr"></div>
            </div>
            <div class="mn-container" id="mn">
                <div class="mn"></div>
            </div>
            <div class="sc-container" id="sc">
                <div class="sc"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonClock',
    props: {
        time: {
            type: Date
        }
    },
    data(){
        return {
            timeInterval: null,
        }
    },
    mounted(){
        this.runClock(this.time);
    },
    beforeDistroy(){
        this.stopClock();
    },
    updated(){
        this.stopClock();
        this.runClock(this.time);
    },
    methods: {
        runClock(time){
            const deg = 6;
            const hr = this.$el.querySelector('#hr');
            const mn = this.$el.querySelector('#mn');
            const sc = this.$el.querySelector('#sc');
            let day = time || new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
            this.timeInterval = setInterval(()=> {
                day.setSeconds(day.getSeconds()+1);
                let hh = day.getHours() * 30;
                let mm = day.getMinutes() * deg;
                let ss = day.getSeconds() * deg;
                hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
                mn.style.transform = `rotateZ(${mm}deg)`;
                sc.style.transform = `rotateZ(${ss}deg)`;
            },1000)
        },
        stopClock(){
            clearInterval(this.timeInterval);
        }
    },
}
</script>

<style scoped>
img.clock-face {
    position: absolute;
    left:0;
    width:auto;
    height:200px;
}
.clock {
    position:absolute;
    width:200px;
    height:200px;
    left:0;
}
.clock::before {
    content:'';
    position:absolute;
    width:8px;
    height:8px;
    left:50%;
    top:50%;
    margin-left:-4px;
    margin-top:-4px;
    border-radius:50%;
    background:#848484;
}
.hr-container, .mn-container, .sc-container {
    position:absolute;
}
.hr-container, .hr {
    width:80px;
    height:80px;
    left:50%;
    top:50%;
    margin-left:-40px;
    margin-top:-40px;
}
.mn-container, .mn {
    width:120px;
    height:120px;
    left:50%;
    top:50%;
    margin-left:-60px;
    margin-top:-60px;
}
.sc-container, .sc {
    width:160px;
    height:160px;
    left:50%;
    top:50%;
    margin-left:-80px;
    margin-top:-80px;
}
.hr,.mn,.sc {
    display:flex;
    justify-content: center;
    position:absolute;
    border-radius:50%;
}
.hr::before {
    content: '';
    position:absolute;
    width: 6px;
    height:40px;
    background: #848484;
    z-index:10;
    border-radius:6px 6px 0 0;
}
.mn::before {
    content: '';
    position:absolute;
    width: 4px;
    height:60px;
    background: #848484;
    z-index:11;
    border-radius:6px 6px 0 0;
}
.sc::before {
    content: '';
    position:absolute;
    width: 2px;
    height:100px;
    background: red;
    z-index:12;
    border-radius:6px 6px 0 0;
}
</style>
