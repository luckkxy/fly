
import {Scene} from "./player/Scene.js";
import {ResourceLoader} from "./base/ResourceLoader.js";
import {DataStore} from "./base/DataStore.js";
import {DrawScene} from "./player/DrawScene.js";
import {Score} from "./player/Score.js";
import {Director} from "./Director.js";
import {Background} from "./runtime/Background.js";
import {Flyer} from "./player/Flyer.js";
import {Man} from "./player/Man.js";
import {StartPlay} from "./player/StartPlay.js";
import {Kuang} from "./player/Kuang.js";
export class Main {
    constructor(){
        //this.canvas=document.getElementById("canvas");
        this.canvas=wx.createCanvas()
        this.ctx=this.canvas.getContext('2d');
        this.dataStore=DataStore.getInstance();
        this.dataStore.director=Director.getInstance()
        const load=ResourceLoader.create();
        load.onLoaded(map=>this.onreq(map))

    }
    onreq(map){
        this.dataStore.res=map;
        this.dataStore.canvans=this.canvas;
        this.dataStore.ctx=this.ctx;
        //this.dataStore.point=[100,150,100,150,100,150,100,150]
      
        //this.dataStore.put("circle",Imgcircle)
        this.init()
        this.startenvent();
    }
    init(){
      this.dataStore.point = [400, 320, 240, 160, 80, 0, -80]
      this.dataStore.SX = 200;
      this.dataStore.SK = 1;
      this.dataStore.op = 0;
      this.dataStore.timer = 0
      this.dataStore.FG = 0;
      this.dataStore.isflay = 0;
      this.dataStore.isok = 0;
      this.dataStore.getscore = 0
      this.dataStore.iscli = false;
      this.dataStore.board = 80;
      this.dataStore.start = 0//游戏是否开始
      this.dataStore.center = []//圆心坐标
      this.dataStore.put("see", DrawScene)
      this.dataStore.put("score", Score)
      this.dataStore.put("background", Background)
      this.dataStore.put("fly", Flyer)
      this.dataStore.put("man", Man);
      this.dataStore.put("startPlay", StartPlay)
      this.dataStore.put("win", Kuang)
        this.dataStore.director.run()
    }
    startenvent(){
      wx.onTouchStart((ev)=>{
        
        //console.log(this.getPos(ev))
        this.dataStore.iscli = true;
        if (this.dataStore.SK % 3 == 0) {
          this.dataStore.FG = 1;
          this.dataStore.isok = 0
          if (this.dataStore.SK > 6) {
            this.dataStore.point.unshift()
            this.dataStore.point.unshift()
            this.dataStore.point.unshift()
            this.dataStore.point.unshift()

          }
          const t = this.dataStore.point[this.dataStore.point.length - 1]
          for (let i = 1; i < 5; i++) {
            this.dataStore.point.push(t - 80 * i)
          }

        }
        const tx = this.dataStore.get("win").textposx
        const ty = this.dataStore.get("win").textposy
        const ex=ev.touches[0].pageX;
        const ey=ev.touches[0].pageY
       
        if (ex > tx && ey < ty && ey > ty - 30) {
          this.dataStore.isang=0
         this.init()
        }
      }) 
    }
    //获取点击坐标
    getPos(ev){
        let x, y;
        if (ev.layerX || ev.layerX == 0){
            x = ev.layerX;
            y = ev.layerY;
        }else if (ev.offsetX || ev.offsetX == 0){
            x = ev.offsetX;
            y = ev.offsetY;
        }
        return {x: x,y: y};
    }
}