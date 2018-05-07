import {Sprite} from '../base/Sprite.js'
import {DataStore} from "../base/DataStore.js";
export class Score extends Sprite{
    constructor(){
        const img=Sprite.getImage("score");
        super(img,0,0,img.width,img.height,0,0,img.width,img.height);
        this.dataStore=DataStore.getInstance()
        this.sc=10
    }
    draw(f){
        this.ctx.beginPath()
        if(f==1){
            this.dataStore.op=this.dataStore.op+0.01
            this.dataStore.getscore=this.sc*(this.dataStore.SK-1)
            if(this.dataStore.op>0.9){
                this.dataStore.oo=0;

            }
        }
        if(this.dataStore.oo==0){
            this.dataStore.op=this.dataStore.op-0.01
            if(this.dataStore.op<0){
                this.dataStore.op=0
            }
        }

        this.ctx.globalAlpha =this.dataStore.op;
        let x=this.dataStore.get("see").center[this.dataStore.SK][0]
        const y=this.dataStore.get("see").center[this.dataStore.SK][1]
        x=x+100
        super.draw(this.img,0,0,this.img.width,this.img.height,x,y,this.img.width,this.img.height)
        this.ctx.closePath()

        this.ctx.globalAlpha = 1;
    }
}