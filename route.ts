export class Route {
  routers: Router[]

  constructor(routers: Router[]) {
    this.routers = routers
    this.bindRouterClick()
    this.bindPopState()
  }

  private bindRouterClick() {
    document.addEventListener('click', this.handleRouterClick)
  }

  private bindPopState() {
    window.addEventListener('popstate', this.handlePopState)
  }

  private handleRouterClick(e: MouseEvent) {
    const target = e.target as HTMLElement
    const routerPath = target.dataset.routerPath

    if (routerPath) {
      history.pushState({ path: routerPath }, null, routerPath)
      console.log(history)
    }
  }

  private handlePopState(e: PopStateEvent) {
    console.log(e.state)
  }

  public push() {}

  public go(n: number) {
    history.go(n)
  }

  public replace() {}

  public back() {
    history.back()
  }

  public forward() {
    history.forward()
  }
}

class HistoryState {
  path: string
  params: {}
  query: {}
  hash: string
  fullPath: string
  matched: Router[]

  constructor() {
    
  }
}

export interface Router {
  path?: string,
  cb?: () => void,
  children?: Router[],
  redirect?: string,
}
