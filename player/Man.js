import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Man extends Sprite{
    constructor(){
        const img=Sprite.getImage('0')
        super(img,0,0,img.width,img.height,0,0,img.width,img.height/2)
        this.imgname=0
        this.count=0
        this.step=0
        this.dataStore=DataStore.getInstance()
    }
    draw(){
        this.ctx.beginPath()
        this.count++
        if(this.count>20){
            this.imgname++
            this.step=this.step+23
            this.count=0
        }
        if(this.imgname>6){
            this.imgname=this.imgname-7
        }

        const moveimg=Sprite.getImage(this.imgname.toString());
        if(this.step>this.dataStore.canvans.width/2-60){
            this.ctx.globalAlpha = 0;
            this.dataStore.isflay=1
        }
        super.draw(moveimg,0,0,moveimg.width,moveimg.height,this.step,this.dataStore.canvans.height-moveimg.height/2,moveimg.width,moveimg.height/2)
        this.ctx.closePath()
        this.ctx.globalAlpha = 1;
    }
}