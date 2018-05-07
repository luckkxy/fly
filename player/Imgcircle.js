import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Imgcircle extends Sprite{
    constructor(sx=0,sy=0){
        const img=Sprite.getImage('circle')
        super(img,0,0,img.width,img.height,sx,sy,img.width,img.height)

    }
    draw(){
        super.draw(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.img.width,this.img.height)
    }
}