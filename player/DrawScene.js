import {Imgcircle} from "./Imgcircle.js";
import {DataStore} from "../base/DataStore.js";


export class DrawScene{
    constructor(){
        this.point=DataStore.getInstance().point;
        this.center=[[DataStore.getInstance().SX,this.point[0]]]//圆心坐标
        this.dance=0
        this.cirimg=DataStore.getInstance().res.get("circle")
        this.dataStore=DataStore.getInstance()

    }
    //计算圆心坐标
    compute(y1,y2){
        //const cirimg=DataStore.getInstance().res.get("circle");
        const RAD=this.cirimg.width
        const Y=y2-y1;
        let x=Math.sqrt(RAD*RAD-Y*Y)
        return x;
    }
    //求斜率和截距
    ratedance(arr){
        let k,b;
        const xie=[]
        for(let i=1;i<arr.length;i++){
            k=(arr[i-1][1]-arr[i][1])/(arr[i-1][0]-arr[i][0])
            b=arr[i][1]-k*arr[i][0]
            xie.push([k,b])
        }
        return xie;
    }

    drawpix(){
        const point=this.point;
        const SX=DataStore.getInstance().SX
        let nx=0,t;

        if(this.dance!=-1){
            this.dance++;
        }
        if(this.dance==this.dataStore.board){
            this.dance=-1;
        }
        for(let i=point.length-1;i>0;i--){
            if(this.dance!=-1){
                point[i]=point[i]+1
            }
        }
        //console.log(point)
        //const cir=new Imgcircle(point[0],SY)
       // cir.draw()

        for(let i=1;i<point.length;i++){
            const x=this.compute(point[i-1],point[i])
            if(i==1){
                nx=SX-x;
            }else{
                if(i%2==0){
                    nx=nx-x;

                }else{
                    nx=x+nx;

                }
            }
            this.center[i]=[nx,point[i]]
            const c=new Imgcircle(nx,point[i])
            c.draw()
        }

    }
    movecenter(){
        for(let i=0;i<this.point.length;i++){
            this.point[i]=this.point[i]+1;
        }
        if(this.point[this.dataStore.SK]>400){
            this.dataStore.FG=0;
        }
    }
}