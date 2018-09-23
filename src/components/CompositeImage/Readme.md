CompositeImage example:

```js
const image = {
  src: 'http://entertainment.ie//images_content/rectangle/620x372/the-braxton-brothers-in-home-and-away-139692316993502601-140.jpg',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seven_Network_logo.svg/1200px-Seven_Network_logo.svg.png',
  title: 'Home and Away',
  production: '7 Network',
};

<CompositeImage image={image} />
```


CompositeImage example:

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


CompositeImage example with opacity:

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