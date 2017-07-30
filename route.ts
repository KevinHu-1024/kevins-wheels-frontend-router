class Route {
  routers: any[]

  constructor(routers) {
    this.routers = routers
    this.bindRouterClick()
  }

  bindRouterClick() {
    document.addEventListener('click', this.handleRouterClick)
  }

  handleRouterClick(e: MouseEvent) {
    const target = e.target as HTMLElement
    const routerPath = target.dataset.routerPath
    if (routerPath) {
      console.log(routerPath)
    }
  }
}
export default Route
