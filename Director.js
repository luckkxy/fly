import {DataStore} from "./base/DataStore.js";
import {Imgcircle} from "./player/Imgcircle.js";

export class Director{
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
    constructor(){
        this.dataStore = DataStore.getInstance();
        this.moveSpeed=2;
    }
    check(){
        let isok=0
        let ang=Math.abs(this.dataStore.get("fly").angle)

        if(this.dataStore.SK%2==0){
            isok=ang>60&&ang<90&&this.dataStore.isang!=2?1:0

        }else{
            isok=ang>90&&ang<140&&this.dataStore.isang!=2?1:0;

        }
       return isok
    }
    run(){
        const tmp=this.dataStore.get("see").center
        if(this.check()==1&&this.dataStore.iscli==true){
            this.dataStore.iscli=false;
            this.dataStore.SK++;
            this.dataStore.isang=1
            this.dataStore.oo=1
        }


        this.dataStore.get("background").draw();
        if(this.dataStore.start==0){
            this.dataStore.get("man").draw()
            this.dataStore.get("startPlay").draw()
        }else{
            this.dataStore.get("see").drawpix()

            this.dataStore.timer++;
            if(this.check()==0&this.dataStore.iscli==true){

                //this.dataStore.iscli=false;
                this.dataStore.isang=2
                this.dataStore.get("fly").draw(tmp,this.dataStore.SK,this.dataStore.isang)
            }else{
                this.dataStore.get("fly").draw(tmp,this.dataStore.SK,this.dataStore.isang)
            }

            if(this.dataStore.FG==1){
                this.dataStore.get("see").movecenter()
            }
            this.dataStore.get("score").draw(this.dataStore.oo)

        }

        let timer = requestAnimationFrame(() => this.run());
        this.dataStore.put("stop",timer)
        if(this.dataStore.timer>1500||this.dataStore.isang==3){
            cancelAnimationFrame(this.dataStore.get('stop'));
            this.dataStore.get("win").draw()
            console.log(1,'eee')
            
        }
    }
}