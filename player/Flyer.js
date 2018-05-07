import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Flyer extends Sprite{
    constructor(tmp){
        const img=Sprite.getImage("fly")
        super(img,0,0,img.width,img.height,0,0,img.width,img.height);
        this.point=DataStore.getInstance().point;
        this.cirimg=Sprite.getImage("circle")
        this.dataStore=DataStore.getInstance()
        this.angle=0;
        this.pl=0
    }
    draw(tmp,k=1,f){
        this.ctx.save()
        k=this.dataStore.SK;
        const img=this.cirimg
        let cx=tmp[k][0]+img.width/2;
        let cy=tmp[k][1]+img.height/2;

        this.ctx.translate(cx,cy)


        if(f==1){
            this.angle=90
            this.dataStore.isang=0;
        }
        this.angle = this.angle - this.dataStore.SK
        if(this.angle<-360){
            this.angle=this.angle+360
        }
        this.ctx.rotate(this.angle*Math.PI/180)
        const r=-img.width/2

       // const apart=this.sy

        let x=Math.sqrt(r*r)

        x=x-this.img.width/2
        let y=-this.img.height/2
        if(f==2){
            this.pl++
            x=x+20;
            y=y-20
            
        }
        console.log(this.img.height)
        if(this.pl>6){
            this.dataStore.isang=3
            this.pl=0
        }
        super.draw(this.img,0,0,this.img.width,this.img.height,x,y,this.img.width,this.img.height);
        this.ctx.restore()

    }
}