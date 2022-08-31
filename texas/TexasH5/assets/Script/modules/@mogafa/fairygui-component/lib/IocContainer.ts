import { Container } from "inversify";



export default class IocContainer {
    private static _container: Container;
    static get container(): Container {
        if (IocContainer._container == null) {
            IocContainer._container = new Container();
        }
        return IocContainer._container;
    }
}
