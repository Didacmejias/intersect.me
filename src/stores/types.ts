export interface Character {
  nickname: string
  step: Step
  moneyPercent: number
  socialPercent: number
  wellbeingPercent: number
  statusPercent: number
}

export enum Step {
  initial,
  first
}
