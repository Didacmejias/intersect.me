export interface Character {
  nickname: string
  step: Step
  moneyPercent: number
  socialPercent: number
}

export enum Step {
  initial,
  first
}
