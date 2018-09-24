### CompositeImage component:

This is the main component which accepts 4 props; The `image` prop is provided to it from the state of the app supplied by a mock API. It has the assets provoided for the project. The other 3 props are: 

* width
* margin
* opacity 

which provide some flexibility to developers to adjust these attributes as they please. 

#### Simple CompositeImage example:

```js
const image = {
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
};

<CompositeImage image={image} />
```


#### CompositeImage example with margin:
For example if you like to put several `CompositeImage` components together you can set some margin between them by setting the `margin` prop as shown below: 

```js
const images = [{
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
},
{
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
},
{
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
},
{
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
}];

images.map(image => <CompositeImage image={image} margin="5px" />)
```

#### CompositeImage example with margin & opacity:
This is another use case of `CompositeImage` component with both `margin` and `opacity`set to desired values:

```js
const image = {
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
};

<div>
  <CompositeImage image={image} margin="10px" opacity="1"/>
  <CompositeImage image={image} margin="10px" opacity="0.4"/>
</div>
```

#### CompositeImage example with different widths:
This is another use case of `CompositeImage` component different `width` values:

```js
const image = {
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
};

<div>
  <CompositeImage image={image} margin="10px" />
  <CompositeImage image={image} margin="10px" width={{large: "500px", medium: "400px", small: "200px"}}/>
  <CompositeImage image={image} margin="10px" width={{large: "250px", medium: "250px"}}/>
</div>
```