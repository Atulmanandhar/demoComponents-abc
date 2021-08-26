export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    commponent: any;
    props?: any;
  }