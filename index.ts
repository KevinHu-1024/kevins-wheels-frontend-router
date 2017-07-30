import Route from './route'

interface Router {
  path?: string,
  cb?: () => void,
  children?: Router[],
  redirect?: string,
}

const routeBase: Router[] = [
  {
    path: '/',
    cb: cb,
  },
  {
    path: '/dashboard',
    cb: cb,
  }
];

const routeDynamic: Router[] = routeBase.concat([
  {
    path: '/user/:id',
    cb: cb,
  },
  {
    path: '/user/:username/posts/:post_id',
    cb: cb,
  },
])

const routeNested: Router[] = routeDynamic.concat([
  {
    path: '/admin/:id',
    cb: cb,
    children: [
      {
        path: 'profile',
        cb: cb,
      },
      {
        path: 'posts',
        cb: cb,
      }
    ],
  },
])

const routeRedirect = routeNested.concat([
  { path: '/a', redirect: '/dashboard' }
])

document.querySelector('#route-tree').innerHTML = JSON.stringify(routeRedirect, null, 2)
document.querySelector('#route-tree').addEventListener('click', () => console.log(route))
const route = new Route(routeRedirect);

function cb() {
  console.log(arguments);
}
