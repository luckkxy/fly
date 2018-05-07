import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Kuang extends Sprite{
    constructor(){
        const img=Sprite.getImage("kuang")
        super(img,0,0,img.width,img.height,0,0,img.width,img.height)
        this.dataStore=DataStore.getInstance()
        this.textposx=0
        this.textposy=0
    }
    draw(){
        const x=this.dataStore.canvans.width/2-this.img.width/4
        const y=this.dataStore.canvans.height/2-this.img.height/6
        super.draw(this.img,0,0,this.img.width,this.img.height,x,y,this.img.width/2,this.img.height/4)

        this.ctx.font="30px Verdana";
        const c=this.dataStore.canvans
        const gradient=this.ctx.createLinearGradient(0,0,c.width,c.height);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","white");
        gradient.addColorStop("1.0","red");
// 用渐变填色30
        this.ctx.fillStyle="#ffffff";
        this.ctx.fillText(this.dataStore.getscore+"分",x+this.img.width/4-50,y+100);
        //this.ctx.fillText("分",x+this.img.width/4,y+100)

        this.ctx.font="20px Verdana"
        this.ctx.fillStyle="#ffffff"
        let text="时间到！继续挑战"
        if(this.dataStore.isang==3){
            text="飞船出轨！继续挑战"
            this.ctx.fillText("要从轨道交点飞到另外一条轨道",x+25,y+200)
        }
        this.ctx.fillText(text,x+this.img.width/10,y+150)
        this.textposx=x+this.img.width/10
        this.textposy=y+150

    }
}