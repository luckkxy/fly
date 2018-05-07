import {Circle} from "./Circle.js";

export class Scene{
    constructor(ctx,canvans,r=50){
        this.canvans=canvans;
        this.ctx=ctx;
        this.r=r
    }
    drawscene(){
       const point=[[150,400],[100,300],[150,200],[250,100]]
        const cirle=new Circle(point[0][0],point[0][1],this.r,'white');
       const obj=[]
       cirle.draw(this.ctx)
        for(let i=1;i<point.length;i++){
           const x=point[i][0]-point[i-1][0]
            const y=point[i-1][1]-point[i][1]
            const l=Math.sqrt(x*x+y*y)
            this.r=l-this.r
            const newcr=new Circle(point[i][0],point[i][1],this.r,'white');
           obj.push(newcr);
           newcr.draw(this.ctx)
        }
    }
}