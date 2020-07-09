// template -> render
import { defineComponent, h,ref,reactive } from "@vue/runtime-core";
import {getGame} from './Game'
export default defineComponent({
  setup(){
    let x = ref(100)
    let y = ref(300)
    let isX = ref(1)
    let isY = ref(1)
    const speed = 5
    getGame().ticker.add(()=>{
      x.value = isX.value? x.value + speed :  x.value - speed
      y.value = isY.value? y.value + speed :  y.value - speed
      if(x.value >= 375 - 100) {
       isX.value = 0
      }else if(x.value <= 100) {
        isX.value = 1
      }
      if(y.value >= 667 - 100) {
       isY.value = 0
      }else if(y.value <= 100) {
        isY.value = 1
      }

    })
    return {
      x,y
    }
  },
  render(ctx) {
    // 创建虚拟节点
    // <div x="20" y="20">开课吧nb</div>
    // const vnode = h("circle", { x: 200, y: 200 },"开课吧nb");
    const vnode = h('Container',[h("circle", { x: ctx.x, y: ctx.y })]);
    console.log(vnode);
    return vnode;
  },
});
