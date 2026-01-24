const ButtonComponent = () => {
  const saludar = () => {
    alert('Hola desde React! 🥳');
  };
  return (
    <button className="btn" onClick={saludar}>
      Boton React!
    </button>
  );
};
export default ButtonComponent;