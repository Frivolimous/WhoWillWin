import { JMEasing, JMTween } from '../JMGE/JMTween';

export enum AnimationType {
  BASIC_POP,
  WAVE,
  SPIN,
  SPLASH,
  STRAIGHT_SPLASH,
  BIG_IN,
  BIG_OUT,
  BACK_OUT,
  SLIDE_IN,
  SLIDE_OUT,
  GROW_IN,
  SHRINK_OUT,
  PULSE,
  SMOOTH_PULSE,
  FLIP_A,
  FLIP_B,
}

export function animateDiv(element: HTMLElement, index: AnimationType, delay: number = 0, onComplete?: () => void) {
  let obj: ITransformData = {height: 1, width: 1, rotation: 0, x: 0, y: 0};
  switch (index) {
    case AnimationType.WAVE:
      obj.y = 50;
      obj.height = 0;
      applyTransform(element, obj);
      new JMTween({percent: 0}, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      new JMTween(obj, 300).wait(delay).to({height: 1, y: -20, rotation: 30}).easing(JMEasing.Back.Out).start()
        .chain(obj, 100).wait(200).to({rotation: 20}).yoyo(true, 3)
        .chain(obj, 300).wait(100).to({height: 1, rotation: 0, y: 0});
      break;
    case AnimationType.SPIN:
      obj.rotation = 700;
      obj.height = 0.3;
      obj.width = 0.3;
      applyTransform(element, obj);
      new JMTween(obj, 500).wait(delay).to({rotation: 0}).start().onUpdate(data => applyTransform(element, data))
      .onComplete(() => {element.style.transform = ''; onComplete && onComplete(); });
      new JMTween(obj, 300).wait(delay).to({height: 0.8, width: 0.8}).easing(JMEasing.Quadratic.InOut).start()
        .chain(obj, 200).to({height: 1, width: 1});
      break;
    case AnimationType.SPLASH:
      obj.width = 0.1;
      obj.height = 0.1;
      applyTransform(element, obj);
      new JMTween({percent: 0}, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      new JMTween(obj, 500).wait(delay).to({width: 1.3, height: 1.3, rotation: 15}).easing(JMEasing.Back.Out).start()
        .chain(obj, 1000).wait(500).to({width: 1, height: 1, rotation: 0});
      break;
    case AnimationType.STRAIGHT_SPLASH:
      obj.width = 0.1;
      obj.height = 0.1;
      applyTransform(element, obj);
      new JMTween({percent: 0}, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      new JMTween(obj, 500).wait(delay).to({width: 1.8, height: 1.8}).easing(JMEasing.Back.Out).start()
        .chain(obj, 1000).wait(500).to({width: 1, height: 1});
      break;
    case AnimationType.BIG_IN:
      obj.width = 1;
      obj.height = 1;
      applyTransform(element, obj);
      new JMTween(obj, 500).wait(delay).to({width: 1.8, height: 1.8}).easing(JMEasing.Back.Out).onUpdate(() => applyTransform(element, obj)).start().onComplete(() => (onComplete && onComplete()));
      break;
    case AnimationType.BIG_OUT:
      obj.width = 1.8;
      obj.height = 1.8;
      applyTransform(element, obj);
      new JMTween(obj, 500).wait(delay).to({width: 1, height: 1}).easing(JMEasing.Linear.None).onUpdate(() => applyTransform(element, obj)).start().onComplete(() => {element.style.transform = ''; onComplete && onComplete(); });
      break;
    case AnimationType.BACK_OUT:
      new JMTween(obj, 1000).wait(delay).to({x: -10, y: -1500}).onUpdate(() => applyTransform(element, obj)).onComplete(() => {element.style.display = 'none'; onComplete && onComplete(); }).start();
      break;
    case AnimationType.SLIDE_IN:
      obj.x = 300;
      obj.y = 3500;
      applyTransform(element, obj);
      new JMTween(obj, 1000).wait(delay).to({x: 0, y: 0}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Quintic.InOut).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      break;
    case AnimationType.SLIDE_OUT:
      obj.x = 0;
      obj.y = 0;
      applyTransform(element, obj);
      new JMTween(obj, 1000).wait(delay).to({x: -300, y: -3500}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Quintic.InOut).onComplete(() => {element.style.display = 'none'; onComplete && onComplete(); }).start();
      break;
    case AnimationType.GROW_IN:
      obj.width = 0.01;
      obj.height = 0.01;
      obj.y = 1000;
      applyTransform(element, obj);
      new JMTween(obj, 400).wait(delay).to({width: 1, height: 1, y: 0}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Back.Out).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      break;
    case AnimationType.SHRINK_OUT:
      applyTransform(element, obj);
      new JMTween(obj, 400).wait(delay).to({width: 0, height: 0, y: 1000}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Back.In).onComplete(() => {element.style.display = 'none'; onComplete && onComplete(); }).start();
      break;
    case AnimationType.PULSE:
      obj.width = 1;
      obj.height = 1;
      applyTransform(element, obj);
      new JMTween(obj, 250).wait(delay).to({width: 1.3, height: 1.3}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Quadratic.InOut).yoyo(true, 1).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      break;
    case AnimationType.SMOOTH_PULSE:
      obj.width = 1;
      obj.height = 1;
      applyTransform(element, obj);
      new JMTween(obj, 800).wait(delay).to({width: 1.1, height: 1.1}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Quadratic.InOut).yoyo(true, 1).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      break;
    case AnimationType.FLIP_A:
      obj.width = 1;
      applyTransform(element, obj);
      new JMTween(obj, 250).wait(delay).to({width: 0}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Linear.None).onComplete(() => { onComplete && onComplete(); }).start();
      break;
    case AnimationType.FLIP_B:
      obj.width = 0;
      applyTransform(element, obj);
      new JMTween(obj, 400).wait(delay).to({width: 1}).onUpdate(() => applyTransform(element, obj)).easing(JMEasing.Linear.None).onComplete(() => {element.style.transform = ''; onComplete && onComplete(); }).start();
      break;
    case AnimationType.BASIC_POP: default:
      obj.height = 0;
      obj.width = 0;
      applyTransform(element, obj);
      new JMTween(obj, 700).wait(delay).to({height: 1, width: 1}).easing(JMEasing.Back.Out).start()
      .onUpdate(data => applyTransform(element, data))
      .onComplete(() => {element.style.transform = ''; onComplete && onComplete(); });
      break;
  }
}

// export function tweenTo(element: HTMLDivElement, time: number, data: Partial<ITransformData>) {
//   data.width = data.width || 0;
//   data.height = data.height || 0;
//   data.x = data.x || 0;
//   data.y = data.y || 0;
//   data.rotation = data.rotation || 0;

//   new JMTween(element, time).to(data)
// }

function applyTransform(element: HTMLElement, data: ITransformData) {
  element.style.transform = `scaleX(${data.width}) scaleY(${data.height}) translateX(${data.x}px) translateY(${data.y}px) rotate(${data.rotation}deg)`;
}

interface ITransformData {
  width: number;
  height: number;
  x: number;
  y: number;
  rotation: number;
}
