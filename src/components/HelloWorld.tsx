import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

type HelloWorldType = {
    msg: string
}

const HelloWorld = ({ msg }: HelloWorldType) => {
    const [count, setCount] = useState<number>(0)
    const increment = (val: number) => {
        setCount(val + 1)
    }
    return (
        <Fragment>
            <h1>{msg}</h1>
            <button onClick={() => increment(count)}>count is: {count}</button>
            <p>
                Edit <code>components/HelloWorld.tsx</code> to test hot module
                replacement.
            </p>
        </Fragment>
    )
}

export default HelloWorld
