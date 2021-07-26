/**
 * @description 获取一个区间随机数）
 */
export const randomNum = (min: number = 0, max: number = 9) :number => {
  return Math.floor(Math.random() * (max - min) + min)
}

// 获取4位随机数字
export const createCaptcha = (length: number):string => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += randomNum()
  }
  return result
}

// 获取随机颜色
export const randomColor = (min:number, max:number) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}
