export function getMedia () {
  return new Promise (resolve => {
    setTimeout (() => {
      resolve ({
        src: './media/tile.jpg',
        logo: './media/logo.png',
        title: 'Home and Away',
        production: '7 Network',
      });
    }, 100);
  });
}
