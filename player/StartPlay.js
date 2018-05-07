import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class StartPlay extends Sprite{
    constructor(){
        const img=Sprite.getImage("play")
        const store=DataStore.getInstance()
        super(img,0,0,img.width,img.height,store.canvans.width/2-img.width/2,store.canvans.height-img.height,img.width,img.height)
        this.dataStore=store;
        this.gao=store.canvans.height-img.height
    }
    draw(){
        if(this.dataStore.isflay==1){
            this.gao=this.gao-10;
        }
        if(this.gao<0){
            this.dataStore.start=1
        }
        super.draw(this.img,0,0,this.img.width,this.img.height,this.dataStore.canvans.width/2-this.img.width/2,this.gao,this.img.width,this.img.height)
    }
}