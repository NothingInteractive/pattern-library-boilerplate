export namespace Button {
  export const init = () => {
    const button = document.querySelector('.myproject-js-button');
    button.addEventListener('click', () => {
      alert('Hello!');
    });
  };
}
