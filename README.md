useOnOutsideClick
======
A React custom hook to detect clicks which triggers outside the element and then fire an event.

> Make sure your `react` and `react-dom` version is `16.8.1` or higher. Internally `useOnOutsideClick` uses react hooks which is only supported after version `16.8.1` of `react`

## How to install
```
$ yarn add useOnOutsideClick
```

## Usage
```javascript
import useOnOutsideClick from 'useOnOutsideClick'

const CustomComponent = () => {
    const elementInstance = useOnOutsideClick(() => alert('hello'))
    return <div ref={elementInstance}>
        <h1>Hello</h1>
    </div>
} 
```

useOnOutsideClick(func:function)
-----------------------
#### Fires passed function when click event triggers outside the target element
When we will use `useOnOutsideClick` in our functional components we have to pass it a function which will be called when click event triggers outside the target element. for e.g `useOnOutsideClick(() => alert('hello'))`

Also note when we call `useOnOutsideClick` it returns an `elementInstance` which is basically a `ref` which will be passed to the `target` element as a ref. This is how `useOnOutsideClick` tracks when the click event happens outside the element.

```javascript
import useOnOutsideClick from 'useOnOutsideClick'

const CustomComponent = () => {
    const elementInstance = useOnOutsideClick(() => alert('hello'))
    // elementInstance will be passed to div as a ref
    return <div ref={elementInstance}>
        <h1>Hello</h1>
    </div>
} 
```

### Contributers
[<img src="http://zestgeek.com/img/logo.png" alt="zestgeek solutions" width="200"/>](http://zestgeek.com)

[<img src="http://www.recraftstudio.com/images/logo.png" alt="drawing" width="50"/>](http://www.recraftrelic.com)