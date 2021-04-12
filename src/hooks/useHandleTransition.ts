export const active = (): void => {
  document.getElementsByTagName('body')[0].className = 'transition-active'
}
export const down = (): void => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
}
