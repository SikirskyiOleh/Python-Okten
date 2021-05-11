import Car from "./components/Car";

export default function App() {
    return (
        <div>
            <Car
                model={'bmw'}
                description={'335'}
                power={332}
                volume={3.5}/>
            <Car
                model={'toyota'}
                description={'supra'}
                power={2000}
                volume={3}/>
            <Car
                model={'mers'}
                description={'g63'}
                power={500}
                volume={5}/>
        </div>
    );
}
