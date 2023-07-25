function Button({ link, text }) {
  return (
    <a
      href={link}
      className="px-5 py-2 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-background cursor-pointer transition-all font-sans"
    >
      {text}
    </a>
  );
}

export default Button;
