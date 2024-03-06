const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="flex flex-col sm:flex-row items-center border-t-2 border-solid border-[#C3181555] p-5 justify-between gap-3 text-sm overflow-hidden">
        <div> © {currentYear} theodoredebs.online. All Rights Reserved.</div>
        <div className="flex items-center gap-3 text-sm">
          <div>Made with ❤️ from Theodore DEBS to Orkester</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
