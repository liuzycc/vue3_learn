import * as PIXI from "pixi.js";
// mount 需要 根容器
// createApp(App).mount('#app')
// pixi.js
// 初始化
const game = new PIXI.Application({
  width: 375,
  height: 667,
});

document.body.appendChild(game.view);

export function getCanvasRootContainer() {
  return game.stage;
}

export function getGame() {
  return game;
}
