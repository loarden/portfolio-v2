function FooterIcon({ children, link }) {
  return (
    <a
      href={link}
      className="p-3 rounded-full border-background border-2 hover:bg-background hover:text-primary transition-all"
    >
      {children}
    </a>
  );
}

export default FooterIcon;
