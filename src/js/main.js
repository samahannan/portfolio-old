const triggerHover = () => {
  setTimeout(() => {
    const skills = document.querySelectorAll('.skillsList li');
    skills.forEach(element => {
      element.classList.add('active');
      setTimeout(() => {
        element.classList.remove('active');
      }, 1000)
    });
  }, 1000)

}

export default triggerHover